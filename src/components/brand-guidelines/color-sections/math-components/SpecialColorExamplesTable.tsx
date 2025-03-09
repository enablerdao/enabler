
import React from 'react';
import { calculateSpecialAccentColor } from '../../color-utils/color-calculator';

interface SpecialColorExamplesTableProps {
  fibonacciSums: number[];
  foundingYear: number;
}

const SpecialColorExamplesTable: React.FC<SpecialColorExamplesTableProps> = ({ 
  fibonacciSums, 
  foundingYear 
}) => {
  // Generate special accent colors for each Fibonacci sum year
  const fibonacciSpecialColors = fibonacciSums.map(sumYear => {
    const year = foundingYear + sumYear;
    return calculateSpecialAccentColor(year);
  });

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-3 mt-5">特別カラーの例</h4>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3">累積和の周年</th>
              <th className="text-left py-2 px-3">対象年</th>
              <th className="text-left py-2 px-3">色相(H)</th>
              <th className="text-left py-2 px-3">HEXカラー例</th>
              <th className="text-left py-2 px-3">イメージ</th>
            </tr>
          </thead>
          <tbody>
            {fibonacciSums.slice(0, 5).map((sum, index) => {
              const year = foundingYear + sum;
              const color = fibonacciSpecialColors[index];
              
              let colorName;
              const hue = (index + 1) * 137.5 % 360;
              if (hue >= 90 && hue < 150) colorName = "グリーン系";
              else if (hue >= 150 && hue < 210) colorName = "水色系";
              else if (hue >= 210 && hue < 270) colorName = "青/紫系";
              else if (hue >= 270 && hue < 330) colorName = "紫/ピンク系";
              else colorName = "黄/オレンジ系";
              
              return (
                <tr key={year} className="border-b">
                  <td className="py-2 px-3">{sum}周年</td>
                  <td className="py-2 px-3">{year}年</td>
                  <td className="py-2 px-3">{Math.round((index + 1) * 137.5) % 360}°</td>
                  <td className="py-2 px-3">{color.hex}</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: color.hex }}></div>
                      <span>{colorName}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpecialColorExamplesTable;
