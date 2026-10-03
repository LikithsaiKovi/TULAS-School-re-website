"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Keeps the system pointer visible and adds a spring-following ring on fine pointers. */
export default function CustomCursor() {
  const [overControl, setOverControl] = useState(false);
  const pointerX = useMotionValue(-40);
  const pointerY = useMotionValue(-40);
  const x = useSpring(pointerX, { stiffness: 340, damping: 28, mass: 0.45 });
  const y = useSpring(pointerY, { stiffness: 340, damping: 28, mass: 0.45 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };
    const onOver = (event: PointerEvent) => {
      const target = event.target;
      setOverControl(target instanceof Element && Boolean(target.closest("a, button, summary, [role='button']")));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
    };
  }, [pointerX, pointerY]);

  return (
    <motion.div
      className="custom-cursor"
      aria-hidden="true"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: overControl ? 1.55 : 1 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    />
  );
}
