
import React, { useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Image, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const PhotosAndIllustrations = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Example photos and illustrations
  const examples = [
    { type: "photo", color: "bg-blue-100" },
    { type: "illustration", color: "bg-green-100" },
    { type: "photo", color: "bg-yellow-100" },
    { type: "illustration", color: "bg-purple-100" }
  ];

  return (
    <MotionBox delay={600}>
      <section className="h-full">
        <div className="flex items-center mb-4">
          <Image className="text-enabler-600 mr-3" size={20} />
          <h2 className="text-xl font-bold text-gray-900">写真とイラスト</h2>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-subtle h-full flex flex-col">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {examples.map((example, idx) => (
              <motion.div
                key={idx}
                className={`${example.color} rounded-lg h-20 flex items-center justify-center ${idx === 1 || idx === 3 ? "border-2 border-dashed border-gray-300" : ""}`}
                whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-medium">
                  {example.type === "photo" ? "📷 写真" : "🖌️ イラスト"}
                </span>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="p-3 border-l-3 border-blue-400 bg-blue-50 text-sm">
              <strong>写真</strong>: 明るく温かい雰囲気
            </div>
            <div className="p-3 border-l-3 border-green-400 bg-green-50 text-sm">
              <strong>イラスト</strong>: シンプルで優しいタッチ
            </div>
          </div>
          
          <div className="relative overflow-hidden flex-grow" style={{ maxHeight: isExpanded ? 'none' : '60px' }}>
            <p className="text-sm">
              写真やイラストは、ブランドの個性を表現する大切な要素です。統一感を持たせることで、一貫したイメージを伝えることができます。
              明るく、温かく、思わず「いいね」と言いたくなるような写真を選びましょう。
              シンプルで優しいタッチが基本。難しく考えずに、素直な気持ちで描かれたものを使用しましょう。
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
        </div>
      </section>
    </MotionBox>
  );
};

export default PhotosAndIllustrations;
