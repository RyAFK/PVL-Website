# Precision Vision London

Consultant-led vision-correction clinic website (laser eye surgery, ICL, refractive lens
exchange and cataract surgery), built as a Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript, no emit

## Project structure

- `app/` — routes (App Router), one folder per page; `[slug]` routes are data-driven from `content/`
- `components/` — `layout/` (header, footer, mobile action bar), `home/` (homepage sections),
  `sections/` (sections reused across multiple pages), `ui/` (buttons, icons, primitives),
  `seo/` (structured data)
- `content/` — typed content data (treatments, surgeons, reviews, FAQs, pricing, nav, etc.)
- `lib/` — site config, structured-data builders, analytics helper

## Content and data notes

This project was built without access to Precision Vision London's real brand assets, clinical
copy, pricing or verified statistics. Placeholder values are marked with `// PLACEHOLDER` comments
throughout `content/` and `lib/site.ts` — search for that marker before launch. See the project
handover notes for a full list of what needs clinical/legal/marketing sign-off.
