"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Utensils,
  HeartPulse,
  Shield,
  Clock,
  Sparkles,
  CheckCircle2,
  Compass,
} from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { boardingPillars, dailyRoutine, heroMedia, siteConfig } from "@/data";

export default function BoardingSection() {
  const [selectedRoutineIndex, setSelectedRoutineIndex] = useState(0);

  return (
    <section id="boarding" className="py-16 lg:py-20 bg-slate-900/60 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Home size={14} />
              <span>Residential & Pastoral Care</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
              A Safe, Nurturing Home Away From Home in the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                Doon Valley
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Boarding life at Tulas is built around warmth, camaraderie, and character.
              Surrounded by pine trees and clean mountain air, students learn self-reliance,
              forge lifelong friendships, and thrive under the guidance of resident Housemasters.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Pillars of Boarding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {boardingPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.08 * i}>
              <div className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 hover:bg-slate-900 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-amber-400/10 text-amber-400 text-[11px] font-bold uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 size={14} className="shrink-0" />
                  <span>{pillar.stat}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive "Day in the Life of a TIS Boarder" */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-2">
              DISCIPLINE & JOY
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              A Day in the Life of a TIS Boarder
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Our structured daily schedule balances academic focus, high-energy athletics, nutritious meals, and restful reflection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dailyRoutine.slice(0, 4).map((item, idx) => (
              <div
                key={item.time}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold mb-2">
                  <Clock size={13} />
                  <span>{item.time}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{item.label}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {dailyRoutine.slice(4).map((item) => (
              <div
                key={item.time}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold mb-2">
                  <Clock size={13} />
                  <span>{item.time}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{item.label}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
