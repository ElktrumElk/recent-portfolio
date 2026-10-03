import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "../../lib/auth";
import AdminLoginForm from "../AdminLoginForm";
import "../admin.css";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) redirect("/admin");

  return (
    <main className="admin-auth-page">
      <section className="admin-login-card">
        <div className="admin-mark">EC<span>.</span></div>
        <p className="admin-kicker">Private workspace</p>
        <h1>Welcome back.</h1>
        <p className="admin-lede">Sign in to read messages from your portfolio.</p>
        <AdminLoginForm />
        <Link href="/">← Return to portfolio</Link>
      </section>
    </main>
  );
}
