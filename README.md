# SAAIR Energy

Marketing and product website for **SAAIR Energy**—an integrated energy solutions company. Built with the Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- **Responsive layout** with a fixed header and **mobile/tablet drawer navigation** (screens smaller than `lg`): logo and menu trigger only; full nav links and CTA live in a left slide-out panel with backdrop (`/public/hamburger.svg`, `/public/close.svg`).
- **Multi-page experience**: Home, About, Services, Products, plus shared **Hero**, **CTA**, and **Footer** components.
- **Route-aware navigation**: active page highlighting using `usePathname()`.
- **Content-driven UI**: copy, nav links, and hero defaults centralized in `constants/index.ts`.

## Tech stack

| Area        | Choice                          |
| ----------- | ------------------------------- |
| Framework   | [Next.js](https://nextjs.org) 16 (App Router) |
| UI          | React 19                        |
| Styling     | Tailwind CSS 4                  |
| Motion      | [Framer Motion](https://www.framer.com/motion/) (page transitions, scroll reveals, micro-interactions) |
| Language    | TypeScript (strict)             |
| Fonts       | **Aeonik TRIAL** (local files in `public/fonts/`; see `public/fonts/README.md`) |

## Project structure

```text
app/                    # App Router routes & layouts
  layout.tsx            # Root layout, metadata
  page.tsx              # Home
  globals.css           # Tailwind import & theme tokens
  about/                # About page + layout metadata
  products/             # Products (smart meters) + layout metadata
  services/             # Services + layout metadata

components/
  layout/               # Navbar, Footer, Hero
  motion/               # ScrollReveal, StaggerContainer, MotionSubmitButton
  providers/            # PageTransition (AnimatePresence + route key)
  products/             # MeterStaggeredGallery, etc.
  services/             # ServiceDetailCard
  ui/                   # Shared UI primitives (where applicable)

sections/               # Page sections (composable blocks)
lib/animations.ts       # Shared Framer Motion variants & easings
constants/index.ts      # Site config, nav, copy, hero props
types/index.ts          # Shared TypeScript types
public/                 # Static assets (logo, hero, meters, menu icons, fonts)
```

Path alias: `@/*` maps to the repository root (see `tsconfig.json`).

## Getting started

**Requirements:** Node.js 20+ recommended (aligned with `@types/node`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | ESLint                   |

## Pages & routing

| Route        | Purpose |
| ------------ | ------- |
| `/`          | Landing: hero, about teaser, services teaser, products teaser, CTA |
| `/about`     | Company story, mission, vision, values |
| `/services`  | Full services grid (five cards) |
| `/products`  | Smart meters overview + technical specification + meter gallery |

Primary navigation is defined in `constants/index.ts` (`navLinks`). The **Contact Us** control targets the homepage CTA section (`/#cta`) unless you add a dedicated contact route.

## Design & assets

- **Typography:** `font-sans` uses **Aeonik TRIAL** when files are present in `public/fonts/` (`@font-face` in `app/globals.css`). Otherwise the stack falls back to system UI fonts.
- **Motion:** Route changes are wrapped by `PageTransition` in `app/layout.tsx` (`AnimatePresence` + `key={pathname}`). Sections use `ScrollReveal` / `StaggerContainer`; `useReducedMotion()` short-circuits heavy motion. Shared variants live in `lib/animations.ts`.
- Brand greens (e.g. `#008148`) appear in buttons, headings, and icon SVGs.
- **Hero** backgrounds use `/hero.gif` for page-title variants (About, Services, Products).
- Product imagery lives under `public/meter/` and `public/service/`; menu icons under `public/hamburger.svg` and `public/close.svg`.

## Agent / contributor notes

- This repo includes **`AGENTS.md`** with Next.js-specific guidance—check `node_modules/next/dist/docs/` when APIs differ from older Next.js versions.
- Prefer editing **copy and nav** in `constants/index.ts` before hard-coding strings in components.

## Deployment

Build a production bundle with `npm run build`, then run `npm run start`. Deploy to any platform that supports Next.js (e.g. [Vercel](https://vercel.com)).

## License

Private project (`"private": true` in `package.json`). All rights reserved unless otherwise stated by the repository owner.
