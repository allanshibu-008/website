'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import StatsSection from '@/components/StatsSection';
import CertificationsSection from '@/components/CertificationsSection';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Compass, 
  Cpu, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  HardHat,
  ChevronRight
} from 'lucide-react';

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1b1918] text-[#f7f7f7] selection:bg-[#d4b145] selection:text-black">
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Page Header */}
      <section className="relative pt-36 pb-20 bg-[#141312] border-b border-[#2a2624] overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-[#a09b95] mb-6">
            <Link href="/" className="hover:text-[#d4b145]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5e5852]" />
            <span className="text-[#d4b145] font-semibold">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
              Corporate Heritage &amp; Vision
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Where Engineering Meets <br />
              <span className="gold-gradient-text">Precision Craftsmanship.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#cfcac2] mt-4 leading-relaxed">
              Hashem General Contracting Est. is an international-standard contracting and precision fabrication enterprise headquartered in the Eastern Province, Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsSection />

      {/* Detailed Corporate Heritage */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none px-4 sm:px-6 lg:px-0 py-6">
              {/* Custom Architectural Frame Container */}
              <div className="relative p-2.5 sm:p-3.5 rounded-[30px] bg-gradient-to-b from-[#252220] via-[#1b1918] to-[#141312] border-2 border-[#d4b145] shadow-[0_0_35px_rgba(212,177,69,0.18),inset_0_0_20px_rgba(0,0,0,0.5)]">
                <div 
                  className="relative w-full h-[400px] sm:h-[480px] rounded-[22px] overflow-hidden bg-[#141312] shadow-inner"
                  style={{ isolation: 'isolate' }}
                >
                  <Image
                    src="/images/about/fabrication-plant.jpg"
                    alt="Hashem Precision Engineering Yard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover w-full h-full rounded-[inherit] transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/75 via-transparent to-black/20 pointer-events-none rounded-[inherit]" />
                  <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none rounded-[inherit]" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-mono text-[#d4b145] tracking-widest bg-black/75 backdrop-blur-md px-3 py-1 rounded-md border border-[#d4b145]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4b145] animate-pulse"></span>
                    <span>HASHEM • PLANT HUB</span>
                  </div>
                </div>
              </div>

              {/* Floating Card: 15+ Years */}
              <div className="absolute -top-3 -right-2 sm:-right-4 z-20 p-3.5 sm:p-4 rounded-2xl bg-[#1c1a18]/95 backdrop-blur-xl border border-[#d4b145]/50 shadow-[0_16px_36px_rgba(0,0,0,0.6)] flex items-center gap-3 card-hover-effect">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4b145] to-[#aa8628] text-black flex items-center justify-center font-extrabold text-lg shadow-md shrink-0">
                  15+
                </div>
                <div>
                  <div className="text-white font-bold text-xs sm:text-sm tracking-wide">Years of Excellence</div>
                  <div className="text-[11px] text-[#edd170] font-medium">Headquartered in KSA</div>
                </div>
              </div>

              {/* Floating Card: 12,000 m² Facility */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 z-20 p-3.5 sm:p-4 rounded-2xl bg-[#1c1a18]/95 backdrop-blur-xl border border-[#d4b145]/50 shadow-[0_16px_36px_rgba(0,0,0,0.6)] flex items-center gap-3 card-hover-effect">
                <div className="w-11 h-11 rounded-xl bg-[#24211f] border border-[#d4b145]/60 text-[#d4b145] flex items-center justify-center shrink-0 shadow">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs sm:text-sm tracking-wide">12,000 m² Facility</div>
                  <div className="text-[11px] text-[#edd170] font-medium">5-Axis European CNC Hub</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              A Legacy of Disciplined Engineering Across Saudi Arabia
            </h2>
            <p className="text-sm sm:text-base text-[#aba59c] leading-relaxed">
              Founded over 15 years ago, Hashem General Contracting Est. was established with a clear mandate: to bring German and European engineering precision to the rapidly expanding construction, industrial, and architectural sectors of the Kingdom of Saudi Arabia.
            </p>
            <p className="text-sm sm:text-base text-[#aba59c] leading-relaxed">
              Today, Hashem operates as an integrated multi-disciplinary contractor delivering turnkey architectural aluminium facades, certified structural steel buildings, heavy civil infrastructure, and advanced mechanical HVAC plants for high-profile clients in Al Khobar, Dammam, Jubail, Riyadh, and Jeddah.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#22201e] border border-[#332f2b]">
                <span className="text-xl font-bold text-[#d4b145] block">250+</span>
                <span className="text-xs text-[#a09b95] mt-1 block">Completed Projects</span>
              </div>
              <div className="p-4 rounded-xl bg-[#22201e] border border-[#332f2b]">
                <span className="text-xl font-bold text-[#d4b145] block">100%</span>
                <span className="text-xs text-[#a09b95] mt-1 block">Audit Pass Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Commitment */}
      <section className="py-20 bg-[#141312] border-y border-[#2a2624]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#24211f] via-[#1c1a18] to-[#252220] border border-[#d4b145]/40 shadow-2xl">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-[#d4b145] uppercase tracking-widest block mb-2">
                Kingdom Alignment
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                Proud Contributor to Saudi Vision 2030
              </h2>
              <p className="text-sm sm:text-base text-[#cfcac2] leading-relaxed mb-6">
                Under the visionary leadership of the Kingdom of Saudi Arabia, Vision 2030 drives unprecedented infrastructure, giga-projects, and domestic industrialization. Hashem Contracting actively contributes through high local content (IKTVA), Saudization in skilled engineering disciplines, and green building facade solutions that curtail building energy consumption.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#d4b145]">
                <span>✓ High Local In-Kingdom Value Add</span>
                <span>✓ Energy-Efficient Low-E Facades</span>
                <span>✓ Training Saudi National Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <CertificationsSection />

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
