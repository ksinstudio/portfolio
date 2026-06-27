# Portfolio

Personal portfolio site built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS v4**.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Make it yours

Everything you'll routinely edit lives in `data/` — no need to touch the components:

| File               | What it controls                                             |
| ------------------ | ----------------------------------------------------------- |
| `data/site.ts`     | Your name, role, tagline, email, social links               |
| `data/projects.ts` | Work entries shown on Home + `/work`                        |
| `data/assets.ts`   | Downloadable files shown on `/assets`                       |

- **Images / covers:** drop files in `public/images/` and reference them as `/images/file.png`.
- **Small downloads:** drop files in `public/downloads/` and set `file: "/downloads/file.zip"`.
- **Large downloads (big 3D packs, video):** host on object storage (Cloudflare R2, S3, Google Drive) and set `href` to the URL instead — don't commit huge binaries.
- **Theme:** edit the color tokens at the top of `app/globals.css`.

## Pages

- `/` — hero + featured work
- `/work` — all projects
- `/assets` — downloadable assets
- `/about` — bio + contact

## Deploy

Push to a Git repo and import it at [vercel.com/new](https://vercel.com/new) (or Netlify). Zero config — it auto-detects Next.js. Add your custom domain in the dashboard.

## Build locally

```bash
npm run build
npm run start
```
