//BahaaTest
//12345678

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import * as db from "../utils/db";

// const secretKey = process.env.SECRET_KEY;
const secretKey = "asjdhajsdj278asosidm";
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

    throw error;
  }
}

export async function signIn(formData: FormData) {
  const user = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  // const data = await db.postRequest("/authenticate", user);
  const data = await db.postRequest("/api/clients/signin", user);
  if (!data?.error) {
    const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
    // const expires = new Date(Date.now() + 60 * 10 * 1000);

    const session = await encrypt({ data, expires });
    cookies().set("session", session, { expires, httpOnly: true });
  }
  return data;
}

export async function signOut() {
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
