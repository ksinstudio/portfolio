// Gallery images. Drop files in /public/images and reference them here.
// Large source art is fine — Next.js optimizes on the fly.

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
    src: "/images/sample-1.svg",
    title: "Neon Study 01",
    caption: "Replace with your art — edit data/gallery.ts",
    shape: "landscape",
  },
  {
    src: "/images/sample-2.svg",
    title: "Chrome Sphere",
    caption: "Placeholder render",
    shape: "portrait",
  },
  {
    src: "/images/sample-3.svg",
    title: "Grid Horizon",
    caption: "Placeholder render",
    shape: "square",
  },
  {
    src: "/images/sample-4.svg",
    title: "Holo Bloom",
    caption: "Placeholder render",
    shape: "landscape",
  },
  {
    src: "/images/sample-5.svg",
    title: "Vapor Trail",
    caption: "Placeholder render",
    shape: "portrait",
  },
  {
    src: "/images/sample-6.svg",
    title: "Circuit Dawn",
    caption: "Placeholder render",
    shape: "square",
  },
];
