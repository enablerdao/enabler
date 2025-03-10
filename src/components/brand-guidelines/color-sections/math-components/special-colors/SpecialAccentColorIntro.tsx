
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import SpecialColorCircles from './components/SpecialColorCircles';
import ColorUsageGuidelines from './components/ColorUsageGuidelines';
import SpecialYearColorExplanation from './components/SpecialYearColorExplanation';
import SpecialColorFormula from './SpecialColorFormula';
import BackgroundColorTheory from './BackgroundColorTheory';

const SpecialAccentColorIntro: React.FC = () => {
  const { toast } = useToast();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isTheoryOpen, setIsTheoryOpen] = useState(false);
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);
  const [isMilestoneOpen, setIsMilestoneOpen] = useState(false);

  const copyColorToClipboard = (colorCode: string, colorName: string) => {
    navigator.clipboard.writeText(colorCode);
    toast({
      title: "コピーしました",
      description: `${colorName}（${colorCode}）をクリップボードにコピーしました`
    });
  };

  // 節目となるフィボナッチ年のリスト（フィボナッチ数1, 1, 2, 3, 5, 8, 13, 21...に対応）
  // Collection of all special accent colors by year - expanded to show more future colors
  const specialYearColors = [
    { year: 2025, color: "#4CAF50", name: "緑色" },
    { year: 2026, color: "#E54D4D", name: "赤色" },
    { year: 2028, color: "#A24DE5", name: "紫色" },
    { year: 2031, color: "#E5D24D", name: "黄色" },
    { year: 2036, color: "#4D9FE5", name: "青色" },
    { year: 2044, color: "#E57A4D", name: "オレンジ色" },
    { year: 2057, color: "#4DE5A2", name: "ターコイズ色" },
    { year: 2078, color: "#E54D9F", name: "ピンク色" },
    { year: 2112, color: "#8FE54D", name: "黄緑色" },
    { year: 2167, color: "#4D4DE5", name: "インディゴ色" },
    { year: 2256, color: "#E5E54D", name: "イエロー色" },
    { year: 2400, color: "#BC4DE5", name: "マゼンタ色" },
  ];

  // 節目となる年のフィボナッチ数と対応する年のリスト
  const fibonacciMilestones = [
    { fib: 1, year: 2025, description: "最初の節目" },
    { fib: 2, year: 2026, description: "2年目の節目" },
    { fib: 3, year: 2028, description: "3番目の節目" },
    { fib: 5, year: 2031, description: "5番目の節目" },
    { fib: 8, year: 2036, description: "8番目の節目" },
    { fib: 13, year: 2044, description: "13番目の節目" },
    { fib: 21, year: 2057, description: "21番目の節目" },
    { fib: 34, year: 2078, description: "34番目の節目" },
    { fib: 55, year: 2112, description: "55番目の節目" },
    { fib: 89, year: 2167, description: "89番目の節目" },
    { fib: 144, year: 2256, description: "144番目の節目" },
    { fib: 233, year: 2400, description: "233番目の節目" },
    { fib: 377, year: 2622, description: "377番目の節目" },
    { fib: 610, year: 2966, description: "610番目の節目" },
    { fib: 987, year: 3500, description: "987番目の節目" },
    { fib: 1597, year: 4334, description: "1597番目の節目" },
    { fib: 2584, year: 5775, description: "2584番目の節目" },
    { fib: 4181, year: 7872, description: "4181番目の節目" },
    { fib: 6765, year: 10953, description: "6765番目の節目" },
    { fib: 10946, year: 15631, description: "10946番目の節目" },
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
      <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6 border-b pb-3 mt-12">アクセントカラー</h3>
      
      <SpecialYearColorExplanation copyColorToClipboard={copyColorToClipboard} />
      
      <Collapsible
        open={isDetailOpen}
        onOpenChange={setIsDetailOpen}
        className="bg-gray-50/70 p-4 rounded-lg mb-5"
      >
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">アクセントカラーの詳細説明</p>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              {isDetailOpen ? (
                <>
                  <span className="text-sm">詳細を隠す</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span className="text-sm">詳細を表示</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <p className="text-lg my-5 leading-relaxed">
            アクセントカラーは節目となる年（フィボナッチ数列の年：1,2,3,5,8...）に変更され、次の節目が来るまで固定されます。これらの特別な色は「黄金角（約137.5度）」という、自然界の法則から生まれます。ひまわりの種やパイナップルの模様と同じ原理です。
          </p>
        </CollapsibleContent>
      </Collapsible>
      
      <h4 className="text-xl font-semibold mb-4">アクセントカラー一覧</h4>
      
      <SpecialColorCircles 
        specialYearColors={specialYearColors} 
        copyColorToClipboard={copyColorToClipboard} 
      />
      
      <Collapsible
        open={isMilestoneOpen}
        onOpenChange={setIsMilestoneOpen}
        className="bg-gray-50/70 p-4 rounded-lg my-5"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Info className="h-5 w-5 mr-2 text-enabler-600" />
            <p className="text-lg font-medium">フィボナッチ数列と節目の年一覧</p>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              {isMilestoneOpen ? (
                <>
                  <span className="text-sm">詳細を隠す</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span className="text-sm">詳細を表示</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-left">
                    <th className="py-2 px-4 border-b">フィボナッチ数</th>
                    <th className="py-2 px-4 border-b">対応する年</th>
                    <th className="py-2 px-4 border-b">説明</th>
                  </tr>
                </thead>
                <tbody>
                  {fibonacciMilestones.map((milestone, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 border-b font-mono">{milestone.fib}</td>
                      <td className="py-2 px-4 border-b font-mono">{milestone.year}年</td>
                      <td className="py-2 px-4 border-b">{milestone.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-4 text-gray-500">
              フィボナッチ数列（1, 1, 2, 3, 5, 8, 13, 21, 34, 55...）に基づいて特別な節目の年を計算しています。
              2025年を最初の節目（フィボナッチ数1）として、それ以降の年はフィボナッチ数列に従って設定されています。
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <Collapsible
        open={isTheoryOpen}
        onOpenChange={setIsTheoryOpen}
        className="bg-gray-50/70 p-4 rounded-lg my-5"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Info className="h-5 w-5 mr-2 text-enabler-600" />
            <p className="text-lg font-medium">アクセントカラーの数学的原理</p>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              {isTheoryOpen ? (
                <>
                  <span className="text-sm">詳細を隠す</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span className="text-sm">詳細を表示</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <SpecialColorFormula />
          <BackgroundColorTheory />
        </CollapsibleContent>
      </Collapsible>
      
      <Collapsible
        open={isGuidelinesOpen}
        onOpenChange={setIsGuidelinesOpen}
        className="bg-gray-50/70 p-4 rounded-lg mt-5"
      >
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">色彩使用ガイドライン</p>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              {isGuidelinesOpen ? (
                <>
                  <span className="text-sm">詳細を隠す</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span className="text-sm">詳細を表示</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <ColorUsageGuidelines />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default SpecialAccentColorIntro;
