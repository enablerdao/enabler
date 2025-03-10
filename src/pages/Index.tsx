
import React from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServiceCategories from '@/components/ServiceCategories';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroStats from '@/components/HeroStats';
import LatestNews from '@/components/LatestNews';
import PartnerLogos from '@/components/PartnerLogos';
import Testimonials from '@/components/Testimonials';
import { logActivity } from '@/lib/logger';
import { useEffect } from 'react';
import SEO from '../components/SEO';

const Index = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/' });
  }, []);

  return (
    <div className="overflow-hidden">
      <SEO />
      <Navbar />
      <main className="mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <HeroStats />
        <div className="my-8 sm:my-12 md:my-16">
          <AboutSection />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <ServiceCategories />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <Testimonials />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <LatestNews />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <PartnerLogos />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
