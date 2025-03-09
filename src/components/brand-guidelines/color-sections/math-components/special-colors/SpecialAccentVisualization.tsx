
import React from 'react';
import { calculateSpecialAccentColor } from '../../../color-utils/color-calculator';

interface SpecialAccentVisualizationProps {
  fibonacciSums: number[];
  foundingYear: number;
}

const SpecialAccentVisualization: React.FC<SpecialAccentVisualizationProps> = ({ 
  fibonacciSums, 
  foundingYear 
}) => {
  // Generate special accent colors for each Fibonacci sum year
  const fibonacciSpecialColors = fibonacciSums.map(sumYear => {
    const year = foundingYear + sumYear;
    return calculateSpecialAccentColor(year);
  });

  return (
    <div className="mt-4 overflow-hidden mb-8">
      <h5 className="text-base font-medium mb-2">特別アクセントカラー例：</h5>
      <div className="flex flex-wrap gap-1">
        {/* Add all Fibonacci special accent colors */}
        {fibonacciSpecialColors.slice(0, 8).map((color, index) => (
          <div 
            className="relative group"
            key={`fib-special-${index}`}
          >
            <div 
              className="w-12 h-12 rounded-md shadow-sm transition-transform group-hover:scale-110"
              style={{ backgroundColor: color.hex }}
            ></div>
            <div className="opacity-0 group-hover:opacity-100 absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
              {foundingYear + fibonacciSums[index]}年<br/>特別カラー
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialAccentVisualization;
