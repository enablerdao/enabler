
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
          <div className="text-3xl text-gray-400">→</div>
          <div 
            className="bg-[#2BBCFF] text-white text-lg font-medium p-4 rounded-lg text-center w-full md:w-1/3 cursor-pointer"
            onClick={() => copyColorToClipboard("#2BBCFF", "2025年（現在のカラー）")}
          >
            2025年（現在のカラー）<br/>#2BBCFF <Copy className="w-4 h-4 inline ml-1" />
          </div>
          <div className="text-3xl text-gray-400">+</div>
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
        これからもフィボナッチ数列の年（1,2,3,5,8...）に新しい色が加わります。これらの特別な色は「黄金角（約137.5度）」という、自然界の法則から生まれます。ひまわりの種やパイナップルの模様と同じ原理です。
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
      
      <h4 className="text-xl font-semibold mb-4 mt-8">年ごとの基本ブランドカラー変化</h4>
      <div className="overflow-x-auto">
        <div className="flex gap-2 my-6 min-w-max pb-2">
          {yearlyBrandColors.map(({ year, color, name }) => (
            <div 
              key={year}
              className="flex flex-col items-center"
              onMouseEnter={() => setHoveredColor(color)}
              onMouseLeave={() => setHoveredColor(null)}
            >
              <div 
                className="w-20 h-20 rounded-md mb-2 flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
                onClick={() => copyColorToClipboard(color, `${year}年（${name}）`)}
              >
                {hoveredColor === color && (
                  <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded">
                    <Copy className="w-4 h-4" />
                  </div>
                )}
              </div>
              <p className="text-center text-sm">{year}年</p>
              <p className="text-center text-xs font-mono">{color}</p>
            </div>
          ))}
          <div className="flex items-center text-gray-500 mt-8">
            <span className="text-2xl">→</span>
            <span className="ml-2">毎年継続...</span>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg mt-6">
        <h5 className="font-medium mb-2">基本カラーとアクセントカラーの使い方</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">基本カラー</span>：メインのブランドカラーとして、ロゴ、アイコン、見出しなどに使用</li>
          <li><span className="font-medium">アクセントカラー</span>：特別な周年の広告、キャンペーン、記念グッズなどに使用</li>
          <li>両方のカラーを組み合わせることで、ブランドの歴史と成長を表現できます</li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialAccentColorIntro;
