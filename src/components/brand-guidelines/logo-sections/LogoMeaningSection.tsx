
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Info } from 'lucide-react';

interface LogoMeaningSectionProps {
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

const LogoMeaningSection: React.FC<LogoMeaningSectionProps> = ({ 
  expandedSection, 
  toggleSection 
}) => {
  return (
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
                    <rect x="25" y="25" width="60" height="3" rx="1.5" fill="#22B6FF"/>
                    <rect x="25" y="40" width="37.1" height="3" rx="1.5" fill="#22B6FF"/>
                    <rect x="25" y="55" width="60" height="3" rx="1.5" fill="#22B6FF"/>
                    
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
  );
};

export default LogoMeaningSection;
