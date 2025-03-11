import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { calculateColorForYear } from './color-utils/color-calculator';
import { calculateSpecialAccentColor } from './color-utils/color-calculator';
const BrandHeader = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [currentColor, setCurrentColor] = useState<any>(null);
  const [accentColor, setAccentColor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Calculate current year's brand and accent colors
    const yearColor = calculateColorForYear(currentYear);
    const specialColor = calculateSpecialAccentColor(currentYear);
    setCurrentColor(yearColor);
    setAccentColor(specialColor);

    // Simulate loading for animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentYear]);

  // Foundation year color (2022)
  const foundingColor = "#22B6FF";
  if (!currentColor || !accentColor) {
    return <div className="h-40 w-full flex items-center justify-center">読み込み中...</div>;
  }
  return <div className="min-h-[40vh] flex items-center justify-center relative bg-white py-[143px]">
      <div className="text-center px-6">
        <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8
      }}>
          Enabler ブランドガイドライン
        </motion.h1>
        
        <div className="w-full max-w-2xl mx-auto px-2 relative h-[278px]">
          <svg viewBox="0 0 450 278" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* 色のグラデーション定義 */}
            <defs>
              <linearGradient id="topBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={foundingColor} />
                <stop offset="100%" stopColor={currentColor.hex} />
              </linearGradient>
              
              <linearGradient id="middleBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={foundingColor} />
                <stop offset="100%" stopColor={accentColor.hex} />
              </linearGradient>
              
              <linearGradient id="bottomBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={currentColor.hex} />
                <stop offset="100%" stopColor={foundingColor} />
              </linearGradient>
            </defs>
            
            {/* 上のバー */}
            <motion.rect x="16" y="40" width="162" height="8" rx="4" fill="url(#topBarGradient)" initial={{
            width: 0
          }} animate={{
            width: loading ? [0, 162, 0] : 162
          }} transition={{
            duration: 2,
            repeat: loading ? Infinity : 0,
            repeatType: "loop"
          }} />
            
            {/* 中央のバー */}
            <motion.rect x="16" y="60" width="100" height="8" rx="4" fill="url(#middleBarGradient)" initial={{
            width: 0
          }} animate={{
            width: loading ? [0, 100, 0] : 100
          }} transition={{
            duration: 2,
            delay: 0.2,
            repeat: loading ? Infinity : 0,
            repeatType: "loop"
          }} />
            
            {/* 下のバー */}
            <motion.rect x="16" y="80" width="162" height="8" rx="4" fill="url(#bottomBarGradient)" initial={{
            width: 0
          }} animate={{
            width: loading ? [0, 162, 0] : 162
          }} transition={{
            duration: 2,
            delay: 0.4,
            repeat: loading ? Infinity : 0,
            repeatType: "loop"
          }} />
            
            {/* ロゴテキスト */}
            <motion.text x="225" y="140" fontFamily="Consolas, monospace" fontSize="40" letterSpacing="2" fontWeight="bold" fill={currentColor.hex} textAnchor="middle" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.8
          }}>
              ENABLER
            </motion.text>
            
            {/* 年度表示 */}
            <motion.text x="225" y="170" fontFamily="sans-serif" fontSize="16" fill="#666" textAnchor="middle" initial={{
            opacity: 0
          }} animate={{
            opacity: loading ? 0 : 1
          }} transition={{
            duration: 0.4,
            delay: 1.2
          }}>
              {currentYear}年度版
            </motion.text>
          </svg>
        </div>
      </div>
    </div>;
};
export default BrandHeader;