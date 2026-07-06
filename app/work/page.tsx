import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies.",
};

export default function WorkPage() {
  return (
    <div className="px-6 pt-16 sm:px-10 lg:px-14">
      <p className="label">Portfolio</p>
      <h1 className="display mt-2 text-6xl sm:text-7xl">Work</h1>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
        Selected projects across visualization, design, and branding.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
