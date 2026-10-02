"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

/**
 * CustomCursor — An elegant interactive magnetic cursor ring.
 * - Leaves native cursor visible so users are never disoriented.
 * - Ring follows mouse with smooth spring physics.
 * - Expands and glows when hovering links/buttons.
 * - Auto-hidden on touch/mobile devices (pointer: coarse).
 */
export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 280, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch screens
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Hover state on links & buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("a, button, input, select, textarea, [data-interactive]")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          scale: isClicking ? 0.7 : isHovered ? 1.8 : 1,
          borderColor: isHovered ? "rgba(245, 158, 11, 0.9)" : "rgba(245, 158, 11, 0.4)",
          backgroundColor: isHovered ? "rgba(245, 158, 11, 0.15)" : "transparent",
        }}
        transition={{ duration: 0.15 }}
        className="w-8 h-8 rounded-full border border-amber-400/50 backdrop-blur-[1px]"
      />
    </motion.div>
  );
}
