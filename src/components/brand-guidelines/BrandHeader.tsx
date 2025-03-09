
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import LogoVariations from './LogoVariations';

const BrandHeader = () => {
  // Get current year
  const currentYear = new Date().getFullYear();
  
  return (
    <MotionBox delay={100}>
      <div className="text-center mb-6 md:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-5 text-gray-900">
          Enabler ブランドガイドライン
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
          {currentYear}年度版 • ブランドの一貫性と認知度向上のために
        </p>
        <div className="w-full max-w-xl mx-auto px-2 md:px-0">
          <div className="p-3 md:p-5 rounded-xl bg-white shadow-subtle flex justify-center items-center">
            <LogoVariations variant="modern" size="lg" year={currentYear} />
          </div>
        </div>
      </div>
    </MotionBox>
  );
};

export default BrandHeader;
