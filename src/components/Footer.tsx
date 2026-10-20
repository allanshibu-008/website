'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  MessageSquare,
  Clock
} from 'lucide-react';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmailInput('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#141312] text-[#c7c2bb] border-t border-[#2e2a27] relative overflow-hidden">
      {/* Background Architectural Blueprint Subtle Overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      {/* Top Pre-Footer Newsletter & Quick Action */}
      <div className="border-b border-[#252220] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="bg-gradient-to-r from-[#211f1d] via-[#1b1918] to-[#252220] border border-[#d4b145]/20 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[11px] font-semibold tracking-widest text-[#d4b145] uppercase mb-1 block">
                Stay Informed
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Receive Engineering Insights & Project Announcements
              </h3>
              <p className="text-xs sm:text-sm text-[#9e9992] mt-1">
                Quarterly technical briefings on Saudi building standards, facade engineering, and industrial construction.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your corporate email address"
                  required
                  className="px-4 py-3 rounded-lg bg-[#141312] border border-[#3b3632] text-sm text-white placeholder-[#78736d] focus:outline-none focus:border-[#d4b145] flex-grow"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#d4b145] hover:bg-[#edd170] text-[#1b1918] font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isSubscribed ? (
                    <span className="flex items-center gap-1.5 text-black">
                      <CheckCircle2 className="w-4 h-4 text-black" /> Subscribed!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      Subscribe <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#242220] border border-[#d4b145] flex items-center justify-center text-[#d4b145] font-bold text-base shadow">
                H
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-wider">HASHEM</span>
                <div className="text-[10px] text-[#d4b145] uppercase tracking-widest font-semibold">
                  General Contracting Est.
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#9c9790] leading-relaxed">
              &quot;Where Engineering Meets Craftsmanship&quot;. A leading Saudi contracting powerhouse delivering high-spec aluminium curtain walls, structural steel, civil construction, HVAC, and industrial engineering across the Kingdom of Saudi Arabia.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-[#88837c]">
              <div><span className="text-[#d4b145]">CR Number:</span> 2050089421 (Saudi MoC)</div>
              <div><span className="text-[#d4b145]">VAT Registration:</span> 310087492800003</div>
              <div><span className="text-[#d4b145]">Vendor Code:</span> Aramco & SABIC Approved</div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] bg-[#22201d] text-[#d4b145] px-2.5 py-1 rounded border border-[#d4b145]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4b145]" /> ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] bg-[#22201d] text-[#d4b145] px-2.5 py-1 rounded border border-[#d4b145]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4b145]" /> ISO 45001:2018
              </span>
            </div>
          </div>

          {/* Column 2: Engineering Divisions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4b145]"></span>
              Engineering Divisions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services/aluminium-fabrication" className="hover:text-[#d4b145] transition-colors flex items-center justify-between group">
                  <span>Aluminium & Curtain Walls</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#55504b] group-hover:text-[#d4b145] transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/civil-works" className="hover:text-[#d4b145] transition-colors flex items-center justify-between group">
                  <span>Civil Construction & Works</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#55504b] group-hover:text-[#d4b145] transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/steel-fabrication" className="hover:text-[#d4b145] transition-colors flex items-center justify-between group">
                  <span>Structural Steel Fabrication</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#55504b] group-hover:text-[#d4b145] transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/mechanical-hvac" className="hover:text-[#d4b145] transition-colors flex items-center justify-between group">
                  <span>Mechanical & HVAC Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#55504b] group-hover:text-[#d4b145] transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/piping-works" className="hover:text-[#d4b145] transition-colors flex items-center justify-between group">
                  <span>Industrial Piping & Utilities</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#55504b] group-hover:text-[#d4b145] transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/industrial-maintenance" className="hover:text-[#d4b145] transition-colors flex items-center justify-between group">
                  <span>Plant Maintenance & Turnaround</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#55504b] group-hover:text-[#d4b145] transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Company */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4b145]"></span>
              Company & Media
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-[#d4b145] transition-colors">
                  About Hashem Contracting
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#d4b145] transition-colors">
                  Kingdom Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-[#d4b145] transition-colors">
                  Industries We Specialize In
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#d4b145] transition-colors">
                  Media & Factory Gallery
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#d4b145] transition-colors">
                  Careers & Talent in Saudi Arabia
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4b145] transition-colors">
                  Contact & Branch Locations
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/966570174535" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[#d4b145] font-semibold flex items-center gap-1 hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Direct WhatsApp Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters & Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4b145]"></span>
              Head Office (KSA)
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-[#aba59d]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4b145] shrink-0 mt-0.5" />
                <span>
                  <strong>Main Office & Factory:</strong> King Abdulaziz Road, Industrial Zone, Al Khobar / Dammam, Eastern Province, Kingdom of Saudi Arabia
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4b145] shrink-0 mt-0.5" />
                <span>
                  <strong>Riyadh Regional Office:</strong> King Fahd Road, Al Olaya District, Riyadh, KSA
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4b145] shrink-0" />
                <a href="tel:+966570174535" className="hover:text-[#d4b145] transition-colors">
                  +966 57 017 4535
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4b145] shrink-0" />
                <a href="mailto:info@hashemcontracting.com" className="hover:text-[#d4b145] transition-colors">
                  info@hashemcontracting.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#88827b]">
                <Clock className="w-4 h-4 text-[#d4b145] shrink-0" />
                <span>Sun – Thu: 7:30 AM – 5:30 PM (AST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-12 mt-12 border-t border-[#252220] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e7972]">
          <div>
            © 2026 Hashem General Contracting Est. All rights reserved. Kingdom of Saudi Arabia.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#d4b145] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#d4b145] transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-[#d4b145] transition-colors">Sitemap</Link>
            <span className="text-[#d4b145] font-medium">Vision 2030 Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
