
import React from 'react';
import { motion } from 'framer-motion';

const CircleTexts: React.FC = () => {
  return (
    <>
      {/* Text in circles with animation */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <text x="250" y="195" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="22" fontWeight="500" fill="white" textAnchor="middle">アイデア</text>
        <text x="250" y="220" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="14" fontWeight="300" fill="white" textAnchor="middle" letterSpacing="0.5">Ideas</text>
      </motion.g>
      
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <text x="550" y="195" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="22" fontWeight="500" fill="white" textAnchor="middle">テクノロジー</text>
        <text x="550" y="220" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="14" fontWeight="300" fill="white" textAnchor="middle" letterSpacing="0.5">Technology</text>
      </motion.g>
      
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <text x="250" y="395" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="22" fontWeight="500" fill="white" textAnchor="middle">つながり</text>
        <text x="250" y="420" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="14" fontWeight="300" fill="white" textAnchor="middle" letterSpacing="0.5">Connections</text>
      </motion.g>
      
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <text x="550" y="395" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="22" fontWeight="500" fill="white" textAnchor="middle">成長</text>
        <text x="550" y="420" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="14" fontWeight="300" fill="white" textAnchor="middle" letterSpacing="0.5">Growth</text>
      </motion.g>
      
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <text x="400" y="290" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="28" fontWeight="500" fill="white" textAnchor="middle">一人ひとり</text>
        <text x="400" y="320" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="16" fontWeight="300" fill="white" textAnchor="middle" letterSpacing="0.8">Each Individual</text>
      </motion.g>
    </>
  );
};

export default CircleTexts;
