
import React from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import SpecialColorFormula from '../SpecialColorFormula';
import BackgroundColorTheory from '../BackgroundColorTheory';

interface MathPrinciplesSectionProps {
  isTheoryOpen: boolean;
  setIsTheoryOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MathPrinciplesSection: React.FC<MathPrinciplesSectionProps> = ({ 
  isTheoryOpen, 
  setIsTheoryOpen 
}) => {
  return (
    <Collapsible
      open={isTheoryOpen}
      onOpenChange={setIsTheoryOpen}
      className="bg-gray-50/70 p-4 rounded-lg my-5"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Info className="h-5 w-5 mr-2 text-enabler-600" />
          <p className="text-lg font-medium">アクセントカラーの数学的原理</p>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            {isTheoryOpen ? (
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
        <SpecialColorFormula />
        <BackgroundColorTheory />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MathPrinciplesSection;
