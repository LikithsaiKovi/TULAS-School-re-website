"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";

const SPORTS_ITEMS = [
  { name: "Horse Riding", category: "Equestrian", desc: "2.5-acre arena with 14 thoroughbred horses & certified trainers", icon: "🏇" },
  { name: "Archery Range", category: "Olympic", desc: "Professional outdoor & indoor Olympic target range", icon: "🏹" },
  { name: "Shooting Range", category: "Target", desc: "10m electronic air rifle & pistol indoor range", icon: "🎯" },
  { name: "Swimming", category: "Aquatics", desc: "Half-Olympic heated pool with certified life guards", icon: "🏊" },
  { name: "Lawn Tennis", category: "Racquet", desc: "Synthetic all-weather floodlit courts", icon: "🎾" },
  { name: "Squash", category: "Racquet", desc: "Glass-back international dimension wooden courts", icon: "🏸" },
  { name: "Badminton", category: "Indoor", desc: "4 wooden courts with professional rubberized grip", icon: "🏸" },
  { name: "Cricket Academy", category: "Team", desc: "Full pitch with turf nets and bowling machines", icon: "🏏" },
  { name: "Football Ground", category: "Field", desc: "Full-size lush Bermuda grass pitch", icon: "⚽" },
  { name: "Basketball", category: "Court", desc: "Floodlit synthetic courts with spring hoops", icon: "🏀" },
  { name: "Volleyball", category: "Court", desc: "Outdoor sand & clay courts", icon: "🏐" },
  { name: "Taekwondo", category: "Martial Arts", desc: "Black-belt certified coaches for self-discipline", icon: "🥋" },
  { name: "Hockey", category: "Field", desc: "AstroTurf standard multi-purpose sports surface", icon: "🏑" },
  { name: "Cycling Track", category: "Outdoor", desc: "Perimeter eco-trail around the 22-acre campus", icon: "🚴" },
  { name: "Table Tennis", category: "Indoor", desc: "Stiga tables in indoor air-cooled sports arena", icon: "🏓" },
  { name: "Billiards", category: "Indoor", desc: "Championship snooker & pool tables in recreation club", icon: "🎱" },
];

export default function SportsSection() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Equestrian", "Olympic", "Racquet", "Team", "Martial Arts"];
  const filtered = filter === "All"
    ? SPORTS_ITEMS
    : SPORTS_ITEMS.filter((s) => s.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="sports" className="py-20 bg-white dark:bg-[#0c0507] text-[#1c1c1c] dark:text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Authentic Header from tis.edu.in */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#b90124] tracking-tight">
              Sports ?
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-2 leading-tight">
              It&apos;s not just a <span className="text-[#007a83] dark:text-[#60bab1]">facility.</span> At Tulas it&apos;s the{" "}
              <span className="text-[#007a83] dark:text-[#60bab1]">foundation!</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5f5f5f] dark:text-slate-300 mt-4 leading-relaxed">
              <strong className="text-[#b90124] font-bold">16+ sports</strong> curated to bring joy, resilience, and lifelong discipline to your child&apos;s life.
            </p>
          </ScrollReveal>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === c
                    ? "bg-[#b90124] text-white shadow-md shadow-[#b90124]/30"
                    : "bg-slate-100 dark:bg-slate-800 text-[#5f5f5f] dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* 16 Sports Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((sport, i) => (
            <ScrollReveal key={sport.name} delay={(i % 4) * 0.08}>
              <div className="bg-[#f8f5f0] dark:bg-slate-900/80 rounded-2xl p-5 border border-black/5 dark:border-white/5 hover:border-[#b90124]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    {sport.icon}
                  </div>
                  <div className="text-[10px] font-extrabold text-[#007a83] dark:text-[#60bab1] uppercase tracking-wider mb-1">
                    {sport.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#1c1c1c] dark:text-white">
                    {sport.name}
                  </h3>
                  <p className="text-xs text-[#5f5f5f] dark:text-slate-400 mt-2 leading-relaxed">
                    {sport.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-bold text-[#b90124]">
                  <span>NIS Coaching</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
