"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Send,
} from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { admissionsSteps, siteConfig } from "@/data";

export default function AdmissionsSection() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    grade: "Class VII",
    boardType: "Residential Boarding",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="admissions"
      data-section-theme="admissions"
      className="py-16 lg:py-20 text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>Admissions Open for Session 2025–26</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Your Child's Extraordinary Journey{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                Begins Here
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300">
              Limited seats available for Class IV to XII (Boys & Girls). Explore our transparent 4-step admission roadmap or request an immediate callback.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Step Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {admissionsSteps.map((step, idx) => (
            <ScrollReveal key={step.step} delay={0.08 * idx}>
              <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-400/40 transition-all h-full relative group">
                <div className="text-3xl font-black text-amber-400/40 mb-3 group-hover:text-amber-400 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 2-Column: Interactive Inquiry Form & Campus Helpline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
              <div className="mb-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  OFFICIAL ADMISSIONS PORTAL
                </span>
                <h3 className="text-2xl font-black text-white">
                  Request Prospectus & Fee Structure
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Our admissions counselors will reach out with the brochure, fee details & campus visit slots.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Received Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, {formData.parentName || "Parent"}. Our Senior Admissions Officer will contact you within 24 working hours on {formData.phone || "your phone"}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-400 font-bold hover:underline pt-2 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Applying For Grade *
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option>Class IV</option>
                        <option>Class V</option>
                        <option>Class VI</option>
                        <option>Class VII</option>
                        <option>Class VIII</option>
                        <option>Class IX</option>
                        <option>Class X</option>
                        <option>Class XI (Science / Comm / Arts)</option>
                        <option>Class XII</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Admission Type *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Residential Boarding", "Day Boarding"].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, boardType: type })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-colors cursor-pointer text-center ${
                            formData.boardType === type
                              ? "bg-amber-400 text-slate-950"
                              : "bg-slate-950 border border-slate-800 text-slate-300"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Request Prospectus & Call Back</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Helpline, Campus Info & Direct Apply (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Apply Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent border border-amber-500/30">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider">
                Direct Portal
              </span>
              <h4 className="text-xl font-bold text-white mt-3 mb-2">
                Already Decided? Apply Directly Online
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Fast-track your application directly on the official TIS admissions software.
              </p>
              <a
                href={siteConfig.admissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Go to Online Portal</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Helpline Details */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-white">Admissions Directorate</h4>

              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.helpline}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Phone size={16} className="text-amber-400 shrink-0" />
                  <span>Helpline: {siteConfig.helpline}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Mail size={16} className="text-amber-400 shrink-0" />
                  <span>Email: {siteConfig.email}</span>
                </a>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
