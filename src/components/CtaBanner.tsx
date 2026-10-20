'use client';

import React from 'react';
import { ArrowRight, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export default function CtaBanner({ onOpenQuoteModal }: CtaBannerProps) {
  return (
    <section className="py-20 relative bg-[#141312] border-t border-[#2a2624] overflow-hidden">
      {/* Background Architectural Blueprint */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      {/* Gold Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#d4b145]/10 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#24211f] via-[#1c1a18] to-[#252220] border-2 border-[#d4b145]/40 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          {/* Top Gold Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#b5922f] via-[#edd170] to-[#b5922f]"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1918] border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4" />
            Kingdom-Wide Contracting Excellence
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to Build with <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Absolute Confidence?</span>
          </h2>

          <p className="text-sm sm:text-lg text-[#cfcac2] max-w-2xl mx-auto mb-10 leading-relaxed">
            Partner with Hashem General Contracting Est. for world-class aluminium facades, heavy structural steel, civil construction, and mechanical HVAC installations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#d4b145] hover:bg-[#edd170] text-[#1b1918] font-bold text-base tracking-wide transition-all shadow-xl hover:shadow-[#d4b145]/40 flex items-center justify-center gap-3 group"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:+966570174535"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#262321] hover:bg-[#322e2a] text-white border border-[#3b3632] hover:border-[#d4b145] font-semibold text-base transition-colors flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#d4b145]" />
              <span>Call +966 57 017 4535</span>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-[#2f2b28] flex flex-wrap items-center justify-center gap-6 text-xs text-[#8e8982]">
            <span>✓ Quick 24-Hour Estimation Response</span>
            <span>✓ Complete Bill of Quantities (BOQ) Review</span>
            <span>✓ Saudi Building Code (SBC) Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
