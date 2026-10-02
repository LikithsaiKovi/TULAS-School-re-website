"use client";

import { useEffect, useState } from "react";

/**
 * useScrollProgress — tracks page scroll depth as a 0–1 value.
 * Uses passive event listener to avoid blocking the main thread.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(Math.max(pct, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialise on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
