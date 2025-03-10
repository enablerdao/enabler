
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import ColorUsageGuidelines from './ColorUsageGuidelines';

interface GuidelinesSectionProps {
  isGuidelinesOpen: boolean;
  setIsGuidelinesOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GuidelinesSection: React.FC<GuidelinesSectionProps> = ({ 
  isGuidelinesOpen, 
  setIsGuidelinesOpen 
}) => {
  return (
    <Collapsible
      open={isGuidelinesOpen}
      onOpenChange={setIsGuidelinesOpen}
      className="bg-gray-50/70 p-4 rounded-lg mt-5"
    >
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">色彩使用ガイドライン</p>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            {isGuidelinesOpen ? (
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
        <ColorUsageGuidelines />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default GuidelinesSection;
