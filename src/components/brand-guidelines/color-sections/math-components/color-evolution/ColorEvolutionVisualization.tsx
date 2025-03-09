
import React, { useRef } from 'react';
import { calculateColorForYear } from '../../../color-utils/color-calculator';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ColorEvolutionVisualizationProps {
  fibonacciSums: number[];
  foundingYear: number;
}

const ColorEvolutionVisualization: React.FC<ColorEvolutionVisualizationProps> = ({ 
  fibonacciSums, 
  foundingYear 
}) => {
  // Generate colors for each Fibonacci sum year
  const fibonacciSumColors = fibonacciSums.map(sumYear => {
    const year = foundingYear + sumYear;
    return {
      year,
      color: calculateColorForYear(year)
    };
  });
  
  // Create additional years for continuous scrolling
  const additionalYears = Array.from({ length: 20 }, (_, i) => {
    const year = foundingYear + fibonacciSums[fibonacciSums.length - 1] + i + 1;
    return {
      year,
      color: calculateColorForYear(year)
    };
  });
  
  // Combine founding year with all other colors
  const allColors = [
    { 
      year: foundingYear, 
      color: { hex: "#22B6FF" } 
    },
    ...fibonacciSumColors,
    ...additionalYears
  ];
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 240; // Adjust scroll amount as needed
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mt-4 mb-10 relative">
      <h5 className="text-base font-medium mb-2">ブランドカラーの進化イメージ：</h5>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md hidden md:flex"
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-6 pt-2 px-1 gap-3 hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Display all colors in a scrollable row */}
        {allColors.map((item, index) => (
          <div 
            className="relative group flex-shrink-0"
            key={`color-${item.year}-${index}`}
          >
            <div 
              className="w-16 h-16 rounded-md shadow-sm transition-transform group-hover:scale-110 flex items-center justify-center"
              style={{ backgroundColor: item.color.hex }}
            >
              <span className={`text-xs font-medium ${parseInt(item.color.hex.slice(1, 3), 16) > 150 ? 'text-black' : 'text-white'}`}>
                {item.year}
              </span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
              {item.year}年
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md hidden md:flex"
        onClick={() => scroll('right')}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      {/* Add custom scrollbar styling */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ColorEvolutionVisualization;
