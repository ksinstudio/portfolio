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
    client: "Stiiizy · Cookies · MO+RE",
    role: "Archviz Artist / 3D",
    tools: ["SketchUp", "Blender", "Unreal Engine"],
    summary: "Interior and exterior visualization for retail and commercial brands.",
    overview: [
      "Commercial visualization across retail, hospitality, and industrial spaces — Cookies dispensary interiors, Stiiizy's Spikes building and executive offices, Townsend Brewing Company, and the Herbarium dispensary for MO+RE Design Solutions.",
      "Photoreal renders let brands and developers preview branded environments before construction, dialing in materials, lighting, and layout.",
    ],
    cover: "/images/work-commercial.jpg",
    images: [
      "/images/commercial-2.jpg",
      "/images/commercial-3.jpg",
      "/images/commercial-4.jpg",
      "/images/commercial-5.jpg",
    ],
    featured: true,
  },
  {
    slug: "blac-flag",
    title: "Blac Flag",
    category: "CGI Packaging",
    year: "2026",
    client: "Blac Flag",
    role: "3D Artist / Packaging Viz",
    tools: ["Blender", "Illustrator", "Photoshop"],
    summary: "Photoreal packaging renders for the Zoomers and ROKT product lines.",
    overview: [
      "Photoreal CGI packaging for Blac Flag's Zoomers and ROKT lines — open-box hero shots, flavor colorways, and display-ready product renders.",
      "Every SKU is rendered from the actual dieline art, giving the brand shelf-accurate visuals for e-commerce and wholesale before a single box is printed.",
    ],
    cover: "/images/work-blacflag.jpg",
    images: ["/images/blacflag-2.jpg", "/images/blacflag-3.jpg"],
    featured: true,
  },
  {
    slug: "ranz",
    title: "RANZ",
    category: "3D Art",
    year: "2026",
    client: "Personal",
    role: "3D Artist",
    tools: ["Blender", "Photoshop"],
    summary: "A dark sculptural portrait study in procedural fiber and decay.",
    overview: [
      "A personal 3D art piece — a fractured portrait wrapped in procedural fiber ribbons, exploring texture, color, and decay.",
      "Built in Blender with geometry-node fiber systems and layered grunge compositing for a painterly, unsettling finish.",
    ],
    cover: "/images/work-ranz.jpg",
    images: ["/images/ranz-2.jpg"],
    featured: true,
  },
];
