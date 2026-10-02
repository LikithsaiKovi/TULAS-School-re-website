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
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

/**
 * Tulas International School (TIS) Homepage Redesign
 *
 * Standout Features Implemented:
 * 1. Custom Magnetic Spring Cursor (Feature A)
 * 2. Scroll-Triggered Staggered Reveals (Feature B)
 * 3. Animated Dark/Light Theme Switcher (Feature C)
 * 4. Spring-Physics Scroll Progress Bar (Feature D)
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400/30 selection:text-white">
      {/* ── Global Overlays ─────────────────────────── */}
      <ScrollProgressBar />
      <CustomCursor />

      {/* ── Navigation ──────────────────────────────── */}
      <Navbar />

      {/* ── Main Content Sections ───────────────────── */}
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <BoardingSection />
        <SportsSection />
        <TestimonialsSection />
        <AdmissionsSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* ── Footer ──────────────────────────────────── */}
      <Footer />
    </div>
  );
}
