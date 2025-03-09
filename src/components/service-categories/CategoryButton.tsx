
import React from 'react';
import { Button } from '../ui/button';
import { ServiceCategory, categoryInfo } from '@/lib/types/service';
import { Hotel, Users, Briefcase, HeartPulse, TrendingUp } from 'lucide-react';

interface CategoryButtonProps {
  category: ServiceCategory | 'ALL';
  activeCategory: ServiceCategory | 'ALL';
  onClick: (category: ServiceCategory | 'ALL') => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  category, 
  activeCategory, 
  onClick 
}) => {
  const getCategoryIcon = (category: ServiceCategory) => {
    switch(category) {
      case 'STAY_TRAVEL':
        return <Hotel className="mr-2" size={18} />;
      case 'LIFE_COMMUNITY':
        return <Users className="mr-2" size={18} />;
      case 'WORK_PRODUCTIVITY':
        return <Briefcase className="mr-2" size={18} />;
      case 'HEALTH_WELLNESS':
        return <HeartPulse className="mr-2" size={18} />;
      case 'INVEST_GROW':
        return <TrendingUp className="mr-2" size={18} />;
    }
  };

  return (
    <Button
      onClick={() => onClick(category)}
      variant={activeCategory === category ? 'default' : 'outline'}
      className="rounded-full flex items-center whitespace-nowrap flex-shrink-0"
    >
      {category !== 'ALL' ? (
        <>
          {getCategoryIcon(category)}
          {categoryInfo[category].name}
        </>
      ) : (
        'すべて'
      )}
    </Button>
  );
};
