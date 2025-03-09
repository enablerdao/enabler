
import React from 'react';
import { calculateSpecialAccentColor } from '../../color-utils/color-calculator';
import { Download, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

interface SpecialColorExamplesTableProps {
  fibonacciSums: number[];
  foundingYear: number;
}

const SpecialColorExamplesTable: React.FC<SpecialColorExamplesTableProps> = ({ 
  fibonacciSums, 
  foundingYear 
}) => {
  const { toast } = useToast();
  
  // Special years table as requested
  const specialYears = [
    { year: 2022, yearDesc: "創業年", brandColor: "#22B6FF", founderColor: "#22B6FF", specialColor: "", colorName: "" },
    { year: 2025, yearDesc: "3年目", brandColor: "#2BBCFF", founderColor: "#22B6FF", specialColor: "#4CAF50", colorName: "グリーン系" },
    { year: 2026, yearDesc: "4年目・フィボナッチ1", brandColor: "#37C0FF", founderColor: "#22B6FF", specialColor: "#E54D4D", colorName: "レッド系" },
    { year: 2028, yearDesc: "6年目・フィボナッチ3", brandColor: "#4AC4FF", founderColor: "#22B6FF", specialColor: "#A24DE5", colorName: "紫系" },
    { year: 2031, yearDesc: "9年目", brandColor: "#3DC6FF", founderColor: "#22B6FF", specialColor: "", colorName: "" },
    { year: 2033, yearDesc: "11年目・フィボナッチ8", brandColor: "#41C9FF", founderColor: "#22B6FF", specialColor: "#E5D24D", colorName: "黄色系" }
  ];

  const downloadSVG = (year: number) => {
    const svgElement = document.getElementById(`logo-svg-table-${year}`);
    if (!svgElement) return;
    
    // Get the SVG content
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = `enabler-logo-${year}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Release the URL object
    setTimeout(() => URL.revokeObjectURL(svgUrl), 100);
    
    // Show toast notification
    toast({
      title: "ダウンロードしました",
      description: `Enablerロゴ（${year}年版）をダウンロードしました`,
    });
  };
  
  const copySVG = (year: number) => {
    const svgElement = document.getElementById(`logo-svg-table-${year}`);
    if (!svgElement) return;
    
    // Get the SVG content
    const svgData = new XMLSerializer().serializeToString(svgElement);
    
    // Copy to clipboard
    navigator.clipboard.writeText(svgData);
    
    // Show toast notification
    toast({
      title: "コピーしました",
      description: `SVGコード（${year}年版）をクリップボードにコピーしました`,
    });
  };

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
              <th className="text-left py-2 px-3">ロゴ</th>
              <th className="text-left py-2 px-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {specialYears.map((yearInfo) => {
              return (
                <tr key={yearInfo.year} className="border-b hover:bg-gray-100 transition-colors">
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
                  <td className="py-3 px-3">
                    <svg 
                      id={`logo-svg-table-${yearInfo.year}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 200 70" 
                      className="w-24 h-auto"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        <linearGradient id={`topLine-${yearInfo.year}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={yearInfo.founderColor} />
                          <stop offset="100%" stopColor={yearInfo.brandColor} />
                        </linearGradient>
                        <linearGradient id={`middleLine-${yearInfo.year}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={yearInfo.founderColor} />
                          <stop offset="100%" stopColor={yearInfo.specialColor || yearInfo.brandColor} />
                        </linearGradient>
                        <linearGradient id={`bottomLine-${yearInfo.year}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={yearInfo.brandColor} />
                          <stop offset="100%" stopColor={yearInfo.founderColor} />
                        </linearGradient>
                      </defs>
                      <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#topLine-${yearInfo.year})`}/>
                      <rect x="15" y="33" width="40" height="3" rx="1.5" fill={`url(#middleLine-${yearInfo.year})`}/>
                      <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#bottomLine-${yearInfo.year})`}/>
                      <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={yearInfo.brandColor}>ENABLER</text>
                    </svg>
                  </td>
                  <td className="py-2 px-3">
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => downloadSVG(yearInfo.year)}
                      >
                        <Download size={14} /> SVG保存
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => copySVG(yearInfo.year)}
                      >
                        <Copy size={14} /> コピー
                      </Button>
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
          <li><span className="font-semibold">上の線:</span> 創業カラーから現在のブランドカラーへのグラデーションで、成長の軌跡を表現しています。</li>
          <li><span className="font-semibold">中央の線:</span> 創業カラーから特別アクセントカラーへのグラデーションで、黄金比に基づく調和を表現しています。</li>
          <li><span className="font-semibold">下の線:</span> 現在のブランドカラーから創業カラーへのグラデーションで、原点への敬意と初心を忘れない姿勢を示しています。</li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialColorExamplesTable;
