import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { logoutAdmin } from "../actions";
import { isAdminAuthenticated } from "../lib/auth";
import { getMessages } from "../lib/db";
import "./admin.css";

export const metadata: Metadata = {
  title: "Inbox",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminInboxPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const messages = await getMessages();

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <p>Elkanah Cole / Admin</p>
          <h1>Inbox</h1>
        </div>
        <form action={logoutAdmin}><button type="submit">Sign out</button></form>
      </header>

      <section className="inbox-shell">
        <div className="inbox-summary">
          <span>{messages.length} {messages.length === 1 ? "message" : "messages"}</span>
          <span>Newest first</span>
        </div>
        {messages.length === 0 ? (
          <div className="inbox-empty"><span>0</span><h2>Your inbox is clear.</h2><p>New portfolio messages will appear here.</p></div>
        ) : (
          <div className="inbox-list">
            {messages.map((item) => (
              <article className="inbox-message" key={item.id}>
                <div className="message-avatar" aria-hidden="true">{item.name.slice(0, 1).toUpperCase()}</div>
                <div className="message-content">
                  <div className="message-heading">
                    <div><h2>{item.name}</h2><a href={`mailto:${item.email}`}>{item.email}</a></div>
                    <time dateTime={item.createdAt.toISOString()}>
                      {new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(item.createdAt)}
                    </time>
                  </div>
                  <p>{item.message}</p>
                  <a className="reply-link" href={`mailto:${item.email}?subject=${encodeURIComponent("Re: Your portfolio enquiry")}`}>Reply by email ↗</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
