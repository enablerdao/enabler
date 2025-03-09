
import React, { useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Calculator, Copy, CheckCircle, InfoIcon, Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LogoVariations from './LogoVariations';

interface ColorInfo {
  year: number;
  hex: string;
  name: string;
  rgb: string;
}

interface FixedColorValuesProps {
  currentYearColor: ColorInfo;
  brandColors: ColorInfo[];
}

const FixedColorValues = ({ currentYearColor, brandColors }: FixedColorValuesProps) => {
  const { toast } = useToast();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [customYear, setCustomYear] = useState<number>(2031);
  const [customColors, setCustomColors] = useState<ColorInfo[]>([]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
    
    // Reset copied state after animation
    setTimeout(() => {
      setCopiedColor(null);
    }, 2000);
  };

  // Function to calculate color for any given year
  const calculateColorForYear = (year: number) => {
    const yearDiff = year - 2022;
    const r = Math.min(34 + yearDiff * 3, 224);
    const g = Math.min(182 + yearDiff * 2, 245);
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

  const addCustomYear = () => {
    const newColor = calculateColorForYear(customYear);
    setCustomColors([...customColors, newColor]);
    setCustomYear(customYear + 1);
  };

  const decreaseCustomYear = () => {
    if (customYear > 2031) {
      setCustomYear(customYear - 1);
    }
  };

  return (
    <MotionBox delay={900}>
      <section className="mb-6 md:mb-12">
        <div className="flex items-center mb-3 md:mb-5">
          <Calculator className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">8. 年度カラーとコードリファレンス</h2>
        </div>
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-subtle">
          <p className="text-base md:text-lg mb-3 md:mb-5">
            Enablerのブランドカラーは会社のブランドとして一貫して使用され、年度ごとに更新されます。
            以下は現在の年度カラーとその値です。
          </p>
          
          {/* Current year color highlight */}
          <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">
              {currentYearColor.year}年ブランドカラー
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm mb-2 md:mb-3">
                  <LogoVariations variant="modern" size="md" year={currentYearColor.year} />
                </div>
                <p className="text-xs md:text-sm font-medium">{currentYearColor.name}</p>
              </div>
              
              <div className="grid grid-cols-1 gap-2 md:gap-3 w-full max-w-xs">
                <div className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm cursor-pointer transition-colors hover:bg-gray-100"
                     onClick={() => copyToClipboard(currentYearColor.hex, 'HEX値')}>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-md" style={{ backgroundColor: currentYearColor.hex }}></div>
                  <div className="flex-1">
                    <p className="text-xs font-medium">HEX</p>
                    <div className="flex items-center">
                      <p className="text-sm md:text-base font-mono">{currentYearColor.hex}</p>
                      {copiedColor === currentYearColor.hex ? (
                        <CheckCircle className="w-3.5 h-3.5 ml-2 text-green-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 ml-2 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm cursor-pointer transition-colors hover:bg-gray-100"
                     onClick={() => copyToClipboard(`rgb(${currentYearColor.rgb})`, 'RGB値')}>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-md" style={{ backgroundColor: currentYearColor.hex }}></div>
                  <div className="flex-1">
                    <p className="text-xs font-medium">RGB</p>
                    <div className="flex items-center">
                      <p className="text-sm md:text-base font-mono">rgb({currentYearColor.rgb})</p>
                      {copiedColor === `rgb(${currentYearColor.rgb})` ? (
                        <CheckCircle className="w-3.5 h-3.5 ml-2 text-green-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 ml-2 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Color formula section */}
          <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center">
              <InfoIcon className="w-5 h-5 mr-2 text-blue-500" />
              年度カラー計算式
            </h3>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm md:text-base mb-2">Enablerのブランドカラーは、以下の計算式に基づいて年ごとに変化します：</p>
              <div className="font-mono bg-gray-100 p-2 rounded text-sm mb-3 overflow-x-auto">
                <pre>R = min(34 + (y - 2022) * 3, 224)</pre>
                <pre>G = min(182 + (y - 2022) * 2, 245)</pre>
                <pre>B = 255</pre>
                <pre>※ y：年度</pre>
              </div>
              <button 
                className="text-xs md:text-sm px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md flex items-center transition-colors"
                onClick={() => copyToClipboard(
                  "R = min(34 + (y - 2022) * 3, 224)\nG = min(182 + (y - 2022) * 2, 245)\nB = 255", 
                  '色計算式'
                )}
              >
                <Copy className="w-3.5 h-3.5 mr-1.5" /> 計算式をコピー
              </button>
            </div>
          </div>
          
          {/* Color progression section - Improved for mobile */}
          <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">
              年度別ブランドカラー (2022-2030)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
              {brandColors.map(color => (
                <div 
                  key={color.year}
                  className={`flex items-center p-2 rounded-lg shadow-sm cursor-pointer transition-colors hover:bg-gray-100
                    ${color.year === new Date().getFullYear() ? 'bg-blue-50 border border-blue-200' : 'bg-white'}`}
                  onClick={() => copyToClipboard(color.hex, `${color.year}年カラー`)}
                >
                  <div className="w-8 h-8 rounded-md flex-shrink-0" style={{ backgroundColor: color.hex }}></div>
                  <div className="ml-2 overflow-hidden flex-1">
                    <p className="text-xs font-medium whitespace-nowrap">{color.year}年</p>
                    <p className="text-xs text-gray-600 font-mono truncate">{color.hex}</p>
                    <p className="text-xs text-gray-500 truncate hidden sm:block">RGB({color.rgb})</p>
                  </div>
                  <Copy className="w-3.5 h-3.5 ml-1 text-gray-400 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Custom year colors section */}
          <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center justify-between">
              <span>追加年度カラー</span>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={decreaseCustomYear}
                  className="p-1 bg-white rounded-md shadow-sm hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-500" />
                </button>
                <span className="text-sm">{customYear}年</span>
                <button 
                  onClick={addCustomYear}
                  className="p-1 bg-white rounded-md shadow-sm hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </h3>
            
            {customColors.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                {customColors.map(color => (
                  <div 
                    key={color.year}
                    className="flex items-center p-2 rounded-lg shadow-sm cursor-pointer transition-colors hover:bg-gray-100 bg-white"
                    onClick={() => copyToClipboard(color.hex, `${color.year}年カラー`)}
                  >
                    <div className="w-8 h-8 rounded-md flex-shrink-0" style={{ backgroundColor: color.hex }}></div>
                    <div className="ml-2 overflow-hidden flex-1">
                      <p className="text-xs font-medium whitespace-nowrap">{color.year}年</p>
                      <p className="text-xs text-gray-600 font-mono truncate">{color.hex}</p>
                      <p className="text-xs text-gray-500 truncate hidden sm:block">RGB({color.rgb})</p>
                    </div>
                    <Copy className="w-3.5 h-3.5 ml-1 text-gray-400 flex-shrink-0" />
                  </div>
                ))}
              </div>
            ) : (
              <div 
                className="bg-white rounded-lg p-3 text-center cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={addCustomYear}
              >
                <p className="text-sm text-gray-500 flex items-center justify-center">
                  <Plus className="w-4 h-4 mr-1" /> {customYear}年のカラーを追加
                </p>
              </div>
            )}
          </div>
          
          {/* Logo variants with color schemes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-4 md:mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">ロゴバリエーション</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 rounded-lg shadow-sm flex justify-center items-center h-16 md:h-20">
                    <LogoVariations variant="modern" size="sm" year={currentYearColor.year} />
                  </div>
                  <p className="text-xs mt-1 md:mt-2">スタンダード</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 rounded-lg shadow-sm flex justify-center items-center h-16 md:h-20">
                    <LogoVariations variant="monochrome" size="sm" year={currentYearColor.year} />
                  </div>
                  <p className="text-xs mt-1 md:mt-2">モノクローム</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 rounded-lg shadow-sm flex justify-center items-center h-16 md:h-20">
                    <LogoVariations variant="gradient" size="sm" year={currentYearColor.year} />
                  </div>
                  <p className="text-xs mt-1 md:mt-2">グラデーション</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 rounded-lg shadow-sm flex justify-center items-center h-16 md:h-20">
                    <LogoVariations variant="outline" size="sm" year={currentYearColor.year} />
                  </div>
                  <p className="text-xs mt-1 md:mt-2">アウトライン</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">カラーパレット</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center space-x-2 md:space-x-3 bg-white p-2 rounded-lg shadow-sm cursor-pointer"
                     onClick={() => copyToClipboard(currentYearColor.hex, `${currentYearColor.name} HEX`)}>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg" style={{ backgroundColor: currentYearColor.hex }}></div>
                  <div>
                    <p className="text-xs md:text-sm font-medium">メインカラー ({currentYearColor.year})</p>
                    <p className="text-xs text-gray-600 font-mono">{currentYearColor.hex}</p>
                  </div>
                  <Copy className="w-3.5 h-3.5 ml-auto text-gray-400" />
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3 bg-white p-2 rounded-lg shadow-sm cursor-pointer"
                     onClick={() => copyToClipboard('#79D300', 'アクセントカラー HEX')}>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg" style={{ backgroundColor: '#79D300' }}></div>
                  <div>
                    <p className="text-xs md:text-sm font-medium">アクセントカラー</p>
                    <p className="text-xs text-gray-600 font-mono">#79D300</p>
                  </div>
                  <Copy className="w-3.5 h-3.5 ml-auto text-gray-400" />
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3 bg-white p-2 rounded-lg shadow-sm cursor-pointer"
                     onClick={() => copyToClipboard('#333333', 'テキストカラー HEX')}>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg" style={{ backgroundColor: '#333333' }}></div>
                  <div>
                    <p className="text-xs md:text-sm font-medium">テキストカラー</p>
                    <p className="text-xs text-gray-600 font-mono">#333333</p>
                  </div>
                  <Copy className="w-3.5 h-3.5 ml-auto text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">グラデーションの使用例</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 md:w-20 h-5 md:h-6 rounded-md bg-gradient-to-r" 
                     style={{ backgroundImage: `linear-gradient(to right, ${currentYearColor.hex}, ${currentYearColor.hex}CC)` }}></div>
                <p className="text-xs mt-1">標準</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 md:w-20 h-5 md:h-6 rounded-md bg-gradient-to-r" 
                     style={{ backgroundImage: `linear-gradient(to right, ${currentYearColor.hex}, #79D300)` }}></div>
                <p className="text-xs mt-1">アクセント</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 md:w-20 h-5 md:h-6 rounded-md bg-gradient-to-br" 
                     style={{ backgroundImage: `linear-gradient(to bottom right, ${currentYearColor.hex}, ${currentYearColor.hex}99)` }}></div>
                <p className="text-xs mt-1">斜め</p>
              </div>
            </div>
            <div className="mt-3 md:mt-4 text-center">
              <button className="text-xs md:text-sm px-3 py-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                      onClick={() => copyToClipboard(
                        `background-image: linear-gradient(to right, ${currentYearColor.hex}, ${currentYearColor.hex}CC);`, 
                        'CSS グラデーション'
                      )}>
                <span className="flex items-center"><Copy className="w-3 h-3 mr-1.5" /> CSS コードをコピー</span>
              </button>
            </div>
          </div>
          
          <p className="text-base md:text-lg mt-3 md:mt-4">
            これらのカラーコードは、すべてのマーケティング資料やプロダクトで一貫して使用することで、Enablerのブランドの統一性と認知度を高めます。毎年更新される年度カラーは、常に企業サイトに反映されます。
          </p>
        </div>
      </section>
    </MotionBox>
  );
};

export default FixedColorValues;
