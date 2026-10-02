"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, CheckCircle2, Award } from "lucide-react";

const activities = [
  {
    icon: Sparkles,
    title: "Campus Tour Booked",
    detail: "Parent from New Delhi scheduled an on-campus walkthrough for Class 7",
    time: "2 mins ago",
  },
  {
    icon: Award,
    title: "Admissions Inquiry",
    detail: "Parent from Mumbai registered for Class 9 Residential Boarding",
    time: "6 mins ago",
  },
  {
    icon: CheckCircle2,
    title: "Equestrian Academy",
    detail: "Class 8 applicant registered for Horse Riding & Sports training",
    time: "12 mins ago",
  },
  {
    icon: Sparkles,
    title: "International Applicant",
    detail: "Application initiated from Dubai (UAE) for Class 11 Science",
    time: "18 mins ago",
  },
];

export default function LiveSocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Delay first appearance by 4 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) return;

    const interval = setInterval(() => {
      // Toggle visibility to create subtle pulse
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % activities.length);
        setVisible(true);
      }, 800);
    }, 9000);

    return () => clearInterval(interval);
  }, [visible, dismissed]);

  if (dismissed) return null;

  const current = activities[index];

  return (
    <div className="fixed bottom-5 left-5 z-40 hidden sm:block max-w-xs">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 shadow-2xl text-white flex items-start gap-3 relative group"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <current.icon size={15} />
            </div>

            <div className="pr-4">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-xs font-bold text-white">{current.title}</span>
                <span className="text-[10px] text-slate-500">· {current.time}</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                {current.detail}
              </p>
            </div>

            <button
              onClick={() => setDismissed(true)}
              className="absolute top-2 right-2 p-1 rounded-md text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Dismiss toast"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
