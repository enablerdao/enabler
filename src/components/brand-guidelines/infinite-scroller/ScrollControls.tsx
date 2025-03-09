
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollControlsProps } from './types';

const ScrollControls: React.FC<ScrollControlsProps> = ({ 
  showLeftArrow, 
  showRightArrow, 
  zoomLevel, 
  onScroll 
}) => {
  if (zoomLevel < 3) return null;
  
  return (
    <>
      {showLeftArrow && (
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md hidden md:flex"
          onClick={() => onScroll('left')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      )}
      
      {showRightArrow && (
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md hidden md:flex"
          onClick={() => onScroll('right')}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default ScrollControls;
