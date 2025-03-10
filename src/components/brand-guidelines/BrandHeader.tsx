
import React, { useEffect, useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import LogoVariations from './LogoVariations';
import { motion, AnimatePresence } from 'framer-motion';

const BrandHeader = () => {
  // Get current year for dynamic updating
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // Animation states
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showText, setShowText] = useState(false);
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
  const [showContent, setShowContent] = useState(true);
  
  // Set up scroll listener to hide content when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowContent(false);
      } else {
        setShowContent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Update the year when the component mounts and set interval to check for year changes
  useEffect(() => {
    // Function to update year if needed
    const updateYear = () => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    };
    
    // Update immediately when component mounts
    updateYear();
    
    // Check for year change every hour
    const intervalId = setInterval(updateYear, 3600000); // 1 hour in milliseconds
    
    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentYear]);
  
  // Start the animation sequence when component mounts
  useEffect(() => {
    // First line appears
    setTimeout(() => setShowFirstLine(true), 800);
    // Second line appears
    setTimeout(() => setShowSecondLine(true), 1600);
    // Third line appears
    setTimeout(() => setShowThirdLine(true), 2400);
    // Text appears
    setTimeout(() => setShowText(true), 3200);
    // Mark animation as complete
    setTimeout(() => setInitialAnimationComplete(true), 4000);
  }, []);
  
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center overflow-hidden relative">
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="absolute inset-0 z-10 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="text-center px-6 md:px-10 flex flex-col items-center justify-center">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: initialAnimationComplete ? 1 : 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Enabler ブランドガイドライン
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg text-gray-600 mb-8 md:mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: initialAnimationComplete ? 1 : 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {currentYear}年度版 • みんなで同じ方向を向くための道しるべ
              </motion.p>
              
              <div className="w-full max-w-lg mx-auto px-2 md:px-0 relative h-[180px] md:h-[220px]">
                <svg
                  viewBox="0 0 400 200"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22B6FF" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* First line with animation */}
                  <AnimatePresence>
                    {showFirstLine && (
                      <motion.rect 
                        x="100" 
                        y="70" 
                        height="5" 
                        rx="2.5" 
                        fill="url(#logoGradient)"
                        initial={{ width: 0 }}
                        animate={{ width: 140 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Second line with animation */}
                  <AnimatePresence>
                    {showSecondLine && (
                      <motion.rect 
                        x="100" 
                        y="90" 
                        height="5" 
                        rx="2.5" 
                        fill="url(#logoGradient)"
                        initial={{ width: 0 }}
                        animate={{ width: 90 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Third line with animation */}
                  <AnimatePresence>
                    {showThirdLine && (
                      <motion.rect 
                        x="100" 
                        y="110" 
                        height="5" 
                        rx="2.5" 
                        fill="url(#logoGradient)"
                        initial={{ width: 0 }}
                        animate={{ width: 140 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Text with animation */}
                  <AnimatePresence>
                    {showText && (
                      <motion.text 
                        x="250" 
                        y="95" 
                        fontFamily="Consolas, monospace" 
                        fontSize="28" 
                        letterSpacing="1" 
                        fontWeight="bold" 
                        fill="url(#logoGradient)"
                        filter="url(#glow)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        textAnchor="middle"
                      >
                        ENABLER
                      </motion.text>
                    )}
                  </AnimatePresence>
                </svg>
              </div>
              
              <motion.div
                className="text-sm text-gray-500 mt-4 max-w-xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: initialAnimationComplete ? 1 : 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <p>↓ スクロールして詳細を見る ↓</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* This content appears after scrolling past the header */}
      <AnimatePresence>
        {!showContent && initialAnimationComplete && (
          <motion.div 
            className="w-full pt-28"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6">ロゴの黄金比とフィボナッチ数列</h2>
              
              <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">ロゴの黄金比</h3>
                    <p className="mb-4">Enablerのロゴには、デザインの調和を生み出す黄金比（1:1.618）が組み込まれています。</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>中央の線の長さは、上下の線の長さの0.618倍（黄金比）</li>
                      <li>ロゴ全体の高さと幅の比率も黄金比に基づいています</li>
                      <li>文字と線のスペースの配置も黄金比に従っています</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">フィボナッチ要素</h3>
                    <p className="mb-4">フィボナッチ数列（1, 1, 2, 3, 5, 8, 13...）は自然界に見られる成長パターンを表します。</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>3本の線はフィボナッチ数列の初期値（1, 1, 2）を表現</li>
                      <li>ロゴの間隔はフィボナッチ螺旋に従っています</li>
                      <li>年ごとのブランドカラーの進化にもフィボナッチ数列を活用</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="w-full max-w-xl mx-auto">
                    <svg 
                      viewBox="0 0 400 200" 
                      className="w-full h-auto" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Logo Base */}
                      <rect x="50" y="50" width="150" height="5" rx="2.5" fill="#22B6FF"/>
                      <rect x="50" y="70" width="93" height="5" rx="2.5" fill="#22B6FF"/>
                      <rect x="50" y="90" width="150" height="5" rx="2.5" fill="#22B6FF"/>
                      <text x="210" y="75" fontFamily="monospace" fontSize="28" fontWeight="bold" fill="#22B6FF">ENABLER</text>
                      
                      {/* Golden Ratio Annotations */}
                      <path d="M 50,40 L 200,40" stroke="#E5D24D" strokeWidth="1" strokeDasharray="4,4" />
                      <path d="M 50,100 L 200,100" stroke="#E5D24D" strokeWidth="1" strokeDasharray="4,4" />
                      <path d="M 40,50 L 40,90" stroke="#E5D24D" strokeWidth="1" strokeDasharray="4,4" />
                      <path d="M 210,50 L 210,90" stroke="#E5D24D" strokeWidth="1" strokeDasharray="4,4" />
                      
                      <path d="M 50,110 L 143,110 L 143,130" stroke="#E5D24D" strokeWidth="1" />
                      <text x="55" y="120" fontSize="10" fill="#666">150px</text>
                      <text x="145" y="140" fontSize="10" fill="#666">93px (150 × 0.618)</text>
                      
                      {/* Fibonacci Spiral */}
                      <path d="M 50,170 C 50,150 70,150 70,170 C 90,170 90,150 70,150 C 70,130 90,130 90,150" 
                            stroke="#A24DE5" strokeWidth="1.5" fill="none" />
                      <text x="100" y="160" fontSize="10" fill="#666">フィボナッチ螺旋の原理を応用</text>
                      
                      {/* Sequence Notation */}
                      <text x="270" y="130" fontSize="12" fill="#666">フィボナッチ数列:</text>
                      <text x="270" y="145" fontSize="12" fill="#666">1, 1, 2, 3, 5, 8, 13...</text>
                      <path d="M 255,160 L 320,160" stroke="#A24DE5" strokeWidth="1" />
                      <text x="270" y="175" fontSize="10" fill="#666">ロゴの3本線は</text>
                      <text x="270" y="185" fontSize="10" fill="#666">数列の最初の3つの数を表現</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BrandHeader;
