// Your portfolio / work entries. Add an object per project.
// Drop a cover image in /public/images and reference it as "/images/your-file.png".

export type Project = {
  slug: string;
  title: string;
  // Small category label shown above the title, e.g. "Product Visualization".
  category: string;
  year?: string;
  // Short one-liner (optional).
  summary?: string;
  // Longer write-up for the detail page. Each string is a paragraph.
  overview?: string[];
  // Meta shown on the detail page.
  client?: string;
  role?: string;
  tools?: string[];
  // Cover image (card + detail hero). Path under /public.
  cover?: string;
  // Extra images shown in the detail-page gallery. Paths under /public.
  images?: string[];
  // Optional external link (live site, video, ArtStation post).
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
    client: "Private Client",
    role: "3D Artist / Lighting",
    tools: ["Blender", "Unreal Engine", "Photoshop"],
    summary: "Photoreal exterior visualization of a modern hillside residence.",
    overview: [
      "A full exterior visualization of a modern hillside residence, developed from architectural plans through to final render.",
      "The focus was mood and materiality — capturing overcast, cinematic light that makes the glass, concrete, and surrounding landscape feel tactile and real.",
    ],
    cover: "/images/work-residential.svg",
    featured: true,
  },
  {
    slug: "bonbon",
    title: "BonBon",
    category: "Product & Packaging",
    year: "2026",
    client: "BonBon",
    role: "Creative Director / 3D",
    tools: ["Blender", "Illustrator", "Photoshop"],
    summary:
      "Product visualization and packaging identity for the BonBon line.",
    overview: [
      "A complete visual identity for BonBon — from photoreal product renders of the gummy line to finished packaging design for the Liquid Diamonds range.",
      "Custom shaders and subsurface scattering sell the translucent, sugary product, while the packaging system ties the whole brand together on shelf.",
    ],
    cover: "/images/work-bonbon.svg",
    featured: true,
  },
  {
    slug: "pancake-house",
    title: "Pancake House E-Juice",
    category: "Graphic Design",
    year: "2025",
    client: "Pancake House",
    role: "Graphic Designer",
    tools: ["Illustrator", "Photoshop"],
    summary: "Label and key-art design for a flavored product line.",
    overview: [
      "Label design and key art for the Pancake House e-juice line — warm, appetizing, and instantly readable on shelf.",
      "The system scales across multiple flavors while keeping a consistent brand voice.",
    ],
    cover: "/images/work-pancake.svg",
    featured: true,
  },
  {
    slug: "commercial",
    title: "Commercial Project",
    category: "Commercial / Motion",
    year: "2026",
    client: "Confidential",
    role: "Director / 3D & Motion",
    tools: ["Unreal Engine", "After Effects", "Premiere"],
    summary: "A short-form commercial spot blending 3D and motion design.",
    overview: [
      "A short-form commercial spot combining 3D-rendered product hero shots with motion-design typography and edit.",
      "Directed end to end — concept, previs, look development, and final grade — for a punchy, platform-ready cut.",
    ],
    cover: "/images/work-commercial.svg",
    featured: true,
  },
  {
    slug: "dead-protocol",
    title: "Dead Protocol",
    category: "Environment Design",
    year: "2025",
    client: "Personal",
    role: "Environment Artist",
    tools: ["Unreal Engine", "Blender"],
    summary: "A cinematic post-collapse environment study.",
    overview: [
      "A real-time environment exploring scale, atmosphere, and storytelling in a post-collapse world.",
      "Built in Unreal Engine with a focus on composition and volumetric light to guide the eye through the scene.",
    ],
    cover: "/images/work-dead.svg",
    featured: true,
  },
  {
    slug: "cyber-raider",
    title: "Cyber Raider",
    category: "3D Modeling",
    year: "2025",
    client: "Personal",
    role: "Character Artist",
    tools: ["Blender", "Substance", "ZBrush"],
    summary: "A hard-surface character concept, modeled and rendered.",
    overview: [
      "A hard-surface character concept taken from sketch to fully rendered hero shot.",
      "Emphasis on silhouette, believable materials, and a lighting setup that reads as both menacing and heroic.",
    ],
    cover: "/images/work-cyber-raider.svg",
    featured: true,
  },
];
