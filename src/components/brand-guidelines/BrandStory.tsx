
import React, { useState, useEffect } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

const BrandStory = () => {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  const coreValues = [
    { id: 'possibility', name: '可能性', color: 'bg-blue-50', hoverColor: 'bg-blue-100' },
    { id: 'growth', name: '成長', color: 'bg-green-50', hoverColor: 'bg-green-100' },
    { id: 'creation', name: '創造', color: 'bg-purple-50', hoverColor: 'bg-purple-100' }
  ];

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
          <h2 className="text-xl font-bold text-gray-900">1. ブランドストーリーと理念</h2>
        </div>
        
        <div className="bg-white p-5 md:p-7 rounded-xl shadow-subtle h-full flex flex-col">
          <motion.div 
            className="mb-6 p-5 border-l-4 border-enabler-400 bg-blue-50/50 italic rounded-r-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-lg font-medium text-gray-800">「人々の可能性をテクノロジーで引き出す」</span>
          </motion.div>
          
          <AnimatePresence>
            {animationComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-grow flex flex-col"
              >
                <Collapsible className="flex-grow mb-6" open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full flex justify-between items-center py-3 text-left mb-4 bg-gray-50 hover:bg-gray-100">
                      <span className="font-medium text-gray-800">私たちのストーリー</span>
                      {isCollapsibleOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4 p-4 bg-gray-50/50 rounded-lg">
                    <p className="text-base leading-relaxed">
                      「Enabler（イネブラ）」は、人々が持つ可能性をテクノロジーの力で引き出し、実現するために2022年に誕生しました。
                    </p>
                    <p className="text-base leading-relaxed">
                      誰もが持っている可能性の種を育て、未来をともに創るパートナーとして、温かな視点で寄り添い続けています。
                    </p>
                  </CollapsibleContent>
                </Collapsible>

                <div className="mt-auto">
                  <h3 className="text-base font-medium text-gray-700 mb-3">core values</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {coreValues.map((value) => (
                      <motion.div 
                        key={value.id}
                        className={`${hoveredValue === value.id ? value.hoverColor : value.color} p-3 rounded-lg text-center cursor-pointer`}
                        whileHover={{ scale: 1.05, y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          y: { type: "spring", stiffness: 300, damping: 20 },
                          opacity: { duration: 0.4, delay: coreValues.findIndex(v => v.id === value.id) * 0.2 + 0.5 }
                        }}
                        onHoverStart={() => setHoveredValue(value.id)}
                        onHoverEnd={() => setHoveredValue(null)}
                      >
                        <span className="text-sm font-medium">{value.name}</span>
                      </motion.div>
                    ))}
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
