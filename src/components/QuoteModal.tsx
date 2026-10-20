'use client';

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Layers, 
  Hammer, 
  Wind, 
  Cpu, 
  Wrench, 
  FileText,
  Clock,
  MapPin
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
  const [selectedDivision, setSelectedDivision] = useState(preselectedService || 'aluminium-fabrication');
  const [location, setLocation] = useState('Eastern Province (Khobar / Dammam / Jubail)');
  const [projectScale, setProjectScale] = useState('');
  const [timeline, setTimeline] = useState('Immediate (Within 1-3 Months)');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate real RFQ processing
    setTimeout(() => {
      const ref = `HAS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setQuoteReference(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const divisions = [
    { id: 'aluminium-fabrication', label: 'Aluminium & Curtain Walls', icon: Layers },
    { id: 'civil-works', label: 'Civil Works & Construction', icon: Building2 },
    { id: 'steel-fabrication', label: 'Structural Steel Fabrication', icon: Hammer },
    { id: 'mechanical-hvac', label: 'Mechanical & HVAC Systems', icon: Wind },
    { id: 'piping-works', label: 'Industrial Piping & RO Systems', icon: Cpu },
    { id: 'industrial-maintenance', label: 'Plant Maintenance & Turnaround', icon: Wrench },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#1c1a18] border border-[#d4b145]/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Border */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#b5922f] via-[#edd170] to-[#b5922f]"></div>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#2d2926] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest text-[#d4b145] uppercase px-2 py-0.5 rounded bg-[#d4b145]/15 border border-[#d4b145]/30">
                Official Tender / RFQ Portal
              </span>
              <span className="text-xs text-[#8c8780] hidden sm:inline">
                Kingdom of Saudi Arabia
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Request an Engineering Quotation
            </h2>
            <p className="text-xs sm:text-sm text-[#a8a39d] mt-0.5">
              Hashem General Contracting Est. — Fast, certified technical feasibility & BOQ review.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#272422] text-[#a8a39d] hover:text-white hover:bg-[#332f2c] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#d4b145]/20 border-2 border-[#d4b145] flex items-center justify-center mx-auto text-[#d4b145]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Quotation Request Received</h3>
                <p className="text-sm text-[#b5b0a8] max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-white">{name}</strong>. Your engineering proposal request has been logged in our estimator queue.
                </p>
              </div>

              <div className="inline-block bg-[#242220] border border-[#d4b145]/30 rounded-xl p-4 text-center">
                <span className="text-xs text-[#a09c95] uppercase tracking-wider block">Reference Number</span>
                <span className="text-2xl font-mono font-bold text-[#d4b145] tracking-widest mt-0.5 block">
                  {quoteReference}
                </span>
                <span className="text-[11px] text-[#837e78] mt-1 block">
                  A copy has been routed to estimating@hashemcontracting.com
                </span>
              </div>

              <p className="text-xs text-[#8f8a84] max-w-md mx-auto">
                Our Chief Estimator or Senior Facade Engineer will contact you at <strong className="text-white">{email}</strong> or <strong className="text-white">{phone}</strong> within 24 business hours.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-lg bg-[#d4b145] text-[#1b1918] font-bold text-sm hover:bg-[#edd170] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Select Division */}
              <div>
                <label className="block text-xs font-semibold text-[#d4b145] uppercase tracking-wider mb-2.5">
                  1. Select Primary Engineering Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {divisions.map((div) => {
                    const Icon = div.icon;
                    const isSelected = selectedDivision === div.id;
                    return (
                      <button
                        type="button"
                        key={div.id}
                        onClick={() => setSelectedDivision(div.id)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-[#d4b145]/20 border-[#d4b145] text-white shadow-md'
                            : 'bg-[#22201e] border-[#332f2b] text-[#aba59c] hover:border-[#524c45]'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#d4b145] text-black' : 'bg-[#2b2724] text-[#d4b145]'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="line-clamp-2">{div.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#c4beb6] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d4b145]" />
                    Project Location (KSA)
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#242220] border border-[#3b3632] text-xs text-white focus:outline-none focus:border-[#d4b145]"
                  >
                    <option value="Eastern Province (Khobar / Dammam / Jubail)">Eastern Province (Khobar / Dammam / Jubail)</option>
                    <option value="Riyadh Central Region">Riyadh Central Region</option>
                    <option value="Western Province (Jeddah / Makkah / Madinah)">Western Province (Jeddah / Makkah / Madinah)</option>
                    <option value="Yanbu Industrial City">Yanbu Industrial City</option>
                    <option value="Neom / Tabuk North">Neom / Tabuk North</option>
                    <option value="Southern Region (Jazan / Abha)">Southern Region (Jazan / Abha)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c4beb6] mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#d4b145]" />
                    Estimated Scale / Scope
                  </label>
                  <input
                    type="text"
                    value={projectScale}
                    onChange={(e) => setProjectScale(e.target.value)}
                    placeholder="e.g. 5,000 m² or 400 Tons"
                    className="w-full px-3 py-2.5 rounded-lg bg-[#242220] border border-[#3b3632] text-xs text-white placeholder-[#78736d] focus:outline-none focus:border-[#d4b145]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c4beb6] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4b145]" />
                    Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#242220] border border-[#3b3632] text-xs text-white focus:outline-none focus:border-[#d4b145]"
                  >
                    <option value="Immediate (Within 1-3 Months)">Immediate (Within 1-3 Months)</option>
                    <option value="Tendering Phase (3-6 Months)">Tendering Phase (3-6 Months)</option>
                    <option value="Engineering & Design Stage">Engineering & Design Stage</option>
                    <option value="Annual Maintenance Contract">Annual Maintenance Contract</option>
                  </select>
                </div>
              </div>

              {/* Client & Contractor Information */}
              <div>
                <label className="block text-xs font-semibold text-[#d4b145] uppercase tracking-wider mb-2.5">
                  2. Contact & Commercial Entity Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs text-[#a09a92] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Eng. Abdullah Al-Harbi"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#242220] border border-[#3b3632] text-xs text-white placeholder-[#78736d] focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#a09a92] mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Saudi Development Partners"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#242220] border border-[#3b3632] text-xs text-white placeholder-[#78736d] focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#a09a92] mb-1">Corporate Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#242220] border border-[#3b3632] text-xs text-white placeholder-[#78736d] focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#a09a92] mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#242220] border border-[#3b3632] text-xs text-white placeholder-[#78736d] focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>
                </div>
              </div>

              {/* Message / Specifications */}
              <div>
                <label className="block text-xs text-[#a09a92] mb-1">
                  Project Description, Bill of Quantities (BOQ) or Technical Specifications
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide scope details (e.g., unitized curtain wall glass specifications, steel beam tonnage, HVAC chiller requirements, or tender submission deadlines)..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#242220] border border-[#3b3632] text-xs text-white placeholder-[#78736d] focus:outline-none focus:border-[#d4b145]"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2e2a27]">
                <div className="text-xs text-[#8f8a84] text-center sm:text-left">
                  🔒 Confidential corporate submittal under Hashem NDAs.
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-lg bg-[#272422] hover:bg-[#332f2c] text-white text-xs font-semibold transition-colors flex-1 sm:flex-initial"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-2.5 rounded-lg bg-[#d4b145] hover:bg-[#edd170] text-[#1b1918] text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-initial shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit RFQ <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
