"use client";

import { useEffect, useState, useCallback } from "react";
import type { GalleryItem } from "@/data/gallery";

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      {/* Masonry via CSS columns */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setActive(i)}
            className="group block w-full overflow-hidden border border-[var(--color-line)] bg-[var(--color-panel)] text-left transition-colors hover:border-[var(--color-muted)]"
          >
            <div className="overflow-hidden rounded-[0.85rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm font-medium">{item.title}</span>
              <span className="text-xs text-[var(--color-muted)] opacity-0 transition-opacity group-hover:opacity-100">
                View ↗
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={close}
        >
          <button
            className="absolute right-5 top-5 rounded-full border border-white/20 p-2 text-white/80 hover:text-white"
            onClick={close}
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <figure className="max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[active].src}
              alt={items[active].title}
              className="mx-auto max-h-[80vh] w-auto rounded-xl"
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">
              <span className="font-medium text-white">{items[active].title}</span>
              {items[active].caption ? ` — ${items[active].caption}` : ""}
            </figcaption>
          </figure>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
