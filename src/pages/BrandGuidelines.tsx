
import React, { useEffect, useState } from 'react';
import { logActivity } from '@/lib/logger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrandHeader from '@/components/brand-guidelines/BrandHeader';
import BrandStory from '@/components/brand-guidelines/BrandStory';
import LogoSection from '@/components/brand-guidelines/LogoSection';
import BrandColors from '@/components/brand-guidelines/BrandColors';
import Typography from '@/components/brand-guidelines/Typography';
import VoiceAndTone from '@/components/brand-guidelines/VoiceAndTone';
import ImageGuidelinesSection from '@/components/brand-guidelines/image-guidelines/ImageGuidelinesSection';
import DownloadableResources from '@/components/brand-guidelines/downloads/DownloadableResources';
import FAQSection from '@/components/brand-guidelines/faq/FAQSection';
import SearchBar from '@/components/brand-guidelines/search/SearchBar';
import { calculateColorForYear } from '@/components/brand-guidelines/color-utils/color-calculator';
import { FriendlyLoading } from '@/components/ui/friendly-loading';

const BrandGuidelines = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [currentYearColor, setCurrentYearColor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
    
    // Calculate current year's color
    const yearColor = calculateColorForYear(currentYear);
    setCurrentYearColor(yearColor);
    
    // Simulating loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [currentYear]);

  if (loading || !currentYearColor) {
    return (
      <>
        <Navbar />
        <div className="flex-grow flex items-center justify-center min-h-[calc(100vh-64px)]">
          <FriendlyLoading variant="robot" size="lg" />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-blue-50/50 to-white min-h-screen">
        {/* Header Section */}
        <div className="pt-16 md:pt-20">
          <BrandHeader />
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-12">
          {/* Search Bar */}
          <div className="mb-8 mt-4 max-w-2xl mx-auto">
            <SearchBar />
          </div>
          
          {/* Brand Story in a single column */}
          <div className="space-y-10 mb-12">
            <BrandStory />
            <LogoSection currentYearColor={currentYearColor} />
          </div>
          
          {/* Brand Colors */}
          <BrandColors currentYearColor={currentYearColor} brandColors={[]} />
          
          {/* Typography & Voice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Typography />
            <VoiceAndTone />
          </div>
          
          {/* Photos & Illustrations */}
          <ImageGuidelinesSection />
          
          {/* Downloadable Resources */}
          <DownloadableResources />
          
          {/* FAQ Section */}
          <FAQSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandGuidelines;
