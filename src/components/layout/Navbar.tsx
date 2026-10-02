"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, Sun, Moon, Compass, ArrowRight, GraduationCap,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useSectionTheme, SECTION_THEMES } from "@/contexts/SectionThemeContext";
import { siteConfig, navLinks } from "@/data";

import AnnouncementTicker from "@/components/layout/AnnouncementTicker";

interface NavbarProps {
  onOpenTour?: () => void;
}

export default function Navbar({ onOpenTour }: NavbarProps) {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted,  setMounted]  = useState(false);
  const { theme, setTheme } = useTheme();
  const { activeTheme, activeSectionId } = useSectionTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const navTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementTicker />
      {/* ── Main Navigation ─────────────────────────────────────── */}
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(4,7,18,0.92)" : "rgba(4,7,18,0.70)",
          boxShadow: scrolled
            ? `0 1px 0 rgba(${activeTheme.accentRgb},0.15), 0 4px 30px rgba(0,0,0,0.4)`
            : "none",
        }}
        transition={{ duration: 0.35 }}
        className="backdrop-blur-xl border-b border-white/5 px-4 sm:px-6 lg:px-8 py-3"
        style={{ borderBottomColor: scrolled ? `rgba(${activeTheme.accentRgb},0.15)` : "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Brand */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); navTo("#hero"); }}
            className="flex items-center gap-2.5 group cursor-pointer shrink-0">
            <motion.div
              animate={{ boxShadow: `0 0 16px rgba(${activeTheme.accentRgb},0.25)` }}
              transition={{ duration: 0.6 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black shadow-md"
              style={{ background: `linear-gradient(135deg, ${activeTheme.accent}, color-mix(in srgb, ${activeTheme.accent} 70%, white))` }}
            >
              <GraduationCap size={20} className="text-slate-950" />
            </motion.div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-[15px] tracking-tight text-white group-hover:text-accent transition-colors">
                  TULAS
                </span>
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider transition-all duration-600"
                  style={{ color: activeTheme.accent, borderColor: `rgba(${activeTheme.accentRgb},0.35)`, background: `rgba(${activeTheme.accentRgb},0.10)` }}
                >
                  School
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">
                International Boarding · Dehradun
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = `#${activeSectionId}` === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => navTo(link.href)}
                  className="relative px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer group"
                  style={{ color: isActive ? activeTheme.accent : "#94a3b8" }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: `rgba(${activeTheme.accentRgb},0.10)` }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Section Indicator Pill */}
            <span
              className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all duration-600"
              style={{ color: activeTheme.accent, borderColor: `rgba(${activeTheme.accentRgb},0.25)`, background: `rgba(${activeTheme.accentRgb},0.08)` }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: activeTheme.accent }} />
              {activeTheme.label}
            </span>

            {/* Virtual Tour */}
            <button
              onClick={onOpenTour}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
              style={{ "--hover-bg": `rgba(${activeTheme.accentRgb},0.10)` } as React.CSSProperties}
            >
              <Compass size={13} style={{ color: activeTheme.accent }} />
              <span>Tour</span>
            </button>

            {/* Phone */}
            <a href={`tel:${siteConfig.helpline}`}
               className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <Phone size={13} style={{ color: activeTheme.accent }} />
              <span className="hidden lg:inline">{siteConfig.helpline}</span>
            </a>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            )}

            {/* Apply CTA */}
            <a
              href={siteConfig.admissionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-950 text-xs font-black shadow-md transition-all hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: `linear-gradient(135deg, ${activeTheme.accent}, color-mix(in srgb, ${activeTheme.accent} 80%, white))`,
                boxShadow: `0 4px 14px rgba(${activeTheme.accentRgb},0.30)`,
                transition: "background 600ms ease, box-shadow 200ms ease, transform 200ms ease",
              }}
            >
              <span>Apply Now</span>
              <ArrowRight size={12} />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile Drawer ───────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-slate-950/97 backdrop-blur-2xl border-b overflow-hidden"
            style={{ borderColor: `rgba(${activeTheme.accentRgb},0.15)` }}
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => navTo(link.href)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer hover:bg-white/5"
                  style={{ color: `#${activeSectionId}` === link.href ? activeTheme.accent : "#94a3b8" }}
                >
                  {link.label}
                  <span className="text-[10px] text-slate-600">{link.desc}</span>
                </button>
              ))}

              <div className="pt-4 border-t grid grid-cols-2 gap-2"
                   style={{ borderColor: `rgba(${activeTheme.accentRgb},0.12)` }}>
                <a
                  href={`tel:${siteConfig.helpline}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/5"
                >
                  <Phone size={13} style={{ color: activeTheme.accent }} />
                  Call Us
                </a>
                <a
                  href={siteConfig.admissionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-slate-950 text-xs font-bold"
                  style={{ background: activeTheme.accent }}
                >
                  Apply Online <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
