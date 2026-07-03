import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Create a mail transporter using environment variables (standard SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER || '', // e.g. care@on7.in or gmail
        pass: process.env.SMTP_PASS || '', // email app password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.ADMIN_EMAIL || 'care@on7.in', // Target email where enquiries go
      subject: `New ON7 Activewear Website Enquiry - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eee;">
          <h2 style="color: #ff5a3c; text-transform: uppercase;">ON7® Web Enquiry</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Customer Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message / Enquiry Details:</strong></p>
          <blockquote style="background: #f9f9f9; border-left: 4px solid #ff5a3c; padding: 15px; margin: 10px 0; font-style: italic;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 11px; color: #777;">This enquiry was sent automatically from the contact form on your ON7 Activewear website.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error: any) {
    console.error('SMTP Mail error:', error);
    // Return 400 so the frontend falls back to Web3Forms API automatically
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
