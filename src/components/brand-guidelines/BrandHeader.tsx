
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { calculateColorForYear } from './color-utils/color-calculator';
import { calculateSpecialAccentColor } from './color-utils/color-calculator';

interface BrandHeaderProps {
  loading?: boolean;
}

const BrandHeader: React.FC<BrandHeaderProps> = ({ loading = false }) => {
  const [currentYear] = useState(new Date().getFullYear());
  const [currentColor, setCurrentColor] = useState<any>(null);
  const [accentColor, setAccentColor] = useState<any>(null);

  useEffect(() => {
    // Calculate current year's brand and accent colors
    const yearColor = calculateColorForYear(currentYear);
    const specialColor = calculateSpecialAccentColor(currentYear);
    setCurrentColor(yearColor);
    setAccentColor(specialColor);
  }, [currentYear]);

  // Foundation year color (2022)
  const foundingColor = "#22B6FF";
  
  return (
    <div className="min-h-[40vh] flex items-center justify-center relative bg-white py-[80px] md:py-[120px]">
      <div className="text-center px-6">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Enabler ブランドガイドライン
        </motion.h1>
        
        <div className="w-full max-w-2xl mx-auto px-2 relative h-[278px]">
          <svg viewBox="0 0 450 278" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* 色のグラデーション定義 */}
            <defs>
              <linearGradient id="topBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={foundingColor} />
                <stop offset="100%" stopColor={currentColor?.hex || foundingColor} />
              </linearGradient>
              
              <linearGradient id="middleBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={foundingColor} />
                <stop offset="100%" stopColor={accentColor?.hex || foundingColor} />
              </linearGradient>
              
              <linearGradient id="bottomBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={currentColor?.hex || foundingColor} />
                <stop offset="100%" stopColor={foundingColor} />
              </linearGradient>
            </defs>
            
            {/* 3本のバー - loading時はアニメーション付き */}
            <motion.rect 
              x="16" y="40" width="162" height="8" rx="4" 
              fill="url(#topBarGradient)" 
              initial={{ width: 0 }}
              animate={{ width: loading ? [0, 162, 0] : 162 }}
              transition={{ 
                duration: 2,
                repeat: loading ? Infinity : 0,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
            
            <motion.rect 
              x="16" y="60" width="100" height="8" rx="4" 
              fill="url(#middleBarGradient)" 
              initial={{ width: 0 }}
              animate={{ width: loading ? [0, 100, 0] : 100 }}
              transition={{ 
                duration: 2,
                delay: 0.2,
                repeat: loading ? Infinity : 0,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
            
            <motion.rect 
              x="16" y="80" width="162" height="8" rx="4" 
              fill="url(#bottomBarGradient)" 
              initial={{ width: 0 }}
              animate={{ width: loading ? [0, 162, 0] : 162 }}
              transition={{ 
                duration: 2,
                delay: 0.4,
                repeat: loading ? Infinity : 0,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
            
            {/* ENABLERロゴテキスト - loading時は非表示 */}
            {!loading && (
              <motion.text 
                x="198" y="84" 
                fontFamily="Montserrat, sans-serif" 
                fontSize="48" 
                fontWeight="bold" 
                fill="url(#topBarGradient)" 
                textAnchor="start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                ENABLER
              </motion.text>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
