
import React from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import FibonacciMilestoneTable from './FibonacciMilestoneTable';

interface MilestoneYearsSectionProps {
  isMilestoneOpen: boolean;
  setIsMilestoneOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fibonacciMilestones: Array<{
    fib: number;
    year: number;
    description: string;
  }>;
}

const MilestoneYearsSection: React.FC<MilestoneYearsSectionProps> = ({ 
  isMilestoneOpen, 
  setIsMilestoneOpen,
  fibonacciMilestones
}) => {
  return (
    <Collapsible
      open={isMilestoneOpen}
      onOpenChange={setIsMilestoneOpen}
      className="bg-gray-50/70 p-4 rounded-lg my-5"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Info className="h-5 w-5 mr-2 text-enabler-600" />
          <p className="text-lg font-medium">フィボナッチ数列と節目の年一覧</p>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            {isMilestoneOpen ? (
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
        <FibonacciMilestoneTable fibonacciMilestones={fibonacciMilestones} />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MilestoneYearsSection;
