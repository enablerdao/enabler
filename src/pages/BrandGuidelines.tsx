
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

  // Calculate current year's color based on the formula
  // R = min(34 + (y - 2022) * 3, 224)
  // G = min(182 + (y - 2022) * 2, 245)
  // B = 255
  const currentYear = new Date().getFullYear();
  const baseYear = 2022; // When the first color was established
  const yearDiff = currentYear - baseYear;
  
  // Calculate RGB values based on the formula
  const calculateColorForYear = (year: number) => {
    const yearDiff = year - 2022;
    const r = Math.min(34 + yearDiff * 3, 224);
    const g = Math.min(182 + yearDiff * 2, 245);
    const b = 255;
    
    // Convert to HEX
    const toHex = (value: number) => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    
    // Generate color name based on the values
    let name = '';
    if (r < 100) {
      name = 'ディープブルー';
    } else if (r < 150) {
      name = 'ミディアムブルー';
    } else if (r < 200) {
      name = 'ライトブルー';
    } else {
      name = 'スカイブルー';
    }
    
    return { year, hex, name, rgb: `${r}, ${g}, ${b}` };
  };
  
  // Generate brand colors for years 2022-2030
  const brandColors = Array.from({ length: 9 }, (_, i) => calculateColorForYear(2022 + i));
  
  // Get current year's color
  const currentYearColor = brandColors.find(color => color.year === currentYear) || brandColors[0];

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
