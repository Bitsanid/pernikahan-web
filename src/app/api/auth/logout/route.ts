import { NextRequest, NextResponse } from "next/server";
import { createSessionClient, SESSION_COOKIE_NAME } from "@/lib/appwrite";

export async function POST(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (!sessionToken) {
      return NextResponse.json({ error: "Tidak ada sesi aktif." }, { status: 401 });
    }

    const { account } = createSessionClient(sessionToken);
    await account.deleteSession("current");

    const response = NextResponse.json({ message: "Logout berhasil." });
    response.cookies.set(SESSION_COOKIE_NAME, "", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
    });

    return response;
  } catch {
    // Even if deleting the session on Appwrite fails, clear the cookie
    const response = NextResponse.json({ message: "Logout berhasil." });
    response.cookies.set(SESSION_COOKIE_NAME, "", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
    });
    return response;
  }
}
