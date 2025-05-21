import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";
import { protectedRoutes } from "./routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
    const isloggedIn = !!req.auth;
    const isProtectedRoute = protectedRoutes.includes(req.nextUrl.pathname);
    const isAuthPath = req.nextUrl.pathname.includes("/auth");
    const isApiPath = req.nextUrl.pathname.startsWith("/api");

    if (isApiPath || (isAuthPath && isloggedIn)) {
        return;
    }
    if (isProtectedRoute && !isloggedIn) {
        return NextResponse.redirect(new URL("/auth", req.url));
    }
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
