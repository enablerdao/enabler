
import React, { useEffect, useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import LogoVariations from './LogoVariations';
import { motion } from 'framer-motion';

const BrandHeader = () => {
  // Get current year for dynamic updating
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // Update the year when the component mounts and set interval to check for year changes
  useEffect(() => {
    // Function to update year if needed
    const updateYear = () => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    };
    
    // Update immediately when component mounts
    updateYear();
    
    // Check for year change every hour (not too frequent, but will catch year rollover)
    const intervalId = setInterval(updateYear, 3600000); // 1 hour in milliseconds
    
    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentYear]);
  
  return (
    <MotionBox delay={100}>
      <div className="text-center mb-10 md:mb-16 px-6 md:px-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 text-gray-900">
          Enabler ブランドガイドライン
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-8">
          {currentYear}年度版 • みんなで同じ方向を向くための道しるべ
        </p>
        <div className="w-full max-w-4xl mx-auto px-2 md:px-0">
          <div className="p-5 md:p-8 rounded-xl bg-white shadow-subtle flex flex-col justify-center items-center">
            {/* 3本線のみのロゴを追加 */}
            <motion.div 
              className="w-40 md:w-48 lg:w-56 mb-8"
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <LogoVariations variant="threeLines" size="lg" year={currentYear} />
            </motion.div>
            <motion.div 
              className="w-72 md:w-96 lg:w-[30rem]"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <LogoVariations variant="modern" size="lg" year={currentYear} />
            </motion.div>
            <p className="text-sm text-gray-500 mt-6">
              © {currentYear} Enabler, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </MotionBox>
  );
};

export default BrandHeader;
