"use client";

import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  Compass,
  FileText,
  Share2,
  Globe2,
} from "lucide-react";
import { siteConfig, navLinks } from "@/data";

const mandatoryLinks = [
  { label: "CBSE Mandatory Disclosure", href: "https://tis.edu.in/" },
  { label: "School Brochure (PDF)", href: "https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf" },
  { label: "Annual Calendar 2024-25", href: "https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf" },
  { label: "Child Welfare & Safety Policy", href: "https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf" },
  { label: "Mobile Phone Policy", href: "https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf" },
  { label: "Fedena Parent ERP Login", href: "https://tis.fedena.com/" },
  { label: "Virtual Campus Tour", href: "https://tis.edu.in/virtual-tour/" },
  { label: "Privacy Policy", href: "https://tis.edu.in/privacy-policy/" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Crest (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="font-extrabold text-base text-white tracking-tight block">
                  TULAS INTERNATIONAL SCHOOL
                </span>
                <span className="text-[11px] text-amber-400 font-semibold tracking-wider uppercase">
                  Dehradun · Estd 2004
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Tulas International School is a premier CBSE co-ed residential boarding and day school in Dehradun, Uttarakhand. Committed to academic distinction, pastoral care, and all-round character building.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <p className="font-bold text-white">CBSE Affiliation No. 2130025</p>
              <p className="text-slate-400">School Code: 81254 · Classes IV to XII Co-Ed</p>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mandatory Disclosures & Policies (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Official & Mandatory Links
            </h4>
            <ul className="space-y-2">
              {mandatoryLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 py-0.5 group"
                  >
                    <ExternalLink size={11} className="text-slate-600 group-hover:text-amber-400 transition-colors shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Location & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Campus & Admissions Desk
            </h4>
            <div className="space-y-2.5">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-amber-400 transition-colors group"
              >
                <MapPin size={14} className="text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </a>

              <a
                href={`tel:${siteConfig.helpline}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone size={14} className="text-amber-400 shrink-0" />
                <span>Helpline: {siteConfig.helpline}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <Phone size={14} className="text-amber-400 shrink-0" />
                <span>Landline: {siteConfig.landline}</span>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail size={14} className="text-amber-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Tulas International School, Dehradun. All rights reserved.
          </p>
          <p className="flex items-center gap-4">
            <a href="https://admission.tis.edu.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Online Admissions
            </a>
            <span>·</span>
            <a href="https://tis.fedena.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Fedena Portal
            </a>
            <span>·</span>
            <a href="https://tis.edu.in/virtual-tour/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Virtual Tour
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
