"use client";

import { useState } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(body.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Network error — please try again.");
    }
  }

  const inputCls =
    "w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-violet)]";

  if (status === "success") {
    return (
      <div className="holo-border p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Message sent!</h3>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm text-[var(--color-violet)] hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="holo-border space-y-4 p-6 sm:p-8">
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
        <p className="text-sm text-[var(--color-pink)]">
          {error}{" "}
          <a href={`mailto:${site.email}`} className="underline">
            Email me directly →
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-holo w-full rounded-full px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
