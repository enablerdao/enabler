
import React, { useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Calculator, Copy, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LogoVariations from './LogoVariations';
import ColorFormula from './color-utils/ColorFormula';
import LogoVariants from './color-utils/LogoVariants';
import ColorPalette from './color-utils/ColorPalette';
import GradientExamples from './color-utils/GradientExamples';
import { ColorInfo } from './color-utils/types';
import { companyInfo } from '@/lib/data';

interface FixedColorValuesProps {
  currentYearColor: ColorInfo;
  brandColors: ColorInfo[];
}

const FixedColorValues = ({ currentYearColor, brandColors }: FixedColorValuesProps) => {
  const { toast } = useToast();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
    
    // Reset copied state after animation
    setTimeout(() => {
      setCopiedColor(null);
    }, 2000);
  };

  return (
    <MotionBox delay={900}>
      <section className="mb-6 md:mb-12 px-0 md:px-4">
        <div className="flex items-center mb-3 md:mb-5">
          <Calculator className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">8. 年度カラーとコードリファレンス</h2>
        </div>
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-subtle w-full">
          <p className="text-base md:text-lg mb-3 md:mb-5">
            Enablerのブランドカラーは会社のブランドとして一貫して使用され、年度ごとに更新されます。
            以下は現在の年度カラーとその値です。
          </p>
          
          {/* Current year color highlight */}
          <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6 w-full">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">
              {currentYearColor.year}年ブランドカラー
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm mb-2 md:mb-3">
                  <LogoVariations variant="modern" size="md" year={currentYearColor.year} />
                </div>
                <p className="text-xs md:text-sm font-medium">{currentYearColor.name}</p>
              </div>
              
              <div className="grid grid-cols-1 gap-2 md:gap-3 w-full max-w-xs">
                <div className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm cursor-pointer transition-colors hover:bg-gray-100"
                     onClick={() => copyToClipboard(currentYearColor.hex, 'HEX値')}>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-md" style={{ backgroundColor: currentYearColor.hex }}></div>
                  <div className="flex-1">
                    <p className="text-xs font-medium">HEX</p>
                    <div className="flex items-center">
                      <p className="text-sm md:text-base font-mono">{currentYearColor.hex}</p>
                      {copiedColor === currentYearColor.hex ? (
                        <CheckCircle className="w-3.5 h-3.5 ml-2 text-green-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 ml-2 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm cursor-pointer transition-colors hover:bg-gray-100"
                     onClick={() => copyToClipboard(`rgb(${currentYearColor.rgb})`, 'RGB値')}>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-md" style={{ backgroundColor: currentYearColor.hex }}></div>
                  <div className="flex-1">
                    <p className="text-xs font-medium">RGB</p>
                    <div className="flex items-center">
                      <p className="text-sm md:text-base font-mono">rgb({currentYearColor.rgb})</p>
                      {copiedColor === `rgb(${currentYearColor.rgb})` ? (
                        <CheckCircle className="w-3.5 h-3.5 ml-2 text-green-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 ml-2 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Color formula section */}
          <ColorFormula onCopy={copyToClipboard} />
          
          {/* Logo variants with color schemes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-4 md:mb-6">
            <LogoVariants currentYearColor={currentYearColor} />
            <ColorPalette currentYearColor={currentYearColor} onColorCopy={copyToClipboard} />
          </div>
          
          {/* Gradient examples */}
          <GradientExamples currentYearColor={currentYearColor} onCopy={copyToClipboard} />
          
          <p className="text-base md:text-lg mt-3 md:mt-4">
            これらのカラーコードは、すべてのマーケティング資料やプロダクトで一貫して使用することで、Enablerのブランドの統一性と認知度を高めます。毎年更新される年度カラーは、常に企業サイトに反映されます。
          </p>
        </div>
      </section>
    </MotionBox>
  );
};

export default FixedColorValues;
