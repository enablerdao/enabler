
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Palette, Copy, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LogoVariations from './LogoVariations';

interface ColorInfo {
  year: number;
  hex: string;
  name: string;
}

interface BrandColorsProps {
  currentYearColor: ColorInfo;
  brandColors: ColorInfo[];
}

const BrandColors = ({ currentYearColor, brandColors }: BrandColorsProps) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
  };

  return (
    <MotionBox delay={400}>
      <section className="mb-6 md:mb-12">
        <div className="flex items-center mb-3 md:mb-5">
          <Palette className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. ブランドカラー</h2>
        </div>
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-subtle">
          <p className="text-base md:text-lg mb-3 md:mb-5 leading-relaxed">
            Enablerのブランドカラーは会社設立時から一貫して使用されており、企業全体のアイデンティティを形成する重要な要素です。
            各年度ごとにテーマカラーが設定され、マーケティング資料やプロダクトデザインに反映されます。
          </p>
          
          {/* Logo and color evolution visualization */}
          <div className="mb-5 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ブランドカラーの進化と一貫性</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-3 md:mb-5 bg-gray-50 p-3 md:p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <p className="text-xs md:text-sm font-semibold mb-1 md:mb-2">2022 設立時</p>
                <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm flex justify-center items-center mb-2 md:mb-3 h-16 md:h-20">
                  <LogoVariations variant="original" size="sm" year={2022} />
                </div>
                <div 
                  className="h-5 md:h-6 w-16 md:w-20 rounded-md shadow-sm cursor-pointer flex items-center justify-center group relative"
                  style={{ backgroundColor: '#22B6FF' }}
                  onClick={() => copyToClipboard('#22B6FF', 'スカイブルー')}
                >
                  <span className="text-xs text-white group-hover:opacity-0 transition-opacity">#22B6FF</span>
                  <Copy className="w-3 h-3 text-white absolute opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <p className="text-xs md:text-sm font-semibold mb-1 md:mb-2">{currentYearColor.year} 現在</p>
                <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm flex justify-center items-center mb-2 md:mb-3 h-16 md:h-20">
                  <LogoVariations variant="modern" size="sm" year={currentYearColor.year} />
                </div>
                <div 
                  className="h-5 md:h-6 w-16 md:w-20 rounded-md shadow-sm cursor-pointer flex items-center justify-center group relative"
                  style={{ backgroundColor: currentYearColor.hex }}
                  onClick={() => copyToClipboard(currentYearColor.hex, currentYearColor.name)}
                >
                  <span className="text-xs text-white group-hover:opacity-0 transition-opacity">{currentYearColor.hex}</span>
                  <Copy className="w-3 h-3 text-white absolute opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <p className="text-xs md:text-sm font-semibold mb-1 md:mb-2">一貫したブランド体験</p>
                <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm flex justify-center items-center mb-2 md:mb-3 h-16 md:h-20">
                  <LogoVariations variant="consistent" size="sm" year={currentYearColor.year} />
                </div>
                <div className="flex space-x-1">
                  {brandColors.slice(0, 3).map((color, index) => (
                    <div 
                      key={index}
                      className="h-5 md:h-6 w-5 md:w-6 rounded-md shadow-sm cursor-pointer flex items-center justify-center group relative"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => copyToClipboard(color.hex, color.name)}
                    >
                      <Copy className="w-3 h-3 text-white absolute opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2">
              年度テーマカラーは毎年更新されますが、ブランドアイデンティティは一貫して維持され、すべての製品とサービスで統一されています。
            </p>
          </div>
          
          <div className="mb-5 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">年度別ブランドカラー</h3>
            <p className="text-base mb-3 md:mb-4 leading-relaxed">
              各年度ごとに設定されるテーマカラーは、その年のプロジェクトやキャンペーンに使用されます。
              以下のカラーは、それぞれの年度のテーマを象徴しています。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 mb-3 md:mb-4">
              {brandColors.map((color, index) => (
                <div key={index} className="bg-white rounded-lg p-2 md:p-3 shadow-sm">
                  <div 
                    className="h-12 md:h-16 rounded-lg mb-2 cursor-pointer relative group"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex, `${color.year}年 ${color.name}`)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Copy className="text-white w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{color.year}年</p>
                    <p className="text-xs text-gray-600">{color.name}</p>
                    <p className="text-xs font-mono bg-gray-50 rounded px-1 py-0.5 mt-1 cursor-pointer" 
                       onClick={() => copyToClipboard(color.hex, `${color.year}年 ${color.name}`)}>
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="text-base md:text-lg font-semibold mb-2">ブランドカラーの使用ガイドライン</h4>
            <ul className="text-sm space-y-1.5 pl-5 list-disc">
              <li>現在の年度カラー（{currentYearColor.hex}）は、主要なマーケティング資料やキャンペーンで使用してください。</li>
              <li>すべてのプロダクトとサービスで一貫したカラースキームを維持してください。</li>
              <li>デジタルとプリントメディアでは、正確なカラーコードを使用してカラーの統一性を確保してください。</li>
              <li>アクセシビリティを考慮し、十分なコントラスト比を確保してください。</li>
            </ul>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandColors;
