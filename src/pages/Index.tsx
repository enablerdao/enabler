
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
import SimpleIllustration from '@/components/SimpleIllustration';
import { logActivity } from '@/lib/logger';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/' });
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <HeroStats />
        <div className="py-8">
          <SimpleIllustration className="my-16" />
        </div>
        <AboutSection />
        <ServiceCategories />
        <Testimonials />
        <LatestNews />
        <PartnerLogos />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
