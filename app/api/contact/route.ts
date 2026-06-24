import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "enquiry@saairenergy.com";
  const fromEmail = process.env.SENDGRID_FROM_EMAIL ?? "enquiry@saairenergy.com";

  if (!apiKey) {
    return NextResponse.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 },
    );
  }

  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const service = String(body?.service ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  sgMail.setApiKey(apiKey);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

  try {
    await sgMail.send({
      to: toEmail,
      from: { email: fromEmail, name: "SAAIR Energy Website" },
      replyTo: { email, name },
      subject: `New Enquiry from ${name} – ${service}`,
      text: [
        "New Enquiry from SAAIR Energy Website",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Service Interested In: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New Enquiry from SAAIR Energy Website</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Service Interested In:</strong> ${safeService}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("SendGrid error:", error);

    let details: string | null = null;
    if (
      error &&
      typeof error === "object" &&
      "response" in error &&
      error.response &&
      typeof error.response === "object" &&
      "body" in error.response
    ) {
      const responseBody = error.response.body;
      details =
        typeof responseBody === "string"
          ? responseBody
          : JSON.stringify(responseBody);
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send your message. Please try again later.",
        details: details?.slice(0, 2000) ?? null,
      },
      { status: 502 },
    );
  }
}
