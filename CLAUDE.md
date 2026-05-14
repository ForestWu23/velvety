# CLAUDE.md — VelvetY Design Studio Website

> Long-term project memory. Read this first when resuming work on this repo.

## What this project is

The marketing website for **VELVETY LLC** — a Washington-based design studio
founded February 2025 that does branding, web/product design, packaging, and
social/marketing content.

The site is **purely front-end**, deployed to **GitHub Pages**, and built with
**React + TypeScript + Vite + TailwindCSS + framer-motion**. The brief calls
for "as much animation as possible," so every page should lean heavily on
scroll-triggered, hover, and ambient micro-animations (without sacrificing
clarity).

The design language is sourced from static mockups the user provides per page.
We **1:1 reproduce** those mockups (do not redesign), then layer animation on
top.

- Repo: `git@github.com:ForestWu23/velvety.git` (branch `main`)
- Local path: `/Users/shuswu/vsworkspace/velvety`
- Deploy: GitHub Pages at `https://forestwu23.github.io/velvety/`
  (Vite `base: '/velvety/'`, deploy via `npm run deploy` → `gh-pages -d dist`)

## Tech stack (locked)

| Concern | Choice |
| --- | --- |
| Framework | React 18 + TypeScript |
| Bundler / dev server | Vite 5 |
| Styling | TailwindCSS 3 (custom theme in `tailwind.config.js`) |
| Animation | framer-motion (primary), Tailwind keyframes (ambient), `lenis` (smooth scroll) |
| Icons | `lucide-react` for UI icons; brand icon PNGs from `public/assets/images/` |
| Fonts | Inter (body), Poppins (display headings), Caveat (script accent) — via Google Fonts in `index.html` |
| Deployment | `gh-pages` package, `npm run deploy` |

Do **not** add a backend, CMS, or routing library unless the user asks.

## Brand system

| Token | Value | Notes |
| --- | --- | --- |
| `wine` | `#8A2E45` | Primary brand color (buttons, accents, footer bg) |
| `wine.deep` | `#6E2336` | Hover/pressed |
| `cream` | `#FFF6F7` | Section bg (Who We Are, Testimonials) |
| `cream.200` | `#FDF3F5` | Slightly cooler cream |
| `ink` | `#111111` | Headings, primary body |
| `muted` | `#555555` | Secondary copy |

Heading style: very tight tracking (`tracking-tightest`), bold-to-extrabold,
uses Poppins. Eyebrow labels are uppercase, tracked-out, small wine-colored.

## File / folder layout

```
velvety/
├── public/
│   └── assets/
│       └── images/        ← all brand assets the site uses (copied from user's Drive)
├── src/
│   ├── components/        ← reusable UI (Navigation, Section primitives, animation helpers)
│   ├── sections/          ← one file per homepage section (Hero, About, Expertise, …)
│   ├── pages/             ← (future) route-level pages — not used yet, single page only
│   ├── lib/               ← hooks, animation utilities, asset registry
│   ├── App.tsx            ← composes the homepage sections
│   ├── main.tsx           ← React entry
│   └── index.css          ← Tailwind layers + global styles
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

Keep section files self-contained and human-readable. Each section exports a
single default React component named after the section.

## Asset pipeline (IMPORTANT)

Source-of-truth Drive folder (do **NOT** check this into git, do **NOT** copy
unused files):

```
/Users/shuswu/Downloads/company/drive-download-20260514T001503Z-3-001
```

When the user references an image by name in a brief, copy that single file
into `public/assets/images/` (preserving the exact filename, including
casing). Reference it in code via `/assets/images/<file>` — Vite's `base`
makes that resolve correctly under both dev and GitHub Pages.

A central asset registry lives at `src/lib/assets.ts`. Every image used in the
site should be re-exported from there so file renames are a one-line change.

## Currently used images (homepage)

logoLong, logoSmall, HomepageBanner, WhoWeAreBGImage, whoWeAreImage,
CreativeAgencyImage, QualityWorkImage, ProfessionalTeamImage,
CreativeAgencyIcon, qualityWorkIcon, ProfessionalTeamIcon, ourServicesImage,
BrandIdentityIcon, WebProductIcon, PackagingPrintIcon, SocialMediaAssetsIcon,
BuyerfolioImage, NutriBitesImage, ClientCommentImage1, ClientCommentImage2,
BrightRightImage, HuagenLogo5x5, MajorPetsLogo, ThriveLogo, HomeLinkLogo.

## Animation conventions

- Use framer-motion `motion.*` for all entry animations.
- Wrap sections in a shared `<Reveal>` helper (`src/components/Reveal.tsx`)
  that does fade + slide-up on intersection.
- Stagger child elements with `staggerChildren: 0.08–0.12`.
- Hero ribbon, Who-We-Are layered paper, and footer logo should have
  ambient (always-on) motion — slow float / rotate.
- Prefer GPU-friendly props: `transform`, `opacity`. Avoid animating layout.
- Marquee/clients strip uses Tailwind keyframe `marquee` with duplicated
  content for a seamless loop.
- Respect `prefers-reduced-motion` in the `Reveal` helper.

## Build / run / deploy

```bash
npm install        # install once
npm run dev        # local dev at http://localhost:5173/  (Vite ignores `base` in dev)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run deploy     # build + push dist/ to gh-pages branch on GitHub
```

After every meaningful change, the user wants:
1. The dev server running (or already running).
2. The local URL printed in the final reply.
3. Optional GitHub Pages deploy on request — never auto-push to gh-pages
   without confirming.

## Package registry

A project-local `.npmrc` pins this repo to the **public** npm registry
(`https://registry.npmjs.org/`). The user's machine has a corporate npm
mirror set globally; the local `.npmrc` overrides it so the project installs
cleanly anywhere (CI, GitHub Actions, fresh clones). Do **not** add any
internal/corporate dependencies — this site deploys to public GitHub Pages.

## .gitignore policy

`.gitignore` is maintained in this repo. Always exclude: `node_modules`,
`dist`, `.vite`, `.idea`, `.vscode`, `.DS_Store`, `*.log`, `*.tsbuildinfo`,
`coverage`, `.env*` (except `.env.example` if we ever add one). Public assets
under `public/assets/` **are** committed — they ship to GitHub Pages.

## Working agreements with the user

- The user provides per-page Markdown briefs (e.g. `homepage.md`) that are the
  source of truth for content + layout. Reproduce them faithfully — do not
  invent extra sections, copy, or imagery.
- Mockup screenshots show the static design; the assistant adds animations.
- Code structure should stay human-readable: small components, named exports
  for primitives, default exports for sections/pages.
- Speak/respond in English by default unless the user switches language.
- Keep this CLAUDE.md updated as new pages, components, or conventions are
  added.

## Roadmap (planned pages — not built yet)

- About (mockup: `VelvetYAboutPage.png`)
- Services (mockup: `VelvetYServicesPage.png`)
- Project index (mockup: `VelvetYProjectPage.png`)
- Project detail: BuyerFolio (mockup: `VelvetYBuyerFolio.png`)

These will likely require introducing `react-router-dom` when the user is
ready to move beyond the single-page homepage.
