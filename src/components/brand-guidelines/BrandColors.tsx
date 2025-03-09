
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
      <section className="mb-8 md:mb-14 px-6 md:px-0">
        <div className="flex items-center mb-4 md:mb-6">
          <Palette className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. ブランドカラー</h2>
        </div>
        <div className="bg-white p-5 md:p-8 rounded-xl shadow-subtle">
          <p className="text-base md:text-lg mb-5 md:mb-6 leading-relaxed">
            Enablerのブランドカラーは創業年を起点に年数経過で変化します。
            2025年に公式ブランドカラーとして統一され、以降のマーケティング資料やプロダクトデザインに反映されています。
          </p>
          
          <div className="mb-6 md:mb-10">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 border-b pb-2">ブランドカラーの進化と一貫性</h3>
            <p className="text-base mb-4 leading-relaxed">
              2025年に統一されたブランドアイデンティティは、すべての製品とサービスで一貫して維持され、視認性と認知度を向上させています。
            </p>
            
            {/* 現在のカラーを大きく表示 */}
            <div className="bg-gray-50 p-5 rounded-lg mb-5">
              <h4 className="text-base font-semibold mb-3 text-center">現在のブランドカラー ({currentYearColor.year}年)</h4>
              <div 
                className="h-28 md:h-36 w-full rounded-lg mb-4 cursor-pointer relative group"
                style={{ backgroundColor: currentYearColor.hex }}
                onClick={() => copyToClipboard(currentYearColor.hex, `${currentYearColor.name}`)}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="text-white w-10 h-10" />
                </div>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-md">
                <div>
                  <p className="text-base font-medium">{currentYearColor.name}</p>
                  <p className="text-sm text-gray-600">{currentYearColor.year}年</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-mono font-medium">{currentYearColor.hex}</p>
                  <p className="text-sm text-gray-600 font-mono">RGB({currentYearColor.rgb})</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* ロゴのプレビュー - 年度別 */}
          <div className="mb-6 md:mb-10">
            <h3 className="text-lg md:text-xl font-semibold mb-4 border-b pb-2">年度別ロゴプレビュー</h3>
            <p className="text-base mb-4 leading-relaxed">
              ブランドカラーの変化に応じたロゴの見え方を年度別に表示しています。これにより、一貫したブランドイメージの進化を確認できます。
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              {brandColors.map((color, index) => (
                <div key={index} className={`bg-white rounded-lg p-3 shadow-sm ${color.year === 2025 ? 'border-2 border-blue-300' : ''}`}>
                  <div className="bg-gray-50 p-2 rounded-lg mb-2 flex justify-center items-center">
                    <LogoVariations variant="modern" size="sm" year={color.year} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{color.year}年</p>
                    <div 
                      className="h-8 w-full rounded mt-2 mb-1"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <p className="text-xs font-mono bg-gray-50 rounded px-1 py-0.5 mt-1 cursor-pointer" 
                       onClick={() => copyToClipboard(color.hex, `${color.year}年 ${color.name}`)}>
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6 md:mb-10">
            <h3 className="text-lg md:text-xl font-semibold mb-4 border-b pb-2">数学的な色の変化表現（漸近的変化）</h3>
            <p className="text-base mb-4 leading-relaxed">
              色の変化は以下の関数で表され、無限に近づきながらも最大値に到達することはありません。これはEnablerが「常に可能性を追求し続ける」ことを意味しています。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-5">
              <pre className="text-sm md:text-base font-mono overflow-x-auto p-4 bg-gray-100 rounded-lg">
{`R = ${companyInfo.colorFormula.r}
G = ${companyInfo.colorFormula.g}
B = ${companyInfo.colorFormula.b}
※ y：年度`}
              </pre>
              <button 
                className="mt-3 text-sm md:text-base px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md flex items-center"
                onClick={() => copyToClipboard(`R = ${companyInfo.colorFormula.r}\nG = ${companyInfo.colorFormula.g}\nB = ${companyInfo.colorFormula.b}`, '色計算式')}
              >
                <Copy className="w-4 h-4 mr-2" /> 計算式をコピー
              </button>
            </div>
            
            <h4 className="text-lg font-semibold mb-3 mt-6">フィボナッチ数列と黄金角の特別カラー</h4>
            <p className="text-base mb-4 leading-relaxed">
              {companyInfo.fibonacci}
            </p>

            {companyInfo.fibonacciGoldenAngle && (
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <pre className="text-sm md:text-base font-mono overflow-x-auto p-4 bg-gray-100 rounded-lg mb-2">
                  {companyInfo.fibonacciGoldenAngle.formula}
                </pre>
                <p className="text-sm text-gray-700">
                  {companyInfo.fibonacciGoldenAngle.description}
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-5">
              {brandColors.map((color, index) => (
                <div key={index} className={`bg-white rounded-lg p-3 shadow-sm ${color.year === 2025 ? 'border-2 border-blue-300' : ''}`}>
                  <div 
                    className="h-20 md:h-24 rounded-lg mb-2 cursor-pointer relative group"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex, `${color.year}年 ${color.name}`)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Copy className="text-white w-6 h-6" />
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
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h4 className="text-lg font-semibold mb-4 text-center">カラーパレット</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {/* メインカラー */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div 
                  className="h-24 md:h-28 rounded-lg mb-3 cursor-pointer relative group"
                  style={{ backgroundColor: companyInfo.currentColor }}
                  onClick={() => copyToClipboard(companyInfo.currentColor, 'メインカラー')}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="text-white w-8 h-8" />
                  </div>
                </div>
                <h5 className="text-base font-medium mb-1">メインカラー（スカイブルー）</h5>
                <p className="text-sm text-gray-600">数式で動的に変化（上記参照）</p>
                <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-2 cursor-pointer"
                   onClick={() => copyToClipboard(companyInfo.currentColor, 'メインカラー')}>
                  {companyInfo.currentColor}
                </p>
              </div>
              
              {/* アクセントカラー */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div 
                  className="h-24 md:h-28 rounded-lg mb-3 cursor-pointer relative group"
                  style={{ backgroundColor: companyInfo.accentColor }}
                  onClick={() => copyToClipboard(companyInfo.accentColor, 'アクセントカラー')}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="text-white w-8 h-8" />
                  </div>
                </div>
                <h5 className="text-base font-medium mb-1">アクセントカラー（若草色）</h5>
                <p className="text-sm text-gray-600">成長、生命力、安心感</p>
                <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-2 cursor-pointer"
                   onClick={() => copyToClipboard(companyInfo.accentColor, 'アクセントカラー')}>
                  {companyInfo.accentColor}
                </p>
              </div>
              
              {/* 補助カラー */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex h-24 md:h-28 mb-3 rounded-lg overflow-hidden">
                  <div 
                    className="w-1/2 cursor-pointer relative group"
                    style={{ backgroundColor: companyInfo.supportingColors.white }}
                    onClick={() => copyToClipboard(companyInfo.supportingColors.white, 'ホワイト')}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Copy className="text-gray-400 w-8 h-8" />
                    </div>
                  </div>
                  <div 
                    className="w-1/2 cursor-pointer relative group"
                    style={{ backgroundColor: companyInfo.supportingColors.silver }}
                    onClick={() => copyToClipboard(companyInfo.supportingColors.silver, 'シルバー')}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Copy className="text-white w-8 h-8" />
                    </div>
                  </div>
                </div>
                <h5 className="text-base font-medium mb-1">補助カラー</h5>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <p className="text-sm text-gray-600">ホワイト（透明性、誠実さ）</p>
                    <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-1 cursor-pointer"
                      onClick={() => copyToClipboard(companyInfo.supportingColors.white, 'ホワイト')}>
                      {companyInfo.supportingColors.white}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">シルバー（調和、技術）</p>
                    <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-1 cursor-pointer"
                      onClick={() => copyToClipboard(companyInfo.supportingColors.silver, 'シルバー')}>
                      {companyInfo.supportingColors.silver}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="text-sm space-y-2 pl-5 list-disc">
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
