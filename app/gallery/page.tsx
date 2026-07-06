import type { Metadata } from "next";
import { gallery } from "@/data/gallery";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Selected art, renders, and visual work.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16">
      <h1 className="text-4xl font-bold tracking-tight">
        <span className="holo-text">Gallery</span>
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
        Click any piece to open it. Use ← → to browse, Esc to close. Add images
        in{" "}
        <code className="rounded bg-[var(--color-surface-2)] px-1.5 py-0.5 text-sm">
          data/gallery.ts
        </code>
        .
      </p>

      <div className="mt-10">
        <Gallery items={gallery} />
      </div>
    </div>
  );
}
