
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

  return (
    <MotionBox delay={300}>
      <section className="mb-6 md:mb-12 md:px-0 px-0">
        <div className="flex items-center mb-3 md:mb-5">
          <Info className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. ロゴについて</h2>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-subtle px-[13px] mx-0">
          <div className="w-full max-w-md mx-auto mb-8 h-[150px] flex items-center justify-center">
            <motion.svg
              viewBox="0 0 200 70"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={foundingBlue} />
                  <stop offset="100%" stopColor={currentYearColor.hex} />
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
              >
                <Collapsible className="mb-6">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full flex justify-between items-center py-2 text-left">
                      <span className="text-lg font-semibold">ロゴの3本線の意味</span>
                      <Info size={20} className="text-gray-400" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 bg-gray-50 rounded-lg mt-2">
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-sm md:text-base"><strong>上の線</strong>: 創業から現在への成長の軌跡</li>
                      <li className="text-sm md:text-base"><strong>中央の線</strong>: 黄金比に基づく調和の表現</li>
                      <li className="text-sm md:text-base"><strong>下の線</strong>: 原点への敬意と初心</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible className="mb-6">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full flex justify-between items-center py-2 text-left">
                      <span className="text-lg font-semibold">ロゴ使用ガイドライン</span>
                      <Info size={20} className="text-gray-400" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 bg-gray-50 rounded-lg mt-2">
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-sm md:text-base">適切な余白を設け、他の要素と重ならないように</li>
                      <li className="text-sm md:text-base">変形せず、公式の比率を維持</li>
                      <li className="text-sm md:text-base">公式カラーガイドラインに従って使用</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">毎年進化するロゴデザイン（2022年〜）</h3>
                  <p className="text-sm text-gray-600 mb-4">フィボナッチ数列に基づき、横スクロールで無限にロゴの変化を確認できます</p>
                  <InfiniteLogoScroller />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </MotionBox>
  );
};

export default LogoSection;
