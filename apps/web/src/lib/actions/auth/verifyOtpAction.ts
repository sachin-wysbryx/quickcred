"use server";

import { db } from "@/lib/db";
import { createSession } from "@/lib/auth/session";

export async function verifyOtpAction(formData: FormData) {
    const email = formData.get("email") as string;
    const otp = formData.get("otp") as string;

    if (!email || !otp) {
        return { error: "Email and OTP are required." };
    }

    const verificationRecord = await db.oTPVerification.findFirst({
        where: {
            email,
            otp,
        },
        orderBy: { createdAt: "desc" },
    });

    if (!verificationRecord) {
        return { error: "Invalid OTP." };
    }

    if (new Date() > verificationRecord.expiresAt) {
        return { error: "OTP has expired." };
    }

    // Success - Delete record
    await db.oTPVerification.delete({
        where: { id: verificationRecord.id },
    });

    // Create secure session
    await createSession();

    return { success: true };
}
