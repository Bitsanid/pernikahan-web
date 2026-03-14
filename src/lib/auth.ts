import { cookies } from "next/headers";
import { createSessionClient, SESSION_COOKIE_NAME } from "./appwrite";
import type { Models } from "node-appwrite";

/**
 * Returns the current user from the session cookie.
 * Returns null if no valid session exists.
 */
export async function getLoggedInUser(): Promise<Models.User<Models.Preferences> | null> {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!sessionToken) return null;

    const { account } = createSessionClient(sessionToken);
    return await account.get();
  } catch {
    return null;
  }
}

/**
 * Returns the session token from cookies, or null if not present.
 */
export async function getSessionToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value ?? null;
}
