"use client";

import { useEffect, useState } from "react";
import { Zap, Bell, Trophy, Calendar } from "lucide-react";

const ITEMS = [
  { icon: Bell,     text: "Admissions 2025–26 now open for Class IV to XII — Day & Residential Boarding available" },
  { icon: Trophy,   text: "TIS Equestrian Team wins Gold at CBSE National Sports Meet 2025" },
  { icon: Calendar, text: "Campus Open Day: Visit TIS on November 16, 2025 — Register at admission.tis.edu.in" },
  { icon: Zap,      text: "New AI & Robotics Innovation Lab now fully operational — Class VII onwards" },
  { icon: Trophy,   text: "Ranked Top 10 Residential CBSE Schools in North India by EducationWorld 2025" },
  { icon: Bell,     text: "2025–26 Merit Scholarships: 15–20% fee concession for academic & sports achievers" },
];

/**
 * AnnouncementTicker — Auto-scrolling news ticker at the very top of the page.
 * CSS animation-based marquee for zero JS overhead.
 * Pauses on hover for readability.
 */
export default function AnnouncementTicker() {
  const [visible, setVisible] = useState(true);

  // Hide on scroll down, re-appear on scroll up
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const curr = window.scrollY;
      setVisible(curr < 80 || curr < last);
      last = curr;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="w-full overflow-hidden bg-slate-950/90 border-b border-white/5 backdrop-blur-md py-1.5 relative z-[52]">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex">
        {/* Duplicate content for seamless loop */}
        <div className="ticker-track flex gap-0 shrink-0">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 pr-12 shrink-0"
            >
              <span className="w-4 h-4 text-amber-400 shrink-0">
                <item.icon size={14} />
              </span>
              <span className="text-[11px] text-slate-300 font-medium whitespace-nowrap">
                {item.text}
              </span>
              <span className="text-amber-400/40 text-xs">◈</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
