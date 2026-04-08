import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, service, message } = await req.json();

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
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
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      },
    ],
  };

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("SendGrid error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}