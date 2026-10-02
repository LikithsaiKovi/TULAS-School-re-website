"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useSectionTheme } from "@/contexts/SectionThemeContext";

/**
 * CustomCursor — Spring-physics magnetic ring cursor.
 *
 * Design decisions:
 * - Reads activeTheme from SectionThemeContext → ring color matches current section
 * - Preserves native cursor (no cursor:none) to avoid disorientation
 * - Spring config: light damping for "lag" feel that communicates softness/quality
 * - Grows & fills on hover over links/buttons/interactive elements
 * - Hidden on touch devices (pointer:coarse) via CSS
 */
export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const { activeTheme } = useSectionTheme();

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springConfig = { damping: 22, stiffness: 260, mass: 0.55 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsPointer(!!el.closest("a,button,input,select,textarea,[data-cursor-pointer]"));
    };

    const onDown = () => setIsClicking(true);
    const onUp   = () => setIsClicking(false);

    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("mouseover",  onOver,  { passive: true });
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseover",  onOver);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      aria-hidden
    >
      <motion.div
        animate={{
          scale: isClicking ? 0.65 : isPointer ? 1.7 : 1,
          borderColor: isPointer
            ? activeTheme.accent
            : `rgba(${activeTheme.accentRgb},0.45)`,
          backgroundColor: isPointer
            ? `rgba(${activeTheme.accentRgb},0.12)`
            : `rgba(${activeTheme.accentRgb},0)`,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="w-8 h-8 rounded-full border"
        style={{ borderColor: `rgba(${activeTheme.accentRgb},0.45)` }}
      />
    </motion.div>
  );
}
