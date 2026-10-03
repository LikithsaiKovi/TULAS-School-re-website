"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Trophy,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/data";
import { CountUp } from "@/components/animation/CountUp";

// Signature TIS Floating Activity Bubbles (from tis.edu.in)
const TIS_BUBBLES = [
  { name: "Shooting", icon: "🎯", color: "from-rose-500 to-red-600", delay: 0 },
  { name: "Horse Riding", icon: "🏇", color: "from-amber-500 to-amber-700", delay: 0.2 },
  { name: "Swimming", icon: "🏊", color: "from-teal-400 to-cyan-600", delay: 0.4 },
  { name: "Archery", icon: "🏹", color: "from-emerald-500 to-green-700", delay: 0.6 },
  { name: "Yoga", icon: "🧘", color: "from-purple-500 to-indigo-600", delay: 0.8 },
  { name: "Karate", icon: "🥋", color: "from-orange-500 to-red-500", delay: 1.0 },
  { name: "Performing Arts", icon: "💃", color: "from-pink-500 to-rose-600", delay: 1.2 },
  { name: "AI & Robotics", icon: "💻", color: "from-blue-500 to-indigo-700", delay: 1.4 },
];

interface HeroSectionProps {
  onOpenTour?: () => void;
  onOpenCalculator?: () => void;
}

export default function HeroSection({ onOpenTour, onOpenCalculator }: HeroSectionProps) {
  const [activeBubble, setActiveBubble] = useState<string>("Horse Riding");

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden flex flex-col justify-between"
    >
      {/* ── Subtle Background Accent ────────────────────────────────── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#b90124]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#60bab1]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ── Left Column: Authentic Slogan & Copy (7 cols) ─────────── */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Accreditation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b90124]/10 border border-[#b90124]/20 text-[#b90124] dark:text-[#ff6b87] text-xs font-bold uppercase tracking-wider"
            >
              <Trophy size={13} className="shrink-0" />
              <span>Ranked #1 Boarding School in Dehradun</span>
              <span className="w-1 h-1 rounded-full bg-[#b90124]" />
              <span className="text-[#5f5f5f] dark:text-slate-400 font-medium">CBSE 2130025</span>
            </motion.div>

            {/* Authentic TIS Headline: LET'S DO IT with Tulas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-1"
            >
              <p className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#5f5f5f] dark:text-slate-400">
                Welcome to The Modern Gurukul
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black text-[#1c1c1c] dark:text-white tracking-tight leading-[1.08]">
                LET&apos;S DO <span className="italic text-[#007a83] dark:text-[#60bab1]">it</span>{" "}
                <br className="hidden sm:inline" />
                <span className="relative inline-block">
                  with Tulas
                  {/* Handwritten Golden Scribble SVG from tis.edu.in */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#c09d59]"
                    viewBox="0 0 268 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50 6 112 8 154 5C196 2 266 4 266 4C180 7 80 8 30 11C115 11 240 6 240 6"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Official TIS mission copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[#404040] dark:text-slate-300 leading-relaxed max-w-xl"
            >
              Tulas International School was established in 2012 under the aegis of{" "}
              <strong className="text-[#1c1c1c] dark:text-white font-semibold">Rishabh Educational Trust</strong>{" "}
              to impart education through seamless opportunities. Nestled in a 22-acre pollution-free campus in Dehradun for Class IV to XII.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href={siteConfig.admissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#b90124] hover:bg-[#96001c] text-white font-black text-sm shadow-xl shadow-[#b90124]/30 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>APPLY FOR ADMISSIONS 2025–26</span>
                <ArrowRight size={16} />
              </a>

              {onOpenTour && (
                <button
                  type="button"
                  onClick={onOpenTour}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-[#b90124]/20 hover:border-[#b90124] text-[#1c1c1c] dark:text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Compass size={16} className="text-[#b90124]" />
                  <span>360° Virtual Campus Tour</span>
                </button>
              )}
            </motion.div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-black/5 dark:border-white/10 text-xs text-[#5f5f5f] dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#007a83] dark:text-[#60bab1] shrink-0" />
                <span>22-Acre Pollution Free</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#b90124] shrink-0" />
                <span>6:1 Student-Teacher Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy size={15} className="text-[#c09d59] shrink-0" />
                <span>16+ Olympic Sports</span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Interactive Floating Activity Showcase (5 cols) ─── */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-br from-[#90ccd0]/40 via-[#60bab1]/20 to-[#90ccd0]/30 dark:from-slate-900/80 dark:to-slate-950 p-6 sm:p-8 rounded-3xl border border-[#007a83]/20 shadow-2xl relative backdrop-blur-md">
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#007a83] dark:text-[#60bab1]">
                    Interactive Campus Life
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1c1c1c] dark:text-white">
                    Beyond Academics
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#b90124] text-white flex items-center justify-center font-bold text-xs shadow-md">
                  16+
                </div>
              </div>

              {/* The Signature Interactive Bubbles Grid */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-6">
                {TIS_BUBBLES.map((b) => {
                  const isSelected = activeBubble === b.name;
                  return (
                    <button
                      key={b.name}
                      onClick={() => setActiveBubble(b.name)}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-2xl transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-white dark:bg-slate-800 shadow-xl scale-110 border-2 border-[#b90124]"
                          : "bg-white/60 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:scale-105 border border-transparent"
                      }`}
                    >
                      <span className="text-2xl sm:text-3xl mb-1">{b.icon}</span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-[#1c1c1c] dark:text-slate-200 text-center leading-tight">
                        {b.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Highlighted Activity Detail Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 shadow-md border border-black/5 dark:border-white/5 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-extrabold text-[#b90124] uppercase tracking-wider">
                    Featured Discipline
                  </div>
                  <div className="text-sm font-black text-[#1c1c1c] dark:text-white">
                    {activeBubble} Academy
                  </div>
                  <p className="text-[11px] text-[#5f5f5f] dark:text-slate-300">
                    Coached daily by NIS & Olympic certified instructors
                  </p>
                </div>
                <a
                  href="#sports"
                  className="px-3 py-1.5 rounded-xl bg-[#b90124] text-white text-xs font-bold hover:bg-[#96001c] transition-colors shrink-0"
                >
                  Explore
                </a>
              </div>

              {/* Quick Fee Estimator Trigger */}
              {onOpenCalculator && (
                <button
                  onClick={onOpenCalculator}
                  className="w-full mt-3 py-2.5 px-4 rounded-xl bg-white/80 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 border border-[#007a83]/30 text-[#007a83] dark:text-[#60bab1] text-xs font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles size={14} />
                  <span>Calculate Fees & Merit Scholarships</span>
                  <ChevronRight size={14} />
                </button>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* ── Key Stats Strip with CountUp ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 pt-6 border-t border-black/5 dark:border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { target: 2012, prefix: "Est. ", suffix: "", label: "Rishabh Educational Trust" },
            { target: 22, suffix: " Acres", label: "Pollution Free Campus" },
            { target: 16, suffix: "+", label: "Olympic Sports Curated" },
            { target: 6, prefix: "", suffix: ":1", label: "Student-to-Teacher Ratio" },
            { target: 100, suffix: "%", label: "CBSE Board Pass Rate" },
            { target: 24, suffix: "/7", label: "Medical Assistance On-Campus" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="py-3 px-3 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-black/5 dark:border-white/10 text-center shadow-sm"
            >
              <div className="text-xl sm:text-2xl font-black text-[#b90124] dark:text-[#ff6b87] tracking-tight leading-none mb-1">
                <CountUp
                  to={stat.target}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                  duration={1500 + i * 150}
                />
              </div>
              <div className="text-[11px] text-[#5f5f5f] dark:text-slate-400 font-medium leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
