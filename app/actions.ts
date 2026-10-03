"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminSession, destroyAdminSession, verifyAdminCredentials } from "./lib/auth";
import { createMessage } from "./lib/db";

export interface FormState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitMessage(
  _state: FormState,
  formData: FormData
): Promise<FormState> {
  const honeypot = String(formData.get("company") ?? "");
  if (honeypot) return { status: "success", message: "Message received." };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const message = String(formData.get("message") ?? "").trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2 || name.length > 100) {
    return { status: "error", message: "Enter a name between 2 and 100 characters." };
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }
  if (message.length < 10 || message.length > 5000) {
    return { status: "error", message: "Your message must be between 10 and 5,000 characters." };
  }

  try {
    const headerStore = await headers();
    const ip = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
    const secret = process.env.AUTH_SECRET ?? "";
    const ipHash = ip && secret ? createHash("sha256").update(`${secret}:${ip}`).digest("hex") : "";
    await createMessage({ name, email, message, ipHash });
    return { status: "success", message: "Thanks. Your message is now in my inbox." };
  } catch (error) {
    if (error instanceof Error && error.message === "RATE_LIMITED") {
      return { status: "error", message: "Too many messages. Please try again in a few minutes." };
    }
    console.error("Unable to save portfolio message", error);
    return { status: "error", message: "The inbox is temporarily unavailable. Please email me directly." };
  }
}

export async function loginAdmin(
  _state: FormState,
  formData: FormData
): Promise<FormState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!verifyAdminCredentials(email, password)) {
    return { status: "error", message: "Invalid email or password." };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  await destroyAdminSession();
  redirect("/admin/login");
}
