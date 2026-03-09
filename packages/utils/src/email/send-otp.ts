import nodemailer from "nodemailer";

export async function sendOtpEmail(email: string, otp: string) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true", // Use true for 465, false for all other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: `"QuickCred Admin" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "QuickCred Admin Login OTP",
        text: `Your OTP for QuickCred login is: ${otp}\n\nThis OTP expires in 5 minutes.`,
        html: `<p>Your OTP for QuickCred login is: <strong>${otp}</strong></p><p>This OTP expires in 5 minutes.</p>`,
    };

    await transporter.sendMail(mailOptions);
}

export function generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
