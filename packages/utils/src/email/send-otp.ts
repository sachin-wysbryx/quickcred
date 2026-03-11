import nodemailer from "nodemailer";

/**
 * Sends an OTP email using SMTP configuration from environment variables.
 * Works reliably in production environments like Render.
 */

export async function sendOtpEmail(email: string, otp: string) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || `"QuickCred Admin" <${user}>`;

  // Validate configuration
  if (!user || !pass) {
    const missing: string[] = [];
    if (!user) missing.push("SMTP_USER");
    if (!pass) missing.push("SMTP_PASS");

    console.error(`Missing SMTP configuration: ${missing.join(", ")}`);
    throw new Error("Email service is not configured correctly.");
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false, // true only for port 465
    auth: {
      user,
      pass,
    },
  });

  // Verify SMTP connection (helps debugging in production)
  try {
    await transporter.verify();
    console.log("SMTP connection verified");
  } catch (err) {
    console.error("SMTP connection verification failed:", err);
    throw new Error("Unable to connect to email service.");
  }

  // Email HTML Template
  const htmlTemplate = `
  <div style="font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;max-width:500px;margin:40px auto;padding:40px;border:1px solid #eef2f6;border-radius:24px;background:#ffffff;box-shadow:0 10px 25px rgba(0,0,0,0.04);">
      
      <div style="text-align:center;margin-bottom:30px;">
          <h1 style="color:#0f172a;font-size:28px;font-weight:800;margin:0;">Quick<span style="color:#4f46e5;">Cred</span></h1>
          <p style="color:#64748b;font-size:14px;font-weight:600;text-transform:uppercase;margin-top:8px;">Security Protocol</p>
      </div>

      <div style="background:#f8fafc;border-radius:16px;padding:30px;text-align:center;border:1px solid #f1f5f9;">
          <p style="color:#475569;font-size:16px;margin-bottom:24px;">Your access OTP is:</p>
          <div style="font-family:monospace;font-size:42px;font-weight:900;color:#4f46e5;letter-spacing:12px;margin-bottom:24px;">
              ${otp}
          </div>
          <p style="color:#94a3b8;font-size:12px;">This code will expire in <b style="color:#ef4444;">5 minutes</b></p>
      </div>

      <div style="margin-top:30px;padding-top:25px;border-top:1px solid #f1f5f9;text-align:center;">
          <p style="color:#94a3b8;font-size:12px;">
              If you did not request this code, please ignore this email.
          </p>
      </div>
  </div>
  `;

  // Send mail
  try {
    console.log(`Sending OTP email to ${email} via ${host}:${port}`);

    const info = await transporter.sendMail({
      from,
      to: email,
      subject: "QuickCred Admin Login OTP",
      text: `Your QuickCred login OTP is: ${otp}. It expires in 5 minutes.`,
      html: htmlTemplate,
    });

    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error: any) {
    console.error("----- SMTP ERROR -----");
    console.error("Target:", email);
    console.error("Host:", `${host}:${port}`);
    console.error("Code:", error.code);
    console.error("Command:", error.command);
    console.error("Message:", error.message);
    console.error("----------------------");

    throw new Error(`SMTP Error: ${error.message}`);
  }
}