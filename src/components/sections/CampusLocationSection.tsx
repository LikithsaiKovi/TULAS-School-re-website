"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Plane,
  Train,
  Mountain,
  Trees,
  Navigation,
  Compass,
  ArrowRight,
  Phone,
} from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { siteConfig } from "@/data";

const transitPoints = [
  {
    icon: Plane,
    title: "Jolly Grant Airport (DED)",
    time: "45 Minutes",
    desc: "Direct daily flights from New Delhi, Mumbai, Bengaluru, Hyderabad & Ahmedabad.",
  },
  {
    icon: Train,
    title: "Dehradun Railway Station",
    time: "30 Minutes",
    desc: "Connected via Vande Bharat Express & Shatabdi Express to New Delhi in under 4.5 hours.",
  },
  {
    icon: Mountain,
    title: "Mussoorie 'Queen of Hills'",
    time: "45 Minutes",
    desc: "Weekend trekking expeditions, adventure camping & ecological nature study.",
  },
  {
    icon: Trees,
    title: "Pristine Doon Valley Air",
    time: "650m Altitude",
    desc: "Surrounded by lush sal forests, providing a healthy, clean respiratory environment.",
  },
];

export default function CampusLocationSection() {
  return (
    <section
      id="location"
      data-section-theme="location"
      className="py-16 lg:py-20 text-white relative overflow-hidden border-t border-white/5"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin size={14} />
              <span>Campus Location & Connectivity</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Nestled in the Serene Himalayan Foothills of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">
                Dehradun
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Dehradun is celebrated as the School Capital of India. Our 22-acre campus in Dhoolkot,
              Selaqui provides a quiet, secure, and pollution-free sanctuary within easy reach of major metros.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column: Transit Hubs & Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 4 Transit Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {transitPoints.map((item, idx) => (
              <ScrollReveal key={item.title} delay={0.08 * idx}>
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div className="text-amber-400 font-mono font-bold text-xs mb-1">
                      {item.time}
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column: Visual Map & Driving Directions (6 cols) */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.2}>
              <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <Navigation size={14} />
                    <span>Campus Coordinates</span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                    30.3430° N, 77.8891° E
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  Tulas International School Campus
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {siteConfig.address}
                </p>

                {/* Map Action Strip */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="text-slate-400">Campus Pickup Assistance:</span>
                    <span className="font-bold text-white">Available for visiting parents</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="text-slate-400">Visiting Hours:</span>
                    <span className="font-bold text-amber-400">Monday – Saturday (9 AM – 5 PM)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
                  >
                    <span>Open in Google Maps</span>
                    <Navigation size={14} />
                  </a>

                  <a
                    href={`tel:${siteConfig.helpline}`}
                    className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone size={14} className="text-emerald-400" />
                    <span>Call Concierge</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
