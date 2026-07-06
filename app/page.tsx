import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const marqueeItems = [
  "3D ART",
  "UNREAL ENGINE",
  "AI TOOLING",
  "TECHNICAL DESIGN",
  "ENVIRONMENTS",
  "PIPELINES",
];

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
          <p className="reveal text-sm font-medium tracking-widest uppercase text-[var(--color-muted)]">
            {site.role}
          </p>
          <h1 className="reveal mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            <span className="holo-text">{site.tagline}</span>
          </h1>
          <div className="reveal mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.1s" }}>
            <Link
              href="/work"
              className="btn-holo rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              View work →
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--color-surface)]"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--color-surface)]"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="marquee-wrap relative overflow-hidden border-y border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] py-4">
          <div className="marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="mx-8 text-lg font-semibold tracking-widest text-[var(--color-muted)]"
              >
                {item}
                <span className="ml-8 text-[var(--color-violet)]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pt-20">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold tracking-tight">
              Featured <span className="holo-text">work</span>
            </h2>
            <Link
              href="/work"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              All work →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
