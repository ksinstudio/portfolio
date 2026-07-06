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
    slug: "bonbon-gummies",
    title: "BonBon Gummies",
    category: "Product Visualization",
    year: "2026",
    client: "BonBon",
    role: "3D Artist / Art Direction",
    tools: ["Blender", "Photoshop"],
    summary: "Playful product renders for a candy brand's hero campaign.",
    overview: [
      "Hero product visuals for BonBon's gummy line — a bright, punchy set built to pop on packaging and social.",
      "Custom shaders and subsurface scattering sell the translucent, sugary look of each piece.",
    ],
    cover: "/images/work-bonbon-gummies.svg",
    featured: true,
  },
  {
    slug: "bonbon-liquid-diamonds",
    title: "BonBon Liquid Diamonds",
    category: "Branding & Packaging",
    year: "2026",
    client: "BonBon",
    role: "Creative Director / 3D",
    tools: ["Illustrator", "Blender", "Photoshop"],
    summary: "Premium packaging identity and 3D mockups for a product launch.",
    overview: [
      "A premium packaging system for BonBon's Liquid Diamonds line, from logo lockups to finished box design.",
      "3D mockups let the client see the packaging in real light before anything went to print.",
    ],
    cover: "/images/work-bonbon-diamonds.svg",
    featured: true,
  },
  {
    slug: "salvage-protocol",
    title: "Salvage Protocol",
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
    cover: "/images/work-salvage.svg",
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
];
