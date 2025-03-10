
import React, { useState } from 'react';
import { Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { motion } from 'framer-motion';

interface SpecialYearColorExplanationProps {
  copyColorToClipboard: (colorCode: string, colorName: string) => void;
}

const SpecialYearColorExplanation: React.FC<SpecialYearColorExplanationProps> = ({ 
  copyColorToClipboard 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg mb-6 border border-green-100">
      <div 
        className="bg-[#4CAF50] text-white px-4 py-3 rounded-md font-medium cursor-pointer flex items-center justify-between mb-4"
        onClick={() => copyColorToClipboard("#4CAF50", "緑色")}
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl"
        >
          2025年アクセントカラー
        </motion.span>
        <div className="flex items-center">
          <span className="mr-2">#4CAF50</span>
          <Copy className="w-4 h-4" />
        </div>
      </div>
      
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-full flex items-center justify-center mb-2">
            {isOpen ? (
              <>
                <span className="text-sm mr-1">詳細を隠す</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span className="text-sm mr-1">詳細を表示</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
            <div 
              className="bg-[#22B6FF] text-white text-base font-medium p-3 rounded-lg text-center w-full md:w-1/3 cursor-pointer"
              onClick={() => copyColorToClipboard("#22B6FF", "2022年（創業の年のカラー）")}
            >
              2022年<br/>#22B6FF <Copy className="w-3 h-3 inline ml-1" />
            </div>
            <div className="text-2xl text-gray-400 hidden md:block">→</div>
            <div className="text-2xl text-gray-400 md:hidden mx-auto">↓</div>
            <div 
              className="bg-[#2BBCFF] text-white text-base font-medium p-3 rounded-lg text-center w-full md:w-1/3 cursor-pointer"
              onClick={() => copyColorToClipboard("#2BBCFF", "2025年（現在のカラー）")}
            >
              2025年<br/>#2BBCFF <Copy className="w-3 h-3 inline ml-1" />
            </div>
            <div className="text-2xl text-gray-400 hidden md:block">+</div>
            <div className="text-2xl text-gray-400 md:hidden mx-auto">+</div>
            <div 
              className="bg-[#4CAF50] text-white text-base font-medium p-3 rounded-lg text-center w-full md:w-1/3 cursor-pointer"
              onClick={() => copyColorToClipboard("#4CAF50", "2025年（特別アクセント）")}
            >
              特別アクセント<br/>#4CAF50 <Copy className="w-3 h-3 inline ml-1" />
            </div>
          </div>
          
          <p className="text-base leading-relaxed">
            海の青から始まり、陸の緑を経て、やがて空へ—自然界の成長過程をブランドの成長に重ね合わせています。この緑は創業者がインスピレーションを得た公園の若葉の色を基にしています。
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default SpecialYearColorExplanation;
