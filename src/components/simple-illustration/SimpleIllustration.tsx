
import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './animation-variants';

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
        <motion.div className="text-center mb-10 relative z-10" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-light text-[#1d1d1f] drop-shadow-sm">
            可能性を広げる社会をつくる
          </h2>
          <p className="text-sm md:text-lg font-light text-[#86868b] mt-1">
            Creating a society that expands possibilities
          </p>
        </motion.div>
        
        {/* Main SVG Illustration */}
        <motion.svg 
          className="w-full h-[400px]" 
          viewBox="0 0 800 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Gradient definitions */}
          <defs>
            <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#0070f3" stopOpacity="1" />
              <stop offset="100%" stopColor="#0057b7" stopOpacity="1" />
            </radialGradient>
            
            <radialGradient id="ideaGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#ff9d42" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff8930" stopOpacity="1" />
            </radialGradient>
            
            <radialGradient id="techGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#aa7df3" stopOpacity="1" />
              <stop offset="100%" stopColor="#9361db" stopOpacity="1" />
            </radialGradient>
            
            <radialGradient id="connectGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#5fe3a1" stopOpacity="1" />
              <stop offset="100%" stopColor="#40c987" stopOpacity="1" />
            </radialGradient>
            
            <radialGradient id="growthGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#ff7d6f" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff5e4e" stopOpacity="1" />
            </radialGradient>
            
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="1" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.15" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Connection lines with animation */}
          <motion.path 
            d="M350 275 C325 225, 300 200, 250 200" 
            stroke="#ff9d42" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path 
            d="M250 200 C300 200, 325 225, 350 275" 
            stroke="#ff9d42" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.circle 
            cx="350" 
            cy="275" 
            r="4" 
            fill="#ff9d42"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          />
          
          <motion.path 
            d="M450 275 C475 225, 500 200, 550 200" 
            stroke="#aa7df3" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          <motion.path 
            d="M550 200 C500 200, 475 225, 450 275" 
            stroke="#aa7df3" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.circle 
            cx="450" 
            cy="275" 
            r="4" 
            fill="#aa7df3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          />
          
          <motion.path 
            d="M350 325 C325 375, 300 400, 250 400" 
            stroke="#5fe3a1" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
          <motion.path 
            d="M250 400 C300 400, 325 375, 350 325" 
            stroke="#5fe3a1" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.circle 
            cx="350" 
            cy="325" 
            r="4" 
            fill="#5fe3a1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
          />
          
          <motion.path 
            d="M450 325 C475 375, 500 400, 550 400" 
            stroke="#ff7d6f" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
          <motion.path 
            d="M550 400 C500 400, 475 375, 450 325" 
            stroke="#ff7d6f" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.circle 
            cx="450" 
            cy="325" 
            r="4" 
            fill="#ff7d6f"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          />
          
          {/* Four surrounding circles with animation */}
          <motion.circle 
            cx="250" 
            cy="200" 
            r="65" 
            fill="url(#ideaGradient)" 
            filter="url(#dropShadow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.circle 
            cx="550" 
            cy="200" 
            r="65" 
            fill="url(#techGradient)" 
            filter="url(#dropShadow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.circle 
            cx="250" 
            cy="400" 
            r="65" 
            fill="url(#connectGradient)" 
            filter="url(#dropShadow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.circle 
            cx="550" 
            cy="400" 
            r="65" 
            fill="url(#growthGradient)" 
            filter="url(#dropShadow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          
          {/* Center Circle with animation */}
          <motion.circle 
            cx="400" 
            cy="300" 
            r="80" 
            fill="url(#centerGradient)" 
            filter="url(#dropShadow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          
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
          
          {/* Bottom caption with animation */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
          >
            <rect x="175" y="545" width="450" height="40" rx="20" ry="20" fill="white" fillOpacity="0.8" filter="url(#dropShadow)" />
            <text x="400" y="570" fontFamily="SF Pro Display, -apple-system, sans-serif" fontSize="13" fontWeight="400" fill="#1d1d1f" textAnchor="middle">各要素が相互に作用し、一人ひとりの可能性を広げる社会の実現に貢献します</text>
          </motion.g>
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default SimpleIllustration;
