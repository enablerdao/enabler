
import React, { useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Info } from 'lucide-react';
import { motion } from 'framer-motion';
import LogoMeaningSection from './logo-sections/LogoMeaningSection';
import FibonacciApplicationSection from './logo-sections/FibonacciApplicationSection';
import InfiniteScrollerSection from './logo-sections/InfiniteScrollerSection';

interface ColorInfo {
  year: number;
  hex: string;
  name: string;
  rgb: string;
}

interface LogoSectionProps {
  currentYearColor: ColorInfo;
}

const LogoSection = ({
  currentYearColor
}: LogoSectionProps) => {
  // Animation states
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  return (
    <MotionBox delay={300}>
      <section className="mb-6 md:mb-12 md:px-0 px-0">
        <div className="flex items-center mb-4 md:mb-6">
          <Info className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. ロゴについて</h2>
        </div>
        
        <div className="bg-white p-5 md:p-7 rounded-xl shadow-subtle px-[14px] mx-0">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Meaning Section */}
            <LogoMeaningSection 
              expandedSection={expandedSection} 
              toggleSection={toggleSection} 
            />

            {/* Fibonacci Application Section */}
            <FibonacciApplicationSection 
              expandedSection={expandedSection} 
              toggleSection={toggleSection} 
            />

            {/* Infinite Scroller Section - Now displays in a single column on all screen sizes */}
            <div className="col-span-1 md:col-span-2 w-full">
              <InfiniteScrollerSection />
            </div>
          </motion.div>
        </div>
      </section>
    </MotionBox>
  );
};

export default LogoSection;
