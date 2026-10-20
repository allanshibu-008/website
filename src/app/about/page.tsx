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
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4b145]/40 shadow-2xl h-[460px]">
              <Image
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                alt="Hashem Precision Engineering Yard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#1b1918]/90 backdrop-blur-md border border-[#d4b145]/40">
                <span className="text-xs text-[#d4b145] font-bold uppercase tracking-wider block">12,000 m² Facility</span>
                <span className="text-sm text-white font-medium">Equipped with European 5-Axis CNC &amp; Automated Assembly</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
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
