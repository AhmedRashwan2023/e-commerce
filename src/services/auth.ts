import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// const secretKey = process.env.SECRET_KEY;
const secretKey = "Asds";

const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expires)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    if (error instanceof Error && error.message.includes("exp")) {
      return null;
    }
    // Handle other errors if needed
    throw error;
  }
}

export async function signIn(formData: FormData) {
  // Verify credentials && get the user

  const user = { email: formData.get("email"), name: "Ahmed" };

  // Create the session
  const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });
}

export async function signOut() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
