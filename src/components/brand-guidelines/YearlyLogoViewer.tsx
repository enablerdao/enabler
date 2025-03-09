
import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoVariations from './LogoVariations';
import { calculateColorForYear, calculateSpecialAccentColor } from './color-utils/color-calculator';

const YearlyLogoViewer: React.FC = () => {
  const [visibleYears, setVisibleYears] = useState(10);
  const foundingYear = 2022;
  const currentYear = new Date().getFullYear();
  
  // Show very long-term evolution including well beyond the 231st year
  const totalYears = 1000;
  
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
      <h3 className="text-lg font-semibold mb-4">ロゴ年次変遷（{foundingYear}年〜231年目以降）</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {years.map(year => {
          const color = calculateColorForYear(year);
          const specialAccent = calculateSpecialAccentColor(year);
          const yearsSinceFounding = year - foundingYear;
          
          return (
            <div 
              key={year} 
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col items-center"
            >
              <div className="h-24 flex items-center justify-center mb-2">
                <LogoVariations variant="modern" size="md" year={year} />
              </div>
              <div className="text-center w-full">
                <p className="font-medium">{year}年</p>
                <div className="flex justify-between items-center mt-1.5 px-2 text-xs">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-4 h-4 rounded-full mb-1" 
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <p className="text-gray-600">ブランドカラー</p>
                    <p className="text-gray-500">{color.hex}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-4 h-4 rounded-full mb-1" 
                      style={{ backgroundColor: specialAccent.hex }}
                    ></div>
                    <p className="text-gray-600">特別カラー</p>
                    <p className="text-gray-500">{specialAccent.hex}</p>
                  </div>
                </div>
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
