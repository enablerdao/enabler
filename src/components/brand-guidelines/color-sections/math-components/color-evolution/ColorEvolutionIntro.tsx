
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ColorEvolutionIntro: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollContent = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 border-b pb-2">色の成長ストーリー</h3>
      
      <p className="text-base mb-4 leading-relaxed">
        私たちの青は「深い海」からスタートします。そこから徐々に上へ上へと昇っていき、
        「広い空」へ、そして最終的には「宇宙の無限」へとつながっていきます。
      </p>
      
      <div className="relative overflow-hidden">
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md hidden md:flex"
          onClick={() => scrollContent('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto hide-scrollbar pb-4 touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <motion.div
            className="p-4 bg-gradient-to-t from-blue-500 to-sky-200 rounded-lg mb-4 text-white min-w-[600px]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-medium">
              人の可能性は最初は海の底に眠る真珠のよう。それを見つけ、育て、
              やがて空高く飛ばせるようになるまで、ずっと一緒に歩んでいきたい。
              そんな思いを、この「下から上へ」の色の旅に込めています。
            </p>
            
            <div className="mt-4 h-32 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <div className="text-white text-center px-4">
                <p className="font-semibold mb-2">深い海から広い空へ</p>
                <p>創業時の深い青から、年を重ねるごとに明るい青へと変化</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md hidden md:flex"
          onClick={() => scrollContent('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      <p className="text-base mb-4 leading-relaxed">
        最終的な色は、まるで宇宙から見た地球の青のように、
        希望と可能性に満ちた明るい青になります。
        （このペースだと完成まで100年以上かかりますが、気長にお付き合いください）
      </p>
    </div>
  );
};

export default ColorEvolutionIntro;
