// ─────────────────────────────────────────────────────────────────────────────
// SectionThemeContext — Dynamic Section-Aware Theming Engine
//
// Architecture:
//   - Each <section> registers itself via data-section-theme attribute
//   - IntersectionObserver fires when a section enters the 40% viewport threshold
//   - Theme state updates → CSS Custom Properties on <html> element
//   - Pure CSS transitions animate the background gradient (no layout repaints)
//   - Zero third-party dependencies beyond React core
//
// Usage:
//   useSectionTheme() in any component to read { activeTheme, sectionId }
//   Add data-section-theme="hero" to any <section> element to register it
// ─────────────────────────────────────────────────────────────────────────────

"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

// ── Section Theme Definitions ─────────────────────────────────────────────────
// Each theme represents the emotional & visual language of that content section.
// Colors are carefully chosen to reflect the educational institution's identity.
export interface SectionTheme {
  id: string;
  name: string;
  // Background: two-stop gradient for the ambient layer
  bgFrom: string;
  bgVia: string;
  bgTo: string;
  // Primary accent — text highlights, icon tints, CTA borders
  accent: string;
  accentRgb: string;
  // Ambient glow color (for radial gradient orbs)
  glowColor: string;
  // Section label displayed on navbar / scroll indicator
  label: string;
}

export const SECTION_THEMES: Record<string, SectionTheme> = {
  hero: {
    id: "hero",
    name: "Imperial Night",
    bgFrom: "#020913",
    bgVia: "#040f22",
    bgTo: "#020913",
    accent: "#f59e0b",
    accentRgb: "245,158,11",
    glowColor: "rgba(245,158,11,0.09)",
    label: "Welcome",
  },
  about: {
    id: "about",
    name: "Himalayan Forest",
    bgFrom: "#020d06",
    bgVia: "#041808",
    bgTo: "#020d06",
    accent: "#10b981",
    accentRgb: "16,185,129",
    glowColor: "rgba(16,185,129,0.10)",
    label: "About TIS",
  },
  academics: {
    id: "academics",
    name: "Intellectual Indigo",
    bgFrom: "#050310",
    bgVia: "#0b0520",
    bgTo: "#050310",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
    glowColor: "rgba(139,92,246,0.12)",
    label: "Academics",
  },
  boarding: {
    id: "boarding",
    name: "Warm Ember",
    bgFrom: "#130700",
    bgVia: "#1e0d03",
    bgTo: "#130700",
    accent: "#fb923c",
    accentRgb: "251,146,60",
    glowColor: "rgba(251,146,60,0.10)",
    label: "Boarding Life",
  },
  sports: {
    id: "sports",
    name: "Championship Green",
    bgFrom: "#021208",
    bgVia: "#03200e",
    bgTo: "#021208",
    accent: "#34d399",
    accentRgb: "52,211,153",
    glowColor: "rgba(52,211,153,0.12)",
    label: "Sports Academy",
  },
  testimonials: {
    id: "testimonials",
    name: "Trust Sapphire",
    bgFrom: "#020b18",
    bgVia: "#041228",
    bgTo: "#020b18",
    accent: "#60a5fa",
    accentRgb: "96,165,250",
    glowColor: "rgba(59,130,246,0.10)",
    label: "Testimonials",
  },
  admissions: {
    id: "admissions",
    name: "Golden Opportunity",
    bgFrom: "#0d0800",
    bgVia: "#181000",
    bgTo: "#0d0800",
    accent: "#fbbf24",
    accentRgb: "251,191,36",
    glowColor: "rgba(251,191,36,0.12)",
    label: "Admissions",
  },
  location: {
    id: "location",
    name: "Himalayan Sky",
    bgFrom: "#020d14",
    bgVia: "#031824",
    bgTo: "#020d14",
    accent: "#22d3ee",
    accentRgb: "34,211,238",
    glowColor: "rgba(6,182,212,0.10)",
    label: "Campus",
  },
  faqs: {
    id: "faqs",
    name: "Calm Slate",
    bgFrom: "#050810",
    bgVia: "#080d1a",
    bgTo: "#050810",
    accent: "#94a3b8",
    accentRgb: "148,163,184",
    glowColor: "rgba(100,116,139,0.08)",
    label: "FAQs",
  },
  cta: {
    id: "cta",
    name: "Apply — Imperial Gold",
    bgFrom: "#0f0800",
    bgVia: "#1a0e00",
    bgTo: "#0f0800",
    accent: "#f59e0b",
    accentRgb: "245,158,11",
    glowColor: "rgba(245,158,11,0.15)",
    label: "Apply Now",
  },
};

// ── Context Interface ─────────────────────────────────────────────────────────
interface SectionThemeContextValue {
  activeSectionId: string;
  activeTheme: SectionTheme;
}

// ── Context ───────────────────────────────────────────────────────────────────
const SectionThemeContext = createContext<SectionThemeContextValue>({
  activeSectionId: "hero",
  activeTheme: SECTION_THEMES["hero"],
});

// ── CSS Variable Updater ──────────────────────────────────────────────────────
// Applies theme as CSS custom properties on <html> — enabling pure-CSS transitions.
function applyCSSTheme(theme: SectionTheme) {
  const root = document.documentElement;
  root.style.setProperty("--section-bg-from", theme.bgFrom);
  root.style.setProperty("--section-bg-via", theme.bgVia);
  root.style.setProperty("--section-bg-to", theme.bgTo);
  root.style.setProperty("--section-accent", theme.accent);
  root.style.setProperty("--section-accent-rgb", theme.accentRgb);
  root.style.setProperty("--section-glow", theme.glowColor);
  root.setAttribute("data-section", theme.id);
}

// ── Provider ──────────────────────────────────────────────────────────────────
export function SectionThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeSectionId, setActiveSectionId] = useState<string>("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    // Find the entry with the largest intersection ratio that crosses threshold
    let bestEntry: IntersectionObserverEntry | null = null;
    let bestRatio = 0;

    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
        bestRatio = entry.intersectionRatio;
        bestEntry = entry;
      }
    }

    if (bestEntry) {
      const targetEl = (bestEntry as IntersectionObserverEntry).target as HTMLElement;
      const sectionId = targetEl.dataset.sectionTheme;
      if (sectionId && SECTION_THEMES[sectionId]) {
        setActiveSectionId(sectionId);
        applyCSSTheme(SECTION_THEMES[sectionId]);
      }
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: [0.2, 0.4, 0.6],
      rootMargin: "-80px 0px -20% 0px",
    });

    // Observe all registered sections
    const sections = document.querySelectorAll("[data-section-theme]");
    sections.forEach((section) => observerRef.current!.observe(section));

    // Apply initial theme
    applyCSSTheme(SECTION_THEMES["hero"]);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [handleIntersection]);

  const activeTheme = SECTION_THEMES[activeSectionId] ?? SECTION_THEMES["hero"];

  return (
    <SectionThemeContext.Provider value={{ activeSectionId, activeTheme }}>
      {children}
    </SectionThemeContext.Provider>
  );
}

// ── Consumer Hook ─────────────────────────────────────────────────────────────
export function useSectionTheme(): SectionThemeContextValue {
  return useContext(SectionThemeContext);
}
