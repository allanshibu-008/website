'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Award,
  Sparkles
} from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'vision' | 'hse'>('overview');
  const [imgSrc, setImgSrc] = useState(
    'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=85'
  );

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#1b1918] overflow-hidden">
      {/* Decorative Gold Ambient Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4b145]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4b145]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* ========================================================================= */}
          {/* Left Column: Professional Architectural Media Frame (45% Width on Desktop) */}
          {/* ========================================================================= */}
          <div className="w-full lg:w-[45%] relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none px-4 sm:px-6 lg:px-0 py-6 sm:py-8">
              
              {/* Custom Architectural Frame Container */}
              <div className="relative p-2.5 sm:p-3.5 rounded-[30px] bg-gradient-to-b from-[#252220] via-[#1b1918] to-[#141312] border-2 border-[#d4b145] shadow-[0_0_35px_rgba(212,177,69,0.18),inset_0_0_20px_rgba(0,0,0,0.5)]">
                
                {/* Inner Image Housing - Perfectly Enclosed */}
                <div 
                  className="relative w-full h-[400px] sm:h-[480px] rounded-[22px] overflow-hidden bg-[#141312] shadow-inner"
                  style={{ isolation: 'isolate' }}
                >
                  <Image
                    src={imgSrc}
                    alt="Hashem General Contracting Site Engineering & Fabrication"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover w-full h-full rounded-[inherit] transition-transform duration-700 ease-out hover:scale-105"
                    onError={() => setImgSrc("https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85")}
                    priority
                  />

                  {/* Soft Cinematic Shadow Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/75 via-transparent to-black/20 pointer-events-none rounded-[inherit]" />
                  
                  {/* Subtle Blueprint Grid inside frame */}
                  <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none rounded-[inherit]" />

                  {/* Corner Architectural Reference Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-mono text-[#d4b145] tracking-widest bg-black/75 backdrop-blur-md px-3 py-1 rounded-md border border-[#d4b145]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4b145] animate-pulse"></span>
                    <span>HASHEM • EST. 2009 KSA</span>
                  </div>
                </div>
              </div>

              {/* Floating Info Card 1: 15+ Years (Sits partially outside top-right) */}
              <div className="absolute -top-3 -right-2 sm:-right-4 z-20 p-3.5 sm:p-4 rounded-2xl bg-[#1c1a18]/95 backdrop-blur-xl border border-[#d4b145]/50 shadow-[0_16px_36px_rgba(0,0,0,0.6)] flex items-center gap-3 card-hover-effect">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4b145] to-[#aa8628] text-black flex items-center justify-center font-extrabold text-lg shadow-md shrink-0">
                  15+
                </div>
                <div>
                  <div className="text-white font-bold text-xs sm:text-sm tracking-wide">Years of Excellence</div>
                  <div className="text-[11px] text-[#edd170] font-medium">Headquartered in KSA</div>
                  <div className="text-[10px] text-[#8e8982]">Civil • Steel • Aluminium</div>
                </div>
              </div>

              {/* Floating Info Card 2: 12,000 m² Facility (Sits partially outside bottom-left) */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 z-20 p-3.5 sm:p-4 rounded-2xl bg-[#1c1a18]/95 backdrop-blur-xl border border-[#d4b145]/50 shadow-[0_16px_36px_rgba(0,0,0,0.6)] flex items-center gap-3 card-hover-effect">
                <div className="w-11 h-11 rounded-xl bg-[#24211f] border border-[#d4b145]/60 text-[#d4b145] flex items-center justify-center shrink-0 shadow">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs sm:text-sm tracking-wide">12,000 m² Facility</div>
                  <div className="text-[11px] text-[#edd170] font-medium">5-Axis European CNC Hub</div>
                  <div className="text-[10px] text-[#8e8982]">Al Khobar / Dammam, KSA</div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* Right Column: Editorial & Value Proposition (55% Width on Desktop) */}
          {/* ========================================================================= */}
          <div className="w-full lg:w-[55%] space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-8 bg-[#d4b145]"></span>
                <span className="text-xs font-bold tracking-widest text-[#d4b145] uppercase">
                  About Hashem General Contracting Est.
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Where Engineering Meets <br />
                <span className="gold-gradient-text">Precision Craftsmanship.</span>
              </h2>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 border-b border-[#2e2a27] pb-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'overview'
                    ? 'bg-[#d4b145] text-black shadow'
                    : 'text-[#9c9790] hover:text-white hover:bg-[#252220]'
                }`}
              >
                Company Overview
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'vision'
                    ? 'bg-[#d4b145] text-black shadow'
                    : 'text-[#9c9790] hover:text-white hover:bg-[#252220]'
                }`}
              >
                Vision 2030 &amp; Mission
              </button>
              <button
                onClick={() => setActiveTab('hse')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'hse'
                    ? 'bg-[#d4b145] text-black shadow'
                    : 'text-[#9c9790] hover:text-white hover:bg-[#252220]'
                }`}
              >
                Safety &amp; Quality Standards
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-sm sm:text-base text-[#c4beb6] leading-relaxed">
                  At <strong className="text-white">Hashem General Contracting Est.</strong>, we understand that every project is unique and requires a customized engineering approach. We specialize in delivering comprehensive construction, aluminium fabrication, and engineering solutions for residential, commercial, institutional, and industrial sectors throughout Saudi Arabia.
                </p>
                <p className="text-sm sm:text-base text-[#9e9992] leading-relaxed">
                  From concept to completion, our experienced professionals combine technical expertise, innovation, and precision craftsmanship to deliver projects that exceed client expectations, adhering strictly to the highest international quality standards.
                </p>
              </div>
            )}

            {/* Tab 2: Vision */}
            {activeTab === 'vision' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-sm sm:text-base text-[#c4beb6] leading-relaxed">
                  Our mission is to lead the Kingdom&apos;s transformation into an industrial and architectural powerhouse by delivering world-class structural and facade engineering.
                </p>
                <p className="text-sm sm:text-base text-[#9e9992] leading-relaxed">
                  Aligned with <strong className="text-[#d4b145]">Saudi Vision 2030</strong>, we invest heavily in local manufacturing capacity, cutting-edge automated fabrication technology, and empowering Saudi engineering talent across mega infrastructure projects.
                </p>
              </div>
            )}

            {/* Tab 3: HSE */}
            {activeTab === 'hse' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-sm sm:text-base text-[#c4beb6] leading-relaxed">
                  We operate with an unyielding commitment to Occupational Health, Safety, and Environmental protection (HSE). Certified to ISO 9001:2015 and ISO 45001:2018, every project adheres to strict Saudi Civil Defense and Saudi Aramco safety protocols.
                </p>
                <p className="text-sm sm:text-base text-[#9e9992] leading-relaxed">
                  Our zero-harm policy has resulted in over 1.8 million continuous safe manhours across complex industrial shutdowns and high-rise curtain wall erections.
                </p>
              </div>
            )}

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Engineering Excellence & 3D BIM",
                "Advanced 12,000 m² Fabrication Hub",
                "Certified Skilled Workforce (6G Welders)",
                "100% Client Satisfaction & On-Time Delivery",
                "Rigorous QA/QC & SASO Compliance",
                "Turnkey Design-Build Accountability"
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#ded9d2]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4b145] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3 rounded-lg bg-[#272422] hover:bg-[#332f2c] border border-[#d4b145]/40 hover:border-[#d4b145] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 group"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4 text-[#d4b145] transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+966570174535"
                className="text-xs sm:text-sm text-[#d4b145] font-semibold hover:underline flex items-center gap-1.5"
              >
                <span>Direct Inquiry: +966 57 017 4535</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
