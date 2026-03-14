import { NextRequest, NextResponse } from "next/server";
import { ID } from "node-appwrite";
import { createAdminClient, SESSION_COOKIE_NAME } from "@/lib/appwrite";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Nama, email, dan password wajib diisi." },
        { status: 400 }
      );
    }

    const { account } = createAdminClient();

    // Create user account
    await account.create(ID.unique(), email, password, name);

    // Create a session for the new user
    const session = await account.createEmailPasswordSession(email, password);

    const response = NextResponse.json(
      { message: "Akun berhasil dibuat." },
      { status: 201 }
    );

    response.cookies.set(SESSION_COOKIE_NAME, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return response;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Gagal membuat akun.";
    // Appwrite returns code 409 for duplicate email
    const status = (error as { code?: number }).code === 409 ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
