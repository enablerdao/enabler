
import React from 'react';
import { motion } from 'framer-motion';

const BottomCaption: React.FC = () => {
  return (
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2.0 }}
    >
      <rect x="175" y="545" width="450" height="40" rx="20" ry="20" fill="white" fillOpacity="0.8" filter="url(#dropShadow)" />
      <text x="400" y="570" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="13" fontWeight="400" fill="#1d1d1f" textAnchor="middle">各要素が相互に作用し、一人ひとりの可能性を広げる社会の実現に貢献します</text>
    </motion.g>
  );
};

export default BottomCaption;
