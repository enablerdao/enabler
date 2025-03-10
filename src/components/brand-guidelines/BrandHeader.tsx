
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import LogoVariations from './LogoVariations';
import { motion } from 'framer-motion';
import { companyInfo } from '@/lib/data';

const BrandHeader = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <MotionBox delay={100}>
      <div className="text-center mb-10 md:mb-16">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Enabler Design System
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          数学とテクノロジーが織りなす、進化し続けるブランドの設計図
        </motion.p>
        
        <motion.div 
          className="relative p-8 md:p-12 bg-white rounded-xl shadow-subtle overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-white/30" />
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {companyInfo.brandStory}
              </p>
            </div>
            
            <div className="mt-12">
              <LogoVariations variant="modern" size="lg" year={currentYear} />
            </div>
          </div>
        </motion.div>
      </div>
    </MotionBox>
  );
};

export default BrandHeader;
