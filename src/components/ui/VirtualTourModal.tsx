"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Compass,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data";

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tourLocations = [
  {
    id: "equestrian",
    name: "Equestrian Arena & Stables",
    badge: "16+ Sports Academy",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    description:
      "One of the few boarding schools in North India with private stables, dressage tracks, and show-jumping training by certified equestrians.",
    stats: [
      { label: "Arena Area", value: "2.5 Acres" },
      { label: "Horses", value: "14 Thoroughbreds" },
      { label: "Coaching", value: "National Certified" },
    ],
  },
  {
    id: "aquatics",
    name: "Half-Olympic Aquatic Complex",
    badge: "Temperature Controlled",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
    description:
      "All-weather 25-meter swimming pool equipped with anti-wave lane dividers, continuous filtration, and certified lifeguards for stroke training.",
    stats: [
      { label: "Pool Length", value: "25 Meters" },
      { label: "Lanes", value: "6 Competition Lanes" },
      { label: "Lifeguards", value: "24/7 On-Duty" },
    ],
  },
  {
    id: "academics",
    name: "STEM Labs & Innovation Center",
    badge: "CBSE & Robotics",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    description:
      "Fully equipped research laboratories for Physics, Chemistry, Biology, and an advanced AI, 3D printing & Robotics makerspace.",
    stats: [
      { label: "Laboratories", value: "5 Dedicated Labs" },
      { label: "AI & 3D Lab", value: "MakerBot & Arduino" },
      { label: "Safety", value: "ISO Certified" },
    ],
  },
  {
    id: "library",
    name: "Central Knowledge & Digital Library",
    badge: "15,000+ Volumes",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    description:
      "A peaceful sanctuary with quiet reading carrels, Kindle e-readers, JSTOR access, and international periodicals for deep research.",
    stats: [
      { label: "Print Books", value: "15,000+ Titles" },
      { label: "Digital Access", value: "Kindle & JSTOR" },
      { label: "Seating", value: "120 Research Pods" },
    ],
  },
  {
    id: "campus",
    name: "22-Acre Serene Green Campus",
    badge: "Himalayan Foothills",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Located in Selaqui, Dehradun, surrounded by sal forests and clean mountain air — fostering health, focus, and holistic growth.",
    stats: [
      { label: "Total Area", value: "22 Lush Acres" },
      { label: "Altitude", value: "650m (Pure Air)" },
      { label: "CCTV Cameras", value: "150+ Perimeter" },
    ],
  },
];

export default function VirtualTourModal({ isOpen, onClose }: VirtualTourModalProps) {
  const [activeLoc, setActiveLoc] = useState(tourLocations[0].id);
  const current = tourLocations.find((l) => l.id === activeLoc) || tourLocations[0];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden z-10 my-auto text-white flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-950/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Compass size={18} />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>360° Virtual Campus Experience</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold hidden sm:inline">
                    Live Facilities
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Tulas International School · 22-Acre Campus, Dehradun
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Location Selector Tabs */}
          <div className="px-6 py-3 border-b border-slate-800/80 bg-slate-900/50 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
            {tourLocations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveLoc(loc.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  activeLoc === loc.id
                    ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                    : "bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          {/* Main Visual & Details Showcase */}
          <div className="overflow-y-auto p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Photo Card with 360 Indicator (7 cols) */}
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl group">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={1200}
                    height={800}
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-400/30 flex items-center gap-1.5">
                  <Sparkles size={12} />
                  <span>{current.badge}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800">
                  <h4 className="text-base font-bold text-white mb-0.5">{current.name}</h4>
                  <p className="text-xs text-slate-300 line-clamp-2">{current.description}</p>
                </div>
              </div>

              {/* Stats & Booking Info (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                    FACILITY SPECIFICATIONS
                  </span>
                  <h4 className="text-xl font-black text-white">{current.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 py-2">
                  {current.stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center"
                    >
                      <div className="text-xs sm:text-sm font-black text-amber-400">
                        {s.value}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-2.5">
                  <a
                    href="https://admission.tis.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
                  >
                    <span>Book In-Person Campus Tour</span>
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href={`tel:${siteConfig.helpline}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Call Admissions Desk: {siteConfig.helpline}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
