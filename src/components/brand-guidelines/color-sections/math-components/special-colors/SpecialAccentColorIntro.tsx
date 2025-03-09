
import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SpecialAccentColorIntro: React.FC = () => {
  const { toast } = useToast();
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  const copyColorToClipboard = (colorCode: string, colorName: string) => {
    navigator.clipboard.writeText(colorCode);
    toast({
      title: "コピーしました",
      description: `${colorName}（${colorCode}）をクリップボードにコピーしました`
    });
  };

  // Collection of all special accent colors by year
  const specialYearColors = [
    { year: 2025, color: "#4CAF50", name: "緑色" },
    { year: 2026, color: "#E54D4D", name: "赤色" },
    { year: 2028, color: "#A24DE5", name: "紫色" },
    { year: 2033, color: "#E5D24D", name: "黄色" },
  ];

  // Regular brand colors by year
  const yearlyBrandColors = [
    { year: 2022, color: "#22B6FF", name: "創業の年" },
    { year: 2023, color: "#27B8FF", name: "2年目" },
    { year: 2024, color: "#29BAFF", name: "3年目" },
    { year: 2025, color: "#2BBCFF", name: "4年目" },
    { year: 2026, color: "#2EBEFF", name: "5年目" },
    { year: 2027, color: "#30C0FF", name: "6年目" },
    { year: 2028, color: "#33C2FF", name: "7年目" },
  ];

  return (
    <div className="mb-10">
      <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6 border-b pb-3 mt-12">特別な周年のアクセントカラー</h3>
      
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6 border border-green-100">
        <p className="text-lg mb-5 leading-relaxed">
          2025年は特別な緑色 <span 
            className="bg-[#4CAF50] text-white px-3 py-1 rounded-md font-medium cursor-pointer inline-flex items-center gap-1"
            onClick={() => copyColorToClipboard("#4CAF50", "緑色")}
          >
            #4CAF50 <Copy className="w-3 h-3" />
          </span> を採用しています。この緑色は「新芽」「成長」「希望」を象徴しています。創業から3年目の2025年は、種から芽が出て、しっかりと根を張り、これから大きく成長していく時期です。
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
          <div 
            className="bg-[#22B6FF] text-white text-lg font-medium p-4 rounded-lg text-center w-full md:w-1/3 cursor-pointer"
            onClick={() => copyColorToClipboard("#22B6FF", "2022年（創業の年のカラー）")}
          >
            2022年（創業の年のカラー）<br/>#22B6FF <Copy className="w-4 h-4 inline ml-1" />
          </div>
          <div className="text-3xl text-gray-400 hidden md:block">→</div>
          <div className="text-3xl text-gray-400 md:hidden mx-auto">↓</div>
          <div 
            className="bg-[#2BBCFF] text-white text-lg font-medium p-4 rounded-lg text-center w-full md:w-1/3 cursor-pointer"
            onClick={() => copyColorToClipboard("#2BBCFF", "2025年（現在のカラー）")}
          >
            2025年（現在のカラー）<br/>#2BBCFF <Copy className="w-4 h-4 inline ml-1" />
          </div>
          <div className="text-3xl text-gray-400 hidden md:block">+</div>
          <div className="text-3xl text-gray-400 md:hidden mx-auto">+</div>
          <div 
            className="bg-[#4CAF50] text-white text-lg font-medium p-4 rounded-lg text-center w-full md:w-1/3 cursor-pointer"
            onClick={() => copyColorToClipboard("#4CAF50", "2025年（特別アクセント）")}
          >
            2025年（特別アクセント）<br/>#4CAF50 <Copy className="w-4 h-4 inline ml-1" />
          </div>
        </div>
        
        <p className="text-lg leading-relaxed">
          海の青から始まり、陸の緑を経て、やがて空へ—自然界の成長過程をブランドの成長に重ね合わせています。この緑は創業者がインスピレーションを得た公園の若葉の色を基にしています。
        </p>
      </div>
      
      <p className="text-lg mb-5 leading-relaxed">
        特別な色は節目となる年（フィボナッチ数列の年：1,2,3,5,8...）に変更され、次の節目が来るまで固定されます。これらの特別な色は「黄金角（約137.5度）」という、自然界の法則から生まれます。ひまわりの種やパイナップルの模様と同じ原理です。
      </p>
      
      <h4 className="text-xl font-semibold mb-4">特別アクセントカラー一覧</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        {specialYearColors.map(({ year, color, name }) => (
          <div 
            key={year}
            className="flex flex-col items-center" 
            onMouseEnter={() => setHoveredColor(color)}
            onMouseLeave={() => setHoveredColor(null)}
          >
            <div 
              className="w-24 h-24 rounded-full mb-2 flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
              onClick={() => copyColorToClipboard(color, `${year}年（${name}）`)}
            >
              {hoveredColor === color && (
                <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded">
                  <Copy className="w-4 h-4" />
                </div>
              )}
            </div>
            <p className="text-center">{year}年（{name}）</p>
            <p className="text-center text-sm font-mono">{color}</p>
          </div>
        ))}
      </div>
      
      <h4 className="text-xl font-semibold mb-4 mt-8">年次のブランドカラーと特別カラー</h4>
      <div className="overflow-x-auto">
        <div className="min-w-max pb-4">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left">西暦</th>
                <th className="border border-gray-200 px-4 py-2 text-left">創業の年のカラー（固定）</th>
                <th className="border border-gray-200 px-4 py-2 text-left">ブランドカラー（毎年変化）</th>
                <th className="border border-gray-200 px-4 py-2 text-left">特別カラー（節目に変更）</th>
              </tr>
            </thead>
            <tbody>
              {yearlyBrandColors.map((yearInfo) => {
                // Find matching special color for this year (if any)
                const specialColor = specialYearColors.find(sc => sc.year <= yearInfo.year);
                const hasSpecialYear = specialYearColors.some(sc => sc.year === yearInfo.year);
                
                return (
                  <tr key={yearInfo.year} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">
                      {yearInfo.year}年
                      {hasSpecialYear && <span className="ml-1 text-xs text-green-600">（節目）</span>}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      <div 
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => copyColorToClipboard("#22B6FF", "創業の年のカラー")}
                      >
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#22B6FF" }}></div>
                        <span className="font-mono">#22B6FF</span>
                        <Copy className="w-3 h-3 opacity-50" />
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      <div 
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => copyColorToClipboard(yearInfo.color, `${yearInfo.year}年のブランドカラー`)}
                      >
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: yearInfo.color }}></div>
                        <span className="font-mono">{yearInfo.color}</span>
                        <Copy className="w-3 h-3 opacity-50" />
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {specialColor ? (
                        <div 
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => copyColorToClipboard(specialColor.color, `${specialColor.year}年（${specialColor.name}）`)}
                        >
                          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: specialColor.color }}></div>
                          <span className="font-mono">{specialColor.color}</span>
                          <Copy className="w-3 h-3 opacity-50" />
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <div className="bg-blue-50 p-4 rounded-lg flex-1">
          <h5 className="font-medium mb-2">基本カラーとアクセントカラーの使い方</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-medium">基本カラー</span>：メインのブランドカラーとして、ロゴ、アイコン、見出しなどに使用</li>
            <li><span className="font-medium">アクセントカラー</span>：特別な周年の広告、キャンペーン、記念グッズなどに使用</li>
            <li>両方のカラーを組み合わせることで、ブランドの歴史と成長を表現できます</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg flex-1">
          <h5 className="font-medium mb-2">特別カラーの特徴</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>フィボナッチ数列の年（1,2,3,5,8年目...）に節目として新しく設定</li>
            <li>一度設定された特別カラーは次の節目が来るまで固定</li>
            <li>自然界の黄金角（約137.5度）に基づく色相で設計</li>
            <li>長期的なブランド戦略における色彩の一貫性を保ちます</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecialAccentColorIntro;
