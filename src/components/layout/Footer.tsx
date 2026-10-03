"use client";

import {
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  ArrowUp,
} from "lucide-react";
import { siteConfig } from "@/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#120508] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: School Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#b90124] flex items-center justify-center text-white shadow-md">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight text-white">
                  TULAS INTERNATIONAL SCHOOL
                </span>
                <p className="text-[11px] text-[#c09d59] font-bold uppercase tracking-wider">
                  The Modern Gurukul · Dehradun
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Established in 2012 under the aegis of Rishabh Educational Trust. A premier CBSE-affiliated co-educational residential and day boarding school in Uttarakhand, committed to excellence in academics, Olympic sports, and values-based character development.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>CBSE Affiliation No: <span className="text-white font-mono font-bold">2130025</span></div>
              <div>School Code: <span className="text-white font-mono font-bold">81084</span></div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#c09d59]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#about" className="hover:text-[#ff6b87] transition-colors">About TIS</a></li>
              <li><a href="#academics" className="hover:text-[#ff6b87] transition-colors">CBSE Academics</a></li>
              <li><a href="#boarding" className="hover:text-[#ff6b87] transition-colors">Residential Life</a></li>
              <li><a href="#sports" className="hover:text-[#ff6b87] transition-colors">16+ Sports Academy</a></li>
              <li><a href="#rankings" className="hover:text-[#ff6b87] transition-colors">School Rankings</a></li>
              <li><a href="#personalities" className="hover:text-[#ff6b87] transition-colors">Guest Mentors</a></li>
            </ul>
          </div>

          {/* Col 4: Admissions & Mandatory */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#c09d59]">
              Admissions & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#admissions" className="hover:text-[#ff6b87] transition-colors">Admission Procedure</a></li>
              <li><a href={siteConfig.admissionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b87] transition-colors">Online Application Portal</a></li>
              <li><a href="https://tis.edu.in/mandatory-disclosure/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b87] transition-colors">Mandatory CBSE Disclosure</a></li>
              <li><a href="https://tis.edu.in/fee-structure/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b87] transition-colors">Fee Structure & Policy</a></li>
              <li><a href="https://tis.edu.in/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b87] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#c09d59]">
              Admissions Desk
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a href="tel:+919837983791" className="flex items-center gap-2 hover:text-white">
                <Phone size={13} className="text-[#b90124] shrink-0" />
                <span>+91-98379 83791</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone size={13} className="text-[#b90124] shrink-0" />
                <span>0135-2699444 / 2699666</span>
              </div>
              <a href="mailto:info@tis.edu.in" className="flex items-center gap-2 hover:text-white">
                <Mail size={13} className="text-[#b90124] shrink-0" />
                <span>info@tis.edu.in</span>
              </a>
              <div className="flex items-start gap-2 pt-1 text-slate-400 leading-tight">
                <MapPin size={13} className="text-[#b90124] shrink-0 mt-0.5" />
                <span>Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011, UK</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Tulas International School, Dehradun. Managed by Rishabh Educational Trust.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
