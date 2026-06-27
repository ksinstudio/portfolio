import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="glow pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto max-w-5xl px-6 pt-24 pb-16">
          <p className="text-sm font-medium text-[var(--color-accent)]">
            {site.role}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {site.tagline}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              View work
            </Link>
            <Link
              href="/assets"
              className="rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--color-surface)]"
            >
              Download assets
            </Link>
          </div>
        </div>
      </section>

      {/* Featured work */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-5xl px-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold tracking-tight">
              Featured work
            </h2>
            <Link
              href="/work"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              All work →
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
