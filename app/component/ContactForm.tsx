"use client";

import { useActionState } from "react";
import { submitMessage, type FormState } from "../actions";

const initialFormState: FormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitMessage, initialFormState);

  return (
    <form className="message-form" action={formAction}>
      <div className="form-row">
        <label>
          <span>Name <b>*</b></span>
          <input name="name" type="text" autoComplete="name" minLength={2} maxLength={100} required placeholder="Your name" />
        </label>
        <label>
          <span>Email <b>*</b></span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" />
        </label>
      </div>
      <label>
        <span>Message <b>*</b></span>
        <textarea name="message" minLength={10} maxLength={5000} required rows={6} placeholder="Tell me about the project, the problem, and your timeline." />
      </label>
      <label className="form-trap" aria-hidden="true">
        Company
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-footer">
        <p className={`form-status form-status--${state.status}`} role="status" aria-live="polite">
          {state.message || "I usually respond within two business days."}
        </p>
        <button className="form-submit" type="submit" disabled={pending}>
          {pending ? "Sending..." : "Send message"}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
