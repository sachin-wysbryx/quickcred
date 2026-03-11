import { Resend } from "resend";

const resendClient = process.env.RESEND_API_KEY 
    ? new Resend(process.env.RESEND_API_KEY) 
    : null;

/**
 * Sends an OTP email using the Resend API.
 * This is more reliable for production environments like Render/Vercel
 * compared to traditional SMTP which is often blocked.
 */
export async function sendOtpEmail(email: string, otp: string) {
    if (!resendClient) {
        console.warn("RESEND_API_KEY is not configured. Email will not be sent.");
        // We throw an error in production but just log a warning in development
        if (process.env.NODE_ENV === "production") {
            throw new Error("Email service is not configured (RESEND_API_KEY missing).");
        }
        return;
    }

    const fromAddress = process.env.SMTP_FROM || "QuickCred <onboarding@resend.dev>";

    try {
        console.log(`[Resend] Attempting to send OTP email to ${email}...`);
        
        const { data, error } = await resendClient.emails.send({
            from: fromAddress,
            to: email,
            subject: "QuickCred Admin Login OTP",
            html: `
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
            `,
        });

        if (error) {
            console.error("[Resend] API Error:", error);
            throw new Error(`Resend Error: ${error.message}`);
        }

        console.log(`[Resend] Email sent successfully! ID: ${data?.id}`);
        return data;
    } catch (err: any) {
        console.error("[Resend] Delivery Failure:", err);
        throw new Error(err.message || "Failed to send OTP email via Resend.");
    }
}