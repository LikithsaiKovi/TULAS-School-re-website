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

// Advanced Interactive Modals & Floating Components
import VirtualTourModal from "@/components/ui/VirtualTourModal";
import FeeCalculatorModal from "@/components/ui/FeeCalculatorModal";
import QuickActionDock from "@/components/ui/QuickActionDock";
import LiveSocialProofToast from "@/components/ui/LiveSocialProofToast";

/**
 * Tulas International School (TIS) Homepage Redesign
 *
 * Standout Features Implemented:
 * 1. Custom Magnetic Spring Cursor (Feature A)
 * 2. Scroll-Triggered Staggered Reveals (Feature B)
 * 3. Animated Dark/Light Theme Switcher (Feature C)
 * 4. Spring-Physics Scroll Progress Bar (Feature D)
 *
 * Advanced Components & Interactive Tools:
 * - 360° Virtual Campus Tour Modal
 * - Interactive Tuition & Scholarship Estimator Modal
 * - Floating Quick Access Dock (Call, Tour, Fee, Admissions, Scroll-to-top)
 * - Himalayan Foothills Campus Connectivity & Transit Map
 * - Live Admissions Social Proof Activity Toast
 */
export default function HomePage() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen text-slate-100 flex flex-col selection:bg-amber-400/30 selection:text-white">
      {/* ── Global Overlays & Motion Drivers ────────── */}
      <ScrollProgressBar />
      <CustomCursor />

      {/* ── Navigation (with 360 Tour Trigger) ──────── */}
      <Navbar onOpenTour={() => setIsTourOpen(true)} />

      {/* ── Main Content Sections ───────────────────── */}
      <main className="flex-1 w-full">
        <HeroSection
          onOpenTour={() => setIsTourOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
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
