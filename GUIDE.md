# Portfolio Site — Owner's Guide

Everything about how your site works and how to update it. Written for you, Kevin — no prior web-dev knowledge assumed.

- **Live code:** `C:\Users\ksins\portfolio`
- **GitHub repo:** https://github.com/ksinstudio/portfolio
- **Hosting:** Vercel (free tier)
- **Domains:** ksin.io (main), ksin.shop (spare)

---

## 1. The 30-second mental model

```
   You edit a file            git push              Vercel rebuilds
   in C:\Users\ksins\   ─────────────────▶  GitHub ──────────────▶  Live website
   portfolio\data\                                                  (ksin.io)
```

- The **whole site is built from files on your PC.**
- **GitHub** stores a copy of those files (a backup + the bridge to hosting).
- **Vercel** watches GitHub. Whenever new files arrive, it automatically rebuilds the site and puts it online — usually in about a minute.
- You almost never touch design/code. **You edit small "data" files** and push.

**The loop you'll repeat forever:** edit a file → `git push` → live in ~1 minute.

---

## 2. What's in the project

```
portfolio/
├─ data/          ← YOU EDIT THESE. Your content lives here.
│  ├─ site.ts        Name, role, email, social links
│  ├─ projects.ts    Work / portfolio entries
│  ├─ gallery.ts     Gallery images
│  └─ assets.ts      Downloadable files
├─ public/        ← YOU DROP FILES HERE
│  ├─ images/        Photos, renders, gallery art
│  └─ downloads/     Files people can download
├─ app/           Pages & layout (design — rarely touched)
├─ components/     Reusable UI pieces (design — rarely touched)
└─ GUIDE.md        This file
```

**Pages on the site:** Home `/`, Work `/work`, Gallery `/gallery`, Assets `/assets`, About `/about`, Contact `/contact`.

---

## 3. One-time setup (already done, for reference)

You won't redo these, but here's what exists so nothing is a mystery:

- Node.js is installed (the engine that builds the site).
- The project's dependencies are installed (`node_modules` folder).
- Git is set up and connected to your GitHub repo.
- The site is on GitHub.

If you ever move to a **new computer**, you'd run once:
```powershell
cd C:\Users\ksins
git clone https://github.com/ksinstudio/portfolio.git
cd portfolio
npm install
```

---

## 4. Previewing changes on your own PC

Before publishing, always look at your changes locally:

```powershell
cd C:\Users\ksins\portfolio
npm run dev
```

Then open **http://localhost:3000** in your browser. Edit any `data/` file, save, and the page updates instantly. When done, click the terminal and press **Ctrl + C** to stop the preview.

> "localhost" = only on your computer. Nobody else can see it. It's your rehearsal stage.

---

## 5. Editing your content

All examples below are copy-paste-friendly. Keep the punctuation (commas, quotes, brackets) exactly as shown — that's the one thing that can break a build.

### 5a. Your name, role, email, socials — `data/site.ts`

```ts
export const site = {
  name: "Kevin Singleton",
  role: "3D Artist · Technical Designer · AI Tooling",
  tagline: "I build worlds, pipelines, and the tools in between…",
  email: "ksinstudio@gmail.com",
  location: "Available worldwide · Remote",
  socials: {
    instagram: "https://instagram.com/kevinxart",
    twitter: "https://twitter.com/ksin_art",
    artstation: "",   // leave "" to hide a link
    linkedin: "",
    youtube: "",
    github: "",
  },
};
```
To **add a social link**, paste the full URL between the quotes. To **hide one**, make it `""`.

### 5b. Work / projects — `data/projects.ts`

Each project is one block between `{ }`. To add one, copy an existing block and edit it:

```ts
{
  slug: "my-new-project",              // unique, lowercase, no spaces
  title: "My New Project",
  year: "2026",
  tags: ["Unreal Engine 5", "Environment"],
  summary: "One sentence describing it.",
  cover: "/images/my-project.png",     // put the image in public/images/  (or "" for none)
  href: "https://link-to-project.com", // optional external link (or "")
  featured: true,                      // true = also shows on the homepage
},
```

- **Order matters:** the order in the file is the order on the page.
- **`featured: true`** puts it on the homepage (max 4 show there).
- Remember the **comma** after the closing `}`.

### 5c. Gallery images — `data/gallery.ts`

1. Drop your image into `C:\Users\ksins\portfolio\public\images\`
2. Add a block:

```ts
{
  src: "/images/my-art.jpg",           // must start with /images/
  title: "Piece Title",
  caption: "Medium, year, notes",      // optional, shows in the popup
  shape: "portrait",                   // "portrait" | "landscape" | "square"
},
```

Visitors click any image to open a full-screen viewer (arrow keys to browse, Esc to close).

### 5d. Downloadable files — `data/assets.ts`

**Small files (a few MB):** drop the file in `public\downloads\`, then:

```ts
{
  slug: "brush-pack",
  title: "Brush Pack v1",
  description: "50 custom brushes.",
  size: "12 MB",
  format: "ZIP",
  tags: ["Brushes"],
  file: "/downloads/brush-pack.zip",   // must start with /downloads/
},
```

**Large files (big 3D packs, video — over ~25 MB):** DON'T put these in the project. Upload them to cloud storage (Google Drive, Dropbox, Cloudflare R2) and link instead:

```ts
{
  slug: "environment-kit",
  title: "Environment Kit",
  description: "Full UE5 environment pack.",
  size: "1.4 GB",
  format: "ZIP",
  href: "https://drive.google.com/…",  // use href (a link) instead of file
  external: true,
},
```

> Why: huge files make the site slow to publish and can hit hosting size limits. Links keep it fast.

---

## 6. Publishing your changes (going live)

After editing and previewing, publish with these three commands:

```powershell
cd C:\Users\ksins\portfolio
git add -A
git commit -m "Short note about what changed"
git push
```

What each does:
- `git add -A` — stages all your changes.
- `git commit -m "…"` — saves a snapshot with a label.
- `git push` — sends it to GitHub → **Vercel auto-rebuilds and your live site updates in ~1 minute.**

That's the entire publish process. No dashboard needed for routine updates.

> **Tip:** you can check the build progress anytime at https://vercel.com/dashboard → your project → "Deployments".

---

## 7. Pointing your domain (ksin.io) at the site

Do this **once**, after the site is deployed on Vercel.

**Step 1 — Add the domain in Vercel:**
Vercel Dashboard → your project → **Settings → Domains** → type `ksin.io` → **Add**. Vercel shows you the exact records to enter next.

**Step 2 — In Namecheap:**
namecheap.com → **Domain List** → **Manage** (ksin.io):

- On the **Domain** tab: confirm **Nameservers = "Namecheap BasicDNS"** (not Custom).
- On the **Advanced DNS** tab: delete the 2 default "parking" records, then **Add New Record**:

| Type          | Host | Value                    | TTL       |
| ------------- | ---- | ------------------------ | --------- |
| A Record      | `@`  | `76.76.21.21`            | Automatic |
| CNAME Record  | `www`| `cname.vercel-dns.com`   | Automatic |

*(Always prefer whatever values Vercel shows you — they're authoritative and can change.)*

**Step 3 — Wait.**
Usually live in minutes (can take a few hours). Vercel automatically adds HTTPS (the padlock). When Vercel shows "Valid Configuration," you're done.

**ksin.shop:** to make it redirect to ksin.io, add it in Vercel Domains too and set it to redirect to ksin.io. Or leave it parked for a future store.

---

## 8. Turning on the contact form

The contact page works, but to actually receive emails you add one key:

1. Go to https://web3forms.com → enter your email (`ksinstudio@gmail.com`) → they email you an **Access Key**.
2. Vercel → your project → **Settings → Environment Variables** → add:
   - **Name:** `WEB3FORMS_ACCESS_KEY`
   - **Value:** (the key they gave you)
3. Redeploy: Vercel → **Deployments** → latest → **⋯ → Redeploy** (or just do any `git push`).

Now form submissions arrive in your inbox. Until then, the form shows visitors an "email me directly" link — so nothing looks broken.

---

## 9. Quick troubleshooting

| Problem | Fix |
| --- | --- |
| `git push` says "rejected" | Run `git pull` first, then `git push` again. |
| Site didn't update after push | Check https://vercel.com/dashboard → Deployments. A red ✗ means the build failed — click it to read the error. |
| Local preview won't start | Make sure you're in `C:\Users\ksins\portfolio` and run `npm install` once, then `npm run dev`. |
| Build fails after editing a data file | You probably removed a comma, quote, or bracket. Compare against the examples in this guide. Undo your last edit with `git checkout -- data/thefile.ts` if stuck. |
| Image not showing | Check the path starts with `/images/` and the file is really in `public\images\` with the exact same name (case-sensitive). |
| Domain not working after hours | In Namecheap confirm Nameservers = BasicDNS and there are no leftover parking/redirect records fighting the A record. |

---

## 10. Cheat sheet

```powershell
# Preview locally
cd C:\Users\ksins\portfolio
npm run dev                 # → http://localhost:3000  (Ctrl+C to stop)

# Publish changes
git add -A
git commit -m "what I changed"
git push                    # live in ~1 min
```

**Edit content in:** `data\site.ts`, `data\projects.ts`, `data\gallery.ts`, `data\assets.ts`
**Put images in:** `public\images\`  •  **Put downloads in:** `public\downloads\`

That's the whole system. Edit → push → live.
