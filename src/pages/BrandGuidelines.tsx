
import React, { useEffect } from 'react';
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
import FixedColorValues from '@/components/brand-guidelines/FixedColorValues';
import FAQContact from '@/components/brand-guidelines/FAQContact';
import { companyInfo } from '@/lib/data';
import { calculateColorForYear, generateColorsForYearRange } from '@/components/brand-guidelines/color-utils/color-calculator';

const BrandGuidelines = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
  }, []);

  // Calculate current year's color
  const currentYear = new Date().getFullYear();
  
  // Generate brand colors for Fibonacci years after 2022 (founding year)
  // Fibonacci sequence: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
  // Years: 2023, 2024, 2025, 2027, 2030, 2035, 2043, 2056, 2077, 2111...
  const brandColors = generateColorsForYearRange(2022, currentYear + 20);
  
  // Get current year's color - if not a Fibonacci year, it will return the color of the last Fibonacci year
  const currentYearColor = calculateColorForYear(currentYear);

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 pb-8 md:pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <BrandHeader />
          <BrandStory />
          <LogoSection currentYearColor={currentYearColor} />
          <BrandColors currentYearColor={currentYearColor} brandColors={brandColors} />
          <Typography />
          <PhotosAndIllustrations />
          <VoiceAndTone />
          <BrandAssetRules />
          <FixedColorValues currentYearColor={currentYearColor} brandColors={brandColors} />
          <FAQContact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandGuidelines;
