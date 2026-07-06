import type { Asset } from "@/data/assets";

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function AssetCard({ asset }: { asset: Asset }) {
  const url = asset.href ?? asset.file ?? "#";
  const isExternal = asset.external ?? Boolean(asset.href && !asset.file);

  return (
    <div className="holo-border card-hover flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium">{asset.title}</h3>
        {asset.format && (
          <span className="shrink-0 rounded-md bg-[var(--color-surface-2)] px-2 py-0.5 text-xs text-[var(--color-muted)]">
            {asset.format}
          </span>
        )}
      </div>

      <p className="mt-2 flex-1 text-sm text-[var(--color-muted)]">
        {asset.description}
      </p>

      {asset.tags && asset.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {asset.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs text-[var(--color-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-[var(--color-muted)]">
          {asset.size ?? ""}
        </span>
        <a
          href={url}
          {...(isExternal
            ? { target: "_blank", rel: "noreferrer" }
            : { download: true })}
          className="btn-holo inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium text-white"
        >
          <DownloadIcon />
          Download
        </a>
      </div>
    </div>
  );
}
