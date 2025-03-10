
import React, { useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const BrandStory = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <MotionBox delay={200}>
      <section className="h-full">
        <div className="flex items-center mb-4">
          <BookOpen className="text-enabler-600 mr-3" size={20} />
          <h2 className="text-xl font-bold text-gray-900">ブランドストーリーと理念</h2>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-subtle h-full flex flex-col">
          <motion.div 
            className="mb-4 p-4 border-l-4 border-enabler-400 bg-blue-50 italic"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            「人々の可能性をテクノロジーで引き出す」
          </motion.div>
          
          <div className="flex-grow">
            <div className="relative overflow-hidden" style={{ maxHeight: isExpanded ? 'none' : '80px' }}>
              <p className="text-base leading-relaxed">
                「Enabler（イネブラ）」は、人々が持つ可能性をテクノロジーの力で引き出し、実現するために2022年に誕生しました。誰もが持っている可能性の種を育て、未来をともに創るパートナーとして、温かな視点で寄り添い続けています。
              </p>
            </div>
            
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
            )}
            
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
          </div>

          <div className="mt-auto">
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-blue-50 p-2 rounded-lg text-center">
                <span className="text-xs font-medium">可能性</span>
              </div>
              <div className="bg-green-50 p-2 rounded-lg text-center">
                <span className="text-xs font-medium">成長</span>
              </div>
              <div className="bg-purple-50 p-2 rounded-lg text-center">
                <span className="text-xs font-medium">創造</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandStory;
