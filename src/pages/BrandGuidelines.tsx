
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
import LogoEvolution from '@/components/brand-guidelines/LogoEvolution';
import { companyInfo } from '@/lib/data';

const BrandGuidelines = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
  }, []);

  // Calculate current year's color based on the new formula
  // R = round(34 + 190 × (1 - 0.95^(y - 2022)))
  // G = round(182 + 63 × (1 - 0.95^(y - 2022)))
  // B = 255
  const currentYear = new Date().getFullYear();
  const baseYear = 2022; // When the first color was established
  
  // Calculate RGB values based on the formula
  const calculateColorForYear = (year: number) => {
    const yearDiff = year - 2022;
    
    // Using the exponential formula
    const r = Math.round(34 + 190 * (1 - Math.pow(0.95, yearDiff)));
    const g = Math.round(182 + 63 * (1 - Math.pow(0.95, yearDiff)));
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
  
  // Generate brand colors for years 2022-2031 (10 years)
  const brandColors = Array.from({ length: 10 }, (_, i) => calculateColorForYear(2022 + i));
  
  // Get current year's color
  const currentYearColor = brandColors.find(color => color.year === currentYear) || brandColors[0];

  // Generate logo evolution data for 10-year intervals from 2022 to 2062 (40 years)
  const logoEvolutionData = [
    { year: 2022, name: '設立時', description: '会社設立時のオリジナルデザイン' },
    { year: 2032, name: '10周年', description: '設立10周年記念デザイン' },
    { year: 2042, name: '20周年', description: '設立20周年記念デザイン' },
    { year: 2052, name: '30周年', description: '設立30周年記念デザイン' },
    { year: 2062, name: '40周年', description: '設立40周年記念デザイン' },
  ];

  // Get Fibonacci years for special designs
  const fibonacciYears = [2023, 2024, 2025, 2027, 2030, 2035, 2043, 2056];

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 pb-8 md:pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-1 sm:px-4 md:px-6">
          <BrandHeader />
          <BrandStory />
          <LogoSection currentYearColor={currentYearColor} />
          <BrandColors currentYearColor={currentYearColor} brandColors={brandColors} />
          <LogoEvolution evolutionData={logoEvolutionData} />
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
