
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { logActivity } from '@/lib/logger';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CallToAction from '@/components/CallToAction';
import SimpleFooter from '@/components/SimpleFooter';
import PageLoader from '@/components/ui/page-loader';

const Index = () => {
  const [pageLoading, setPageLoading] = useState(true);
  
  useEffect(() => {
    // Track page view
    logActivity('pageView', { path: '/' });
    
    // Simulate initial page loading
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {pageLoading && <PageLoader isLoading={pageLoading} />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <HeroSection />
        <ServicesSection />
        <CallToAction />
        <SimpleFooter />
      </div>
    </>
  );
};

export default Index;
