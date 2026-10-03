"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const media = "https://tis.edu.in/_next/static/media/";

/** School imagery stays interactive without taking over the reading experience. */
export default function HeroVisual() {
  const frame = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.6 });
  const imageX = useTransform(springX, [-1, 1], [12, -12]);
  const imageY = useTransform(springY, [-1, 1], [10, -10]);
  const rotateX = useTransform(springY, [-1, 1], [2, -2]);
  const rotateY = useTransform(springX, [-1, 1], [-2, 2]);

  function moveScene(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !frame.current) return;
    const bounds = frame.current.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
    frame.current.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    frame.current.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  }

  function resetScene() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      ref={frame}
      className="hero-visual"
      aria-label="Students taking part in school activities"
      onPointerMove={moveScene}
      onPointerLeave={resetScene}
    >
      <motion.div
        className="hero-image-parallax"
        style={{ x: imageX, y: imageY, rotateX, rotateY, transformPerspective: 1000 }}
      >
        <Image
          className="hero-photo"
          src={`${media}Image%202.0c5295c9.webp`}
          alt="Students at Tula’s International School"
          fill
          priority
          unoptimized
          sizes="(max-width: 900px) 100vw, 54vw"
        />
      </motion.div>
      <div className="hero-image-wash" />
      <div className="hero-image-grain" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-image-topline"><span>01 / SCHOOL LIFE</span><span>DEHRADUN, INDIA</span></div>
      <div className="hero-caption"><span>Curiosity, in motion</span><span>CBSE · CLASSES IV—XII</span></div>
      <div className="hero-stamp"><span>LEARN</span><span>·</span><span>LIVE</span><span>·</span><span>GROW</span></div>
      <a className="hero-sport-token" href="#sports"><span className="hero-token-mark" aria-hidden="true">↗</span><span className="hero-token-label">BEYOND THE CLASSROOM</span><strong>16<small>+</small></strong><span className="hero-token-copy">ways to find<br />your field of play</span></a>
      <span className="hero-photo-credit">TULAS INTERNATIONAL SCHOOL</span>
    </div>
  );
}
