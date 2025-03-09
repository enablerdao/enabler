
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import LogoVariations from '../LogoVariations';
import { ColorInfo } from '../color-utils/types';

interface LogoPreviewSectionProps {
  colorsToDisplay: ColorInfo[];
  currentYear: number;
  copyToClipboard: (text: string, label: string) => void;
  generateMoreColors: () => void;
  maxYear: number;
}

const LogoPreviewSection: React.FC<LogoPreviewSectionProps> = ({
  colorsToDisplay,
  currentYear,
  copyToClipboard,
  generateMoreColors,
  maxYear
}) => {
  return (
    <div className="mb-6 md:mb-10 w-full">
      <h3 className="text-lg md:text-xl font-semibold mb-4 border-b pb-2">年度別ロゴと色の進化</h3>
      <p className="text-base mb-4 leading-relaxed">
        創業時から将来までの色の変化と、それに伴うロゴの見え方の変化を確認できます。
        これにより、一貫したブランドイメージがどのように進化するかを視覚的に理解できます。
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
        {colorsToDisplay.map((color, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg p-3 shadow-sm ${color.year === 2022 ? 'border-2 border-blue-300 bg-blue-50' : ''} ${color.year === currentYear ? 'border-2 border-green-300 bg-green-50' : ''}`}
          >
            <div className="bg-gray-50 p-2 rounded-lg mb-2 flex justify-center items-center">
              <LogoVariations variant="modern" size="sm" year={color.year} />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">
                {color.year}年
                {color.year === 2022 && <span className="text-xs bg-blue-100 text-blue-800 px-1 ml-1 rounded">創業</span>}
                {color.year === currentYear && <span className="text-xs bg-green-100 text-green-800 px-1 ml-1 rounded">現在</span>}
              </p>
              <div 
                className="h-10 w-full rounded mt-2 mb-1 cursor-pointer"
                style={{ backgroundColor: color.hex }}
                onClick={() => copyToClipboard(color.hex, `${color.year}年 ${color.name}`)}
              ></div>
              <p className="text-xs font-mono bg-gray-50 rounded px-1 py-0.5 mt-1 cursor-pointer" 
                 onClick={() => copyToClipboard(color.hex, `${color.year}年 ${color.name}`)}>
                {color.hex}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* もっと見るボタン */}
      <div className="text-center">
        <button 
          className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
          onClick={generateMoreColors}
        >
          <ChevronDown className="w-4 h-4 mr-2" />
          さらに{10}年分を表示 ({maxYear + 1} - {maxYear + 10}年)
        </button>
      </div>
    </div>
  );
};

export default LogoPreviewSection;
