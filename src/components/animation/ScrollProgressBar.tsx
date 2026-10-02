"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useSectionTheme } from "@/contexts/SectionThemeContext";

/**
 * ScrollProgressBar — Fixed top gradient bar.
 * Color tracks the current section theme accent color.
 * Spring physics ensure it feels physical, not digital-timer-like.
 */
export default function ScrollProgressBar() {
  const progress = useScrollProgress();
  const { activeTheme } = useSectionTheme();

  const spring = useSpring(progress, { damping: 30, stiffness: 300 });
  const scaleX = useTransform(spring, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
      style={{
        scaleX,
        background: `linear-gradient(90deg, ${activeTheme.accent}, color-mix(in srgb, ${activeTheme.accent} 70%, white))`,
        transition: "background 600ms ease",
      }}
    />
  );
}
