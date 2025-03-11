
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
    }, 2000); // 2秒後に読み込み完了
    
    return () => clearTimeout(timer);
  }, [currentYear]);

  // Loading state - カスタムロゴアニメーションを使用
  if (loading || !currentYearColor) {
    return (
      <>
        <Navbar />
        <div className="pt-16 md:pt-20">
          <BrandHeader />
          <div className="flex justify-center items-center h-64">
            <FriendlyLoading message="ブランドカラーを計算中..." />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-blue-50/50 to-white min-h-screen">
        {/* Header Section - Fixed position with padding to ensure content starts below */}
        <BrandHeader />
        
        {/* Main Content - with proper spacing from the header */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 mt-8">
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandGuidelines;
