import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative block aspect-[4/3] overflow-hidden bg-[var(--color-panel)]"
    >
      {project.cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-muted)]">
          <span className="label">No cover yet</span>
        </div>
      )}

      {/* Gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

      {/* Label + title */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="label mb-1 text-[0.6rem]">{project.category}</p>
        <h3 className="head text-lg leading-tight">{project.title}</h3>
      </div>

      {/* Hover corner arrow */}
      <div className="absolute right-4 top-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </div>
    </Wrapper>
  );
}
