'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import ContactSection from '@/components/ContactSection';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Building2, 
  ChevronRight,
  ShieldCheck 
} from 'lucide-react';

export default function ContactPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1b1918] text-[#f7f7f7] selection:bg-[#d4b145] selection:text-black">
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Header */}
      <section className="relative pt-36 pb-20 bg-[#141312] border-b border-[#2a2624] overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-[#a09b95] mb-6">
            <Link href="/" className="hover:text-[#d4b145]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5e5852]" />
            <span className="text-[#d4b145] font-semibold">Contact &amp; Offices</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-2">
              Kingdom-Wide Operational Presence
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Connect with Our <br />
              <span className="gold-gradient-text">Offices &amp; Fabrication Hub.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#cfcac2] mt-4 leading-relaxed">
              Our engineering estimating teams, facade consultants, and project coordinators are ready to support your commercial and industrial requirements across Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Regional Office Cards */}
      <section className="py-16 bg-[#1e1c1b] border-b border-[#2b2725]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Main HQ */}
          <div className="p-6 rounded-2xl bg-[#242220] border border-[#d4b145]/40 shadow-xl">
            <span className="text-[10px] font-bold text-[#d4b145] uppercase tracking-wider px-2 py-0.5 rounded bg-[#d4b145]/15 border border-[#d4b145]/30 inline-block mb-3">
              Kingdom HQ &amp; Factory
            </span>
            <h3 className="text-base font-bold text-white mb-2">Al Khobar &amp; Dammam</h3>
            <p className="text-xs text-[#aba59e] leading-relaxed mb-4">
              King Abdulaziz Road, Industrial Zone, Eastern Province, Saudi Arabia
            </p>
            <div className="text-xs text-[#cfcac2] space-y-1.5 border-t border-[#332f2c] pt-3">
              <div><strong>Phone:</strong> +966 13 859 4440</div>
              <div><strong>Email:</strong> info@hashemcontracting.com</div>
              <div><strong>Facility:</strong> 12,000 m² Fabrication Hub</div>
            </div>
          </div>

          {/* Card 2: Riyadh */}
          <div className="p-6 rounded-2xl bg-[#242220] border border-[#332f2c] shadow-xl">
            <span className="text-[10px] font-bold text-[#edd170] uppercase tracking-wider px-2 py-0.5 rounded bg-[#2c2825] border border-[#3b3632] inline-block mb-3">
              Central Region Office
            </span>
            <h3 className="text-base font-bold text-white mb-2">Riyadh Regional Office</h3>
            <p className="text-xs text-[#aba59e] leading-relaxed mb-4">
              King Fahd Road, Al Olaya Commercial District, Riyadh, Saudi Arabia
            </p>
            <div className="text-xs text-[#cfcac2] space-y-1.5 border-t border-[#332f2c] pt-3">
              <div><strong>Phone:</strong> +966 11 489 3320</div>
              <div><strong>Email:</strong> riyadh@hashemcontracting.com</div>
              <div><strong>Focus:</strong> Commercial Towers &amp; Public Works</div>
            </div>
          </div>

          {/* Card 3: Jubail & Yanbu */}
          <div className="p-6 rounded-2xl bg-[#242220] border border-[#332f2c] shadow-xl">
            <span className="text-[10px] font-bold text-[#edd170] uppercase tracking-wider px-2 py-0.5 rounded bg-[#2c2825] border border-[#3b3632] inline-block mb-3">
              Industrial Bases
            </span>
            <h3 className="text-base font-bold text-white mb-2">Jubail &amp; Yanbu Operations</h3>
            <p className="text-xs text-[#aba59e] leading-relaxed mb-4">
              Royal Commission Industrial Zones, Petrochemical Support Centers
            </p>
            <div className="text-xs text-[#cfcac2] space-y-1.5 border-t border-[#332f2c] pt-3">
              <div><strong>Hotline:</strong> +966 50 123 4567</div>
              <div><strong>Email:</strong> industrial@hashemcontracting.com</div>
              <div><strong>Focus:</strong> Plant Shutdowns, Piping &amp; Turnarounds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
