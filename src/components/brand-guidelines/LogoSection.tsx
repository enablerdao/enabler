
import React, { useEffect, useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Info } from 'lucide-react';
import LogoVariations from './LogoVariations';
import { companyInfo } from '@/lib/data';
import InfiniteLogoScroller from './InfiniteLogoScroller';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface ColorInfo {
  year: number;
  hex: string;
  name: string;
  rgb: string;
}

interface LogoSectionProps {
  currentYearColor: ColorInfo;
}

const LogoSection = ({
  currentYearColor
}: LogoSectionProps) => {
  const currentYear = new Date().getFullYear();
  const foundingYear = 2022;
  const foundingBlue = "#22B6FF";
  
  // Animation states
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showText, setShowText] = useState(false);
  const [logoComplete, setLogoComplete] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Start the animation sequence when component mounts
  useEffect(() => {
    const animationSequence = () => {
      // First line appears
      setTimeout(() => setShowFirstLine(true), 500);
      // Second line appears
      setTimeout(() => setShowSecondLine(true), 1200);
      // Third line appears
      setTimeout(() => setShowThirdLine(true), 1900);
      // Text appears
      setTimeout(() => setShowText(true), 2600);
      // Mark animation as complete
      setTimeout(() => setLogoComplete(true), 3500);
    };

    animationSequence();
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  return (
    <MotionBox delay={300}>
      <section className="mb-6 md:mb-12 md:px-0 px-0">
        <div className="flex items-center mb-4 md:mb-6">
          <Info className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. ロゴについて</h2>
        </div>
        
        <div className="bg-white p-5 md:p-7 rounded-xl shadow-subtle px-[14px] mx-0">
          <div className="w-full max-w-md mx-auto mb-10 h-[180px] flex items-center justify-center">
            <motion.svg
              viewBox="0 0 200 70"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={foundingBlue}>
                    <animate attributeName="stop-color" values={`${foundingBlue};${currentYearColor.hex};${foundingBlue}`} dur="8s" repeatCount="indefinite"/>
                  </stop>
                  <stop offset="100%" stopColor={currentYearColor.hex}>
                    <animate attributeName="stop-color" values={`${currentYearColor.hex};${foundingBlue};${currentYearColor.hex}`} dur="8s" repeatCount="indefinite"/>
                  </stop>
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <rect width="200" height="70" fill="#fff" fillOpacity="0" />
              
              {/* First line with animation */}
              <AnimatePresence>
                {showFirstLine && (
                  <motion.rect 
                    x="15" 
                    y="25" 
                    height="3" 
                    rx="1.5" 
                    fill={foundingBlue}
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
              
              {/* Second line with animation */}
              <AnimatePresence>
                {showSecondLine && (
                  <motion.rect 
                    x="15" 
                    y="33" 
                    height="3" 
                    rx="1.5" 
                    fill={foundingBlue}
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
              
              {/* Third line with animation */}
              <AnimatePresence>
                {showThirdLine && (
                  <motion.rect 
                    x="15" 
                    y="41" 
                    height="3" 
                    rx="1.5" 
                    fill={foundingBlue}
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
              
              {/* Text with animation */}
              <AnimatePresence>
                {showText && (
                  <motion.text 
                    x="90" 
                    y="40" 
                    fontFamily="Consolas, monospace" 
                    fontSize="18" 
                    letterSpacing="0.5" 
                    fontWeight="bold" 
                    fill="url(#animatedGradient)"
                    filter="url(#glow)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    ENABLER
                  </motion.text>
                )}
              </AnimatePresence>
            </motion.svg>
          </div>

          <AnimatePresence>
            {logoComplete && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-blue-50/50 rounded-lg p-4 border border-blue-100"
                >
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('meaning')}
                  >
                    <h3 className="text-lg font-semibold text-blue-800">ロゴの3本線の意味</h3>
                    <motion.div
                      animate={{ rotate: expandedSection === 'meaning' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Info size={20} className="text-blue-500" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedSection === 'meaning' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                          <li className="text-sm md:text-base"><strong>上の線</strong>: 創業から現在への成長の軌跡</li>
                          <li className="text-sm md:text-base"><strong>中央の線</strong>: 黄金比に基づく調和の表現</li>
                          <li className="text-sm md:text-base"><strong>下の線</strong>: 原点への敬意と初心</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-purple-50/50 rounded-lg p-4 border border-purple-100"
                >
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('guidelines')}
                  >
                    <h3 className="text-lg font-semibold text-purple-800">ロゴ使用ガイドライン</h3>
                    <motion.div
                      animate={{ rotate: expandedSection === 'guidelines' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Info size={20} className="text-purple-500" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedSection === 'guidelines' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                          <li className="text-sm md:text-base">適切な余白を設け、他の要素と重ならないように</li>
                          <li className="text-sm md:text-base">変形せず、公式の比率を維持</li>
                          <li className="text-sm md:text-base">公式カラーガイドラインに従って使用</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-100"
                >
                  <h3 className="text-lg font-semibold mb-4 text-indigo-900">毎年進化するロゴデザイン（2022年〜）</h3>
                  <p className="text-sm text-indigo-700 mb-4">フィボナッチ数列に基づき、横スクロールで無限にロゴの変化を確認できます</p>
                  <InfiniteLogoScroller />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </MotionBox>
  );
};

export default LogoSection;
