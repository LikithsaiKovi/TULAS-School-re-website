"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calculator,
  CheckCircle2,
  ArrowRight,
  Download,
  Award,
} from "lucide-react";
import { siteConfig } from "@/data";

interface FeeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeeCalculatorModal({ isOpen, onClose }: FeeCalculatorModalProps) {
  const [grade, setGrade] = useState("Class 7");
  const [boardType, setBoardType] = useState<"residential" | "day">("residential");
  const [meritDiscount, setMeritDiscount] = useState<"none" | "academic" | "sports">("academic");
  const [downloaded, setDownloaded] = useState(false);

  // Approximate realistic fee brackets based on typical premier Dehradun residential CBSE boarding schools
  const baseAnnualFee = boardType === "residential" ? 480000 : 220000;
  
  // Grade multiplier
  const isSenior = grade.includes("11") || grade.includes("12");
  const gradeAddon = isSenior ? 40000 : 0;

  // Scholarship deduction
  let scholarshipPct = 0;
  if (meritDiscount === "academic") scholarshipPct = 0.15; // 15% scholarship for 90%+
  if (meritDiscount === "sports") scholarshipPct = 0.20; // 20% for State/National athlete

  const grossTotal = baseAnnualFee + gradeAddon;
  const discountAmount = Math.round(grossTotal * scholarshipPct);
  const netEstimatedFee = grossTotal - discountAmount;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden z-10 my-auto text-white"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Calculator size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Interactive Fee & Scholarship Estimator</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold">
                    2025–26
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Transparent, all-inclusive boarding & academic estimation
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Input Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Grade Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  1. Select Grade
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:border-amber-400"
                >
                  <option>Class 4</option>
                  <option>Class 5</option>
                  <option>Class 6</option>
                  <option>Class 7</option>
                  <option>Class 8</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11 (Science / Comm / Arts)</option>
                  <option>Class 12 (Science / Comm / Arts)</option>
                </select>
              </div>

              {/* Boarding Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  2. Boarding Choice
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setBoardType("residential")}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-colors cursor-pointer text-center ${
                      boardType === "residential"
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-950 border border-slate-800 text-slate-300"
                    }`}
                  >
                    Residential
                  </button>
                  <button
                    type="button"
                    onClick={() => setBoardType("day")}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-colors cursor-pointer text-center ${
                      boardType === "day"
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-950 border border-slate-800 text-slate-300"
                    }`}
                  >
                    Day Boarding
                  </button>
                </div>
              </div>

              {/* Merit / Scholarship */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  3. Scholarship Eligibility
                </label>
                <select
                  value={meritDiscount}
                  onChange={(e) => setMeritDiscount(e.target.value as "none" | "academic" | "sports")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="academic">Academic Merit (90%+ Marks) - 15%</option>
                  <option value="sports">State/National Sports - 20%</option>
                  <option value="none">Standard Enrollment - 0%</option>
                </select>
              </div>
            </div>

            {/* Calculated Breakdown Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Estimated Annual Investment ({grade} · {boardType === "residential" ? "Residential" : "Day"})
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-amber-400">
                      ₹{netEstimatedFee.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ Academic Year</span>
                  </div>
                </div>

                {scholarshipPct > 0 && (
                  <div className="px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5 shrink-0">
                    <Award size={15} />
                    <span>Includes ₹{discountAmount.toLocaleString("en-IN")} Merit Scholarship</span>
                  </div>
                )}
              </div>

              {/* What is Included Checklist */}
              <div className="pt-4">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  All-Inclusive Package Features:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                    <span>CBSE Curriculum & Digital Classrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                    <span>16+ Sports Academy (Equestrian, Swim, Cricket)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                    <span>{boardType === "residential" ? "Furnished Hostels & 5 Daily Balanced Meals" : "Day Campus Meals & Study Prep"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                    <span>24/7 On-Campus Infirmary & Medical Care</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={siteConfig.admissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
              >
                <span>Proceed to Online Application</span>
                <ArrowRight size={14} />
              </a>

              <button
                onClick={() => setDownloaded(true)}
                className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download size={14} />
                <span>{downloaded ? "Fee Sheet Saved!" : "Download Fee PDF"}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
