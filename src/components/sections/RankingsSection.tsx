"use client";

import { Trophy } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";

const RANKINGS = [
  {
    rank: "#1",
    location: "In Dehradun",
    source: "Co-Educational Boarding School in Dehradun",
    org: "Education Today",
  },
  {
    rank: "#2",
    location: "In Uttarakhand",
    source: "Co-Educational Boarding School in North India",
    org: "Education Today",
  },
  {
    rank: "#1",
    location: "In North India",
    source: "Co-Educational Boarding School in North India",
    org: "Outlook India",
  },
  {
    rank: "#4",
    location: "In India",
    source: "Co-Educational Boarding School in India",
    org: "Education Today",
  },
];

export default function RankingsSection() {
  return (
    <section id="rankings" className="py-16 sm:py-20 bg-[#f8f5f0] dark:bg-[#120609] border-y border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b90124]/10 text-[#b90124] dark:text-[#ff6b87] text-xs font-bold uppercase tracking-wider mb-3">
              <Trophy size={14} />
              <span>National Recognitions & Rankings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1c1c1c] dark:text-white tracking-tight">
              Celebrated as North India&apos;s Leading Boarding Institution
            </h2>
            <p className="text-sm text-[#5f5f5f] dark:text-slate-400 mt-2">
              Recognized independently by premier education surveys for academic rigor and pastoral excellence.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Official Crimson Square Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RANKINGS.map((item, i) => (
            <ScrollReveal key={item.location} delay={i * 0.1}>
              <div className="bg-[#b90124] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-xl shadow-[#b90124]/20 hover:scale-[1.03] transition-transform duration-300 min-h-[220px]">
                <div className="text-5xl sm:text-6xl font-black tracking-tight font-serif text-[#ffd6de]">
                  {item.rank}
                </div>
                
                <div className="my-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {item.location}
                  </h3>
                  <p className="text-xs text-white/90 mt-1 leading-relaxed">
                    {item.source}
                  </p>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-wider text-[#ffd6de] px-2.5 py-1 rounded-full bg-black/20">
                  {item.org}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
