import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET || "fallback_super_secret_key_quickcred";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1d")
        .sign(key);
}

export async function decrypt(token: string) {
    try {
        const { payload } = await jwtVerify(token, key);
        return payload;
    } catch (e) {
        return null;
    }
}

export async function createSession() {
    // Only one authorized admin, so we don't necessarily need dynamic payload,
    // but we can pass standard info
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day
    const token = await encrypt({ role: "admin", email: "sachinrv19@gmail.com", expires });

    (await cookies()).set("session", token, {
        expires,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });
}

export async function verifySession() {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;
    if (!token) return null;
    const session = await decrypt(token);
    return session;
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}
