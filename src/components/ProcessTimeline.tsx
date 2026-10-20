'use client';

import React, { useState } from 'react';
import { ENGINEERING_PROCESS_STEPS } from '@/data/websiteData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  FileCheck, 
  Cpu, 
  Hammer, 
  ShieldCheck, 
  Truck, 
  Award 
} from 'lucide-react';

const stepIcons = [
  Compass,
  FileCheck,
  Cpu,
  Hammer,
  ShieldCheck,
  Truck,
  Award,
];

export default function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="py-24 sm:py-32 relative bg-[#1b1918] overflow-hidden">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid-subtle opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
            Structured Execution
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Precision Engineering <br />
            <span className="gold-gradient-text">&amp; Delivery Process.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a8a39c] mt-4 leading-relaxed">
            From initial concept consultation to factory CNC fabrication, on-site erection, and SASO certified handover, our 7-stage workflow ensures uncompromised quality and on-schedule project completion.
          </p>
        </div>

        {/* Process Steps Horizontal Navigator (Desktop) & Step List */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#2d2926] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
            {ENGINEERING_PROCESS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || CheckCircle2;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3.5 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 ${
                    isActive
                      ? 'bg-[#d4b145] border-[#d4b145] text-black shadow-xl scale-105'
                      : 'bg-[#22201e] border-[#332f2b] text-[#9e9992] hover:border-[#d4b145]/40 hover:text-white'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-black text-[#d4b145]' : 'bg-[#2b2724] text-[#d4b145]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold">{step.step}</span>
                  <span className="text-[11px] font-bold line-clamp-1 leading-tight">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Spotlight Box */}
        <div className="bg-gradient-to-br from-[#22201e] to-[#181615] border border-[#d4b145]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#d4b145] uppercase tracking-wider">
                <span>Stage {ENGINEERING_PROCESS_STEPS[activeStepIndex].step} of 07</span>
                <span>•</span>
                <span>Quality Gate Verified</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {ENGINEERING_PROCESS_STEPS[activeStepIndex].title}
              </h3>

              <p className="text-sm sm:text-base text-[#b8b3ab] leading-relaxed">
                {ENGINEERING_PROCESS_STEPS[activeStepIndex].desc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#d4b145] font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> ISO 9001 Compliance Gate
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> BIM / CAD Model Traceability
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Consultant Sign-Off Milestone
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center items-center p-6 bg-[#1b1918] rounded-xl border border-[#332f2b] text-center">
              <div className="w-16 h-16 rounded-full bg-[#d4b145]/15 border-2 border-[#d4b145] flex items-center justify-center text-[#d4b145] font-mono font-extrabold text-2xl mb-3">
                {ENGINEERING_PROCESS_STEPS[activeStepIndex].step}
              </div>
              <div className="text-xs text-[#8f8a84] uppercase tracking-wider font-semibold">
                Milestone Status
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                Standard SLA Protocol
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
