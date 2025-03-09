
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useToast } from '@/hooks/use-toast';
import { calculateSpecialAccentColor, calculateBackgroundColor } from '@/components/brand-guidelines/color-utils/color-calculator';

const BackgroundColorTheory: React.FC = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  
  const copyColorToClipboard = (colorCode: string, colorName: string) => {
    navigator.clipboard.writeText(colorCode);
    toast({
      title: "コピーしました",
      description: `${colorName}（${colorCode}）をクリップボードにコピーしました`
    });
  };
  
  // Sample years with special accent colors
  const specialYears = [2025, 2026, 2028, 2033];
  
  // Get accent and background colors for each special year
  const colorPairs = specialYears.map(year => {
    const accent = calculateSpecialAccentColor(year);
    const background = calculateBackgroundColor(accent.hex);
    return {
      year,
      accent,
      background
    };
  });

  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-5 border-b pb-3 mt-8">背景色の調和理論</h3>
      
      <p className="text-lg mb-6 leading-relaxed">
        アクセントカラーに最適な背景色を科学的に導き出すために、「黄金比カラー調和法（Golden Ratio-Based Complementary Logic）」を採用しています。
        この方法では、アクセントカラーの色相に黄金角（137.5°）を加えた色相を背景色の基本とし、彩度を下げ明度を上げることで、
        調和の取れた美しいパステルカラーを生成します。
      </p>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6 border border-purple-100">
        <h4 className="text-xl font-semibold mb-4">黄金比カラー調和法の計算方法</h4>
        
        <ol className="list-decimal pl-6 space-y-3 mb-5">
          <li className="text-base">
            <strong>色相 (H) の計算:</strong> アクセントカラーの色相に黄金角（137.5°）を加え、360で割った余りを背景色の色相とします。
            <div className="mt-2 p-3 bg-white rounded font-mono text-sm">H_背景 = (H_アクセント + 137.5) % 360</div>
          </li>
          <li className="text-base">
            <strong>彩度と明度の設定:</strong> 背景色は常に淡く柔らかい印象になるよう、彩度を極端に低く（10〜20%）、明度を高く（95〜98%）設定します。
          </li>
        </ol>
        
        <div className="p-3 bg-white rounded mb-3">
          <p className="mb-2 font-medium">なぜ黄金角（137.5°）なのか？</p>
          <p className="text-sm">
            黄金角は自然界に広く見られる特別な角度で、ひまわりの種やパイナップルの鱗などの配置パターンに現れます。
            この角度により、視覚的に心地よい色のバランスが実現され、アクセントカラーと背景色の間に調和のとれた関係性が生まれます。
          </p>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">各アクセントカラーと対応する背景色</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {colorPairs.map(({ year, accent, background }) => (
          <div 
            key={year}
            className="p-4 rounded-lg border"
            style={{ backgroundColor: background.hex }}
          >
            <h5 className="font-medium mb-3">{year}年の配色</h5>
            <div className="flex gap-4 mb-3">
              <div 
                className="w-24 h-24 rounded-md flex items-center justify-center text-white font-bold shadow-sm cursor-pointer"
                style={{ backgroundColor: accent.hex }}
                onClick={() => copyColorToClipboard(accent.hex, `${year}年のアクセントカラー`)}
              >
                <div className="flex flex-col items-center">
                  <span>アクセント</span>
                  <span className="text-sm font-mono mt-1">{accent.hex}</span>
                  <Copy className="w-4 h-4 mt-1" />
                </div>
              </div>
              <div 
                className="w-24 h-24 rounded-md flex items-center justify-center border border-dashed border-gray-300 cursor-pointer"
                onClick={() => copyColorToClipboard(background.hex, `${year}年の背景色`)}
              >
                <div className="flex flex-col items-center">
                  <span>背景色</span>
                  <span className="text-sm font-mono mt-1">{background.hex}</span>
                  <Copy className="w-4 h-4 mt-1" />
                </div>
              </div>
            </div>
            <p className="text-sm">
              <strong>{background.name}</strong>の背景は<strong>{accent.hex}</strong>のアクセントカラーと自然な調和を生み出します。
            </p>
          </div>
        ))}
      </div>
      
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="bg-gray-50 p-4 rounded-lg"
      >
        <div className="flex justify-between items-center">
          <h5 className="font-medium">詳細な理論的背景</h5>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              {isOpen ? (
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 space-y-4"
          >
            <h6 className="font-medium">補色・対比色（Complementary Colors）との違い</h6>
            <p className="text-sm">
              従来の色彩理論では、アクセントカラーに対して色相環の正反対（180度）の色を選ぶことが一般的ですが、
              黄金角（137.5度）を用いることで、より自然な調和が生まれます。これは単なる補色よりも豊かな視覚体験を提供します。
            </p>
            
            <h6 className="font-medium">近似色調和（Analogous Harmony）との関係</h6>
            <p className="text-sm">
              黄金角（137.5度）は完全な補色（180度）と近似色（30度以内）の中間的な性質を持ち、
              「適度な対比と親和性」を同時に実現する独自の調和をもたらします。
            </p>
            
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-blue-700 italic text-sm mt-4">
              この配色理論は、Enablerのブランド理念である「科学と感性の融合」を色彩面でも実現しています。
              数学的な精緻さ（黄金角）と視覚的な美しさ（パステルカラー）が一体となった、独自の配色システムです。
            </div>
          </motion.div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default BackgroundColorTheory;
