
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import SpecialColorCircles from './components/SpecialColorCircles';
import YearlyColorTable from './components/YearlyColorTable';
import ColorUsageGuidelines from './components/ColorUsageGuidelines';
import SpecialYearColorExplanation from './components/SpecialYearColorExplanation';

const SpecialAccentColorIntro: React.FC = () => {
  const { toast } = useToast();

  const copyColorToClipboard = (colorCode: string, colorName: string) => {
    navigator.clipboard.writeText(colorCode);
    toast({
      title: "コピーしました",
      description: `${colorName}（${colorCode}）をクリップボードにコピーしました`
    });
  };

  // Collection of all special accent colors by year - expanded to show more future colors
  const specialYearColors = [
    { year: 2025, color: "#4CAF50", name: "緑色" },
    { year: 2026, color: "#E54D4D", name: "赤色" },
    { year: 2028, color: "#A24DE5", name: "紫色" },
    { year: 2033, color: "#E5D24D", name: "黄色" },
    { year: 2035, color: "#4D9FE5", name: "青色" },
    { year: 2038, color: "#E57A4D", name: "オレンジ色" },
    { year: 2042, color: "#4DE5A2", name: "ターコイズ色" },
    { year: 2047, color: "#E54D9F", name: "ピンク色" },
    { year: 2055, color: "#8FE54D", name: "黄緑色" },
    { year: 2068, color: "#4D4DE5", name: "インディゴ色" },
    { year: 2090, color: "#E5E54D", name: "イエロー色" },
    { year: 2123, color: "#BC4DE5", name: "マゼンタ色" },
  ];

  // Regular brand colors by year - expanded for more years
  const yearlyBrandColors = [
    { year: 2022, color: "#22B6FF", name: "創業の年" },
    { year: 2023, color: "#27B8FF", name: "2年目" },
    { year: 2024, color: "#29BAFF", name: "3年目" },
    { year: 2025, color: "#2BBCFF", name: "4年目" },
    { year: 2026, color: "#2EBEFF", name: "5年目" },
    { year: 2027, color: "#30C0FF", name: "6年目" },
    { year: 2028, color: "#33C2FF", name: "7年目" },
    { year: 2029, color: "#35C4FF", name: "8年目" },
    { year: 2030, color: "#38C6FF", name: "9年目" },
    { year: 2031, color: "#3AC8FF", name: "10年目" },
    { year: 2032, color: "#3DCAFF", name: "11年目" },
    { year: 2033, color: "#3FCCFF", name: "12年目" },
    { year: 2034, color: "#42CEFF", name: "13年目" },
    { year: 2035, color: "#44D0FF", name: "14年目" },
    { year: 2036, color: "#47D2FF", name: "15年目" },
    { year: 2037, color: "#49D4FF", name: "16年目" },
    { year: 2038, color: "#4CD6FF", name: "17年目" },
    { year: 2039, color: "#4ED8FF", name: "18年目" },
    { year: 2040, color: "#51DAFF", name: "19年目" },
    { year: 2041, color: "#53DCFF", name: "20年目" },
    { year: 2042, color: "#56DEFF", name: "21年目" },
  ];

  return (
    <div className="mb-10">
      <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6 border-b pb-3 mt-12">特別な周年のアクセントカラー</h3>
      
      <SpecialYearColorExplanation copyColorToClipboard={copyColorToClipboard} />
      
      <p className="text-lg mb-5 leading-relaxed">
        特別な色は節目となる年（フィボナッチ数列の年：1,2,3,5,8...）に変更され、次の節目が来るまで固定されます。これらの特別な色は「黄金角（約137.5度）」という、自然界の法則から生まれます。ひまわりの種やパイナップルの模様と同じ原理です。
      </p>
      
      <h4 className="text-xl font-semibold mb-4">特別アクセントカラー一覧</h4>
      
      <SpecialColorCircles 
        specialYearColors={specialYearColors} 
        copyColorToClipboard={copyColorToClipboard} 
      />
      
      <h4 className="text-xl font-semibold mb-4 mt-8">年次のブランドカラーと特別カラー</h4>
      
      <YearlyColorTable 
        yearlyBrandColors={yearlyBrandColors}
        specialYearColors={specialYearColors}
        copyColorToClipboard={copyColorToClipboard}
      />
      
      <ColorUsageGuidelines />
    </div>
  );
};

export default SpecialAccentColorIntro;
