
import React, { useRef } from 'react';
import { Service, ServiceCategory, categoryInfo } from '@/lib/types/service';
import ServiceCard from '../ServiceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MotionBox } from '../ui/motion-box';

interface CategorySectionProps {
  category: ServiceCategory;
  services: Service[];
  index: number;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, services, index }) => {
  const categoryRowRef = useRef<HTMLDivElement>(null);
  
  const scrollCategoryLeft = () => {
    if (categoryRowRef.current) {
      categoryRowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollCategoryRight = () => {
    if (categoryRowRef.current) {
      categoryRowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Check if a category has enough items to scroll
  const hasScrollableContent = () => {
    return services.length > (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
  };

  const getCategoryIcon = (category: ServiceCategory) => {
    switch(category) {
      case 'STAY_TRAVEL':
        return '🏠';
      case 'LIFE_COMMUNITY':
        return '👥';
      case 'WORK_PRODUCTIVITY':
        return '💼';
      case 'HEALTH_WELLNESS':
        return '❤️';
      case 'INVEST_GROW':
        return '📈';
    }
  };

  return (
    <MotionBox key={category} delay={300 + index * 100}>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="bg-enabler-100 p-3 rounded-full mr-3">
              {getCategoryIcon(category)}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {categoryInfo[category].name}
              </h3>
              <span className="text-sm text-gray-500">
                {category === 'STAY_TRAVEL' ? '宿泊・旅行' : 
                 category === 'LIFE_COMMUNITY' ? '生活・コミュニティ' : 
                 category === 'WORK_PRODUCTIVITY' ? '仕事・生産性' : 
                 category === 'HEALTH_WELLNESS' ? '健康・ウェルネス' : 
                 '投資・成長'}
              </span>
            </div>
          </div>
          
          {hasScrollableContent() && (
            <div className="flex gap-2">
              <button 
                onClick={scrollCategoryLeft}
                className="bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-enabler-400"
                aria-label={`Scroll ${category} left`}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={scrollCategoryRight}
                className="bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-enabler-400"
                aria-label={`Scroll ${category} right`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 mb-8 max-w-3xl">
          {categoryInfo[category].description}
        </p>
        
        <div className="relative">
          {hasScrollableContent() && (
            <div className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-white via-white/80 to-transparent w-16 h-full flex items-center justify-end pr-2 pointer-events-none">
              <div className="bg-white/90 rounded-full p-1 shadow-sm animate-pulse">
                <ChevronRight className="text-enabler-500" size={18} />
              </div>
            </div>
          )}
          
          <div 
            ref={categoryRowRef}
            className="flex gap-6 lg:gap-8 pb-4 overflow-x-auto hide-scrollbar scroll-smooth pt-6"
          >
            {services.map((service, index) => (
              <div key={service.id} className="w-full min-w-[300px] max-w-[400px] flex-shrink-0">
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionBox>
  );
};
