
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
import { motion } from 'framer-motion';

const BrandGuidelines = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [currentYearColor, setCurrentYearColor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // ページビューのログを記録
    logActivity('pageView', { path: '/brand-guidelines' });
    
    // 今年のブランドカラーを計算
    const yearColor = calculateColorForYear(currentYear);
    setCurrentYearColor(yearColor);
    
    // ロード時間のシミュレーション（短くして1回だけ表示されるようにする）
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 2000msから1200msに短縮
    
    return () => clearTimeout(timer);
  }, [currentYear]);

  // ローディング中はロゴアニメーションを表示
  if (loading || !currentYearColor) {
    return (
      <>
        <Navbar />
        <div className="flex-grow flex items-center justify-center min-h-[calc(100vh-64px)]">
          {/* ロボットの代わりにロゴアニメーションを表示 */}
          <div className="p-6 flex flex-col items-center">
            <motion.div 
              className="w-48 h-48 relative"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
            >
              <svg viewBox="0 0 200 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22B6FF" />
                    <stop offset="100%" stopColor="#4CAF50" />
                  </linearGradient>
                </defs>
                <motion.rect 
                  x="15" y="20" width="60" height="3" rx="1.5" 
                  fill="url(#loadingGradient)"
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.rect 
                  x="15" y="30" width="37" height="3" rx="1.5" 
                  fill="url(#loadingGradient)"
                  initial={{ width: 0 }}
                  animate={{ width: 37 }}
                  transition={{ duration: 1.2, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.rect 
                  x="15" y="40" width="60" height="3" rx="1.5" 
                  fill="url(#loadingGradient)"
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
                />
              </svg>
            </motion.div>
            <p className="text-gray-600 mt-4 animate-pulse">ロード中...</p>
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
