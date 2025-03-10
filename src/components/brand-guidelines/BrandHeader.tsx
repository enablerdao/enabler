
import React from 'react';
import { motion } from 'framer-motion';

const BrandHeader = () => {
  return (
    <div className="py-16 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center px-6 md:px-10 max-w-3xl mx-auto">
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
          {new Date().getFullYear()}年度版 • みんなで同じ方向を向くための道しるべ
        </motion.p>

        <motion.div 
          className="w-full max-w-xl mx-auto relative h-[120px] md:h-[150px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <svg
            viewBox="0 0 500 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Logo lines */}
            <rect x="100" y="85" width="150" height="10" rx="5" fill="#22B6FF" />
            <rect x="100" y="115" width="200" height="10" rx="5" fill="#22B6FF" />
            
            {/* Logo text */}
            <text 
              x="265" 
              y="145" 
              fontFamily="Consolas, monospace" 
              fontSize="40" 
              letterSpacing="2" 
              fontWeight="bold" 
              fill="#22B6FF"
              textAnchor="middle"
            >
              ENABLER
            </text>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandHeader;
