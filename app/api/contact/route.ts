import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Email içeriğini hazırla
    const emailContent = `
Yeni İletişim Formu Mesajı

İsim: ${name}
E-posta: ${email}
Firma: ${company}
Telefon: ${phone}

Mesaj:
${message}
    `

    // Gerçek production ortamında burada bir email servisi (SendGrid, AWS SES, vb.) kullanılmalı
    console.log(
      "Email Content to send to info@als-aknurgmbh.com:",
      emailContent
    )

    return NextResponse.json(
      {
        success: true,
        message: "Nachricht erfolgreich gesendet!",
        emailTo: "info@als-aknurgmbh.com"
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "Fehler beim Senden der Nachricht" },
      { status: 500 }
    )
  }
}
