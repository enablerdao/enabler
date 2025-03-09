
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
  // Special years table as requested
  const specialYears = [
    { year: 2022, yearDesc: "創業年", brandColor: "#22B6FF", founderColor: "#22B6FF", specialColor: "", colorName: "" },
    { year: 2025, yearDesc: "3年目", brandColor: "#2BBCFF", founderColor: "#22B6FF", specialColor: "#4CAF50", colorName: "グリーン系" },
    { year: 2026, yearDesc: "4年目・フィボナッチ1", brandColor: "#37C0FF", founderColor: "#22B6FF", specialColor: "#E54D4D", colorName: "レッド系" },
    { year: 2028, yearDesc: "6年目・フィボナッチ3", brandColor: "#4AC4FF", founderColor: "#22B6FF", specialColor: "#A24DE5", colorName: "紫系" },
    { year: 2031, yearDesc: "9年目", brandColor: "#3DC6FF", founderColor: "#22B6FF", specialColor: "", colorName: "" },
    { year: 2033, yearDesc: "11年目・フィボナッチ8", brandColor: "#41C9FF", founderColor: "#22B6FF", specialColor: "#E5D24D", colorName: "黄色系" }
  ];

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-3 mt-5">年次のブランドカラーと特別カラー</h4>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3">西暦（創業年からの年数）</th>
              <th className="text-left py-2 px-3">創業カラー（固定）</th>
              <th className="text-left py-2 px-3">ブランドカラー</th>
              <th className="text-left py-2 px-3">特別カラー（節目のみ）</th>
            </tr>
          </thead>
          <tbody>
            {specialYears.map((yearInfo) => {
              return (
                <tr key={yearInfo.year} className="border-b">
                  <td className="py-2 px-3">{yearInfo.year}年（{yearInfo.yearDesc}）</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: yearInfo.founderColor }}></div>
                      <span>{yearInfo.founderColor}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: yearInfo.brandColor }}></div>
                      <span>{yearInfo.brandColor}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3">
                    {yearInfo.specialColor ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: yearInfo.specialColor }}></div>
                        <span>{yearInfo.specialColor}{yearInfo.colorName ? `（${yearInfo.colorName}）` : ''}</span>
                      </div>
                    ) : (
                      "-"
                    )}
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
          <li><span className="font-semibold">上の線:</span> 創業カラーから現在のブランドカラーへのグラデーションで、成長の軌跡を表現しています。</li>
          <li><span className="font-semibold">中央の線:</span> 創業カラーから特別アクセントカラーへのグラデーションで、黄金比に基づく調和を表現しています。</li>
          <li><span className="font-semibold">下の線:</span> 現在のブランドカラーから創業カラーへのグラデーションで、原点への敬意と初心を忘れない姿勢を示しています。</li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialColorExamplesTable;
