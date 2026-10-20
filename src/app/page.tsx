'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import AluminiumSpotlight from '@/components/AluminiumSpotlight';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import CertificationsSection from '@/components/CertificationsSection';
import ClientsCarousel from '@/components/ClientsCarousel';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('aluminium-fabrication');

  const handleOpenQuote = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedService(serviceId);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#1b1918] text-[#f7f7f7] selection:bg-[#d4b145] selection:text-black">
      {/* Sticky Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Hero Section */}
      <main>
        <Hero onOpenQuoteModal={() => handleOpenQuote()} />

        {/* Company Key Statistics */}
        <StatsSection />

        {/* About Hashem Section */}
        <AboutSection />

        {/* Featured Flagship Division: Aluminium Fabrication & Glazing */}
        <AluminiumSpotlight onOpenQuoteModal={() => handleOpenQuote('aluminium-fabrication')} />

        {/* Core Multi-Disciplinary Services */}
        <ServicesSection />

        {/* Industries We Serve */}
        <IndustriesSection />

        {/* Why Choose Hashem Collage & Features */}
        <WhyChooseUs />

        {/* Featured Projects Portfolio */}
        <ProjectsSection />

        {/* 7-Step Interactive Engineering Process */}
        <ProcessTimeline />

        {/* Certifications & Regulatory Accreditations */}
        <CertificationsSection />

        {/* Client & Partner Logos Marquee */}
        <ClientsCarousel />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Visual Media Gallery & Lightbox */}
        <GallerySection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Final Conversion Call To Action */}
        <CtaBanner onOpenQuoteModal={() => handleOpenQuote()} />

        {/* Contact, Map & Direct Messaging */}
        <ContactSection />
      </main>

      {/* 4-Column Luxury Footer */}
      <Footer />

      {/* Global RFQ / Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={preselectedService}
      />
    </div>
  );
}
