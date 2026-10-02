"use client";

import React, { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { useSectionTheme } from "@/contexts/SectionThemeContext";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * SpotlightCard — Linear/Aceternity-style mouse-following radial glow card.
 * Tracks mouse coordinates inside the element and renders a dynamic ambient spotlight.
 */
export function SpotlightCard({
  children,
  className = "",
  onClick,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const { activeTheme } = useSectionTheme();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const rgb = activeTheme.accentRgb || "245,158,11";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 group ${className}`}
      style={{
        boxShadow: isHovered
          ? `0 12px 30px -10px rgba(0, 0, 0, 0.5), 0 0 25px -5px rgba(${rgb}, 0.2)`
          : "none",
        borderColor: isHovered ? `rgba(${rgb}, 0.4)` : "rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Radial Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(${rgb}, 0.15), transparent 70%)`,
        }}
      />

      {/* Border Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(${rgb}, 0.5), transparent 60%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
