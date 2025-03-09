
import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SpecialColorCirclesProps {
  specialYearColors: Array<{year: number; color: string; name: string}>;
  copyColorToClipboard: (colorCode: string, colorName: string) => void;
}

const SpecialColorCircles: React.FC<SpecialColorCirclesProps> = ({ 
  specialYearColors, 
  copyColorToClipboard 
}) => {
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const specialColorsRef = React.useRef<HTMLDivElement>(null);

  const scrollContent = (direction: 'left' | 'right') => {
    if (specialColorsRef.current) {
      const scrollAmount = 300;
      const currentScroll = specialColorsRef.current.scrollLeft;
      specialColorsRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md hidden md:flex"
        onClick={() => scrollContent('left')}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <div 
        ref={specialColorsRef}
        className="flex overflow-x-auto py-6 px-4 gap-6 hide-scrollbar touch-pan-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {specialYearColors.map(({ year, color, name }) => (
          <div 
            key={year}
            className="flex flex-col items-center flex-shrink-0" 
            onMouseEnter={() => setHoveredColor(color)}
            onMouseLeave={() => setHoveredColor(null)}
          >
            <div 
              className="w-28 h-28 rounded-full mb-3 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 shadow-md"
              style={{ backgroundColor: color }}
              onClick={() => copyColorToClipboard(color, `${year}年（${name}）`)}
            >
              {hoveredColor === color && (
                <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded">
                  <Copy className="w-4 h-4" />
                </div>
              )}
            </div>
            <p className="text-center font-medium">{year}年</p>
            <p className="text-center">{name}</p>
            <p className="text-center text-sm font-mono">{color}</p>
          </div>
        ))}
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
  );
};

export default SpecialColorCircles;
