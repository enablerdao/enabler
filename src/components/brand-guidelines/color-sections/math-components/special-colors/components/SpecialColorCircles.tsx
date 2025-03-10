
import React, { useState, useRef, useEffect } from 'react';
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
  const specialColorsRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (!specialColorsRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = specialColorsRef.current;
    
    // Show left arrow if not at the beginning
    setShowLeftArrow(scrollLeft > 0);
    
    // Show right arrow if not at the end
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollContainer = specialColorsRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  const scrollContent = (direction: 'left' | 'right') => {
    if (specialColorsRef.current) {
      const scrollAmount = specialColorsRef.current.clientWidth * 0.8; // Scroll 80% of visible width
      const currentScroll = specialColorsRef.current.scrollLeft;
      specialColorsRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Add touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!specialColorsRef.current) return;
    const startX = e.touches[0].clientX;
    
    const handleTouchMove = (e: TouchEvent) => {
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;
      specialColorsRef.current!.scrollLeft += diff / 5; // Divide by 5 to make the scroll smoother
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  // Generate more color elements for unlimited scrolling effect
  const extendedColors = [...specialYearColors, ...specialYearColors, ...specialYearColors]; // Triple the items for more scrolling

  return (
    <div className="relative">
      <Button 
        variant="outline" 
        size="icon" 
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md transition-opacity duration-200 ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'} hidden md:flex`}
        onClick={() => scrollContent('left')}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <div 
        ref={specialColorsRef}
        className="flex overflow-x-auto py-6 px-4 gap-6 hide-scrollbar touch-pan-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onTouchStart={handleTouchStart}
      >
        {extendedColors.map(({ year, color, name }, index) => (
          <div 
            key={`${year}-${index}`}
            className="flex flex-col items-center flex-shrink-0" 
            onMouseEnter={() => setHoveredColor(color)}
            onMouseLeave={() => setHoveredColor(null)}
          >
            <div 
              className="w-28 h-28 rounded-full mb-3 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 shadow-md relative"
              style={{ backgroundColor: color }}
              onClick={() => copyColorToClipboard(color, `${year}年（${name}）`)}
            >
              {hoveredColor === color ? (
                <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded">
                  <Copy className="w-4 h-4" />
                </div>
              ) : (
                <div className="flex flex-col items-center text-white text-center">
                  <span className="font-bold text-sm">{year}年</span>
                  <span className="text-xs">{name}</span>
                  <span className="text-xs font-mono mt-1">{color}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md transition-opacity duration-200 ${showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'} hidden md:flex`}
        onClick={() => scrollContent('right')}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SpecialColorCircles;
