
import React from 'react';
import { motion } from 'framer-motion';

const BrandHeader = () => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center relative bg-white">
      <div className="text-center px-6 md:px-10">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Enabler ブランドガイドライン
        </motion.h1>
        
        <motion.p 
          className="text-base md:text-lg text-gray-600 mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {new Date().getFullYear()}年度版 • みんなで同じ方向を向くための道しるべ
        </motion.p>

        <div className="w-full max-w-2xl mx-auto px-2 md:px-0 relative h-[160px] md:h-[200px]">
          <svg
            viewBox="0 0 500 250"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* First line */}
            <motion.rect 
              x="100" 
              y="85" 
              width="150"
              height="10" 
              rx="5" 
              fill="#22B6FF"
              initial={{ width: 0 }}
              animate={{ width: 150 }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Second line */}
            <motion.rect 
              x="100" 
              y="155" 
              width="200"
              height="10" 
              rx="5" 
              fill="#22B6FF"
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            {/* Text */}
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
