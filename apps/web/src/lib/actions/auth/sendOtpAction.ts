"use server";

import { db } from "@/lib/db";
import { generateOTP } from "@repo/utils";
import { sendOtpEmail } from "@repo/utils/src/email/send-otp";

const ALLOWED_ADMIN_EMAIL = process.env.ALLOWED_ADMIN_EMAIL || "sachinrv19@gmail.com";

export async function sendOtpAction(formData: FormData) {
    const email = formData.get("email") as string;

    if (!email) {
        return { error: "Email is required." };
    }

    if (email !== ALLOWED_ADMIN_EMAIL) {
        return { error: "Access denied. Only the authorized admin can access this system." };
    }

    // Rate limiting: check recent requests
    const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
    const recentRequests = await db.oTPVerification.count({
        where: {
            email,
            createdAt: { gt: oneMinuteAgo },
        },
    });

    if (recentRequests >= 3) {
        return { error: "Too many requests. Please wait a minute." };
    }

    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    await db.oTPVerification.create({
        data: {
            email,
            otp,
            expiresAt,
        },
    });

    try {
        await sendOtpEmail(email, otp);
        return { success: true };
    } catch (e) {
        console.error("Failed to send OTP email:", e);
        return { error: "Failed to send OTP email. Please check server configuration." };
    }
}
