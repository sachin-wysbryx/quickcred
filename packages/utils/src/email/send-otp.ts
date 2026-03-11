import nodemailer from "nodemailer";

/**
 * Sends an OTP email using SMTP configuration from environment variables.
 * Designed to work in Next.js Server Actions and production environments like Render.
 * Forces IPv4 to avoid ENETUNREACH errors commonly seen on Render (IPv6 issues).
 */
export async function sendOtpEmail(email: string, otp: string) {
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || `"QuickCred Admin" <${user}>`;

    // 1. Validate configuration
    if (!user || !pass) {
        const missing = [];
        if (!user) missing.push("SMTP_USER");
        if (!pass) missing.push("SMTP_PASS");
        
        console.error(`ERROR: Missing SMTP configuration: ${missing.join(", ")}`);
        throw new Error("Email service is not configured correctly.");
    }

    // 2. Configure transporter (Production-ready for cloud providers like Render)
    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for 587 (STARTTLS)
        family: 4,           // Force IPv4 to avoid IPv6 connection issues on Render
        auth: {
            user,
            pass,
        },
        // Helpful for ensuring connections work in restricted environments
        tls: {
            rejectUnauthorized: true
        }
    } as any);

    // 3. Define the HTML Email Template
    const htmlTemplate = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 500px; margin: 40px auto; padding: 40px; border: 1px solid #eef2f6; border-radius: 24px; background-color: #ffffff; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.04);">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0f172a; font-size: 28px; font-weight: 800; margin: 0; letter-spacing: -1px;">Quick<span style="color: #4f46e5;">Cred</span></h1>
            <p style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; tracking: 0.1em; margin-top: 8px;">Security Protocol</p>
        </div>
        
        <div style="background-color: #f8fafc; border-radius: 16px; padding: 30px; text-align: center; border: 1px solid #f1f5f9;">
            <p style="color: #475569; font-size: 16px; margin-bottom: 24px; font-weight: 500;">Your high-security access token is:</p>
            <div style="font-family: monospace; font-size: 42px; font-weight: 900; color: #4f46e5; letter-spacing: 12px; margin-bottom: 24px;">
                ${otp}
            </div>
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">This code will expire in <strong style="color: #ef4444;">5 minutes</strong></p>
        </div>

        <div style="margin-top: 30px; padding-top: 25px; border-top: 1px solid #f1f5f9; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px; line-height: 1.6;">
                If you did not request this token, please secure your account immediately.
                This is an automated system message.
            </p>
        </div>
    </div>
    `;

    // 4. Attempt to send
    try {
        console.log(`[SMTP] Attempting delivery to ${email} via ${host}:${port} (Forcing IPv4)...`);
        
        const info = await transporter.sendMail({
            from,
            to: email,
            subject: "QuickCred Admin Login OTP",
            text: `Your QuickCred login OTP is: ${otp}. It expires in 5 minutes.`,
            html: htmlTemplate,
        });

        console.log(`[SMTP] Success! MessageId: ${info.messageId}`);
        return info;
    } catch (error: any) {
        // 5. Detailed error logging for debugging (crucial for Render/Production)
        console.error("--- SMTP DELIVERY FAILURE ---");
        console.error(`Target: ${email}`);
        console.error(`Host: ${host}:${port}`);
        console.error(`Error Code: ${error.code || 'N/A'}`);
        console.error(`Command: ${error.command || 'N/A'}`);
        console.error(`Message: ${error.message}`);
        if (error.code === 'ESOCKET') {
           console.error("HINT: This is often an IPv6 routing issue on cloud hosts. Forcing IPv4 may resolve it.");
        }
        console.error("-----------------------------");
        
        // 6. Throw error to be caught by the server action
        throw new Error(`SMTP Error [${error.code || 'UNKNOWN'}]: ${error.message}`);
    }
}
