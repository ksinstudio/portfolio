import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <div className="px-6 pt-16 sm:px-10 lg:px-14">
      <p className="label">About Me</p>
      <h1 className="display mt-2 text-6xl sm:text-7xl">About</h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-panel)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.portrait}
            alt={site.name}
            className="h-full w-full object-cover grayscale"
          />
        </div>

        <div>
          <h2 className="head max-w-md text-3xl leading-tight sm:text-4xl">
            {site.aboutHeadline}
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
            {site.about}
          </p>

          <p className="label mt-10">What I Do</p>
          <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="head border-t border-[var(--color-line)] pt-3 text-sm text-[var(--color-muted)]"
              >
                {s.title}
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-[var(--color-line)] pt-6">
            <p className="label">Get in touch</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              {site.location}
            </p>
            <Link
              href="/contact"
              className="head mt-5 inline-flex items-center gap-3 border border-[var(--color-line)] px-5 py-2.5 text-xs transition-colors hover:bg-[var(--color-elevated)]"
            >
              Contact Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
