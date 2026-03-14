import { NextRequest, NextResponse } from "next/server";
import { createSessionClient, SESSION_COOKIE_NAME } from "@/lib/appwrite";

export async function GET(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (!sessionToken) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    const { account } = createSessionClient(sessionToken);
    const user = await account.get();

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}
