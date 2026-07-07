// Gallery images. Drop files in /public/images and reference them here.
// Large source art is fine — run big files through sharp first (see GUIDE.md).

export type GalleryItem = {
  src: string;
  title: string;
  // Optional caption/medium shown in the lightbox.
  caption?: string;
  // Aspect ratio hint for nicer masonry: "portrait" | "landscape" | "square".
  shape?: "portrait" | "landscape" | "square";
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/gallery-nova.jpg",
    title: "Nova",
    caption: "Cybercult — 3D character art",
    shape: "portrait",
  },
  {
    src: "/images/gallery-meza.jpg",
    title: "Meza Retail Center",
    caption: "Commercial exterior visualization",
    shape: "landscape",
  },
  {
    src: "/images/gallery-gummiez.jpg",
    title: "BonBon Dual Gummiez",
    caption: "Full flavor lineup — CGI product render",
    shape: "square",
  },
  {
    src: "/images/gallery-china.jpg",
    title: "China Alley",
    caption: "Apothecary interior visualization",
    shape: "landscape",
  },
  {
    src: "/images/ranz-2.jpg",
    title: "RANZ — Fiber Study",
    caption: "Procedural geometry-node fibers",
    shape: "square",
  },
  {
    src: "/images/gallery-void.jpg",
    title: "Void",
    caption: "Cybercult — graphic design",
    shape: "portrait",
  },
  {
    src: "/images/gallery-bistro.jpg",
    title: "Le Bistro",
    caption: "Commercial exterior visualization",
    shape: "landscape",
  },
  {
    src: "/images/gallery-liquiddiamonds.jpg",
    title: "BonBon Liquid Diamonds",
    caption: "Product line render",
    shape: "square",
  },
  {
    src: "/images/commercial-4.jpg",
    title: "Townsend Brewing Company",
    caption: "Commercial exterior visualization",
    shape: "landscape",
  },
  {
    src: "/images/pancake-2.jpg",
    title: "The Pancake House",
    caption: "Breakfast. Reimagined. — campaign key art",
    shape: "square",
  },
  {
    src: "/images/commercial-3.jpg",
    title: "Stiiizy Executive Office",
    caption: "Interior visualization",
    shape: "landscape",
  },
  {
    src: "/images/commercial-5.jpg",
    title: "Herbarium Dispensary",
    caption: "MO+RE Design Solutions — presentation board",
    shape: "landscape",
  },
];
