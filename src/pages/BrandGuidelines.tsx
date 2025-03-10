
import React, { useEffect, useState } from 'react';
import { logActivity } from '@/lib/logger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrandHeader from '@/components/brand-guidelines/BrandHeader';
import BrandStory from '@/components/brand-guidelines/BrandStory';
import LogoSection from '@/components/brand-guidelines/LogoSection';
import BrandColors from '@/components/brand-guidelines/BrandColors';
import Typography from '@/components/brand-guidelines/Typography';
import PhotosAndIllustrations from '@/components/brand-guidelines/PhotosAndIllustrations';
import VoiceAndTone from '@/components/brand-guidelines/VoiceAndTone';
import BrandAssetRules from '@/components/brand-guidelines/BrandAssetRules';
import FAQContact from '@/components/brand-guidelines/FAQContact';
import { calculateColorForYear, generateColorsForYearRange } from '@/components/brand-guidelines/color-utils/color-calculator';
import { motion } from 'framer-motion';

const BrandGuidelines = () => {
  // State to store the current year
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  // State to store brand colors 
  const [brandColors, setBrandColors] = useState<any[]>([]);
  // State to store current year's color
  const [currentYearColor, setCurrentYearColor] = useState<any>(null);
  
  useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
  }, []);

  // Effect to update the year and recalculate colors when needed
  useEffect(() => {
    // Update the current year
    const updateYear = () => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    };
    
    // Calculate the colors based on the current year
    const calculateColors = () => {
      // Generate brand colors for Fibonacci years after 2022 (founding year)
      const colors = generateColorsForYearRange(2022, currentYear + 20);
      setBrandColors(colors);
      
      // Get current year's color
      const yearColor = calculateColorForYear(currentYear);
      setCurrentYearColor(yearColor);
    };
    
    // Initial calculation
    updateYear();
    calculateColors();
    
    // Set up interval to check for year changes (every hour)
    const intervalId = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
        // Colors will be recalculated in the next effect run
      }
    }, 3600000); // Check every hour
    
    return () => clearInterval(intervalId);
  }, [currentYear]);

  // If currentYearColor is not yet calculated, show a loading state
  if (!currentYearColor) {
    return (
      <>
        <Navbar />
        <main className="pt-16 md:pt-20 pb-8 md:pb-16 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-center items-center h-64">
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
      <main className="pt-16 md:pt-20 pb-8 md:pb-16 bg-gradient-to-b from-blue-50/50 to-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          {/* Header Section */}
          <BrandHeader />
          
          {/* Main Content - Story & Logo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <BrandStory />
            <LogoSection currentYearColor={currentYearColor} />
          </div>
          
          {/* Brand Colors */}
          <BrandColors currentYearColor={currentYearColor} brandColors={brandColors} />
          
          {/* Typography & Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Typography />
            <PhotosAndIllustrations />
          </div>
          
          {/* Voice & Asset Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <VoiceAndTone />
            <BrandAssetRules />
          </div>
          
          {/* FAQ & Contact */}
          <FAQContact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandGuidelines;
