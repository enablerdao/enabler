
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
      <p className="text-lg mb-4">
        ブランドカラーとアクセントカラーについては、詳細なドキュメントをご参照ください。
      </p>
    </div>
  );
};

export default YearlyColorTable;
