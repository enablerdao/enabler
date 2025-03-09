
import React, { useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Palette, Copy, CheckCircle, ChevronDown } from 'lucide-react';
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
  const [copiedColorHex, setCopiedColorHex] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(10);
  const currentYear = new Date().getFullYear();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColorHex(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
    
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopiedColorHex(null);
    }, 2000);
  };

  // Get founding year color (2022)
  const foundingYearColor = brandColors.find(color => color.year === 2022) || currentYearColor;
  
  // Calculate color for any given year using the formula
  const calculateColorForYear = (year: number) => {
    const yearDiff = year - 2022;
    
    // Using the exponential formula
    const r = Math.round(34 + 190 * (1 - Math.pow(0.95, yearDiff)));
    const g = Math.round(182 + 63 * (1 - Math.pow(0.95, yearDiff)));
    const b = 255;
    
    // Convert to HEX
    const toHex = (value: number) => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    
    // Generate color name based on the values
    let name = '';
    if (r < 100) {
      name = 'ディープブルー';
    } else if (r < 150) {
      name = 'ミディアムブルー';
    } else if (r < 200) {
      name = 'ライトブルー';
    } else {
      name = 'スカイブルー';
    }
    
    return { year, hex, name, rgb: `${r}, ${g}, ${b}` };
  };

  // Generate additional colors dynamically
  const generateMoreColors = () => {
    const startYear = 2022 + displayCount;
    const additionalColors = Array.from({ length: 10 }, (_, i) => calculateColorForYear(startYear + i));
    setDisplayCount(displayCount + 10);
    return additionalColors;
  };

  // Get all colors to display (initial + dynamically generated)
  const getAllColorsToDisplay = () => {
    const initialColors = brandColors.slice(0, 10);
    const additionalColors = [];
    
    if (displayCount > 10) {
      for (let i = 10; i < displayCount; i++) {
        additionalColors.push(calculateColorForYear(2022 + i));
      }
    }
    
    return [...initialColors, ...additionalColors];
  };

  const colorsToDisplay = getAllColorsToDisplay();
  
  return (
    <MotionBox delay={400}>
      <section className="mb-8 md:mb-14 px-4 md:px-10">
        <div className="flex items-center mb-4 md:mb-6">
          <Palette className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. ブランドカラー</h2>
        </div>
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-subtle">
          <p className="text-base md:text-lg mb-5 md:mb-6 leading-relaxed">
            Enablerのブランドカラーは創業年（2022年）を起点に年数経過で変化します。
            この色の進化は「絶え間ない成長と可能性の追求」を表しています。
          </p>
          
          <div className="mb-6 md:mb-10">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 border-b pb-2">ブランドカラーの進化</h3>
            
            {/* 2022年の創業カラーと現在のカラーを並べて表示 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {/* 創業カラー (2022) */}
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-base font-semibold mb-3 text-center">創業カラー (2022年)</h4>
                <div 
                  className="h-32 md:h-40 w-full rounded-lg mb-4 cursor-pointer relative group"
                  style={{ backgroundColor: foundingYearColor.hex }}
                  onClick={() => copyToClipboard(foundingYearColor.hex, `創業カラー (${foundingYearColor.year}年)`)}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedColorHex === foundingYearColor.hex ? (
                      <CheckCircle className="text-white w-10 h-10" />
                    ) : (
                      <Copy className="text-white w-10 h-10" />
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded-md">
                  <div>
                    <p className="text-base font-medium">{foundingYearColor.name}</p>
                    <p className="text-sm text-gray-600">創業当初の基準色</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-mono font-medium">{foundingYearColor.hex}</p>
                    <p className="text-sm text-gray-600 font-mono">RGB({foundingYearColor.rgb})</p>
                  </div>
                </div>
              </div>
              
              {/* 現在のカラー */}
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-base font-semibold mb-3 text-center">現在のブランドカラー ({currentYearColor.year}年)</h4>
                <div 
                  className="h-32 md:h-40 w-full rounded-lg mb-4 cursor-pointer relative group"
                  style={{ backgroundColor: currentYearColor.hex }}
                  onClick={() => copyToClipboard(currentYearColor.hex, `${currentYearColor.year}年カラー`)}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedColorHex === currentYearColor.hex ? (
                      <CheckCircle className="text-white w-10 h-10" />
                    ) : (
                      <Copy className="text-white w-10 h-10" />
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded-md">
                  <div>
                    <p className="text-base font-medium">{currentYearColor.name}</p>
                    <p className="text-sm text-gray-600">現行の公式カラー</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-mono font-medium">{currentYearColor.hex}</p>
                    <p className="text-sm text-gray-600 font-mono">RGB({currentYearColor.rgb})</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 年度別ロゴプレビュー */}
          <div className="mb-6 md:mb-10">
            <h3 className="text-lg md:text-xl font-semibold mb-4 border-b pb-2">年度別ロゴと色の進化</h3>
            <p className="text-base mb-4 leading-relaxed">
              創業時から将来までの色の変化と、それに伴うロゴの見え方の変化を確認できます。
              これにより、一貫したブランドイメージがどのように進化するかを視覚的に理解できます。
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              {colorsToDisplay.map((color, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg p-3 shadow-sm ${color.year === 2022 ? 'border-2 border-blue-300 bg-blue-50' : ''} ${color.year === currentYear ? 'border-2 border-green-300 bg-green-50' : ''}`}
                >
                  <div className="bg-gray-50 p-2 rounded-lg mb-2 flex justify-center items-center">
                    <LogoVariations variant="modern" size="sm" year={color.year} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">
                      {color.year}年
                      {color.year === 2022 && <span className="text-xs bg-blue-100 text-blue-800 px-1 ml-1 rounded">創業</span>}
                      {color.year === currentYear && <span className="text-xs bg-green-100 text-green-800 px-1 ml-1 rounded">現在</span>}
                    </p>
                    <div 
                      className="h-10 w-full rounded mt-2 mb-1 cursor-pointer"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => copyToClipboard(color.hex, `${color.year}年 ${color.name}`)}
                    ></div>
                    <p className="text-xs font-mono bg-gray-50 rounded px-1 py-0.5 mt-1 cursor-pointer" 
                       onClick={() => copyToClipboard(color.hex, `${color.year}年 ${color.name}`)}>
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* もっと見るボタン */}
            <div className="text-center">
              <button 
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
                onClick={generateMoreColors}
              >
                <ChevronDown className="w-4 h-4 mr-2" />
                さらに{10}年分を表示
              </button>
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
※ y：年度（2022年からの経過）`}
              </pre>
              <button 
                className="mt-3 text-sm md:text-base px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md flex items-center"
                onClick={() => copyToClipboard(`R = ${companyInfo.colorFormula.r}\nG = ${companyInfo.colorFormula.g}\nB = ${companyInfo.colorFormula.b}`, '色計算式')}
              >
                <Copy className="w-4 h-4 mr-2" /> 計算式をコピー
              </button>
            </div>
            
            <div className="bg-white border border-gray-100 p-4 rounded-lg my-5">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: foundingYearColor.hex }}></div>
                <p className="text-sm font-medium">2022年（創業時）のカラーは基準点として特別な意味を持ちます</p>
              </div>
              <p className="text-sm text-gray-700 pl-6">
                ブルーは「可能性」「信頼」「知性」を表し、年を追うごとに明るく、より広がりのある色へと変化していきます。
              </p>
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
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h4 className="text-lg font-semibold mb-4 text-center">カラーパレット</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
              {/* 創業カラー */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div 
                  className="h-24 md:h-28 rounded-lg mb-3 cursor-pointer relative group"
                  style={{ backgroundColor: foundingYearColor.hex }}
                  onClick={() => copyToClipboard(foundingYearColor.hex, '創業カラー')}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedColorHex === foundingYearColor.hex ? (
                      <CheckCircle className="text-white w-8 h-8" />
                    ) : (
                      <Copy className="text-white w-8 h-8" />
                    )}
                  </div>
                </div>
                <h5 className="text-base font-medium mb-1">創業カラー (2022年)</h5>
                <p className="text-sm text-gray-600">創業当時の原点となる色</p>
                <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-2 cursor-pointer"
                   onClick={() => copyToClipboard(foundingYearColor.hex, '創業カラー')}>
                  {foundingYearColor.hex}
                </p>
              </div>
              
              {/* メインカラー */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div 
                  className="h-24 md:h-28 rounded-lg mb-3 cursor-pointer relative group"
                  style={{ backgroundColor: companyInfo.currentColor }}
                  onClick={() => copyToClipboard(companyInfo.currentColor, 'メインカラー')}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedColorHex === companyInfo.currentColor ? (
                      <CheckCircle className="text-white w-8 h-8" />
                    ) : (
                      <Copy className="text-white w-8 h-8" />
                    )}
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
                    {copiedColorHex === companyInfo.accentColor ? (
                      <CheckCircle className="text-white w-8 h-8" />
                    ) : (
                      <Copy className="text-white w-8 h-8" />
                    )}
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
                      {copiedColorHex === companyInfo.supportingColors.white ? (
                        <CheckCircle className="text-gray-400 w-8 h-8" />
                      ) : (
                        <Copy className="text-gray-400 w-8 h-8" />
                      )}
                    </div>
                  </div>
                  <div 
                    className="w-1/2 cursor-pointer relative group"
                    style={{ backgroundColor: companyInfo.supportingColors.silver }}
                    onClick={() => copyToClipboard(companyInfo.supportingColors.silver, 'シルバー')}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {copiedColorHex === companyInfo.supportingColors.silver ? (
                        <CheckCircle className="text-white w-8 h-8" />
                      ) : (
                        <Copy className="text-white w-8 h-8" />
                      )}
                    </div>
                  </div>
                </div>
                <h5 className="text-base font-medium mb-1">補助カラー</h5>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <p className="text-sm text-gray-600">ホワイト（透明性）</p>
                    <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-1 cursor-pointer"
                      onClick={() => copyToClipboard(companyInfo.supportingColors.white, 'ホワイト')}>
                      {companyInfo.supportingColors.white}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">シルバー（調和）</p>
                    <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-1 cursor-pointer"
                      onClick={() => copyToClipboard(companyInfo.supportingColors.silver, 'シルバー')}>
                      {companyInfo.supportingColors.silver}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li><span className="font-medium">創業カラー（{foundingYearColor.hex}）</span>：ブランドの原点として常に尊重されます</li>
              <li><span className="font-medium">統一ブランドカラー（{companyInfo.currentColor}）</span>：公式コミュニケーションで優先的に使用</li>
              <li><span className="font-medium">現在の年度カラー（{currentYearColor.hex}）</span>：当年度のキャンペーンや限定資料で使用</li>
              <li>デジタルとプリントメディアでは、正確なカラーコードを使用し、カラーの統一性を確保</li>
            </ul>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandColors;
