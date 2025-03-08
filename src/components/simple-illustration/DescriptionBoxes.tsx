
import React from 'react';
import { motion } from 'framer-motion';

const DescriptionBoxes: React.FC = () => {
  return (
    <>
      {/* Description boxes with animation */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <rect x="175" y="280" width="150" height="40" rx="20" ry="20" fill="white" fillOpacity="0.9" filter="url(#dropShadow)" />
        <text x="250" y="305" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="13" fontWeight="400" fill="#1d1d1f" textAnchor="middle">新しい考えと創造性</text>
      </motion.g>
      
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <rect x="475" y="280" width="150" height="40" rx="20" ry="20" fill="white" fillOpacity="0.9" filter="url(#dropShadow)" />
        <text x="550" y="305" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="13" fontWeight="400" fill="#1d1d1f" textAnchor="middle">革新的な解決策</text>
      </motion.g>
      
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        <rect x="175" y="480" width="150" height="40" rx="20" ry="20" fill="white" fillOpacity="0.9" filter="url(#dropShadow)" />
        <text x="250" y="505" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="13" fontWeight="400" fill="#1d1d1f" textAnchor="middle">人と社会とのつながり</text>
      </motion.g>
      
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <rect x="475" y="480" width="150" height="40" rx="20" ry="20" fill="white" fillOpacity="0.9" filter="url(#dropShadow)" />
        <text x="550" y="505" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="13" fontWeight="400" fill="#1d1d1f" textAnchor="middle">可能性の拡大と進化</text>
      </motion.g>
    </>
  );
};

export default DescriptionBoxes;
