
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import Logo from '@/components/Logo';

const BrandHeader = () => {
  return (
    <MotionBox delay={100}>
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
          Enabler ブランドガイドライン
        </h1>
        <div className="w-full max-w-2xl mx-auto px-2 md:px-0">
          <div className="p-4 md:p-6 rounded-xl bg-white shadow-subtle flex justify-center items-center">
            <Logo variant="svg" size="lg" />
          </div>
        </div>
      </div>
    </MotionBox>
  );
};

export default BrandHeader;
