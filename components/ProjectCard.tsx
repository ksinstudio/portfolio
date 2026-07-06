import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="holo-border card-hover group block overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-surface-2)]">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[var(--color-muted)]">
            <span className="text-sm">No cover yet</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-medium">{project.title}</h3>
          <span className="text-xs text-[var(--color-muted)]">
            {project.year}
          </span>
        </div>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          {project.summary}
        </p>
        {project.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs text-[var(--color-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
