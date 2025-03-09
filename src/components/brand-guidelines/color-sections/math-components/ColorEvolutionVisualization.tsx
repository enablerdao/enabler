
import React from 'react';
import { calculateColorForYear } from '../../color-utils/color-calculator';

interface ColorEvolutionVisualizationProps {
  fibonacciSums: number[];
  foundingYear: number;
}

const ColorEvolutionVisualization: React.FC<ColorEvolutionVisualizationProps> = ({ 
  fibonacciSums, 
  foundingYear 
}) => {
  // Generate colors for each Fibonacci sum year
  const fibonacciSumColors = fibonacciSums.map(sumYear => {
    const year = foundingYear + sumYear;
    return calculateColorForYear(year);
  });

  return (
    <div className="mt-4 overflow-hidden mb-10">
      <h5 className="text-base font-medium mb-2">ブランドカラーの進化イメージ：</h5>
      <div className="flex flex-wrap gap-1">
        {/* Add founding year color as the first color */}
        <div 
          className="relative group"
          key="founding-year"
        >
          <div 
            className="w-12 h-12 rounded-md shadow-sm transition-transform group-hover:scale-110"
            style={{ backgroundColor: "#22B6FF" }}
          ></div>
          <div className="opacity-0 group-hover:opacity-100 absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
            2022年（創業）
          </div>
        </div>

        {/* Add all Fibonacci sum year colors */}
        {fibonacciSumColors.slice(0, 8).map((color, index) => (
          <div 
            className="relative group"
            key={`fib-sum-${index}`}
          >
            <div 
              className="w-12 h-12 rounded-md shadow-sm transition-transform group-hover:scale-110"
              style={{ backgroundColor: color.hex }}
            ></div>
            <div className="opacity-0 group-hover:opacity-100 absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
              {foundingYear + fibonacciSums[index]}年
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorEvolutionVisualization;
