
import React, { useEffect, useState, useRef } from 'react';
import { logActivity } from '@/lib/logger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrandHeader from '@/components/brand-guidelines/BrandHeader';
import BrandStory from '@/components/brand-guidelines/BrandStory';
import LogoSection from '@/components/brand-guidelines/LogoSection';
import BrandColors from '@/components/brand-guidelines/BrandColors';
import Typography from '@/components/brand-guidelines/Typography';
import PhotosAndIllustrations from '@/components/brand-guidelines/PhotosAndIllustrations';
import VoiceAndTone from '@/components/brand-guidelines/VoiceAndTone';
import BrandAssetRules from '@/components/brand-guidelines/BrandAssetRules';
import FAQContact from '@/components/brand-guidelines/FAQContact';
import { companyInfo } from '@/lib/data';
import { calculateColorForYear, generateColorsForYearRange } from '@/components/brand-guidelines/color-utils/color-calculator';
import { motion, AnimatePresence } from 'framer-motion';

const BrandGuidelines = () => {
  // State to store the current year
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  // State to store brand colors 
  const [brandColors, setBrandColors] = useState<any[]>([]);
  // State to store current year's color
  const [currentYearColor, setCurrentYearColor] = useState<any>(null);
  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to track if animation is in progress
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Reference to main container
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
  }, []);

  // Effect to update the year and recalculate colors when needed
  useEffect(() => {
    // Update the current year
    const updateYear = () => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    };
    
    // Calculate the colors based on the current year
    const calculateColors = () => {
      // Generate brand colors for Fibonacci years after 2022 (founding year)
      const colors = generateColorsForYearRange(2022, currentYear + 20);
      setBrandColors(colors);
      
      // Get current year's color
      const yearColor = calculateColorForYear(currentYear);
      setCurrentYearColor(yearColor);
    };
    
    // Initial calculation
    updateYear();
    calculateColors();
    
    // Set up interval to check for year changes (every hour)
    const intervalId = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
        // Colors will be recalculated in the next effect run
      }
    }, 3600000); // Check every hour
    
    return () => clearInterval(intervalId);
  }, [currentYear]);

  // Handle wheel event for slide navigation
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isAnimating) return;
      
      // Determine scroll direction
      if (event.deltaY > 0) {
        // Scrolling down
        if (currentSlide < 4) {
          setIsAnimating(true);
          setCurrentSlide(prev => prev + 1);
          setTimeout(() => setIsAnimating(false), 800); // Match animation duration
        }
      } else if (event.deltaY < 0) {
        // Scrolling up
        if (currentSlide > 0) {
          setIsAnimating(true);
          setCurrentSlide(prev => prev - 1);
          setTimeout(() => setIsAnimating(false), 800); // Match animation duration
        }
      }
    };

    // Add wheel event listener to the main container
    const currentMainRef = mainRef.current;
    if (currentMainRef) {
      currentMainRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentMainRef) {
        currentMainRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSlide, isAnimating]);

  // If currentYearColor is not yet calculated, show a loading state
  if (!currentYearColor) {
    return (
      <>
        <Navbar />
        <main className="pt-16 md:pt-20 pb-8 md:pb-16 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-center items-center h-64">
            <p className="text-lg text-gray-500">ブランドガイドラインを読み込み中...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Define slides
  const slides = [
    <BrandHeader key="header" />,
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" key="story-logo">
      <BrandStory />
      <LogoSection currentYearColor={currentYearColor} />
    </div>,
    <BrandColors key="colors" currentYearColor={currentYearColor} brandColors={brandColors} />,
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" key="typography-photos">
      <Typography />
      <PhotosAndIllustrations />
    </div>,
    <div key="footer">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <VoiceAndTone />
        <BrandAssetRules />
      </div>
      <FAQContact />
    </div>
  ];

  // Animation variants for slide transitions
  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      y: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  // Only show footer on the last slide
  const showFooter = currentSlide === slides.length - 1;

  return (
    <>
      <Navbar />
      <main 
        ref={mainRef}
        className="pt-16 md:pt-20 pb-8 md:pb-16 bg-gradient-to-b from-blue-50/50 to-white min-h-screen overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative min-h-[calc(100vh-180px)]">
          <AnimatePresence initial={false} mode="wait" custom={currentSlide}>
            <motion.div
              key={currentSlide}
              custom={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
            {slides.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-enabler-600' : 'bg-gray-300'}`}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 800);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </main>
      
      {/* Conditional footer rendering */}
      <AnimatePresence>
        {showFooter && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BrandGuidelines;
