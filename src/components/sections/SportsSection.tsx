"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles, Check, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { sportsList, sportsCategories, heroMedia, siteConfig } from "@/data";

export default function SportsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSports =
    selectedCategory === "all"
      ? sportsList
      : sportsList.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="sports"
      data-section-theme="sports"
      className="py-16 lg:py-20 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Trophy size={14} />
              <span>Athletics & Physical Fitness</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Sports Isn't Just an Activity.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                It's Our Foundation.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300">
              16+ Olympic and modern sports curated to instill grit, stamina, and team spirit.
              Guided by nationally certified trainers, our athletes compete at district, state, and national CBSE meets.
            </p>
          </ScrollReveal>
        </div>

        {/* Visual Highlights: Equestrian & Aquatics (2 Visual Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-xl group">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={heroMedia.riding}
                alt="Equestrian Horse Riding Arena TIS Dehradun"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider">
                Signature Feature
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                Equestrian Academy & Riding Arenas
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Private stables, Thoroughbred horses & certified trainers for dressage and show jumping.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-xl group">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={heroMedia.sportsGround}
                alt="Olympic Standard Swimming and Sports at TIS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-black uppercase tracking-wider">
                Aquatics & Turf
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                Half-Olympic Swimming Pool & Cricket Turf
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                All-weather temperature regulated aquatic center with certified lifeguards and stroke coaches.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {sportsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sports Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSports.map((sport) => (
              <motion.div
                layout
                key={sport.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/40 hover:bg-slate-900 transition-all duration-200 group"
              >
                <div className="text-3xl mb-3">{sport.icon}</div>
                <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                  {sport.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sport.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
