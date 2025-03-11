
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Info } from 'lucide-react';

interface FibonacciApplicationSectionProps {
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

const FibonacciApplicationSection: React.FC<FibonacciApplicationSectionProps> = ({ 
  expandedSection, 
  toggleSection 
}) => {
  return (
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
                  <rect x="30" y="60" width="90" height="5" rx="2.5" fill="#22B6FF" />
                  <rect x="30" y="75" width="55.62" height="5" rx="2.5" fill="#22B6FF" />
                  <rect x="30" y="90" width="90" height="5" rx="2.5" fill="#22B6FF" />
                  
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
  );
};

export default FibonacciApplicationSection;
