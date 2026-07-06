import type { Metadata } from "next";
import { gallery } from "@/data/gallery";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Selected art, renders, and visual work.",
};

export default function GalleryPage() {
  return (
    <div className="px-6 pt-16 sm:px-10 lg:px-14">
      <p className="label">Selected Visuals</p>
      <h1 className="display mt-2 text-6xl sm:text-7xl">Gallery</h1>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
        Click any piece to open it. Use ← → to browse, Esc to close.
      </p>

      <div className="mt-12">
        <Gallery items={gallery} />
      </div>
    </div>
  );
}
