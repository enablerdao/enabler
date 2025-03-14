
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import SEO from '../components/SEO';
import OGImage from '../components/OGImage';
import { calculateColorForYear } from '@/components/brand-guidelines/color-utils/color-calculator';
import ReactDOMServer from 'react-dom/server';

const Index = () => {
  const currentYear = new Date().getFullYear();
  const brandColor = calculateColorForYear(currentYear);
  const location = useLocation();
  
  useEffect(() => {
    logActivity('pageView', { path: '/' });
  }, []);
  
  useEffect(() => {
    // Check if we need to scroll to a specific section based on navigation state
    if (location.state) {
      const state = location.state as { scrollToServices?: boolean; scrollToContact?: boolean };
      
      setTimeout(() => {
        if (state.scrollToServices) {
          const servicesSection = document.getElementById('services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (state.scrollToContact) {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 500); // Short delay to ensure the DOM is ready
    }
  }, [location.state]);

  // Render OGImage to string and encode for use in meta tag
  const ogImageSvg = ReactDOMServer.renderToStaticMarkup(<OGImage path="/" />);
  const encodedOgImage = `data:image/svg+xml,${encodeURIComponent(ogImageSvg)}`;

  return (
    <div className="overflow-hidden">
      <SEO ogImage={encodedOgImage} path="/" />
      <Navbar />
      <main className="mx-auto px-4 sm:px-6 lg:px-8">
        <Hero brandColor={brandColor} />
        <HeroStats brandColor={brandColor} />
        <div className="my-8 sm:my-12 md:my-16">
          <AboutSection />
        </div>
        <div className="my-8 sm:my-12 md:my-16" id="services">
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
        <div className="my-8 sm:my-12 md:my-16" id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
