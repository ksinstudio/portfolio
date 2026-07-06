// Your portfolio / work entries. Add an object per project.
// Drop a cover image in /public/images and reference it as "/images/your-file.png".

export type Project = {
  slug: string;
  title: string;
  // Small category label shown above the title, e.g. "Product Visualization".
  category: string;
  year?: string;
  summary?: string;
  // Path under /public, e.g. "/images/project-cover.png".
  cover?: string;
  // Optional external link (live demo, video, ArtStation post).
  href?: string;
  // Shows in the homepage "Featured Work" grid.
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "residential-project",
    title: "Residential Project",
    category: "Architectural Visualization",
    year: "2026",
    cover: "/images/work-residential.svg",
    featured: true,
  },
  {
    slug: "bonbon-gummies",
    title: "BonBon Gummies",
    category: "Product Visualization",
    year: "2026",
    cover: "/images/work-bonbon-gummies.svg",
    featured: true,
  },
  {
    slug: "bonbon-liquid-diamonds",
    title: "BonBon Liquid Diamonds",
    category: "Branding & Packaging",
    year: "2026",
    cover: "/images/work-bonbon-diamonds.svg",
    featured: true,
  },
  {
    slug: "salvage-protocol",
    title: "Salvage Protocol",
    category: "Environment Design",
    year: "2025",
    cover: "/images/work-salvage.svg",
    featured: true,
  },
  {
    slug: "cyber-raider",
    title: "Cyber Raider",
    category: "3D Modeling",
    year: "2025",
    cover: "/images/work-cyber-raider.svg",
    featured: true,
  },
  {
    slug: "pancake-house",
    title: "Pancake House E-Juice",
    category: "Graphic Design",
    year: "2025",
    cover: "/images/work-pancake.svg",
    featured: true,
  },
];
