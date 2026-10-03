import { createHmac, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE = "portfolio_admin_session";
const SESSION_DURATION = 60 * 60 * 12;

function encode(value: string) {
  return Buffer.from(value).toString("base64url");
}

function sign(value: string) {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not configured");
  return createHmac("sha256", secret).update(value).digest("base64url");
}

export function verifyAdminCredentials(email: string, password: string) {
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const storedHash = process.env.ADMIN_PASSWORD_HASH;
  if (!adminEmail || !storedHash || email.trim().toLowerCase() !== adminEmail) {
    return false;
  }

  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;

  try {
    const actual = scryptSync(password, salt, 64);
    const expected = Buffer.from(hash, "hex");
    return expected.length === actual.length && timingSafeEqual(expected, actual);
  } catch {
    return false;
  }
}

export async function createAdminSession() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_DURATION;
  const payload = encode(JSON.stringify({ role: "admin", expires }));
  const token = `${payload}.${sign(payload)}`;
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION,
    priority: "high",
  });
}

export async function destroyAdminSession() {
  (await cookies()).delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  try {
    const expected = sign(payload);
    const signatureBuffer = Buffer.from(signature);
    const expectedBuffer = Buffer.from(expected);
    if (
      signatureBuffer.length !== expectedBuffer.length ||
      !timingSafeEqual(signatureBuffer, expectedBuffer)
    ) return false;

    const session = JSON.parse(Buffer.from(payload, "base64url").toString()) as {
      role?: string;
      expires?: number;
    };
    return session.role === "admin" && Number(session.expires) > Date.now() / 1000;
  } catch {
    return false;
  }
}
