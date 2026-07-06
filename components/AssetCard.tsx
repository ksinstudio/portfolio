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
    <div className="flex flex-col border border-[var(--color-line)] bg-[var(--color-panel)] p-5 transition-colors hover:border-[var(--color-muted)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="head text-base">{asset.title}</h3>
        {asset.format && (
          <span className="label shrink-0 text-[0.6rem]">{asset.format}</span>
        )}
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
        {asset.description}
      </p>

      {asset.tags && asset.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {asset.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[var(--color-line)] px-2.5 py-0.5 text-xs text-[var(--color-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
        <span className="text-xs text-[var(--color-muted)]">
          {asset.size ?? ""}
        </span>
        <a
          href={url}
          {...(isExternal
            ? { target: "_blank", rel: "noreferrer" }
            : { download: true })}
          className="head inline-flex items-center gap-2 border border-[var(--color-line)] px-3.5 py-1.5 text-xs transition-colors hover:bg-[var(--color-elevated)]"
        >
          <DownloadIcon />
          Download
        </a>
      </div>
    </div>
  );
}
