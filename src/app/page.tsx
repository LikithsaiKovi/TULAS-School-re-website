"use client";

import { useState } from "react";
import CustomCursor from "@/components/animation/CustomCursor";
import ScrollProgressBar from "@/components/animation/ScrollProgressBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AcademicsSection from "@/components/sections/AcademicsSection";
import BoardingSection from "@/components/sections/BoardingSection";
import SportsSection from "@/components/sections/SportsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import CampusLocationSection from "@/components/sections/CampusLocationSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

// Modern Tech Components
import ParticleCanvas from "@/components/tech/ParticleCanvas";
import CampusTelemetryBar from "@/components/tech/CampusTelemetryBar";
import AIAssistantWidget from "@/components/tech/AIAssistantWidget";

// Advanced Interactive Modals & Floating Components
import VirtualTourModal from "@/components/ui/VirtualTourModal";
import FeeCalculatorModal from "@/components/ui/FeeCalculatorModal";
import QuickActionDock from "@/components/ui/QuickActionDock";
import LiveSocialProofToast from "@/components/ui/LiveSocialProofToast";

/**
 * Tulas International School (TIS) Homepage Redesign
 *
 * Modern Tech Architecture:
 * 1. Interactive HTML5 Particle Canvas (Mouse-reactive constellations synced to section themes)
 * 2. Himalayan Telemetry Bar (Live IST clock, AQI monitor, Web Audio API mountain breeze generator)
 * 3. TIS AI Admissions Copilot (Intelligent conversational admissions assistant)
 * 4. Aceternity Spotlight Cards (Mouse-following dynamic radial glow borders)
 * 5. Dynamic Section-Aware Theme Engine (GPU-composited morphing via IntersectionObserver)
 * 6. 60 FPS CountUp Statistics & Magnetic Button physics
 * 7. 360° Virtual Campus Tour & Interactive Fee/Scholarship Estimator
 */
export default function HomePage() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen text-slate-100 flex flex-col selection:bg-amber-400/30 selection:text-white relative">
      {/* ── Interactive Particle Constellation Canvas ── */}
      <ParticleCanvas />

      {/* ── Global Overlays & Motion Drivers ────────── */}
      <ScrollProgressBar />
      <CustomCursor />

      {/* ── Navigation (with Announcement Ticker & Tour Trigger) ── */}
      <Navbar onOpenTour={() => setIsTourOpen(true)} />

      {/* ── Main Content Sections ───────────────────── */}
      <main className="flex-1 w-full relative z-10">
        <HeroSection
          onOpenTour={() => setIsTourOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
        
        {/* Himalayan Telemetry Ribbon right below the Hero */}
        <CampusTelemetryBar />

        <AboutSection />
        <AcademicsSection />
        <BoardingSection />
        <SportsSection />
        <TestimonialsSection />
        <AdmissionsSection />
        <CampusLocationSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* ── Footer ──────────────────────────────────── */}
      <Footer />

      {/* ── Advanced Floating Access Components ─────── */}
      <QuickActionDock
        onOpenTour={() => setIsTourOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />
      <LiveSocialProofToast />

      {/* ── TIS Admissions AI Copilot ──────────────── */}
      <AIAssistantWidget
        onOpenTour={() => setIsTourOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* ── Interactive Modals ──────────────────────── */}
      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />
      <FeeCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </div>
  );
}
