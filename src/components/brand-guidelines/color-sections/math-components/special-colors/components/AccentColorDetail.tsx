
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { motion } from 'framer-motion';

interface AccentColorDetailProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccentColorDetail: React.FC<AccentColorDetailProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="bg-gray-50/70 p-4 rounded-lg mb-5"
    >
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">アクセントカラーの詳細説明</p>
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
        <p className="text-lg my-5 leading-relaxed">
          アクセントカラーは節目となる年（フィボナッチ数列の年：1,1,2,3,5,8...）に変更され、次の節目が来るまで固定されます。これらの特別な色は「黄金角（約137.5度）」という、自然界の法則から生まれます。ひまわりの種やパイナップルの模様と同じ原理です。
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default AccentColorDetail;
