"use client";

import { motion } from "framer-motion";
import { Award, Users, Compass, ShieldCheck, Check, Sparkles, BookOpen, Heart } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { heroMedia, siteConfig } from "@/data";

const pillars = [
  {
    icon: BookOpen,
    title: "CBSE Academic Rigor",
    description:
      "A comprehensive curriculum designed to spark intellectual curiosity, critical inquiry, and competitive exam readiness.",
    stat: "100% CBSE Pass Rate",
  },
  {
    icon: Heart,
    title: "The Modern Gurukul Spirit",
    description:
      "Balancing time-tested Indian values of humility and discipline with progressive international pedagogy.",
    stat: "Pastoral Mentorship",
  },
  {
    icon: Compass,
    title: "Olympic & Modern Sports",
    description:
      "16+ sports disciplines with dedicated national coaches, equestrian arenas, shooting ranges, and turf pitches.",
    stat: "16+ Sports Disciplines",
  },
  {
    icon: Users,
    title: "Global University Pathway",
    description:
      "Personalized career counseling, SAT/JEE/NEET mentoring, and an alumni network across premier global universities.",
    stat: "5,000+ Global Alumni",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      data-section-theme="about"
      className="py-16 lg:py-20 text-slate-100 relative overflow-hidden"
    >
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={12} />
              <span>About Tulas International School</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              The Modern Gurukul Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                Potential Meets Purpose
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Founded under the aegis of the Rishabh Educational Trust, TIS is envisioned
              as a sanctuary of learning in Dehradun. We believe that school is not merely
              about classrooms and textbooks — it is an ecosystem where character is forged,
              passions are ignited, and lifelong friendships are born.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Story & Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Campus Story & Official Quote (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                <img
                  src={heroMedia.classroom}
                  alt="Students at Tulas International School"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold">
                    Class IV to XII Co-Ed Boarding
                  </span>
                  <p className="text-white font-bold text-lg mt-2">
                    Experiential Learning in the Lap of Nature
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Authentic Quote from TIS */}
            <ScrollReveal delay={0.25}>
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 relative">
                <div className="text-amber-400 text-5xl font-serif leading-none mb-3">“</div>
                <p className="text-slate-200 text-base sm:text-lg italic leading-relaxed mb-4">
                  We feel supported in what we do and nudged further to do more. At Tulas,
                  we believe in bringing out the best in every student — whether it's
                  academics, music, sports, art, or drama. School isn't just about lessons,
                  it's about endless opportunities waiting to be explored.
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-black text-slate-950 text-sm">
                    TIS
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">The Tulas Philosophy</p>
                    <p className="text-xs text-amber-400 font-medium">Character · Courage · Compassion</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 Core Pillars (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={0.1 * i}>
                <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <pillar.icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <Check size={14} className="shrink-0" />
                    <span>{pillar.stat}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
