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
  GraduationCap,
} from "lucide-react";
import { useTheme } from "next-themes";
import { siteConfig } from "@/data";

interface NavbarProps {
  onOpenTour?: () => void;
  onOpenEnquire?: () => void;
}

export default function Navbar({ onOpenTour, onOpenEnquire }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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

  const navItems = [
    { label: "About TIS", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Boarding Life", href: "#boarding" },
    { label: "Sports (16+)", href: "#sports" },
    { label: "Rankings", href: "#rankings" },
    { label: "Personalities", href: "#personalities" },
    { label: "Admissions", href: "#admissions" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* ── Top Bar (Authentic TIS Helpline & Enquire) ─────────────── */}
      <div className="bg-[#b90124] text-white py-1.5 px-4 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <a
              href="tel:+91-9837983791"
              className="flex items-center gap-1.5 hover:underline tracking-wider text-[11px] sm:text-xs"
            >
              <Phone size={12} className="fill-current shrink-0" />
              <span>ADMISSIONS HELPLINE NO. +91-9837983791</span>
            </a>
            <span className="hidden md:inline opacity-75">· Dehradun, Uttarakhand</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onOpenTour && (
              <button
                onClick={onOpenTour}
                className="hidden sm:flex items-center gap-1 text-[11px] hover:text-[#ffd6de] transition-colors cursor-pointer"
              >
                <Compass size={12} />
                <span>360° Virtual Tour</span>
              </button>
            )}

            <button
              onClick={() => {
                if (onOpenEnquire) onOpenEnquire();
                else navTo("#admissions");
              }}
              className="px-2.5 py-0.5 rounded bg-white text-[#b90124] text-[11px] font-bold hover:bg-[#fff0f3] transition-colors cursor-pointer"
            >
              Enquire Now
            </button>

            <button
              onClick={toggleTheme}
              className="p-1 rounded text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={12} /> : <Moon size={12} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ───────────────────────────────────── */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-[#0a0406]/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-black/5 dark:border-white/5 py-2.5"
            : "bg-white/85 dark:bg-[#0a0406]/85 backdrop-blur-sm border-b border-black/5 dark:border-white/5 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* TIS Crest & Branding */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                navTo("#hero");
              }}
              className="flex items-center gap-3 group cursor-pointer shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b90124] to-[#800018] flex items-center justify-center text-white font-black shadow-md shadow-[#b90124]/30 group-hover:scale-105 transition-transform">
                <GraduationCap size={22} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#1c1c1c] dark:text-white">
                    TULAS
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#b90124]/10 text-[#b90124] dark:bg-[#b90124]/20 dark:text-[#ff6b87] uppercase tracking-wider">
                    School
                  </span>
                </div>
                <p className="text-[10px] text-[#5f5f5f] dark:text-slate-400 font-medium">
                  The Modern Gurukul · Dehradun
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => navTo(item.href)}
                  className="px-3 py-2 rounded-lg text-xs font-bold text-[#2d2d2d] dark:text-slate-200 hover:text-[#b90124] dark:hover:text-[#ff6b87] hover:bg-[#b90124]/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Action: Apply Now in TIS Crimson */}
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={siteConfig.admissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl bg-[#b90124] hover:bg-[#96001c] text-white text-xs sm:text-sm font-black tracking-wide shadow-md shadow-[#b90124]/30 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>APPLY NOW</span>
                <ArrowRight size={13} />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-[#1c1c1c] dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 dark:bg-[#0a0406]/98 backdrop-blur-xl border-b border-black/10 dark:border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => navTo(item.href)}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-[#1c1c1c] dark:text-white hover:bg-[#b90124]/10 hover:text-[#b90124]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
