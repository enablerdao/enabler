
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface FibonacciMilestone {
  fib: number;
  year: number;
  description: string;
}

interface FibonacciMilestoneTableProps {
  fibonacciMilestones: FibonacciMilestone[];
}

const FibonacciMilestoneTable: React.FC<FibonacciMilestoneTableProps> = ({ 
  fibonacciMilestones 
}) => {
  const [displayLimit, setDisplayLimit] = useState(20);
  const [expanded, setExpanded] = useState(false);
  
  // Generate additional Fibonacci milestones dynamically
  const generateAdditionalMilestones = (
    startIndex: number, 
    count: number
  ): FibonacciMilestone[] => {
    const result: FibonacciMilestone[] = [];
    
    if (fibonacciMilestones.length < 2) {
      return result;
    }
    
    // Get the last two entries from existing milestones
    const lastMilestone = fibonacciMilestones[fibonacciMilestones.length - 1];
    const secondLastMilestone = fibonacciMilestones[fibonacciMilestones.length - 2];
    
    let lastFib = lastMilestone.fib;
    let secondLastFib = secondLastMilestone.fib;
    let lastYear = lastMilestone.year;
    
    for (let i = 0; i < count; i++) {
      // Calculate next Fibonacci number
      const nextFib = lastFib + secondLastFib;
      
      // Calculate years between milestones
      const yearDiff = lastMilestone.year - secondLastMilestone.year;
      const nextYear = lastYear + nextFib - lastFib;
      
      // Create milestone
      result.push({
        fib: nextFib,
        year: nextYear,
        description: `${startIndex + i + 1}番目の節目`
      });
      
      // Update for next iteration
      secondLastFib = lastFib;
      lastFib = nextFib;
      lastYear = nextYear;
    }
    
    return result;
  };
  
  // Create extended milestones
  const getVisibleMilestones = (): FibonacciMilestone[] => {
    if (displayLimit <= fibonacciMilestones.length) {
      return fibonacciMilestones.slice(0, displayLimit);
    }
    
    const additional = generateAdditionalMilestones(
      fibonacciMilestones.length,
      displayLimit - fibonacciMilestones.length
    );
    
    return [...fibonacciMilestones, ...additional];
  };
  
  const visibleMilestones = getVisibleMilestones();
  
  const loadMore = () => {
    setDisplayLimit(prev => prev + 10);
    setExpanded(true);
  };
  
  return (
    <div className="mt-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-2 px-4 border-b">フィボナッチ数</th>
              <th className="py-2 px-4 border-b">対応する年</th>
              <th className="py-2 px-4 border-b">説明</th>
            </tr>
          </thead>
          <tbody>
            {visibleMilestones.map((milestone, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-2 px-4 border-b font-mono">{milestone.fib.toLocaleString()}</td>
                <td className="py-2 px-4 border-b font-mono">{milestone.year.toLocaleString()}年</td>
                <td className="py-2 px-4 border-b">{milestone.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex justify-center">
        <Button
          variant="outline"
          onClick={loadMore}
          className="flex items-center gap-2"
        >
          更に{displayLimit < 100 ? "10年分" : "多く"}表示する
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
      
      <p className="text-sm mt-4 text-gray-500">
        フィボナッチ数列（1, 1, 2, 3, 5, 8, 13, 21, 34, 55...）に基づいて特別な節目の年を計算しています。
        2025年を最初の節目（フィボナッチ数1）として、それ以降の年はフィボナッチ数列に従って設定されています。
      </p>
    </div>
  );
};

export default FibonacciMilestoneTable;
