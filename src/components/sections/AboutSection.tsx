"use client";

import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0a0406] text-[#1c1c1c] dark:text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Authentic Secret to Making School Awesome statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007a83]/10 text-[#007a83] dark:text-[#60bab1] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>The TIS Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              At Tulas, we always ask, <br className="hidden sm:inline" />
              <span className="text-[#b90124]">“What&apos;s the secret to making school awesome?”</span>
            </h2>
            <p className="text-base sm:text-xl text-[#404040] dark:text-slate-300 mt-6 leading-relaxed">
              The secret to making one&apos;s school experience truly unforgettable? It&apos;s all about making learning feel like an adventure — where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don&apos;t just learn — they grow, explore, and shape their own futures.
            </p>
            <div className="mt-4 text-xl sm:text-2xl font-black text-[#007a83] dark:text-[#60bab1]">
              There, we cracked it!
            </div>
          </ScrollReveal>
        </div>

        {/* 2-Column Authentic Quotes Cards from tis.edu.in */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <ScrollReveal delay={0.1}>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#f8f5f0] dark:bg-slate-900 border border-black/5 dark:border-white/5 flex flex-col justify-between h-full shadow-sm hover:shadow-xl transition-all">
              <div className="space-y-4">
                <span className="text-4xl text-[#b90124] font-serif">“</span>
                <h3 className="text-2xl font-black text-[#1c1c1c] dark:text-white leading-snug">
                  We feel supported in what we do and nudged further to do more
                </h3>
                <p className="text-sm text-[#5f5f5f] dark:text-slate-400 leading-relaxed">
                  At Tulas, we believe in bringing out the best in every student — whether it&apos;s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn&apos;t just about lessons, it&apos;s about endless opportunities waiting to be explored.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#b90124]/10 text-[#b90124] font-black flex items-center justify-center text-sm">
                  TIS
                </div>
                <div>
                  <div className="text-xs font-bold">Faculty & Pastoral Care</div>
                  <div className="text-[10px] text-[#5f5f5f]">Nurturing Mentorship</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#f8f5f0] dark:bg-slate-900 border border-black/5 dark:border-white/5 flex flex-col justify-between h-full shadow-sm hover:shadow-xl transition-all">
              <div className="space-y-4">
                <span className="text-4xl text-[#007a83] font-serif">“</span>
                <h3 className="text-2xl font-black text-[#1c1c1c] dark:text-white leading-snug">
                  Tulas helped me thrive and become the best version of myself
                </h3>
                <p className="text-sm text-[#5f5f5f] dark:text-slate-400 leading-relaxed">
                  When you choose a school that chooses you, it becomes more than just a place to learn — it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#007a83]/10 text-[#007a83] font-black flex items-center justify-center text-sm">
                  TIS
                </div>
                <div>
                  <div className="text-xs font-bold">Student Life & Community</div>
                  <div className="text-[10px] text-[#5f5f5f]">The Modern Gurukul Spirit</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
