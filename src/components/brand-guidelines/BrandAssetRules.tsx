
import React, { useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { BookOpen, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const BrandAssetRules = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const doExamples = [
    "適切な余白",
    "公式カラー",
    "高解像度",
  ];
  
  const dontExamples = [
    "変形させない",
    "色変更しない",
    "低解像度使用しない",
  ];

  return (
    <MotionBox delay={800}>
      <section className="h-full">
        <div className="flex items-center mb-4">
          <BookOpen className="text-enabler-600 mr-3" size={20} />
          <h2 className="text-xl font-bold text-gray-900">ブランド資産ルール</h2>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-subtle h-full flex flex-col">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <motion.div 
              className="bg-green-50 p-3 rounded-lg border border-green-100"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-medium text-green-800 mb-2 flex items-center text-sm">
                <span className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center text-green-700 mr-2 text-xs">✓</span>
                推奨例
              </h3>
              <ul className="space-y-1">
                {doExamples.map((example, index) => (
                  <li key={`do-${index}`} className="flex items-start text-xs">
                    <span className="w-4 h-4 rounded-full bg-green-200 flex-shrink-0 flex items-center justify-center text-green-700 mr-1 mt-0.5 text-xs">✓</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-red-50 p-3 rounded-lg border border-red-100"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-medium text-red-800 mb-2 flex items-center text-sm">
                <span className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center text-red-700 mr-2 text-xs">×</span>
                避けるべき例
              </h3>
              <ul className="space-y-1">
                {dontExamples.map((example, index) => (
                  <li key={`dont-${index}`} className="flex items-start text-xs">
                    <span className="w-4 h-4 rounded-full bg-red-200 flex-shrink-0 flex items-center justify-center text-red-700 mr-1 mt-0.5 text-xs">×</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <div className="relative overflow-hidden flex-grow" style={{ maxHeight: isExpanded ? 'none' : '60px' }}>
            <p className="text-sm">
              ロゴやブランドカラーを外部利用する場合は、公式のロゴファイル（SVG、PNG）を使用し、必ずガイドラインを遵守してください。独自解釈での変更はブランドの一貫性を損なう可能性があります。
            </p>
            
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 w-full flex items-center justify-center text-enabler-600"
          >
            {isExpanded ? (
              <>
                <span className="mr-1">閉じる</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span className="mr-1">もっと見る</span>
                <ChevronDown size={16} />
              </>
            )}
          </Button>
          
          <motion.div 
            className="mt-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 flex items-center"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AlertTriangle className="text-yellow-500 mr-2 flex-shrink-0" size={16} />
            <p className="text-xs">
              <span className="font-medium">お問い合わせ</span>: brand@enabler.jp
            </p>
          </motion.div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandAssetRules;
