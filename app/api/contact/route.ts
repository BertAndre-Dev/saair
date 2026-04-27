import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        message: "SENDGRID_API_KEY is not configured on the server environment.",
      },
      { status: 500 },
    );
  }

  const name = body?.name;
  const email = body?.email;
  const service = body?.service;
  const message = body?.message;

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required." },
      { status: 400 },
    );
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: "enquiry@SAAIRenergy.com" }],
        subject: `New Enquiry from ${name} – ${service}`,
      },
    ],
    from: { email: "no-reply@SAAIRenergy.com", name: "SAAIR Energy Website" },
    reply_to: { email, name },
    content: [
      {
        type: "text/html",
        value: `
          <h2>New Enquiry from SAAIR Energy Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Interested In:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replaceAll("\n", "<br/>")}</p>
        `,
      },
    ],
  };

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const errorText = await res.text().catch(() => "");
  console.error("SendGrid error:", errorText);
  return NextResponse.json(
    {
      success: false,
      message: "SendGrid request failed.",
      status: res.status,
      details: errorText?.slice(0, 2000) || null,
    },
    { status: 502 },
  );
}