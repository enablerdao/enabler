
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

const BrandGuidelines = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
  }, []);

  // Calculate current year's color based on a rotation of colors
  const currentYear = new Date().getFullYear();
  const baseYear = 2022; // When the first color was established
  const yearDiff = currentYear - baseYear;
  
  // Array of brand colors that rotate yearly
  const brandColors = [
    { year: 2022, hex: '#22B6FF', name: 'スカイブルー' },
    { year: 2023, hex: '#6E59A5', name: 'ロイヤルパープル' },
    { year: 2024, hex: '#8B5CF6', name: 'ビビッドパープル' },
    { year: 2025, hex: '#0EA5E9', name: 'オーシャンブルー' },
    { year: 2026, hex: '#D946EF', name: 'マゼンタピンク' },
  ];
  
  // Get current year's color or default to first color if beyond array range
  const colorIndex = yearDiff % brandColors.length;
  const currentYearColor = brandColors[colorIndex];

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 pb-8 md:pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-1 sm:px-4 md:px-6">
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
