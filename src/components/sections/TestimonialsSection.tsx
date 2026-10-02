"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { testimonials, awards, siteConfig } from "@/data";

const placements = [
  "IIT Roorkee",
  "BITS Pilani",
  "Delhi University",
  "Columbia University",
  "Purdue University",
  "National Law School",
  "AIIMS",
  "King's College London",
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-900/50 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>Voices of TIS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Trusted by Discerning Parents &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                Cherished by Alumni
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300">
              Hear directly from parents and alumni whose journeys were shaped by the warmth, discipline, and opportunities of Tulas.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Testimonials & Awards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Interactive Testimonial Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative">
              <Quote size={40} className="text-amber-400/20 absolute top-8 right-8" />
              
              <div className="flex items-center gap-1.5 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                <span className="text-xs font-bold text-slate-400 ml-2">Verified Parent / Alumni Review</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">
                          {testimonials[currentIndex].author}
                        </h4>
                        <p className="text-xs text-amber-400 font-medium">
                          {testimonials[currentIndex].role} · {testimonials[currentIndex].city}
                        </p>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-800 text-[11px] font-bold text-slate-300">
                      {testimonials[currentIndex].highlight}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-800/80">
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex ? "w-8 bg-amber-400" : "w-2 bg-slate-700"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Awards & Honors (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 mb-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Award size={14} />
                <span>Accolades & Recognition</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Consistently Ranked Among India's Top Boarding Schools
              </h3>
            </div>

            {awards.map((award, i) => (
              <div
                key={award}
                className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/30 transition-colors flex items-center gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black text-xs shrink-0">
                  ★
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-200">
                  {award}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Global Placements Strip */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            <GraduationCap size={14} className="text-amber-400" />
            <span>Alumni Accepted into Premier Global & National Institutions</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-slate-300">
            {placements.map((p) => (
              <span key={p} className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                {p}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
