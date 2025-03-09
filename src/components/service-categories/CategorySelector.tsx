
import React, { useRef } from 'react';
import { ServiceCategory, categoryInfo } from '@/lib/types/service';
import { CategoryButton } from './CategoryButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategorySelectorProps {
  activeCategory: ServiceCategory | 'ALL';
  setActiveCategory: (category: ServiceCategory | 'ALL') => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const allCategories = Object.keys(categoryInfo) as ServiceCategory[];
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mb-8">
      <div className="flex items-center">
        <button 
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-enabler-400 hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-3 py-2 overflow-x-auto scrollbar-hide mx-auto scroll-smooth pl-2 pr-2 md:px-10"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <CategoryButton
            category="ALL"
            activeCategory={activeCategory}
            onClick={setActiveCategory}
          />
          
          {allCategories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              activeCategory={activeCategory}
              onClick={setActiveCategory}
            />
          ))}
        </div>
        
        <button 
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-enabler-400 hidden md:flex items-center justify-center"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="hidden md:flex items-center justify-center mt-3">
        <div className="flex space-x-1">
          <span className="w-8 h-1 bg-enabler-300 rounded-full"></span>
          <span className="w-1 h-1 bg-enabler-200 rounded-full"></span>
          <span className="w-1 h-1 bg-enabler-200 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};
