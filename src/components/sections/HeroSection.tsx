"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Trophy,
  Play,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
} from "lucide-react";
import Image from "next/image";
import { siteConfig, keyStats, heroMedia } from "@/data";

const ROTATING_WORDS = ["Excellence.", "Character.", "Leadership.", "Innovation.", "Ambition."];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* ─── Ambient Glow Backgrounds ─────────────────────────────── */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ─── Left Column: Headline & Value Propositions (7 cols) ─── */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Accreditation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold shadow-inner"
            >
              <Trophy size={14} className="text-amber-400 shrink-0" />
              <span>Ranked #1 Co-Ed Boarding School in Dehradun</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 hidden sm:inline" />
              <span className="text-slate-300 hidden sm:inline">CBSE Affiliated</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Set amidst a serene 22-acre campus in the Himalayan foothills of Dehradun,
              Tulas International School offers a modern Gurukul experience for Class IV to XII.
              Combining CBSE academic rigor, 16+ sports disciplines, and compassionate pastoral care.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href={siteConfig.admissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Apply for Admissions 2025–26</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={siteConfig.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/40 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <Compass size={16} className="text-amber-400" />
                <span>360° Virtual Campus Tour</span>
              </a>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80"
            >
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                <span>22-Acre Serene Green Campus</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <span>24/7 Monitored Safe Hostels</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Trophy size={16} className="text-amber-400 shrink-0" />
                <span>16+ Olympic & Modern Sports</span>
              </div>
            </motion.div>

          </div>

          {/* ─── Right Column: Visual Campus Showcase & Interactive Card (5 cols) ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Image Card with Real Campus Photo */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/60 group bg-slate-900">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <img
                  src={heroMedia.mainCampus}
                  alt="Tulas International School Campus Dehradun"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating Badge 1: Top Right Rank */}
              <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md border border-amber-400/30 rounded-2xl px-3.5 py-2 shadow-lg flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white">#1 Boarding in UK</span>
              </div>

              {/* Floating Badge 2: Sports Highlight */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-xl flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-0.5">
                    <span>Equestrian & 16+ Sports</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Horse riding, shooting, swimming & all-round coaching
                  </p>
                </div>
                <span className="text-2xl shrink-0">🏇</span>
              </div>
            </div>

            {/* Quick Enquiry Sticky Card */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
                  CBSE
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Admissions Open (IV to XII)</p>
                  <p className="text-[11px] text-slate-400">Limited seats for Day & Boarders</p>
                </div>
              </div>
              <a
                href="#admissions"
                className="px-3.5 py-2 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold hover:bg-amber-300 transition-colors shrink-0"
              >
                Inquire Now
              </a>
            </div>

          </motion.div>

        </div>

        {/* ─── Key Stats Marquee / Ribbon (Full Width & Breathe) ──────── */}
        <div className="mt-16 pt-10 border-t border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center hover:border-amber-500/30 hover:bg-slate-900/90 transition-all duration-200"
              >
                <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium leading-tight">
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
