"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

/**
 * useMousePosition — returns the current mouse X/Y position.
 * Automatically hides cursor on touch devices (pointer: coarse).
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: -100, y: -100 });

  useEffect(() => {
    // Don't track on touch devices
    const mq = window.matchMedia("(pointer: coarse)");
    if (mq.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
