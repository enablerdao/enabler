
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
import { calculateColorForYear } from '@/components/brand-guidelines/color-utils/color-calculator';
import { motion } from 'framer-motion';

const BrandGuidelines = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [currentYearColor, setCurrentYearColor] = useState<any>(null);
  const [scrolledPastHeader, setScrolledPastHeader] = useState(false);
  
  useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
    
    // Calculate current year's color
    const yearColor = calculateColorForYear(currentYear);
    setCurrentYearColor(yearColor);
    
    // Set up scroll listener
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setScrolledPastHeader(true);
      } else {
        setScrolledPastHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentYear]);

  // Loading state
  if (!currentYearColor) {
    return (
      <>
        <Navbar />
        <main className="pt-16 md:pt-20 pb-8 md:pb-16 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="container mx-auto px-4 flex justify-center items-center h-64">
            <p className="text-lg text-gray-500">ブランドガイドラインを読み込み中...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-blue-50/50 to-white min-h-screen">
        {/* Header Section */}
        <BrandHeader />
        
        {/* Main Content */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 md:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolledPastHeader ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Story & Logo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default BrandGuidelines;
