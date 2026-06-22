import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const to = process.env.CONTACT_TO_EMAIL || "dhruvsolanki0129@gmail.com"
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      // If no API key configured, return a helpful error for setup
      return NextResponse.json(
        {
          error:
            "Email service not configured. Please add RESEND_API_KEY and CONTACT_TO_EMAIL as environment variables.",
        },
        { status: 501 },
      )
    }

    // Lazy import to avoid bundling if not used
    const { Resend } = await import("resend")
    const resend = new Resend(apiKey)

    const subject = `New message from ${name}`
    const html = `
      <h2>New portfolio inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, "<br/>")}</p>
    `

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject,
      html,
    })

    if (error) {
      return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Unexpected error" }, { status: 500 })
  }
}
