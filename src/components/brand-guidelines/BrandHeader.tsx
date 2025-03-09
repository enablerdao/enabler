
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import LogoVariations from './LogoVariations';

const BrandHeader = () => {
  // Get current year
  const currentYear = new Date().getFullYear();
  
  return (
    <MotionBox delay={100}>
      <div className="text-center mb-10 md:mb-16 px-6 md:px-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 text-gray-900">
          Enabler ブランドガイドライン
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-8">
          {currentYear}年度版 • ブランドの一貫性と認知度向上のために
        </p>
        <div className="w-full max-w-2xl mx-auto px-2 md:px-0">
          <div className="p-5 md:p-8 rounded-xl bg-white shadow-subtle flex justify-center items-center h-72 md:h-96 lg:h-[26rem]">
            <LogoVariations variant="modern" size="lg" year={currentYear} />
          </div>
        </div>
      </div>
    </MotionBox>
  );
};

export default BrandHeader;
