
import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from './animation-variants';
import IllustrationTitle from './IllustrationTitle';
import IllustrationSvg from './IllustrationSvg';

interface SimpleIllustrationProps {
  className?: string;
}

const SimpleIllustration: React.FC<SimpleIllustrationProps> = ({ className }) => {
  return (
    <motion.div
      className={`w-full max-w-3xl mx-auto ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative w-full h-[520px] rounded-3xl bg-gradient-to-b from-[#f5f5f7] to-[#e5e5e7] p-6 overflow-hidden shadow-md">
        {/* Title */}
        <IllustrationTitle />
        
        {/* Main SVG Illustration */}
        <IllustrationSvg />
      </div>
    </motion.div>
  );
};

export default SimpleIllustration;
