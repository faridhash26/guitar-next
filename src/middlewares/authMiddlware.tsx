
import { userLoader } from "@/services/auth/userLoader";
import { NextRequest, NextResponse } from "next/server";


export const authMiddleware = async (request: NextRequest) => {
    const currentPath = request.nextUrl.pathname;
    const user = await userLoader();
    const protectedRoutes = [];

    if (
        protectedRoutes.some((route) => currentPath.startsWith(route)) &&

        user?.ok === false) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();

}