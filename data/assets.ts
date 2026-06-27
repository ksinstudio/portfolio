// Downloadable assets. Each entry renders a card with a download button.
//
// Two ways to host the file:
//   1. Small files: drop them in /public/downloads and set `file` to
//      "/downloads/your-file.zip".
//   2. Large files (recommended for big 3D packs): upload to object storage
//      (Cloudflare R2, S3, Google Drive, etc.) and set `href` to the URL.
//
// Set `external: true` when using `href` so the link opens in a new tab.

export type Asset = {
  slug: string;
  title: string;
  description: string;
  // Display-only size label, e.g. "48 MB".
  size?: string;
  // Format label, e.g. "FBX", "GLB", "ZIP".
  format?: string;
  tags?: string[];
  // Local path under /public, e.g. "/downloads/pack.zip".
  file?: string;
  // OR an external URL (object storage / CDN).
  href?: string;
  external?: boolean;
};

export const assets: Asset[] = [
  {
    slug: "starter-asset-pack",
    title: "Starter Asset Pack",
    description:
      "Example download entry. Replace this with a real asset, drop the file in /public/downloads, and update the `file` path.",
    size: "—",
    format: "ZIP",
    tags: ["Example"],
    file: "/downloads/README.txt",
  },
];
