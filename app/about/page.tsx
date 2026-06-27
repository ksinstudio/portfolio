import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <div className="mt-6 space-y-4 text-[var(--color-muted)] leading-relaxed">
        <p>
          {/* Replace this with your bio. */}
          I&apos;m {site.name}, a {site.role.toLowerCase()}. {site.tagline}
        </p>
        <p>
          This is placeholder copy — tell your story here: what you do, the tools
          you work with, and what you&apos;re looking for.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <h2 className="font-medium">Get in touch</h2>
        <p className="mt-2 text-sm text-[var(--color-muted)]">{site.location}</p>
        {site.email && (
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex items-center rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {site.email}
          </a>
        )}
      </div>
    </div>
  );
}
