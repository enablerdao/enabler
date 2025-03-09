
import React, { useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Palette } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { companyInfo } from '@/lib/data';
import { calculateColorForYear, generateColorsForYearRange } from './color-utils/color-calculator';
import FoundingColorSection from './color-sections/FoundingColorSection';
import LogoPreviewSection from './color-sections/LogoPreviewSection';
import ColorMathSection from './color-sections/ColorMathSection';
import ColorPaletteSection from './color-sections/ColorPaletteSection';

interface ColorInfo {
  year: number;
  hex: string;
  name: string;
  rgb: string;
}

interface BrandColorsProps {
  currentYearColor: ColorInfo;
  brandColors: ColorInfo[];
}

const BrandColors = ({ currentYearColor, brandColors }: BrandColorsProps) => {
  const { toast } = useToast();
  const [displayCount, setDisplayCount] = useState<number>(10);
  const [maxYear, setMaxYear] = useState<number>(2022 + displayCount - 1);
  const currentYear = new Date().getFullYear();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
  };

  // Get founding year color (2022)
  const foundingYearColor = brandColors.find(color => color.year === 2022) || currentYearColor;
  
  // Generate additional colors dynamically
  const generateMoreColors = () => {
    const startYear = maxYear + 1;
    const additionalYears = 10; // Add 10 more years
    const endYear = startYear + additionalYears - 1;
    
    setMaxYear(endYear);
    setDisplayCount(displayCount + additionalYears);
  };

  // Get all colors to display (initial + dynamically generated)
  const getAllColorsToDisplay = () => {
    // Generate all years from 2022 up to maxYear
    return generateColorsForYearRange(2022, maxYear);
  };

  const colorsToDisplay = getAllColorsToDisplay();
  
  return (
    <MotionBox delay={400}>
      <section className="mb-8 md:mb-14 px-0 md:px-4">
        <div className="flex items-center mb-4 md:mb-6">
          <Palette className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. ブランドカラー</h2>
        </div>
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-subtle w-full">
          <p className="text-base md:text-lg mb-5 md:mb-6 leading-relaxed">
            Enablerのブランドカラーは創業年（2022年）を起点に年数経過で変化します。
            この色の進化は「絶え間ない成長と可能性の追求」を表しています。
          </p>
          
          <FoundingColorSection foundingYearColor={foundingYearColor} />
          
          <LogoPreviewSection 
            colorsToDisplay={colorsToDisplay}
            currentYear={currentYear}
            copyToClipboard={copyToClipboard}
            generateMoreColors={generateMoreColors}
            maxYear={maxYear}
          />
          
          <ColorMathSection 
            copyToClipboard={copyToClipboard}
            foundingYearColor={foundingYearColor}
          />
          
          <ColorPaletteSection 
            foundingYearColor={foundingYearColor}
            currentYearColor={currentYearColor}
            copyToClipboard={copyToClipboard}
          />
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandColors;
