This folder holds downloadable files referenced from data/assets.ts.

Small files (a few MB): drop them here and set `file: "/downloads/your-file.zip"`.
Large files (big 3D packs, videos): host them on object storage (Cloudflare R2,
S3, etc.) and use `href` instead — committing huge binaries to git and deploying
them through Vercel/Netlify is slow and may hit size limits.
