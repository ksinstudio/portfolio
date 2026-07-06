import type { Metadata } from "next";
import { assets } from "@/data/assets";
import { AssetCard } from "@/components/AssetCard";

export const metadata: Metadata = {
  title: "Assets",
  description: "Downloadable assets, packs, and resources.",
};

export default function AssetsPage() {
  return (
    <div className="px-6 pt-16 sm:px-10 lg:px-14">
      <p className="label">Downloads</p>
      <h1 className="display mt-2 text-6xl sm:text-7xl">Assets</h1>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
        Free and downloadable resources — packs, kits, and files.
      </p>

      {assets.length > 0 ? (
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {assets.map((asset) => (
            <AssetCard key={asset.slug} asset={asset} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-[var(--color-muted)]">
          No assets published yet — check back soon.
        </p>
      )}
    </div>
  );
}
