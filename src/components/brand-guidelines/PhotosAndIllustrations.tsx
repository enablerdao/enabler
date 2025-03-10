
import React, { useState, useEffect } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Image, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

const PhotosAndIllustrations = () => {
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const examples = [
    { type: "photo", color: "bg-blue-100" },
    { type: "illustration", color: "bg-green-100" },
    { type: "photo", color: "bg-yellow-100" },
    { type: "illustration", color: "bg-purple-100" }
  ];

  useEffect(() => {
    // Mark animation as complete after delay
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionBox delay={600}>
      <section className="h-full">
        <div className="flex items-center mb-4">
          <Image className="text-enabler-600 mr-3" size={20} />
          <h2 className="text-xl font-bold text-gray-900">写真とイラスト</h2>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-subtle h-full flex flex-col">
          <AnimatePresence>
            {animationComplete && (
              <motion.div 
                className="flex-1 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {examples.map((example, idx) => (
                    <motion.div
                      key={idx}
                      className={`${example.color} rounded-lg h-24 flex items-center justify-center ${idx === 1 || idx === 3 ? "border-2 border-dashed border-gray-300" : ""}`}
                      whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + (idx * 0.15) }}
                    >
                      <span className="text-sm font-medium">
                        {example.type === "photo" ? "📷 写真" : "🖌️ イラスト"}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <motion.div 
                    className="p-3 border-l-3 border-blue-400 bg-blue-50 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <strong>写真</strong>: 明るく温かい雰囲気
                  </motion.div>
                  <motion.div 
                    className="p-3 border-l-3 border-green-400 bg-green-50 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 }}
                  >
                    <strong>イラスト</strong>: シンプルで優しいタッチ
                  </motion.div>
                </div>
                
                <Collapsible className="mt-auto" open={isGuidelinesOpen} onOpenChange={setIsGuidelinesOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full flex justify-between items-center py-2 text-left">
                      <span className="font-medium">ガイドライン詳細</span>
                      {isGuidelinesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4 p-4 bg-gray-50 rounded-lg mt-2">
                    <p className="text-sm">
                      写真やイラストは、ブランドの個性を表現する大切な要素です。統一感を持たせることで、一貫したイメージを伝えることができます。
                    </p>
                    <p className="text-sm">
                      明るく、温かく、思わず「いいね」と言いたくなるような写真を選びましょう。
                      シンプルで優しいタッチが基本。難しく考えずに、素直な気持ちで描かれたものを使用しましょう。
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </MotionBox>
  );
};

export default PhotosAndIllustrations;
