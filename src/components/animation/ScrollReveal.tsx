"use client";

import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "left" | "right";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

/** Reveals a section once when it enters the viewport, while respecting reduced motion. */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -64px 0px" });
  const hidden = direction === "left" ? { x: 22 } : direction === "right" ? { x: -22 } : { y: 22 };

  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal${className ? ` ${className}` : ""}`}
      data-visible={isInView ? "true" : "false"}
      initial={{ opacity: 0, ...hidden }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...hidden }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
