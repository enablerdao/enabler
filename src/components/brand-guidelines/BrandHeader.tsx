
import React from 'react';
import { motion } from 'framer-motion';

const BrandHeader = () => {
  return (
    <div className="min-h-[40vh] flex items-center justify-center relative bg-white">
      <div className="text-center px-6">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Enabler ブランドガイドライン
        </motion.h1>
        
        <motion.p 
          className="text-base md:text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {new Date().getFullYear()}年度版
        </motion.p>

        <div className="w-full max-w-2xl mx-auto px-2 relative h-[120px]">
          <svg
            viewBox="0 0 500 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* First line */}
            <motion.rect 
              x="100" 
              y="85" 
              width="150"
              height="8" 
              rx="4" 
              fill="#22B6FF"
              initial={{ width: 0 }}
              animate={{ width: 150 }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Logo text */}
            <motion.text 
              x="265" 
              y="115" 
              fontFamily="Consolas, monospace" 
              fontSize="40" 
              letterSpacing="2" 
              fontWeight="bold" 
              fill="#22B6FF"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ENABLER
            </motion.text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
