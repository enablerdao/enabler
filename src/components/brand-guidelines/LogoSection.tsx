
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
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
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
                    <div className="mt-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <ul className="list-disc pl-5 space-y-2">
                            <li className="text-sm md:text-base"><strong>上の線</strong>: 創業から現在への成長の軌跡</li>
                            <li className="text-sm md:text-base"><strong>中央の線</strong>: 黄金比に基づく調和の表現</li>
                            <li className="text-sm md:text-base"><strong>下の線</strong>: 原点への敬意と初心</li>
                          </ul>
                        </div>
                        <div className="flex-1">
                          <svg 
                            viewBox="0 0 200 100" 
                            className="w-full h-auto" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="25" y="25" width="60" height="3" rx="1.5" fill={foundingBlue}/>
                            <rect x="25" y="40" width="37.1" height="3" rx="1.5" fill={foundingBlue}/>
                            <rect x="25" y="55" width="60" height="3" rx="1.5" fill={foundingBlue}/>
                            
                            <path d="M 24,30 L 18,30 L 18,70 L 24,70" stroke="#666" strokeWidth="0.5" fill="none" />
                            <text x="10" y="50" fontSize="6" fill="#666" textAnchor="middle" dominantBaseline="middle">高さ</text>
                            <text x="10" y="55" fontSize="6" fill="#666" textAnchor="middle" dominantBaseline="middle">調和</text>
                            
                            <path d="M 25,70 L 85,70 L 85,76" stroke="#666" strokeWidth="0.5" fill="none" />
                            <text x="55" y="75" fontSize="6" fill="#666" textAnchor="middle">幅（基準）</text>
                            
                            <path d="M 25,65 L 62.1,65 L 62.1,68" stroke="#E5D24D" strokeWidth="0.5" fill="none" />
                            <text x="45" y="67" fontSize="5" fill="#666" textAnchor="middle">0.618 × 幅</text>
                            
                            <line x1="100" y1="25" x2="180" y2="25" stroke="#22B6FF" strokeWidth="1" />
                            <text x="105" y="20" fontSize="6" fill="#666">成長の軌跡: 基準となる長さ</text>
                            
                            <line x1="100" y1="40" x2="137.1" y2="40" stroke="#22B6FF" strokeWidth="1" />
                            <text x="105" y="35" fontSize="6" fill="#666">調和: 黄金比 (0.618) を適用</text>
                            
                            <line x1="100" y1="55" x2="180" y2="55" stroke="#22B6FF" strokeWidth="1" />
                            <text x="105" y="50" fontSize="6" fill="#666">原点: 基準となる長さに回帰</text>
                            
                            <circle cx="25" cy="40" r="2" fill="#A24DE5" fillOpacity="0.5" />
                            <text x="105" y="65" fontSize="6" fill="#A24DE5">・中心点から黄金螺旋が展開</text>
                            <text x="105" y="72" fontSize="6" fill="#A24DE5">・3本の線がフィボナッチ数列の初期値（1,1,2）を表現</text>
                            <text x="105" y="79" fontSize="6" fill="#A24DE5">・間隔と比率が自然界の法則に沿っている</text>
                          </svg>
                        </div>
                      </div>
                    </div>
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
                onClick={() => toggleSection('fibonacci')}
              >
                <h3 className="text-lg font-semibold text-purple-800">フィボナッチと黄金比の応用</h3>
                <motion.div
                  animate={{ rotate: expandedSection === 'fibonacci' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Info size={20} className="text-purple-500" />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {expandedSection === 'fibonacci' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-4">
                      <p className="text-sm">Enablerのロゴデザインには、フィボナッチ数列と黄金比が幾何学的に組み込まれています。</p>
                      
                      <div className="w-full">
                        <svg 
                          viewBox="0 0 300 200" 
                          className="w-full h-auto" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Background rectangle */}
                          <rect x="10" y="10" width="280" height="180" fill="#fafafa" rx="5" />
                          
                          {/* Fibonacci Squares */}
                          <rect x="150" y="30" width="13" height="13" fill="#E5D24D" fillOpacity="0.2" stroke="#E5D24D" strokeWidth="1" />
                          <rect x="150" y="43" width="21" height="21" fill="#E5D24D" fillOpacity="0.2" stroke="#E5D24D" strokeWidth="1" />
                          <rect x="150" y="64" width="34" height="34" fill="#E5D24D" fillOpacity="0.2" stroke="#E5D24D" strokeWidth="1" />
                          <rect x="150" y="98" width="55" height="55" fill="#E5D24D" fillOpacity="0.2" stroke="#E5D24D" strokeWidth="1" />
                          
                          {/* Fibonacci Spiral */}
                          <path 
                            d="M 150,43 Q 150,30 163,30 L 163,43 L 150,43 Z 
                               M 171,43 Q 171,64 150,64 L 150,43 L 171,43 Z
                               M 184,98 Q 184,64 150,64 L 150,98 L 184,98 Z
                               M 205,153 Q 205,98 150,98 L 150,153 L 205,153 Z" 
                            fill="none" 
                            stroke="#A24DE5" 
                            strokeWidth="1.5"
                            strokeDasharray="3,3"
                          />
                          
                          {/* Logo Elements */}
                          <rect x="30" y="60" width="90" height="5" rx="2.5" fill={foundingBlue} />
                          <rect x="30" y="75" width="55.62" height="5" rx="2.5" fill={foundingBlue} />
                          <rect x="30" y="90" width="90" height="5" rx="2.5" fill={foundingBlue} />
                          
                          {/* Connection Lines */}
                          <line x1="85.62" y1="75" x2="150" y2="75" stroke="#666" strokeWidth="0.5" strokeDasharray="2,2" />
                          <line x1="120" y1="60" x2="163" y2="37" stroke="#666" strokeWidth="0.5" strokeDasharray="2,2" />
                          <line x1="120" y1="90" x2="171" y2="75" stroke="#666" strokeWidth="0.5" strokeDasharray="2,2" />
                          
                          {/* Annotations */}
                          <text x="30" y="25" fontSize="9" fill="#333" fontWeight="bold">フィボナッチ数列と黄金比の適用</text>
                          <text x="30" y="110" fontSize="8" fill="#666">中央の線: 上下の線の0.618倍（黄金比）</text>
                          <text x="30" y="125" fontSize="8" fill="#666">上下の線の間隔: フィボナッチ数列に基づく</text>
                          <text x="30" y="140" fontSize="8" fill="#666">全体の構成: 黄金長方形と螺旋に沿っている</text>
                          
                          <text x="230" y="40" fontSize="8" fill="#A24DE5">1×1</text>
                          <text x="230" y="55" fontSize="8" fill="#A24DE5">1×1</text>
                          <text x="230" y="75" fontSize="8" fill="#A24DE5">2×2</text>
                          <text x="230" y="110" fontSize="8" fill="#A24DE5">3×3</text>
                          <text x="230" y="140" fontSize="8" fill="#A24DE5">5×5</text>
                          <text x="220" y="170" fontSize="8" fill="#A24DE5">フィボナッチ数列: 1,1,2,3,5,8...</text>
                        </svg>
                      </div>
                      
                      <p className="text-sm text-purple-800 font-medium">フィボナッチ数列を組み込むことで、自然界に存在する調和と成長のパターンをロゴに反映しています。</p>
                    </div>
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
        </div>
      </section>
    </MotionBox>
  );
};

export default LogoSection;
