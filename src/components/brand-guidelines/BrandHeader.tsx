
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
            className="text-center mb-10 md:mb-16 px-6 md:px-10 min-h-[70vh] flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Enabler ブランドガイドライン
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-gray-600 mb-8 md:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {currentYear}年度版 • みんなで同じ方向を向くための道しるべ
            </motion.p>
            <motion.div 
              className="w-full max-w-5xl mx-auto px-2 md:px-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="p-6 md:p-10 rounded-xl bg-white shadow-subtle flex flex-col justify-center items-center">
                <motion.div 
                  className="w-[42rem] md:w-[52rem] lg:w-[60rem]" // Approximately doubled from previous size
                  animate={{ 
                    y: [0, -8, 0],
                    filter: ["drop-shadow(0 0 0px rgba(34, 182, 255, 0))", "drop-shadow(0 0 15px rgba(34, 182, 255, 0.7))", "drop-shadow(0 0 0px rgba(34, 182, 255, 0))"],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <LogoVariations variant="threeLines" size="lg" year={currentYear} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionBox>
  );
};

export default BrandHeader;
