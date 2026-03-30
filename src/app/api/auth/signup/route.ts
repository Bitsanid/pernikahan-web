import { NextRequest, NextResponse } from "next/server";
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient, SESSION_COOKIE_NAME } from "@/lib/appwrite";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Nama, email, dan password wajib diisi." },
        { status: 400 }
      );
    }

    const { account: adminAccount } = createAdminClient();

    // Create user account
    await adminAccount.create(ID.unique(), email, password, name);

    // Create a session for the new user
    const session = await adminAccount.createEmailPasswordSession(email, password);

    // Initialize user preferences
    try {
      const { account: sessionAccount } = createSessionClient(session.secret);
      await sessionAccount.updatePrefs({ tier: "free" });
    } catch (prefError) {
      console.error("Failed to set user preferences:", prefError);
      // We don't want to fail the whole signup if just prefs fail,
      // but in a real app we might want more robust error handling
    }

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
