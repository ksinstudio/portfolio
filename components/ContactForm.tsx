"use client";

import { useState } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

// Web3Forms public access key. Submissions post directly from the browser
// (Web3Forms' free tier only allows client-side submits) and are emailed to the
// address tied to this key. The key is public by design — it can only submit.
const WEB3FORMS_ACCESS_KEY = "c06e24b4-03f8-44dc-9596-0e0489e37915";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${name}`,
          from_name: "ksin.io contact form",
          name,
          email,
          message,
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(body.message ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Network error — please try again.");
    }
  }

  const inputCls =
    "w-full border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-text)]";

  if (status === "success") {
    return (
      <div className="border border-[var(--color-line)] bg-[var(--color-panel)] p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-line)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="head text-lg">Message sent</h3>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="arrow-link mt-5"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-[var(--color-line)] bg-[var(--color-panel)] p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--color-muted)]">
            Name
          </label>
          <input id="name" name="name" required className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--color-muted)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputCls}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--color-muted)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputCls} resize-y`}
          placeholder="Tell me about your project…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          {error}{" "}
          <a href={`mailto:${site.email}`} className="underline">
            Email me directly →
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="head w-full bg-[var(--color-text)] px-6 py-3 text-sm text-[var(--color-bg)] transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
