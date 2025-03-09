
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Palette, Copy, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LogoVariations from './LogoVariations';
import { companyInfo } from '@/lib/data';

interface ColorInfo {
  year: number;
  hex: string;
  name: string;
  rgb: string;
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

  // 2025年の色を取得
  const color2025 = brandColors.find(color => color.year === 2025) || currentYearColor;

  return (
    <MotionBox delay={400}>
      <section className="mb-6 md:mb-12">
        <div className="flex items-center mb-3 md:mb-5">
          <Palette className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. ブランドカラー</h2>
        </div>
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-subtle">
          <p className="text-base md:text-lg mb-3 md:mb-5 leading-relaxed">
            Enablerのブランドカラーは創業年を起点に年数経過で変化します。
            2025年に公式ブランドカラーとして統一され、以降のマーケティング資料やプロダクトデザインに反映されています。
          </p>
          
          {/* Logo and color evolution visualization */}
          <div className="mb-5 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ブランドカラーの進化と一貫性</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 mb-3 md:mb-5 bg-gray-50 p-3 md:p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <p className="text-xs md:text-sm font-semibold mb-1 md:mb-2">2022 設立時</p>
                <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm flex justify-center items-center mb-2 md:mb-3 h-16 md:h-20">
                  <div className="flex flex-col items-center">
                    <LogoVariations variant="foundingLogo" size="sm" year={2022} />
                    <div className="mt-1 text-xs text-gray-500">オリジナルロゴ</div>
                  </div>
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
                <p className="text-xs md:text-sm font-semibold mb-1 md:mb-2">2025 統一</p>
                <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm flex justify-center items-center mb-2 md:mb-3 h-16 md:h-20">
                  <LogoVariations variant="modern" size="sm" year={2025} />
                </div>
                <div 
                  className="h-5 md:h-6 w-16 md:w-20 rounded-md shadow-sm cursor-pointer flex items-center justify-center group relative"
                  style={{ backgroundColor: companyInfo.currentColor }}
                  onClick={() => copyToClipboard(companyInfo.currentColor, '2025年ブランドカラー')}
                >
                  <span className="text-xs text-white group-hover:opacity-0 transition-opacity">{companyInfo.currentColor}</span>
                  <Copy className="w-3 h-3 text-white absolute opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <p className="text-xs md:text-sm font-semibold mb-1 md:mb-2">{currentYearColor.year} 現在</p>
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
              2025年に統一されたブランドアイデンティティは、すべての製品とサービスで一貫して維持され、視認性と認知度を向上させています。
            </p>
          </div>
          
          <div className="mb-5 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">数学的な色の変化表現（漸近的変化）</h3>
            <p className="text-base mb-3 md:mb-4 leading-relaxed">
              色の変化は以下の関数で表され、無限に近づきながらも最大値に到達することはありません。これはEnablerが「常に可能性を追求し続ける」ことを意味しています。
            </p>
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto p-3 bg-gray-100 rounded-lg">
{`R = ${companyInfo.colorFormula.r}
G = ${companyInfo.colorFormula.g}
B = ${companyInfo.colorFormula.b}
※ y：年度`}
              </pre>
              <button 
                className="mt-2 text-xs md:text-sm px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md flex items-center"
                onClick={() => copyToClipboard(`R = ${companyInfo.colorFormula.r}\nG = ${companyInfo.colorFormula.g}\nB = ${companyInfo.colorFormula.b}`, '色計算式')}
              >
                <Copy className="w-3.5 h-3.5 mr-1.5" /> 計算式をコピー
              </button>
            </div>
            
            <h4 className="text-lg font-semibold mb-2">フィボナッチ数列の採用</h4>
            <p className="text-base mb-3 md:mb-4 leading-relaxed">
              {companyInfo.fibonacci}
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 mb-3 md:mb-4">
              {brandColors.map((color, index) => (
                <div key={index} className={`bg-white rounded-lg p-2 md:p-3 shadow-sm ${color.year === 2025 ? 'border-2 border-blue-300' : ''}`}>
                  <div 
                    className="h-12 md:h-16 rounded-lg mb-2 cursor-pointer relative group"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex, `${color.year}年 ${color.name}`)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Copy className="text-white w-5 h-5" />
                    </div>
                    {color.year === 2025 && (
                      <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5">
                        統一
                      </div>
                    )}
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
            <h4 className="text-base md:text-lg font-semibold mb-2">ブランドカラーパレット</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <div className="flex items-center mb-1">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: companyInfo.currentColor }}></div>
                  <h5 className="text-sm font-medium">メインカラー（スカイブルー）</h5>
                </div>
                <p className="text-xs text-gray-600">数式で動的に変化（上記参照）</p>
                <p className="text-xs font-mono bg-gray-50 rounded px-1 py-0.5 mt-1 cursor-pointer"
                   onClick={() => copyToClipboard(companyInfo.currentColor, 'メインカラー')}>
                  {companyInfo.currentColor}
                </p>
              </div>
              
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <div className="flex items-center mb-1">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: companyInfo.accentColor }}></div>
                  <h5 className="text-sm font-medium">アクセントカラー（若草色）</h5>
                </div>
                <p className="text-xs text-gray-600">成長、生命力、安心感</p>
                <p className="text-xs font-mono bg-gray-50 rounded px-1 py-0.5 mt-1 cursor-pointer"
                   onClick={() => copyToClipboard(companyInfo.accentColor, 'アクセントカラー')}>
                  {companyInfo.accentColor}
                </p>
              </div>
              
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <div className="flex items-center mb-1">
                  <div className="flex">
                    <div className="w-4 h-4 rounded-l-full" style={{ backgroundColor: companyInfo.supportingColors.white }}></div>
                    <div className="w-4 h-4 rounded-r-full" style={{ backgroundColor: companyInfo.supportingColors.silver }}></div>
                  </div>
                  <h5 className="text-sm font-medium ml-2">補助カラー</h5>
                </div>
                <div className="flex justify-between mt-1">
                  <div className="flex-1">
                    <p className="text-xs text-gray-600">透明性、誠実さ</p>
                    <p className="text-xs font-mono bg-gray-50 rounded px-1 py-0.5 mt-1 cursor-pointer"
                       onClick={() => copyToClipboard(companyInfo.supportingColors.white, 'ホワイト')}>
                      {companyInfo.supportingColors.white}
                    </p>
                  </div>
                  <div className="flex-1 ml-1">
                    <p className="text-xs text-gray-600">調和、技術</p>
                    <p className="text-xs font-mono bg-gray-50 rounded px-1 py-0.5 mt-1 cursor-pointer"
                       onClick={() => copyToClipboard(companyInfo.supportingColors.silver, 'シルバー')}>
                      {companyInfo.supportingColors.silver}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="text-sm space-y-1.5 pl-5 list-disc">
              <li>2025年に統一されたブランドカラー（{companyInfo.currentColor}）は、公式コミュニケーションで優先的に使用してください。</li>
              <li>現在の年度カラー（{currentYearColor.hex}）は、当年度のキャンペーンや限定的な資料で使用してください。</li>
              <li>すべてのプロダクトとサービスで一貫したカラースキームを維持してください。</li>
              <li>デジタルとプリントメディアでは、正確なカラーコードを使用してカラーの統一性を確保してください。</li>
            </ul>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandColors;
