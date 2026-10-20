'use client';

import React from 'react';
import { CERTIFICATIONS } from '@/data/websiteData';
import { ShieldCheck, Award, CheckCircle, FileText } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section className="py-20 relative bg-[#141312] border-t border-[#262321]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-3">
            Standards &amp; Accreditation
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Accreditations &amp; Regulatory Compliance
          </h2>
          <p className="text-xs sm:text-sm text-[#9c9791] mt-2">
            Hashem General Contracting Est. maintains certified compliance with Saudi national codes and international engineering standards.
          </p>
        </div>

        {/* 6 Certification Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="p-5 rounded-xl bg-[#1b1918] border border-[#2e2a27] hover:border-[#d4b145]/60 card-hover-effect text-center flex flex-col items-center justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-[#242220] border border-[#38332f] flex items-center justify-center text-[#d4b145] mb-3 shadow">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#d4b145] uppercase tracking-wider block mb-1">
                  {cert.badge}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  {cert.name}
                </h4>
                <p className="text-[11px] text-[#8e8982] leading-tight">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
