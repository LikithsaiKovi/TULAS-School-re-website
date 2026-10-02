"use client";

import { motion, useSpring } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/**
 * ScrollProgressBar — A fixed-top gradient progress bar
 * that smoothly tracks page scroll depth using spring physics.
 */
export default function ScrollProgressBar() {
  const rawProgress = useScrollProgress();

  const smoothProgress = useSpring(rawProgress, {
    damping: 30,
    stiffness: 200,
    mass: 0.5,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left"
      style={{
        scaleX: smoothProgress,
        background:
          "linear-gradient(90deg, #f59e0b 0%, #ef4444 40%, #8b5cf6 100%)",
        transformOrigin: "left",
      }}
    />
  );
}
