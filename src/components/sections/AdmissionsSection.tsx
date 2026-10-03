"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { siteConfig } from "@/data";

export default function AdmissionsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "Class VII",
    state: "Uttarakhand",
    consent: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admissions" className="py-20 bg-white dark:bg-[#0a0406] text-[#1c1c1c] dark:text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b90124]/10 text-[#b90124] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Admissions Open 2025–26</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Begin Your Child&apos;s Journey at Tulas
            </h2>
            <p className="text-sm sm:text-base text-[#5f5f5f] dark:text-slate-400 mt-2">
              Admissions open for Class IV through XII · Day Boarding & Residential
            </p>
          </ScrollReveal>
        </div>

        {/* Signature TIS 2-Panel Card from tis.edu.in */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 bg-[#90ccd0] dark:bg-slate-900">
          
          {/* Left Panel: Contact Information (White on tis.edu.in) */}
          <div className="md:col-span-5 bg-white dark:bg-[#120609] p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1c1c1c] dark:text-white">
                Contact Us.
              </h3>
              <p className="text-xs text-[#5f5f5f] dark:text-slate-400 mt-1">
                Our admissions counselors are available Monday through Saturday.
              </p>

              <div className="space-y-4 mt-6 text-xs sm:text-sm text-[#1c1c1c] dark:text-slate-200">
                <a
                  href={`tel:${siteConfig.helpline}`}
                  className="flex items-start gap-3 hover:text-[#b90124] transition-colors"
                >
                  <Phone size={18} className="text-[#007a83] dark:text-[#60bab1] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Admission Helpline</div>
                    <div className="text-slate-500 dark:text-slate-400">{siteConfig.helpline}</div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#007a83] dark:text-[#60bab1] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Campus Landline</div>
                    <div className="text-slate-500 dark:text-slate-400">0135-2699444, 0135-2699666</div>
                  </div>
                </div>

                <a
                  href="mailto:info@tis.edu.in"
                  className="flex items-start gap-3 hover:text-[#b90124] transition-colors"
                >
                  <Mail size={18} className="text-[#007a83] dark:text-[#60bab1] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Email Admissions</div>
                    <div className="text-slate-500 dark:text-slate-400">info@tis.edu.in</div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#007a83] dark:text-[#60bab1] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Campus Address</div>
                    <div className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-[#5f5f5f]">
              <span className="font-bold text-[#b90124]">CBSE Affiliation: 2130025</span>
              <span>Dehradun, UK</span>
            </div>
          </div>

          {/* Right Panel: Official Enquire Now Form */}
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center text-[#1c1c1c]">
            <h3 className="text-2xl sm:text-3xl font-black text-center mb-6 border-b-2 border-black/20 pb-2">
              Enquire Now!
            </h3>

            {submitted ? (
              <div className="bg-white/95 rounded-2xl p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900">Application Submitted!</h4>
                <p className="text-xs text-slate-600">
                  Thank you! Our Senior Admissions Counselor will contact you on{" "}
                  <strong>{formData.phone || "+91-9837983791"}</strong> within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#b90124] underline cursor-pointer mt-2"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Enter Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-black/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b90124]"
                  />
                  <input
                    type="email"
                    placeholder="Email Id (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-black/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b90124]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number (+91) *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-black/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b90124]"
                  />
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-black/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b90124]"
                  >
                    {["Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI", "Class XII"].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-black/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b90124]"
                >
                  {["Uttarakhand", "Delhi NCR", "Uttar Pradesh", "Bihar", "Punjab", "Haryana", "West Bengal", "Maharashtra", "Other"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                <div className="flex items-start gap-2 pt-1 text-[11px] text-[#2d2d2d]">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5"
                    required
                  />
                  <label htmlFor="consent" className="cursor-pointer leading-tight">
                    I agree to receive admission details and prospectus updates from Tulas International School, Dehradun.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-xl bg-[#1c1c1c] hover:bg-black text-white text-sm font-black tracking-wide shadow-xl cursor-pointer transition-transform active:scale-[0.98]"
                >
                  ENQUIRE NOW
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
