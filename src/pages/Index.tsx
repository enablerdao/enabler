
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

const Index = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/' });
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="mx-1">
        <Hero />
        <HeroStats />
        <div className="my-1">
          <AboutSection />
        </div>
        <div className="my-1">
          <ServiceCategories />
        </div>
        <div className="my-1">
          <Testimonials />
        </div>
        <div className="my-5">
          <LatestNews />
        </div>
        <div className="my-1">
          <PartnerLogos />
        </div>
        <div className="my-1">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
