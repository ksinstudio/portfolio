"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";

const nav = [
  { n: "01", href: "/", label: "Home" },
  { n: "02", href: "/#work", label: "Work" },
  { n: "03", href: "/#about", label: "About" },
  { n: "04", href: "/#services", label: "Services" },
  { n: "05", href: "/#contact", label: "Contact" },
];

const secondary = [
  { href: "/gallery", label: "Gallery" },
  { href: "/assets", label: "Assets" },
];

function handle(url: string) {
  return "@" + url.replace(/\/+$/, "").split("/").pop();
}

function IconTwitter() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5-6.6L5.5 22H2.4l8-9.2L1 2h6.9l4.5 6 5.5-6Zm-1.2 18h1.7L7.2 3.8H5.4L17.7 20Z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  const navList = (
    <ul className="space-y-1">
      {nav.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={() => setOpen(false)}
            className={`group flex items-center gap-3 py-1.5 text-sm transition-colors ${
              isActive(item.href)
                ? "text-[var(--color-text)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            <span className="text-[0.6rem] tabular-nums text-[var(--color-muted)]">
              {item.n}
            </span>
            <span
              className={`head text-sm transition-all ${
                isActive(item.href) ? "" : "group-hover:tracking-wider"
              }`}
            >
              {item.label}
            </span>
            {isActive(item.href) && (
              <span className="ml-auto h-px w-6 bg-[var(--color-text)]" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-bg)]/90 px-5 py-4 backdrop-blur lg:hidden">
        <Link href="/" className="display text-2xl">
          KSIN
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-[var(--color-muted)]"
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[var(--color-bg)] px-6 pt-24 lg:hidden">
          {navList}
          <div className="mt-6 border-t border-[var(--color-line)] pt-6">
            {secondary.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="head block py-1.5 text-sm text-[var(--color-muted)]"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[240px] flex-col justify-between border-r border-[var(--color-line)] bg-[var(--color-bg)] px-8 py-9 lg:flex">
        <div>
          <Link href="/" className="display text-3xl tracking-tight">
            KSIN
          </Link>
        </div>

        <nav className="-mt-16">
          {navList}
          <div className="mt-8 flex flex-col gap-1 border-t border-[var(--color-line)] pt-6">
            {secondary.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`head text-xs transition-colors ${
                  isActive(s.href)
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="space-y-5">
          <div className="flex items-center gap-4 text-[var(--color-muted)]">
            <a href={site.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-[var(--color-text)]" aria-label="Twitter">
              <IconTwitter />
            </a>
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-[var(--color-text)]" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-[var(--color-text)]" aria-label="Email">
              <IconMail />
            </a>
          </div>
          <div className="space-y-2 text-[0.7rem] leading-relaxed text-[var(--color-muted)]">
            <p>
              <span className="block text-[0.6rem] uppercase tracking-widest opacity-60">Twitter</span>
              {handle(site.socials.twitter)}
            </p>
            <p>
              <span className="block text-[0.6rem] uppercase tracking-widest opacity-60">Instagram</span>
              {handle(site.socials.instagram)}
            </p>
          </div>
          <p className="text-[0.6rem] uppercase leading-relaxed tracking-widest text-[var(--color-muted)] opacity-60">
            © {new Date().getFullYear()} {site.name}
            <br />
            All rights reserved
          </p>
        </div>
      </aside>
    </>
  );
}
