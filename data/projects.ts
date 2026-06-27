// Your portfolio / work entries. Add an object per project.
// Drop a cover image in /public/images and reference it as "/images/your-file.png".

export type Project = {
  slug: string;
  title: string;
  year: string;
  // Short tags shown as chips, e.g. ["Unreal Engine", "Environment"].
  tags: string[];
  // One-line summary for cards.
  summary: string;
  // Longer description (optional) — shown when you build out detail pages later.
  description?: string;
  // Path under /public, e.g. "/images/project-cover.png". Leave "" for a placeholder.
  cover?: string;
  // Optional external link (live demo, video, ArtStation post).
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "odysseus",
    title: "Odysseus",
    year: "2026",
    tags: ["AI Tooling", "Python", "MCP"],
    summary:
      "A local-first AI agent platform wiring LLMs into creative pipelines and game engines.",
    description:
      "Replace this with the full write-up: the problem, your approach, and the results.",
    cover: "",
    href: "",
    featured: true,
  },
  {
    slug: "unreal-environment",
    title: "Unreal Environment Study",
    year: "2026",
    tags: ["Unreal Engine 5", "Environment Art"],
    summary:
      "A real-time environment built in UE5 exploring lighting, composition, and Nanite workflows.",
    cover: "",
    href: "",
    featured: true,
  },
  {
    slug: "ai-asset-pipeline",
    title: "AI Asset Generation Pipeline",
    year: "2025",
    tags: ["Hunyuan3D", "ComfyUI", "Blender"],
    summary:
      "Text/image-to-3D pipeline producing game-ready meshes through a local generation stack.",
    cover: "",
    href: "",
    featured: false,
  },
];
