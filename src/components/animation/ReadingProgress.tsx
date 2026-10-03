"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** A spring-smoothed reading indicator; the native scroll position remains untouched. */
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30, mass: 0.2 });

  return (
    <motion.div
      aria-hidden="true"
      className="reading-progress"
      style={{ scaleX, transformOrigin: "0% 50%" }}
    />
  );
}
