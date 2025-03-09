
import React, { useState, useCallback } from 'react';
import { ChevronDown, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoVariations from './LogoVariations';
import { calculateColorForYear, calculateSpecialAccentColor } from './color-utils/color-calculator';
import { useToast } from '@/hooks/use-toast';

const YearlyLogoViewer: React.FC = () => {
  const [visibleYears, setVisibleYears] = useState(10);
  const foundingYear = 2022;
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  
  // Show very long-term evolution including well beyond the 231st year
  const totalYears = 1000;
  
  const handleLoadMore = useCallback(() => {
    setVisibleYears(prev => prev + 10);
  }, []);
  
  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
  }, [toast]);
  
  // Generate years array from founding year to visible limit
  const years = Array.from(
    { length: Math.min(visibleYears, totalYears) }, 
    (_, i) => foundingYear + i
  );
  
  return (
    <div className="mt-6 space-y-6">
      <h3 className="text-lg font-semibold mb-4">ロゴ年次変遷（{foundingYear}年〜231年目以降）</h3>
      <p className="text-sm text-gray-600 mb-4">※ブランドカラーは毎年変化します。色をクリックするとコピーできます。</p>
      
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
              <div className="h-32 flex items-center justify-center mb-2 relative">
                <LogoVariations variant="modern" size="md" year={year} />
                <div className="absolute bottom-0 text-xs text-gray-500 bg-white/80 px-2 py-0.5 rounded">
                  {year}年
                </div>
              </div>
              
              <div className="text-center w-full mt-3">
                <div className="flex justify-between items-center gap-4">
                  {/* Brand color - larger square with white text */}
                  <div className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-16 h-16 rounded-md flex items-center justify-center mb-2 relative cursor-pointer group transition-all hover:shadow-md"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => copyToClipboard(color.hex, "ブランドカラー")}
                    >
                      <span className="text-white text-xs font-medium drop-shadow-sm">
                        ブランド
                      </span>
                      <Copy size={14} className="absolute top-1 right-1 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-gray-600 text-xs cursor-pointer hover:text-gray-900" onClick={() => copyToClipboard(color.hex, "ブランドカラー")}>
                      {color.hex}
                    </p>
                  </div>
                  
                  {/* Special accent color - larger square with white text */}
                  <div className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-16 h-16 rounded-md flex items-center justify-center mb-2 cursor-pointer group transition-all hover:shadow-md" 
                      style={{ backgroundColor: specialAccent.hex }}
                      onClick={() => copyToClipboard(specialAccent.hex, "特別カラー")}
                    >
                      <span className="text-white text-xs font-medium drop-shadow-sm">
                        特別
                      </span>
                      <Copy size={14} className="absolute top-1 right-1 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-gray-600 text-xs cursor-pointer hover:text-gray-900" onClick={() => copyToClipboard(specialAccent.hex, "特別カラー")}>
                      {specialAccent.hex}
                    </p>
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
