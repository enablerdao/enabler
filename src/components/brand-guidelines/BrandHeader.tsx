
import React, { useEffect, useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import LogoVariations from './LogoVariations';
import { motion, AnimatePresence } from 'framer-motion';

const BrandHeader = () => {
  // Get current year for dynamic updating
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  
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
    setIsVisible(true);
    
    // Check for year change every hour (not too frequent, but will catch year rollover)
    const intervalId = setInterval(updateYear, 3600000); // 1 hour in milliseconds
    
    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentYear]);
  
  return (
    <MotionBox delay={100}>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="text-center mb-10 md:mb-16 px-6 md:px-10 min-h-[50vh] flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Enabler ブランドガイドライン
            </motion.h1>
            <motion.p 
              className="text-sm md:text-base text-gray-600 mb-5 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {currentYear}年度版 • みんなで同じ方向を向くための道しるべ
            </motion.p>
            <motion.div 
              className="w-full max-w-4xl mx-auto px-2 md:px-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="p-5 md:p-8 rounded-xl bg-white shadow-subtle flex flex-col justify-center items-center">
                <motion.div 
                  className="w-60 md:w-72 lg:w-80 mb-8"
                  animate={{ 
                    y: [0, -5, 0],
                    filter: ["drop-shadow(0 0 0px rgba(34, 182, 255, 0))", "drop-shadow(0 0 10px rgba(34, 182, 255, 0.6))", "drop-shadow(0 0 0px rgba(34, 182, 255, 0))"],
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
                  className="w-[22rem] md:w-[32rem] lg:w-[40rem]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <LogoVariations variant="modern" size="lg" year={currentYear} />
                </motion.div>
                
                <motion.p 
                  className="text-sm text-gray-500 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  © {currentYear} Enabler, Inc. All rights reserved.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionBox>
  );
};

export default BrandHeader;
