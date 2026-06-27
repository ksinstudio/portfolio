import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-16">
      <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
      <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
        Selected projects. Edit{" "}
        <code className="rounded bg-[var(--color-surface-2)] px-1.5 py-0.5 text-sm">
          data/projects.ts
        </code>{" "}
        to add your own.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
