"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Compass,
  Calculator,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data";

interface QuickActionDockProps {
  onOpenTour: () => void;
  onOpenCalculator: () => void;
}

export default function QuickActionDock({ onOpenTour, onOpenCalculator }: QuickActionDockProps) {
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling down 200px
      setShowDock(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAdmissions = () => {
    const el = document.querySelector("#admissions");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {showDock && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-950/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 text-white"
        >
          {/* Quick Apply Button */}
          <button
            onClick={scrollToAdmissions}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles size={12} />
            <span>Admissions 2025</span>
          </button>

          {/* Virtual Tour Trigger */}
          <button
            onClick={onOpenTour}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-slate-800 text-slate-200 hover:text-amber-400 text-xs font-semibold transition-colors cursor-pointer"
            title="Open 360° Virtual Tour"
          >
            <Compass size={14} className="text-amber-400" />
            <span className="hidden md:inline">360° Tour</span>
          </button>

          {/* Fee Estimator Trigger */}
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-slate-800 text-slate-200 hover:text-amber-400 text-xs font-semibold transition-colors cursor-pointer"
            title="Tuition & Fee Calculator"
          >
            <Calculator size={14} className="text-amber-400" />
            <span className="hidden md:inline">Fee Estimator</span>
          </button>

          {/* Direct Phone Call */}
          <a
            href={`tel:${siteConfig.helpline}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-slate-800 text-slate-200 hover:text-amber-400 text-xs font-semibold transition-colors"
            title="Call Helpline"
          >
            <Phone size={13} className="text-emerald-400" />
            <span className="hidden lg:inline">{siteConfig.helpline}</span>
          </a>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
            title="Back to Top"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
