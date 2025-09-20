
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: 'pablo@campina.dev',
    replyTo: email,
    subject: `New message from ${name} from your portfolio`,
    text: message,
    html: `<div>${message}</div>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', JSON.stringify(error, null, 2));
    return NextResponse.json({ error: 'Error sending email', details: error }, { status: 500 });
  }
}
