'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/websiteData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 relative bg-[#1b1918]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
            Answers &amp; Technical Clarifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <br />
            <span className="gold-gradient-text">Questions.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a8a39c] mt-4 leading-relaxed">
            Everything you need to know about partnering with Hashem General Contracting Est. for your commercial or industrial projects.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#242220] border-[#d4b145]/60 shadow-lg'
                    : 'bg-[#1f1d1b] border-[#2e2a28] hover:border-[#3d3834]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-[#d4b145] font-mono text-xs">0{idx + 1}</span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#2b2724] text-[#d4b145] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#d4b145] text-black' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#b8b2aa] leading-relaxed border-t border-[#2e2a27]/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Inquiry */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#22201e] border border-[#332f2b]">
          <div className="text-sm font-bold text-white mb-1">
            Have a specific engineering query or tender deadline?
          </div>
          <p className="text-xs text-[#99948e] mb-4">
            Our estimating department is available for immediate consultations and RFP reviews.
          </p>
          <a
            href="https://wa.me/966501234567"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4b145] text-black font-bold text-xs hover:bg-[#edd170] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
