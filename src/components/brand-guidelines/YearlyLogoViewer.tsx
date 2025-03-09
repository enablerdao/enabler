
import React, { useState, useCallback } from 'react';
import { ChevronDown, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoVariations from './LogoVariations';
import { calculateColorForYear, calculateSpecialAccentColor } from './color-utils/color-calculator';
import { useToast } from '@/hooks/use-toast';

const YearlyLogoViewer: React.FC = () => {
  const [visibleYears, setVisibleYears] = useState(12);
  const foundingYear = 2022; // Keep the actual founding year for reference
  const startDisplayYear = 2025; // Start displaying from 2025
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  
  // Show very long-term evolution including well beyond the 231st year
  const totalYears = 1000;
  
  const handleLoadMore = useCallback(() => {
    setVisibleYears(prev => prev + 12);
  }, []);
  
  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
  }, [toast]);
  
  // Generate years array from start display year to visible limit
  const years = Array.from(
    { length: Math.min(visibleYears, totalYears) }, 
    (_, i) => startDisplayYear + i
  );
  
  return (
    <div className="mt-6 space-y-6">
      <h3 className="text-lg font-semibold mb-4">ロゴ年次変遷（{startDisplayYear}年〜）</h3>
      <p className="text-sm text-gray-600 mb-4">
        ※ブランドカラーは毎年変化します。色をクリックするとコピーできます。<br />
        ※会社は2022年に創業しましたが、ロゴ表示は2025年から始まります。
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {years.map(year => {
          // For 2025 (first year), use the specified color
          const color = year === 2025 
            ? { hex: '#25b6ff', name: 'スカイブルー', rgb: '37, 182, 255' }
            : calculateColorForYear(year);
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
                  {year}年（創業から{yearsSinceFounding}年目）
                </div>
              </div>
              
              <div className="text-center w-full mt-3">
                <div className="flex justify-between items-center gap-4">
                  {/* Brand color - larger rectangle with color code inside */}
                  <div 
                    className="flex-1 h-24 rounded-md flex flex-col items-center justify-center cursor-pointer group transition-all hover:shadow-md relative"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex, "ブランドカラー")}
                  >
                    <span className="text-white text-sm font-medium drop-shadow-sm mb-1">
                      ブランド
                    </span>
                    <span className="text-white text-xs bg-black/20 px-2 py-1 rounded-sm">
                      {color.hex}
                    </span>
                    <Copy size={14} className="absolute top-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Special accent color - larger rectangle with color code inside */}
                  <div 
                    className="flex-1 h-24 rounded-md flex flex-col items-center justify-center cursor-pointer group transition-all hover:shadow-md relative" 
                    style={{ backgroundColor: specialAccent.hex }}
                    onClick={() => copyToClipboard(specialAccent.hex, "特別カラー")}
                  >
                    <span className="text-white text-sm font-medium drop-shadow-sm mb-1">
                      特別
                    </span>
                    <span className="text-white text-xs bg-black/20 px-2 py-1 rounded-sm">
                      {specialAccent.hex}
                    </span>
                    <Copy size={14} className="absolute top-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
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
