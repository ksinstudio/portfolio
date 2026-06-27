import { site } from "@/data/site";

const socialLabels: Record<string, string> = {
  instagram: "Instagram",
  twitter: "X / Twitter",
  artstation: "ArtStation",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  github: "GitHub",
};

export function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url);

  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              Email
            </a>
          )}
          {socials.map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {socialLabels[key] ?? key}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
