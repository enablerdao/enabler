
import React from 'react';
import { logActivity } from '@/lib/logger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrandHeader from '@/components/brand-guidelines/BrandHeader';
import BrandStory from '@/components/brand-guidelines/BrandStory';
import BrandColors from '@/components/brand-guidelines/BrandColors';
import BrandAssetRules from '@/components/brand-guidelines/BrandAssetRules';
import FAQContact from '@/components/brand-guidelines/FAQContact';
import { companyInfo } from '@/lib/data';
import { calculateColorForYear, generateColorsForYearRange } from '@/components/brand-guidelines/color-utils/color-calculator';

const BrandGuidelines = () => {
  // Get current year for dynamic updating
  const currentYear = new Date().getFullYear();
  
  // Calculate colors based on the current year
  const brandColors = generateColorsForYearRange(2022, currentYear + 20);
  const currentYearColor = calculateColorForYear(currentYear);

  React.useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-20 space-y-16 md:space-y-24">
          <BrandHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BrandStory />
            <BrandAssetRules />
          </div>
          
          <BrandColors currentYearColor={currentYearColor} brandColors={brandColors} />
          
          <FAQContact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandGuidelines;
