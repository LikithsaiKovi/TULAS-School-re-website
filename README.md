# Tula’s International School homepage

A responsive, animated homepage concept for Tula’s International School in Dehradun. It uses the school’s visual identity and official public information, with links back to the school for admissions, curriculum, boarding and activity details.

## Stack

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS 4 with a small, reusable CSS design system
- Framer Motion for scroll reveals, the reading progress indicator and cursor motion
- `next-themes` for the light/dark switch
- Lucide React for interface icons

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
npm start
```

## Homepage features

- **Scroll reveals:** section content enters view once, with reduced-motion preferences respected.
- **Reading progress:** a spring-smoothed indicator tracks document scroll depth.
- **Custom cursor:** a subtle follower ring expands over controls on fine-pointer devices; the system pointer remains visible and coarse-pointer devices hide the ring.
- **Theme switch:** the header control toggles and persists the light/dark theme.
- **School-life explorer:** switch between academics, clubs and sports, and boarding; filter the activity list and expand facility details.
- **Homepage content:** campus figures and published rankings (with a source note where official pages conflict), the full 16-item sports list with category filters, featured visitors and leaders, and parent comments published on the homepage (including the unattributed comment, labeled as such).
- **Family resources:** virtual tour, admissions, curriculum, boarding, FAQs, brochure, disclosure documents, school policies, alumni and student portal links.
- **Admissions help:** expandable FAQs and the school’s published four-stage admission process.
- Responsive navigation and layouts across desktop, tablet and mobile widths.

## Project map

```text
src/
  app/
    globals.css          Design tokens, responsive layout, and theme styles
    layout.tsx           Root metadata and theme provider
    page.tsx              Homepage composition and school identity
  components/
    animation/           Cursor, reading progress, and viewport reveals
    layout/              Theme toggle and global app chrome
    sections/            School-life explorer and official homepage highlights
```

School facts and imagery link to the official [Tula’s website](https://tis.edu.in/). Admissions, fees, and current availability can change; the page directs families to the school’s live [admissions portal](https://admission.tis.edu.in/) for current details.
