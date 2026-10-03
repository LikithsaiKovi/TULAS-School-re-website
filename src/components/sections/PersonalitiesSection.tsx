"use client";

import { Star } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";

const PERSONALITIES = [
  {
    name: "Sakshi Malik",
    title: "Olympic Bronze Medalist · Padma Shri",
    bio: "First Indian female wrestler to win an Olympic medal (Rio 2016). Rajiv Gandhi Khel Ratna awardee.",
    badge: "Olympic Icon",
  },
  {
    name: "Prakashi & Chandro Tomar",
    title: "Known as 'Shooter Dadi' · 30 National Titles",
    bio: "Inspirational veterans behind the Bollywood biopic 'Saand Ki Aankh', mentoring young markswomen at TIS.",
    badge: "Shooting Legends",
  },
  {
    name: "Abhishek Verma",
    title: "World Rank #6 · Asian Games Gold Medalist",
    bio: "Arjuna Awardee in Archery, conducting masterclasses on mental focus and target precision.",
    badge: "World Champion",
  },
  {
    name: "Aditi Gopichand Swami",
    title: "Arjuna Awardee · World Champion 2024",
    bio: "World Archery champion inspiring TIS students to compete on the international stage.",
    badge: "Archery Star",
  },
  {
    name: "Vishesh Bhriguvanshi",
    title: "Captain, Indian National Basketball Team",
    bio: "Led India to Asian Beach Games Gold Medal, mentoring our basketball varsity squad.",
    badge: "National Captain",
  },
  {
    name: "Saurabh Joshi",
    title: "India's Leading Creator (30M+ Followers)",
    bio: "Visited TIS campus to inspire students on digital storytelling, creativity, and modern media.",
    badge: "Youth Mentor",
  },
];

export default function PersonalitiesSection() {
  return (
    <section id="personalities" className="py-20 bg-[#f8f5f0] dark:bg-[#120609] border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from tis.edu.in */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl font-black text-[#b90124] tracking-tight">
              Influential Personalities On Campus
            </h2>
            <p className="text-lg text-[#5f5f5f] dark:text-slate-300 mt-2 font-medium">
              Sports Icons, Champions & Leaders Who Inspire TIS Students
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel / Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERSONALITIES.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.1}>
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-[#b90124]/15 hover:border-[#b90124] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#b90124]/10 text-[#b90124] dark:text-[#ff6b87] uppercase tracking-wider">
                      {p.badge}
                    </span>
                    <Star size={16} className="text-[#c09d59] fill-[#c09d59]" />
                  </div>

                  <h3 className="text-xl font-black text-[#1c1c1c] dark:text-white group-hover:text-[#b90124] transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-xs font-bold text-[#007a83] dark:text-[#60bab1] mt-1">
                    {p.title}
                  </div>
                  <p className="text-xs text-[#5f5f5f] dark:text-slate-400 mt-3 leading-relaxed">
                    {p.bio}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 dark:border-white/5 text-[11px] text-[#5f5f5f] dark:text-slate-500 italic">
                  Live Guest Mentorship at Tulas
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
