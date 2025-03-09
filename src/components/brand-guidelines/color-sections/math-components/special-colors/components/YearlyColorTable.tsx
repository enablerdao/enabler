
import React from 'react';
import { Copy, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface YearlyColorTableProps {
  yearlyBrandColors: Array<{year: number; color: string; name: string}>;
  specialYearColors: Array<{year: number; color: string; name: string}>;
  copyColorToClipboard: (colorCode: string, colorName: string) => void;
}

const YearlyColorTable: React.FC<YearlyColorTableProps> = ({ 
  yearlyBrandColors, 
  specialYearColors,
  copyColorToClipboard 
}) => {
  const yearlyColorsRef = React.useRef<HTMLDivElement>(null);

  const scrollContent = (direction: 'left' | 'right') => {
    if (yearlyColorsRef.current) {
      const scrollAmount = 300;
      const currentScroll = yearlyColorsRef.current.scrollLeft;
      yearlyColorsRef.current.scrollTo({
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
        ref={yearlyColorsRef}
        className="overflow-x-auto hide-scrollbar touch-pan-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="min-w-max pb-4">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left">西暦</th>
                <th className="border border-gray-200 px-4 py-2 text-left">創業の年のカラー（固定）</th>
                <th className="border border-gray-200 px-4 py-2 text-left">ブランドカラー（毎年変化）</th>
                <th className="border border-gray-200 px-4 py-2 text-left">特別カラー（節目に変更）</th>
              </tr>
            </thead>
            <tbody>
              {yearlyBrandColors.map((yearInfo) => {
                // Find matching special color for this year (if any)
                const specialColor = specialYearColors.find(sc => sc.year <= yearInfo.year);
                const hasSpecialYear = specialYearColors.some(sc => sc.year === yearInfo.year);
                
                return (
                  <tr key={yearInfo.year} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">
                      {yearInfo.year}年
                      {hasSpecialYear && <span className="ml-1 text-xs text-green-600">（節目）</span>}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      <div 
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => copyColorToClipboard("#22B6FF", "創業の年のカラー")}
                      >
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#22B6FF" }}></div>
                        <span className="font-mono">#22B6FF</span>
                        <Copy className="w-3 h-3 opacity-50" />
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      <div 
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => copyColorToClipboard(yearInfo.color, `${yearInfo.year}年のブランドカラー`)}
                      >
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: yearInfo.color }}></div>
                        <span className="font-mono">{yearInfo.color}</span>
                        <Copy className="w-3 h-3 opacity-50" />
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {specialColor ? (
                        <div 
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => copyColorToClipboard(specialColor.color, `${specialColor.year}年（${specialColor.name}）`)}
                        >
                          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: specialColor.color }}></div>
                          <span className="font-mono">{specialColor.color}</span>
                          <Copy className="w-3 h-3 opacity-50" />
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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

export default YearlyColorTable;
