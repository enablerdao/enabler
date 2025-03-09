
import React, { useState } from 'react';
import { Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface ColorFormulaProps {
  copyToClipboard: (text: string, label: string) => void;
}

const ColorFormula: React.FC<ColorFormulaProps> = ({ copyToClipboard }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-3 mt-8">毎年の色の変化について（ブルー系カラー）</h4>
      <p className="text-base mb-4 leading-relaxed">
        Enablerの青色は毎年徐々に明るくなり、絶え間ない成長を表します。
      </p>
      
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="bg-gray-50 p-4 rounded-lg mb-5"
      >
        <div className="flex justify-between items-center">
          <h5 className="font-medium">色の変化式</h5>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              {isOpen ? (
                <>
                  <span className="text-sm">詳細を隠す</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span className="text-sm">詳細を表示</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <motion.div
            className="relative mt-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <pre className="text-sm md:text-base font-mono overflow-x-auto p-4 bg-gray-100 rounded-lg">
{`R = round(34 + 190 × (1 - 0.95^(y - 2022)))
G = round(182 + 63 × (1 - 0.95^(y - 2022)))
B = 255（固定）
※ y はその年の西暦`}
            </pre>
            <p className="text-sm text-gray-500 mt-2 italic">
              でも心配しないでください。この計算式を理解できなくても、
              Enablerを好きになってもらえれば十分です。（計算は私たちにお任せを）
            </p>
          </motion.div>
          
          <Button 
            className="mt-3 text-sm md:text-base px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md flex items-center"
            onClick={() => copyToClipboard(`R = ${companyInfo.colorFormula.r}\nG = ${companyInfo.colorFormula.g}\nB = 255（固定）`, '色計算式')}
          >
            <Copy className="w-4 h-4 mr-2" /> 計算式をコピー
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ColorFormula;
