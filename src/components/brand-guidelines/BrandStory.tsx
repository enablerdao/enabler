
import React, { useState, useEffect } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

const BrandStory = () => {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Mark animation as complete after delay
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            「人々の可能性をテクノロジーで引き出す」
          </motion.div>
          
          <AnimatePresence>
            {animationComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Collapsible className="flex-grow" open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full flex justify-between items-center py-2 text-left mb-4">
                      <span className="font-medium">私たちのストーリー</span>
                      {isCollapsibleOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4">
                    <p className="text-base leading-relaxed">
                      「Enabler（イネブラ）」は、人々が持つ可能性をテクノロジーの力で引き出し、実現するために2022年に誕生しました。
                    </p>
                    <p className="text-base leading-relaxed">
                      誰もが持っている可能性の種を育て、未来をともに創るパートナーとして、温かな視点で寄り添い続けています。
                    </p>
                  </CollapsibleContent>
                </Collapsible>

                <div className="mt-auto">
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <motion.div 
                      className="bg-blue-50 p-2 rounded-lg text-center"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <span className="text-xs font-medium">可能性</span>
                    </motion.div>
                    <motion.div 
                      className="bg-green-50 p-2 rounded-lg text-center"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                    >
                      <span className="text-xs font-medium">成長</span>
                    </motion.div>
                    <motion.div 
                      className="bg-purple-50 p-2 rounded-lg text-center"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.4 }}
                    >
                      <span className="text-xs font-medium">創造</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandStory;
