import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary ?? `${project.category} — ${project.title}`,
  };
}

function Arrow({ dir = "right" }: { dir?: "right" | "left" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {dir === "right" ? (
        <path d="M5 12h14M13 6l6 6-6 6" />
      ) : (
        <path d="M19 12H5M11 6l-6 6 6 6" />
      )}
    </svg>
  );
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const meta: { label: string; value: string }[] = [];
  if (project.year) meta.push({ label: "Year", value: project.year });
  if (project.client) meta.push({ label: "Client", value: project.client });
  if (project.role) meta.push({ label: "Role", value: project.role });
  if (project.tools?.length)
    meta.push({ label: "Tools", value: project.tools.join(", ") });

  return (
    <div className="px-6 pb-24 pt-16 sm:px-10 lg:px-14">
      <Link href="/work" className="arrow-link">
        <Arrow dir="left" />
        Back to Work
      </Link>

      {/* Title */}
      <div className="mt-10 border-b border-[var(--color-line)] pb-8">
        <p className="label">{project.category}</p>
        <h1 className="display mt-3 text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
          {project.title}
        </h1>
        {project.summary && (
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
            {project.summary}
          </p>
        )}
      </div>

      {/* Hero image */}
      {project.cover && (
        <div className="mt-8 aspect-[16/9] overflow-hidden bg-[var(--color-panel)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* Meta + overview */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-6">
          {meta.map((m) => (
            <div key={m.label} className="border-t border-[var(--color-line)] pt-3">
              <p className="label text-[0.6rem]">{m.label}</p>
              <p className="mt-1 text-sm text-[var(--color-text)]">{m.value}</p>
            </div>
          ))}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="head inline-flex items-center gap-3 border border-[var(--color-line)] px-5 py-2.5 text-xs transition-colors hover:bg-[var(--color-elevated)]"
            >
              Visit Live
              <Arrow />
            </a>
          )}
        </div>

        <div className="space-y-5">
          {(project.overview ?? [project.summary ?? ""]).map((para, i) => (
            <p key={i} className="max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Additional images */}
      {project.images && project.images.length > 0 && (
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {project.images.map((src) => (
            <div key={src} className="aspect-[4/3] overflow-hidden bg-[var(--color-panel)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={project.title} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* Next project */}
      <Link
        href={`/work/${next.slug}`}
        className="group mt-20 block border-t border-[var(--color-line)] pt-8"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="label">Next Project</p>
            <p className="head mt-2 text-2xl transition-colors group-hover:text-[var(--color-muted)] sm:text-4xl">
              {next.title}
            </p>
          </div>
          <span className="mb-2 text-[var(--color-muted)] transition-transform group-hover:translate-x-2">
            <Arrow />
          </span>
        </div>
      </Link>
    </div>
  );
}
