"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Trophy,
  ShieldCheck,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { siteConfig, keyStats, heroMedia } from "@/data";

const ROTATING_WORDS = ["Excellence.", "Character.", "Leadership.", "Ambition.", "Innovation."];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[900px] flex flex-col justify-between pt-24 lg:pt-28 pb-4 sm:pb-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* ─── Ambient Glow Backgrounds ─────────────────────────────── */}
      <div className="absolute top-12 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ─── Left Column: Headline & Value Propositions (7 cols) ─── */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Accreditation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold shadow-inner"
            >
              <Trophy size={13} className="text-amber-400 shrink-0" />
              <span>Ranked #1 Co-Ed Boarding School in Dehradun</span>
              <span className="w-1 h-1 rounded-full bg-amber-400 hidden sm:inline" />
              <span className="text-slate-300 hidden sm:inline">CBSE Affiliation 2130025</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black tracking-tight leading-[1.12] text-white">
                Nurturing Global Minds, Inspiring{" "}
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 transition-all duration-300 min-w-[180px]">
                  {ROTATING_WORDS[wordIndex]}
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-xl"
            >
              Set amidst a serene 22-acre campus in the Himalayan foothills of Dehradun,
              TIS offers a modern Gurukul for Class IV to XII.
              Combining CBSE academic distinction, 16+ sports disciplines, and compassionate pastoral care.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href={siteConfig.admissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Apply for Admissions 2025–26</span>
                <ArrowRight size={14} />
              </a>

              <a
                href={siteConfig.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/40 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200"
              >
                <Compass size={14} className="text-amber-400" />
                <span>360° Virtual Campus Tour</span>
              </a>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-slate-800/80"
            >
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
                <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                <span>22-Acre Green Campus</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                <span>24/7 Monitored Safe Hostels</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
                <Trophy size={14} className="text-amber-400 shrink-0" />
                <span>16+ Olympic & Modern Sports</span>
              </div>
            </motion.div>

          </div>

          {/* ─── Right Column: Visual Campus Showcase (5 cols) ───────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Photo Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-900">
              <div className="relative h-56 sm:h-64 lg:h-64 xl:h-72 w-full overflow-hidden">
                <img
                  src={heroMedia.mainCampus}
                  alt="Tulas International School Campus Dehradun"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating Badge: Top Right */}
              <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md border border-amber-400/30 rounded-xl px-2.5 py-1.5 shadow-lg flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold text-white">#1 Boarding in UK</span>
              </div>

              {/* Floating Badge: Bottom Sports */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                    Equestrian & 16+ Sports
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Horse riding, shooting, swimming & all-round coaching
                  </p>
                </div>
                <span className="text-xl shrink-0">🏇</span>
              </div>
            </div>

            {/* Quick Inquire Pill */}
            <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xs">
                  CBSE
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Admissions Open (IV to XII)</p>
                  <p className="text-[10px] text-slate-400">Day & Residential Boarding</p>
                </div>
              </div>
              <a
                href="#admissions"
                className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 text-[11px] font-bold hover:bg-amber-300 transition-colors shrink-0"
              >
                Inquire Now
              </a>
            </div>

          </motion.div>

        </div>
      </div>

      {/* ─── Key Stats Ribbon (Directly Inside First Fold for Laptops) ─── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 border-t border-slate-800/60">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {keyStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.04 * i }}
              className="py-2 px-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 text-center hover:border-amber-500/30 transition-all duration-150"
            >
              <div className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-black text-amber-400 tracking-tight leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-tight truncate">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
