
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
  // Special years starting with 2025 (green) and then Fibonacci years
  const specialYears = [
    { year: 2025, cycle: "3年目", hue: 122, colorName: "グリーン系", hex: "#4CAF50" },
    { year: 2026, cycle: "4年目・フィボナッチ1", hue: Math.round(1 * 137.5) % 360, colorName: "レッド系", hex: "#E54D4D" },
    { year: 2028, cycle: "6年目・フィボナッチ3", hue: Math.round(2 * 137.5) % 360, colorName: "紫系", hex: "#A24DE5" },
    { year: 2033, cycle: "11年目・フィボナッチ8", hue: Math.round(3 * 137.5) % 360, colorName: "黄色系", hex: "#E5D24D" }
  ];

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-3 mt-5">特別カラーの例</h4>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3">周期</th>
              <th className="text-left py-2 px-3">対象年</th>
              <th className="text-left py-2 px-3">色相(H)</th>
              <th className="text-left py-2 px-3">HEXカラー</th>
              <th className="text-left py-2 px-3">イメージ</th>
            </tr>
          </thead>
          <tbody>
            {specialYears.map((yearInfo) => {
              return (
                <tr key={yearInfo.year} className="border-b">
                  <td className="py-2 px-3">{yearInfo.cycle}</td>
                  <td className="py-2 px-3">{yearInfo.year}年</td>
                  <td className="py-2 px-3">{yearInfo.hue}°</td>
                  <td className="py-2 px-3">{yearInfo.hex}</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: yearInfo.hex }}></div>
                      <span>{yearInfo.colorName}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h5 className="font-medium mb-2">ロゴの3本線の意味</h5>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li><span className="font-semibold">上部の線:</span> 創業カラーから現在のブランドカラーへのグラデーション。成長の軌跡を表します。</li>
          <li><span className="font-semibold">中央の線:</span> 創業カラーから特別アクセントカラーへのグラデーション。黄金比に基づく長さで調和を表します。</li>
          <li><span className="font-semibold">下部の線:</span> 現在のブランドカラーから創業カラーへの逆グラデーション。原点を忘れない姿勢を表します。</li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialColorExamplesTable;
