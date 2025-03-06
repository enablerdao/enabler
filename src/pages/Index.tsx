
import React, { useEffect } from 'react';
import { logActivity } from '@/lib/logger';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CallToAction from '@/components/CallToAction';
import SimpleFooter from '@/components/SimpleFooter';

const Index = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CallToAction />
      <SimpleFooter />
    </div>
  );
};

export default Index;
