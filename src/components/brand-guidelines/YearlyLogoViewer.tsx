
import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoVariations from './LogoVariations';
import { calculateColorForYear } from './color-utils/color-calculator';

const YearlyLogoViewer: React.FC = () => {
  const [visibleYears, setVisibleYears] = useState(10);
  const foundingYear = 2022;
  const currentYear = new Date().getFullYear();
  
  // Calculate how many years to generate (foundingYear to currentYear + 30 future years)
  const totalYears = currentYear + 30 - foundingYear;
  
  const handleLoadMore = useCallback(() => {
    setVisibleYears(prev => prev + 10);
  }, []);
  
  // Generate years array from founding year to visible limit
  const years = Array.from(
    { length: Math.min(visibleYears, totalYears) }, 
    (_, i) => foundingYear + i
  );
  
  return (
    <div className="mt-6 space-y-6">
      <h3 className="text-lg font-semibold mb-4">ロゴ年次変遷（{foundingYear}年〜）</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {years.map(year => {
          const color = calculateColorForYear(year);
          return (
            <div 
              key={year} 
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col items-center"
            >
              <div className="h-20 flex items-center justify-center mb-2">
                <LogoVariations variant="modern" size="md" year={year} />
              </div>
              <div className="text-center">
                <p className="font-medium">{year}年</p>
                <p className="text-xs text-gray-500">{color.hex}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      {visibleYears < totalYears && (
        <div className="flex justify-center mt-4">
          <Button 
            variant="outline" 
            onClick={handleLoadMore}
            className="flex items-center gap-2"
          >
            さらに表示する <ChevronDown size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default YearlyLogoViewer;
