import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secretKey = process.env.SESSION_SECRET || "fallback_super_secret_key_quickcred";
const key = new TextEncoder().encode(secretKey);

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check for protected routes
    const isProtectedRoute = pathname.startsWith("/dashboard") ||
        pathname.startsWith("/customers") ||
        pathname.startsWith("/loans") ||
        pathname.startsWith("/repayments");

    if (isProtectedRoute) {
        // Must be logged in
        const session = request.cookies.get("session")?.value;

        if (!session) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        try {
            await jwtVerify(session, key);
            return NextResponse.next();
        } catch (error) {
            // Invalid or expired token
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // Redirect root to dashboard (if authenticated, middleware will handle it)
    if (pathname === "/") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
