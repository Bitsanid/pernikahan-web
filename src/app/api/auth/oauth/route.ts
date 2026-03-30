import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/appwrite";
import { OAuthProvider } from "node-appwrite";

export async function GET(request: NextRequest) {
  const provider = request.nextUrl.searchParams.get("provider");

  if (!provider || provider !== "google") {
    return NextResponse.json({ error: "Provider tidak valid." }, { status: 400 });
  }

  const { account } = createAdminClient();

  const origin = request.nextUrl.origin;
  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Google,
    `${origin}/api/auth/oauth/callback`,
    `${origin}/auth/login?error=oauth_failed`
  );

  return NextResponse.redirect(redirectUrl);
}
