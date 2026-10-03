"use client";

import { useActionState } from "react";
import { loginAdmin, type FormState } from "../actions";

const initialFormState: FormState = { status: "idle", message: "" };

export default function AdminLoginForm() {
  const [state, formAction, pending] = useActionState(loginAdmin, initialFormState);

  return (
    <form action={formAction} className="admin-login-form">
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="username" required />
      </label>
      <label>
        <span>Password</span>
        <input name="password" type="password" autoComplete="current-password" required />
      </label>
      {state.status === "error" && <p className="admin-error" role="alert">{state.message}</p>}
      <button type="submit" disabled={pending}>{pending ? "Signing in..." : "Sign in"}</button>
    </form>
  );
}
