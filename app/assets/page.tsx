import type { Metadata } from "next";
import { assets } from "@/data/assets";
import { AssetCard } from "@/components/AssetCard";

export const metadata: Metadata = {
  title: "Assets",
  description: "Downloadable assets, packs, and resources.",
};

export default function AssetsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-16">
      <h1 className="text-3xl font-semibold tracking-tight">Assets</h1>
      <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
        Free and downloadable resources. Edit{" "}
        <code className="rounded bg-[var(--color-surface-2)] px-1.5 py-0.5 text-sm">
          data/assets.ts
        </code>{" "}
        to add files.
      </p>

      {assets.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
