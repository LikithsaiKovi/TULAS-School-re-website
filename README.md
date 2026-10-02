# Tulas International School (TIS) — Homepage Redesign

A modern, high-converting, animated redesign of the [Tulas International School (TIS)](https://tis.edu.in/) homepage — built with **Next.js 14/16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Live Demo & Local Access

- **Local Dev Server:** `http://localhost:3000`
- **Build Status:** Passed cleanly (`npm run build` succeeds with zero errors / zero warnings)

---

## 🛠️ Tech Stack Architecture

| Layer | Technology |
|---|---|
| **Framework** | Next.js (App Router, Server Components & React 19) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 & Glassmorphism design system |
| **Animations** | Framer Motion (useSpring, useInView, AnimatePresence) |
| **Icons** | Lucide React |
| **Theme** | next-themes (Dark & Light support with animated rotation) |

---

## ✨ Standout Features Implemented (All 4)

### 🖱️ Feature A — Custom Spring-Physics Magnetic Cursor
- An interactive trailing ring cursor powered by Framer Motion `useSpring`.
- Leaves the native mouse pointer visible so users are never disoriented.
- Automatically disables on touch/mobile devices (`pointer: coarse`).
- Expands and glows dynamically when hovering over clickable links, cards, and buttons.
- **File:** `src/components/animation/CustomCursor.tsx`

### 👁️ Feature B — Scroll-Triggered Staggered Reveals
- Viewport-triggered entrance animations powered by `framer-motion` `useInView` with `once: true`.
- Staggered delays and directional transitions kept between `0.3s` and `0.5s` for 60 FPS performance.
- **File:** `src/components/animation/ScrollReveal.tsx`

### 🌙 Feature C — Animated Dark/Light Theme Switcher
- Smooth transition toggle in the navigation bar using `next-themes`.
- `AnimatePresence`-powered rotational icon morphing between sun and moon.
- **File:** `src/components/layout/Navbar.tsx`

### 📊 Feature D — Spring Scroll Progress Bar
- Fixed gradient bar (`amber → orange → red → violet`) at the viewport top.
- Real-time scroll depth tracked via `useScrollProgress` hook with passive event listeners.
- **File:** `src/components/animation/ScrollProgressBar.tsx`

---

## 🏫 Real-World School Sections & Features

1. **Top Announcement Ribbon:** Admissions 2025–26 alerts, CBSE affiliation details, phone helpline, virtual tour link, and theme toggle.
2. **Balanced 2-Column Hero:**
   - Left: Accreditation badge, dynamic rotating headline, value proposition, dual CTAs, and trust highlights.
   - Right: Real campus photography showcase, live rank badges ("#1 Boarding in UK"), and quick enquiry widget.
3. **Full-Width Key Stats Ribbon:** 35+ Years legacy, 22-acre campus, 16+ sports, 8:1 ratio, 100% CBSE pass rate, 5,000+ alumni.
4. **About TIS (The Modern Gurukul):** Official TIS philosophy, campus imagery, and 4 core educational pillars.
5. **Interactive Academics:** Tabbed switcher for Primary (IV–VI), Middle (VII–IX), and Senior Secondary (X–XII) with STEM lab highlights.
6. **Boarding Life & Pastoral Care:** 4 residential pillars, dining standards, and a "Day in the Life of a TIS Boarder" daily routine.
7. **16+ Sports Academy:** Category-filterable sports grid (Equestrian, Outdoor, Indoor, Racquet) with real equestrian & swimming photos.
8. **Testimonials & Global Placements:** Verified parent & alumni reviews carousel with university placement badges (IITs, BITS, Columbia, etc.).
9. **Interactive Admissions Inquiry Form:** Parents can select grade, boarding type, enter details, and receive instant confirmation.
10. **Frequently Asked Questions (FAQ):** Accordion answering common parent questions on safety, dining, entrance exams, and fees.
11. **High-Converting Final CTA:** Admissions 2025–26 callout with helpline and direct portal links.
12. **Official School Footer:** CBSE affiliation disclosures, campus address, helpline, and mandatory PDF links.

---

## 📦 Getting Started Locally

```bash
# 1. Clone repository
git clone https://github.com/your-username/tis-homepage-redesign.git
cd tis-homepage-redesign/tis-homepage

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
http://localhost:3000

# 5. Build for production
npm run build
```
