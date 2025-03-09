
import React from 'react';
import { calculateColorForYear } from '../color-utils/color-calculator';

const InfoPanel: React.FC = () => {
  const foundingYear = 2022;
  const startingYear = 2025;
  const foundingColor = calculateColorForYear(foundingYear);
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg mb-4 border border-blue-200">
      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
        <div className="flex-grow">
          <h3 className="text-lg font-medium mb-1">2025年からのロゴ変遷</h3>
          <p className="text-sm text-gray-600">
            Enablerブランドの中核を維持しながら、フィボナッチ数列に基づいて進化するロゴデザインを時系列で表示しています。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div 
            className="flex items-center gap-1 px-3 py-1 rounded-md bg-white border shadow-sm hover:bg-blue-50 cursor-pointer transition-colors"
            onClick={() => copyColorToClipboard(foundingColor.hex, foundingYear)}
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: foundingColor.hex }}></div>
            <span className="text-xs font-medium">創業カラー: {foundingColor.hex}</span>
          </div>
          
          <div 
            className="flex items-center gap-1 px-3 py-1 rounded-md bg-white border shadow-sm hover:bg-blue-50 cursor-pointer transition-colors"
            onClick={() => copyColorToClipboard(calculateColorForYear(startingYear).hex, startingYear)}
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: calculateColorForYear(startingYear).hex }}></div>
            <span className="text-xs font-medium">2025年カラー: {calculateColorForYear(startingYear).hex}</span>
          </div>
        </div>
      </div>
    </div>
  );
  
  function copyColorToClipboard(color: string, year: number) {
    navigator.clipboard.writeText(color);
    // Toast is handled in parent component
  }
};

export default InfoPanel;
