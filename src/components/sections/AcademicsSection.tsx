"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  FlaskConical,
  Award,
  CheckCircle2,
  ArrowRight,
  Atom,
} from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { academicTiers, siteConfig } from "@/data";

export default function AcademicsSection() {
  const [activeTab, setActiveTab] = useState(academicTiers[1].id);
  const currentTier = academicTiers.find((t) => t.id === activeTab) || academicTiers[0];

  return (
    <section id="academics" className="py-16 lg:py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <GraduationCap size={14} />
              <span>CBSE Curriculum & Pedagogy</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Academic Pathways Designed for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                Lifelong Brilliance
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300">
              Affiliated with CBSE, New Delhi, our academic framework blends structured rigor with
              inquiry-based exploration — empowering students to top national board exams and gain admission to top world universities.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl gap-2">
            {academicTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTab(tier.id)}
                className={`relative px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === tier.id
                    ? "text-slate-950 shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeTab === tier.id && (
                  <motion.div
                    layoutId="academicTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tier.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTier.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-black uppercase tracking-wider">
                  {currentTier.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {currentTier.focus}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {currentTier.description}
                </p>

                <div className="space-y-3 pt-2">
                  {currentTier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={siteConfig.admissionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Apply for {currentTier.badge}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Photo Card (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                  <img
                    src={currentTier.image}
                    alt={currentTier.title}
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                    <p className="font-bold text-white mb-0.5">CBSE Affiliation No. 2130025</p>
                    <p className="text-slate-400 text-[11px]">Comprehensive Co-Ed Learning & Continuous Mentorship</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {[
            {
              icon: Atom,
              title: "Modern STEM Labs",
              desc: "Dedicated Physics, Chemistry, Biology, Robotics & Mathematics laboratories.",
            },
            {
              icon: BookOpen,
              title: "Digital & Print Library",
              desc: "15,000+ volumes, international journals, digital Kindle e-readers & quiet research spaces.",
            },
            {
              icon: Award,
              title: "Competitive Exam Prep",
              desc: "Integrated foundation mentoring for JEE, NEET, CUET, CLAT & SAT examinations.",
            },
            {
              icon: FlaskConical,
              title: "Experiential Projects",
              desc: "Field expeditions, ecological projects, astronomy clubs, and hands-on maker spaces.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 * i}>
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-400/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                  <item.icon size={20} />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
