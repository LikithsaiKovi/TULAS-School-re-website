"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Phone, Compass, MapPin, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { siteConfig } from "@/data";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-black uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            <span>Admissions Open 2025–26 · Class IV to XII</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6">
            Give Your Child the Wings to Excel & the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
              Roots to Belong
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Join families from across India and 12+ countries who have chosen Tulas International School for its transformative academic rigor, equestrian excellence, and wholesome residential life.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.admissionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 font-black text-sm sm:text-base shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Apply for Admissions Online</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={`tel:${siteConfig.helpline}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-bold text-sm sm:text-base transition-colors cursor-pointer"
            >
              <Phone size={16} className="text-amber-400" />
              <span>Call Helpline: {siteConfig.helpline}</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <ShieldCheck size={16} className="text-amber-400 shrink-0" />
            <span>CBSE Affiliated</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <MapPin size={16} className="text-amber-400 shrink-0" />
            <span>Dehradun, Uttarakhand</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <Compass size={16} className="text-amber-400 shrink-0" />
            <span>22-Acre Green Campus</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <Sparkles size={16} className="text-amber-400 shrink-0" />
            <span>Co-Ed Boarding & Day</span>
          </div>
        </div>

      </div>
    </section>
  );
}
