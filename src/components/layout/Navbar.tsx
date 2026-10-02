"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Sun,
  Moon,
  Compass,
  ArrowRight,
  Sparkles,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { useTheme } from "next-themes";
import { siteConfig, navLinks } from "@/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* ─── Top Notification & Info Ribbon ─────────────────────────── */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold text-[11px] shrink-0">
              <Sparkles size={11} /> Admissions 2025–26
            </span>
            <span className="hidden sm:inline text-slate-300">
              CBSE Co-Ed Boarding School (Classes IV to XII) · Dehradun
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:+919837983791"
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 font-medium transition-colors"
            >
              <Phone size={12} className="text-amber-400" />
              <span>{siteConfig.helpline}</span>
            </a>

            <a
              href={siteConfig.virtualTourUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Compass size={12} className="text-amber-400" />
              <span>Virtual Tour</span>
            </a>

            {/* Theme Toggle in top bar */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
                aria-label="Toggle dark/light theme"
                title="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ─── Main Glassmorphism Navigation Bar ──────────────────────── */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800/80 py-3"
            : "bg-slate-950/80 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* School Brand / Crest */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
                <GraduationCap size={24} className="text-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    TULAS
                  </span>
                  <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 uppercase tracking-wider">
                    School
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 tracking-wide font-medium">
                  International Boarding · Dehradun
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div className="flex items-center gap-3">
              <a
                href="#admissions"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#admissions");
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-200 border border-slate-700 hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200"
              >
                <span>Enquire</span>
              </a>

              <a
                href={siteConfig.admissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 text-xs sm:text-sm font-black shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <span>Apply Now</span>
                <ArrowRight size={14} />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile Dropdown Menu ───────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-500">{link.desc}</span>
                </button>
              ))}

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${siteConfig.helpline}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold"
                >
                  <Phone size={14} className="text-amber-400" />
                  Call Admissions
                </a>
                <a
                  href={siteConfig.admissionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20"
                >
                  Apply Online
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
