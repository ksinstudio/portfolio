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
    role: "3D Artist / Landscape Viz",
    tools: ["Blender", "SketchUp", "Photoshop"],
    summary: "Aerial site-design visualization for a desert residential community.",
    overview: [
      "An aerial site-design visualization for a desert residential community — laying out the buildings, roads, and landscape in a single readable master view.",
      "The render doubles as a planting guide, pairing a drought-tolerant plant palette and legend with photoreal terrain so stakeholders can read the whole scheme at a glance.",
    ],
    cover: "/images/work-residential.jpg",
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
      "Packaging design and lifestyle campaign for BonBon Dual Gummiez.",
    overview: [
      "A full visual system for BonBon Dual Gummiez — from the striped can packaging across every flavor to the festival-driven lifestyle campaign that sells the product in the wild.",
      "Each flavor gets its own colorway (Blue Splash, Citrus Burst, Grape Zing…), composited into vivid festival and travel scenes that put the product in its audience's hands.",
    ],
    cover: "/images/work-bonbon.jpg",
    images: ["/images/bonbon-2.jpg", "/images/bonbon-3.jpg", "/images/bonbon-4.jpg"],
    featured: true,
  },
  {
    slug: "pancake-house",
    title: "Pancake House E-Juice",
    category: "Graphic Design",
    year: "2025",
    client: "Pancake House",
    role: "Graphic Designer / 3D",
    tools: ["Illustrator", "Photoshop", "Blender"],
    summary: "Product visualization, packaging, and campaign key art for the Pancake House line.",
    overview: [
      "Product visualization, packaging, and campaign key art for The Pancake House — a breakfast-themed e-juice line built around warm, appetizing flavor storytelling.",
      "From clean product renders to full 'Breakfast. Reimagined.' ad layouts, the system scales across flavors like Vanilla Custard and Glazed Donut while keeping one consistent voice.",
    ],
    cover: "/images/work-pancake.jpg",
    images: ["/images/pancake-2.jpg", "/images/pancake-3.jpg"],
    featured: true,
  },
  {
    slug: "commercial",
    title: "Retail & Commercial",
    category: "Commercial Visualization",
    year: "2026",
    client: "Stiiizy · Cookies",
    role: "Archviz Artist / 3D",
    tools: ["SketchUp", "Blender", "Unreal Engine"],
    summary: "Interior and exterior visualization for retail and commercial brands.",
    overview: [
      "Commercial visualization across retail and industrial spaces — from Cookies dispensary interiors to Stiiizy's Spikes building exterior and executive offices.",
      "Photoreal renders let brands and developers preview branded environments before construction, dialing in materials, lighting, and layout.",
    ],
    cover: "/images/work-commercial.jpg",
    images: ["/images/commercial-2.jpg", "/images/commercial-3.jpg"],
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
