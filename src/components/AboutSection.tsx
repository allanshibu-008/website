'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Target, 
  Compass, 
  Cpu, 
  Users 
} from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'vision' | 'hse'>('overview');

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#1b1918] overflow-hidden">
      {/* Decorative Gold Accent Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4b145]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d4b145]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Gold Borders */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4b145]/30 shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80"
                  alt="Hashem General Contracting Site Engineering"
                  width={800}
                  height={560}
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-80" />
                
                {/* Floating Bottom Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#1b1918]/90 backdrop-blur-md border border-[#d4b145]/40 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#d4b145] text-black flex items-center justify-center font-bold text-lg">
                      15+
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Years of Trusted Engineering</div>
                      <div className="text-xs text-[#d4b145]">Headquartered in Eastern Province, KSA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Image (Top Right) */}
              <div className="absolute -top-6 -right-4 sm:-right-8 w-44 sm:w-56 rounded-xl overflow-hidden border-2 border-[#d4b145] shadow-2xl hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80"
                  alt="Certified Steel Welding Hashem"
                  width={400}
                  height={280}
                  className="w-full h-32 sm:h-36 object-cover"
                />
              </div>

              {/* Overlapping Bottom Left Engineering CAD Tag */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#252220] border border-[#d4b145]/40 p-3.5 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <Cpu className="w-6 h-6 text-[#d4b145]" />
                <div className="text-left">
                  <span className="text-white font-bold text-xs block">12,000 m² Facility</span>
                  <span className="text-[11px] text-[#a09b95]">5-Axis European CNC Tech</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
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
                Vision 2030 & Mission
              </button>
              <button
                onClick={() => setActiveTab('hse')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'hse'
                    ? 'bg-[#d4b145] text-black shadow'
                    : 'text-[#9c9790] hover:text-white hover:bg-[#252220]'
                }`}
              >
                Safety & Quality Standards
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

            {/* Action Button */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3 rounded-lg bg-[#272422] hover:bg-[#332f2c] border border-[#d4b145]/40 hover:border-[#d4b145] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 group"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4 text-[#d4b145] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
