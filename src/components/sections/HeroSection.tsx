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
  Play,
  Star,
} from "lucide-react";
import { siteConfig, keyStats, heroMedia } from "@/data";
import { CountUp } from "@/components/animation/CountUp";
import { MagneticButton } from "@/components/animation/MagneticButton";
import { SpotlightCard } from "@/components/tech/SpotlightCard";

const ROTATING_WORDS = ["Excellence.", "Character.", "Leadership.", "Ambition.", "Innovation."];

interface HeroSectionProps {
  onOpenTour?: () => void;
  onOpenCalculator?: () => void;
}

export default function HeroSection({ onOpenTour, onOpenCalculator }: HeroSectionProps) {
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
      data-section-theme="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 text-white overflow-hidden"
    >
      {/* ─── Ambient Glow Backgrounds ─────────────────────────────── */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ─── Left Column: Headline & Value Propositions (7 cols) ─── */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Accreditation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold shadow-inner"
            >
              <Trophy size={13} className="text-amber-400 shrink-0" />
              <span>Ranked #1 Co-Ed Boarding School in Dehradun</span>
              <span className="w-1 h-1 rounded-full bg-amber-400 hidden sm:inline" />
              <span className="text-slate-300 hidden sm:inline">CBSE Affiliation 2130025</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Nurturing Global Minds, Inspiring{" "}
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 transition-all duration-300 min-w-[200px]">
                  {ROTATING_WORDS[wordIndex]}
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl"
            >
              Set amidst a serene 22-acre campus in the Himalayan foothills of Dehradun,
              TIS offers a modern Gurukul for Class IV to XII.
              Combining CBSE academic distinction, 16+ sports disciplines, and compassionate pastoral care.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <MagneticButton strength={0.25}>
                <a
                  href={siteConfig.admissionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Apply for Admissions 2025–26</span>
                  <ArrowRight size={15} />
                </a>
              </MagneticButton>

              {onOpenTour ? (
                <button
                  type="button"
                  onClick={onOpenTour}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/40 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  <Compass size={15} className="text-amber-400" />
                  <span>360° Virtual Campus Tour</span>
                </button>
              ) : (
                <a
                  href={siteConfig.virtualTourUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/40 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200"
                >
                  <Compass size={15} className="text-amber-400" />
                  <span>360° Virtual Campus Tour</span>
                </a>
              )}
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800/80"
            >
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 size={15} className="text-amber-400 shrink-0" />
                <span>22-Acre Green Campus</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                <span>24/7 Monitored Safe Hostels</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Trophy size={15} className="text-amber-400 shrink-0" />
                <span>16+ Olympic & Modern Sports</span>
              </div>
            </motion.div>

          </div>

          {/* ─── Right Column: Visual Showcase inside SpotlightCard (5 cols) ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <SpotlightCard className="p-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950">
                <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                  <img
                    src={heroMedia.mainCampus}
                    alt="Tulas International School Campus Dehradun"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                </div>

                {/* Floating Badge: Top Right */}
                <div className="absolute top-3.5 right-3.5 bg-slate-950/85 backdrop-blur-md border border-amber-400/30 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white">#1 Boarding in UK</span>
                </div>

                {/* Floating Badge: Bottom Sports */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 shadow-xl flex items-center justify-between">
                  <div>
                    <div className="text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-0.5">
                      Equestrian & 16+ Sports
                    </div>
                    <p className="text-xs text-slate-300">
                      Horse riding, shooting, swimming & all-round coaching
                    </p>
                  </div>
                  <span className="text-2xl shrink-0">🏇</span>
                </div>
              </div>

              {/* Quick Inquire Pill */}
              <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xs">
                    CBSE
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Admissions Open (IV to XII)</p>
                    <p className="text-[10px] text-slate-400">Day & Residential Boarding</p>
                  </div>
                </div>
                {onOpenCalculator ? (
                  <button
                    type="button"
                    onClick={onOpenCalculator}
                    className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold hover:bg-amber-300 transition-colors shrink-0 cursor-pointer"
                  >
                    Fee Estimator
                  </button>
                ) : (
                  <a
                    href="#admissions"
                    className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold hover:bg-amber-300 transition-colors shrink-0"
                  >
                    Inquire Now
                  </a>
                )}
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

        {/* ─── Key Stats Ribbon with 60fps CountUp ─── */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { target: 35, suffix: "+", label: "Years of Educational Legacy" },
              { target: 22, suffix: " Acres", label: "Green Campus in Doon Valley" },
              { target: 16, suffix: "+", label: "Sports Facilities with Coaches" },
              { target: 8, prefix: "", suffix: ":1", label: "Student-to-Teacher Ratio" },
              { target: 100, suffix: "%", label: "CBSE Board Examination Pass Rate" },
              { target: 5000, suffix: "+", label: "Distinguished Alumni Worldwide" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 * i }}
                className="py-3.5 px-3 rounded-2xl bg-slate-900/70 border border-slate-800/80 text-center hover:border-amber-500/40 hover:bg-slate-900 transition-all duration-200"
              >
                <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight leading-none mb-1.5">
                  <CountUp
                    to={stat.target}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                    duration={1600 + i * 150}
                  />
                </div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
