'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building2 
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Aluminium Fabrication & Glazing',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'Aluminium Fabrication & Glazing',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#1b1918] border-t border-[#2a2624]">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
            Direct Communications
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Connect with Our <br />
            <span className="gold-gradient-text">Engineering Team.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#aba59c] mt-4 leading-relaxed">
            Reach out for tenders, commercial inquiries, facade consultations, or site inspections across the Kingdom of Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Contacts & Google Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="p-6 rounded-2xl bg-[#22201e] border border-[#332f2b] shadow-xl">
              <span className="text-[11px] font-bold text-[#d4b145] uppercase tracking-wider block mb-2">
                Kingdom Headquarters &amp; Factory Hub
              </span>
              <h3 className="text-lg font-bold text-white mb-4">
                Hashem General Contracting Est.
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#aba59e]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4b145] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Main Office &amp; Fabrication Plant:</strong>
                    King Abdulaziz Road, Industrial Area, Al Khobar / Dammam, Eastern Province, Kingdom of Saudi Arabia
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4b145] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Riyadh Regional Office:</strong>
                    King Fahd Road, Al Olaya District, Riyadh, Kingdom of Saudi Arabia
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4b145] shrink-0" />
                  <div>
                    <a href="tel:+966570174535" className="text-white hover:text-[#d4b145] transition-colors font-medium">
                      +966 57 017 4535
                    </a>
                    <span className="text-[#88837c] text-xs ml-2">(Direct Line)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-[#d4b145] shrink-0" />
                  <div>
                    <a 
                      href="https://wa.me/966570174535" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[#d4b145] font-semibold hover:underline"
                    >
                      +966 57 017 4535 (Direct WhatsApp)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#d4b145] shrink-0" />
                  <a href="mailto:info@hashemcontracting.com" className="text-white hover:text-[#d4b145] transition-colors">
                    info@hashemcontracting.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#d4b145] shrink-0" />
                  <span>Sunday – Thursday: 7:30 AM – 5:30 PM (AST)</span>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#332f2b] shadow-xl h-64 relative bg-[#181615]">
              <iframe
                title="Hashem General Contracting Est Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114407.41249767675!2d50.11718047539423!3d26.338573216812833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e830509a25db%3A0x86144e1f7d457497!2sAl%20Khobar%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1710000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-3 left-3 bg-[#1b1918]/90 backdrop-blur-md px-3 py-1 rounded text-[11px] font-bold text-[#d4b145] border border-[#d4b145]/30">
                Eastern Province Hub, KSA
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Tender Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#22201e] border border-[#d4b145]/30 shadow-2xl relative">
              <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-1">
                Tender Inquiries &amp; General Contracting
              </span>
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Us a Direct Message
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#d4b145]/15 border border-[#d4b145] flex items-center gap-3 text-white text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#d4b145]" />
                  <span>Your message has been dispatched to our engineering desk. We will respond promptly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#a09b95] mb-1.5 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eng. Khalid Al-Otaibi"
                      className="w-full px-4 py-3 rounded-lg bg-[#181615] border border-[#38332f] text-sm text-white placeholder-[#6d6862] focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#a09b95] mb-1.5 font-medium">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Saudi Modern Contractors"
                      className="w-full px-4 py-3 rounded-lg bg-[#181615] border border-[#38332f] text-sm text-white placeholder-[#6d6862] focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#a09b95] mb-1.5 font-medium">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#181615] border border-[#38332f] text-sm text-white placeholder-[#6d6862] focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#a09b95] mb-1.5 font-medium">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full px-4 py-3 rounded-lg bg-[#181615] border border-[#38332f] text-sm text-white placeholder-[#6d6862] focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#a09b95] mb-1.5 font-medium">Primary Service of Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#181615] border border-[#38332f] text-sm text-white focus:outline-none focus:border-[#d4b145]"
                  >
                    <option value="Aluminium Fabrication & Glazing">Aluminium Fabrication &amp; Architectural Glazing</option>
                    <option value="Civil Construction & Infrastructure">Civil Construction &amp; Infrastructure</option>
                    <option value="Structural Steel Fabrication">Structural Steel Fabrication</option>
                    <option value="Mechanical Engineering & HVAC">Mechanical Engineering &amp; HVAC</option>
                    <option value="Industrial Piping & RO Systems">Industrial Piping &amp; RO Systems</option>
                    <option value="Plant Maintenance & Turnaround">Industrial Plant Maintenance &amp; Turnaround</option>
                    <option value="Turnkey General Contracting Package">Turnkey General Contracting Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#a09b95] mb-1.5 font-medium">Message &amp; Project Scope *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about project location, scale, drawing availability, or tender deadlines..."
                    className="w-full px-4 py-3 rounded-lg bg-[#181615] border border-[#38332f] text-sm text-white placeholder-[#6d6862] focus:outline-none focus:border-[#d4b145]"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#8e8982]">
                    ✓ Guaranteed response within 24 business hours.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#d4b145] hover:bg-[#edd170] text-[#1b1918] font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
