
import React from 'react';
import { Copy } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import { calculateColorForYear, calculateSpecialAccentColor } from '../color-utils/color-calculator';

interface ColorMathSectionProps {
  copyToClipboard: (text: string, label: string) => void;
  foundingYearColor: any;
}

const ColorMathSection: React.FC<ColorMathSectionProps> = ({ copyToClipboard, foundingYearColor }) => {
  // Generate Fibonacci numbers sequence - extended for long-term calculations
  const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584];
  const foundingYear = 2022;
  
  // Calculate Fibonacci sums (cumulative sums)
  // 1, 3, 6, 11, 19, 32, 53, 87, 142, 231, 375, 608, 985, 1595, 2582, 4179, 6763
  const fibonacciSums = fibonacciSequence.reduce((acc: number[], curr, i) => {
    const prevSum = i > 0 ? acc[i-1] : 0;
    acc.push(prevSum + curr);
    return acc;
  }, []);
  
  // Generate colors for each Fibonacci sum year
  const fibonacciSumColors = fibonacciSums.map(sumYear => {
    const year = foundingYear + sumYear;
    return calculateColorForYear(year);
  });
  
  // Generate special accent colors for each Fibonacci sum year
  const fibonacciSpecialColors = fibonacciSums.map(sumYear => {
    const year = foundingYear + sumYear;
    return calculateSpecialAccentColor(year);
  });
  
  return (
    <div className="mb-6 md:mb-10">
      <h3 className="text-lg md:text-xl font-semibold mb-4 border-b pb-2">数学的な色の変化表現（フィボナッチ数列の累積和）</h3>
      <p className="text-base mb-4 leading-relaxed">
        色の変化はフィボナッチ数列の累積和の年にのみ行われます。創業年（2022年）を起点として、フィボナッチ数列の累積和の年（1, 3, 6, 11, 19, 32, 53, 87, 142, 231, 375, 608, 985年目...）にのみ、以下の関数に基づいて色が変わります。
      </p>
      <div className="bg-gray-50 p-4 rounded-lg mb-5">
        <pre className="text-sm md:text-base font-mono overflow-x-auto p-4 bg-gray-100 rounded-lg">
{`R = ${companyInfo.colorFormula.r}
G = ${companyInfo.colorFormula.g}
B = ${companyInfo.colorFormula.b}
※ y：フィボナッチ数列の累積和の年（2022年からの経過）`}
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
          ブルーは「可能性」「信頼」「知性」を表し、フィボナッチ数列の累積和の年に明るく、より広がりのある色へと変化していきます。
        </p>
      </div>
      
      <h4 className="text-lg font-semibold mb-3 mt-6">フィボナッチ数列の累積和による特別カラー変化</h4>
      <p className="text-base mb-4 leading-relaxed">
        {companyInfo.fibonacci}
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-5 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3">年</th>
              <th className="text-left py-2 px-3">フィボナッチ数</th>
              <th className="text-left py-2 px-3">累積和</th>
              <th className="text-left py-2 px-3">色の変化</th>
              <th className="text-left py-2 px-3">ブランドカラー</th>
              <th className="text-left py-2 px-3">特別カラー</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-3">2022年</td>
              <td className="py-2 px-3">-</td>
              <td className="py-2 px-3">0</td>
              <td className="py-2 px-3">創業カラー</td>
              <td className="py-2 px-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: foundingYearColor.hex }}></div>
                  <span>{foundingYearColor.hex}</span>
                </div>
              </td>
              <td className="py-2 px-3">-</td>
            </tr>
            {fibonacciSums.slice(0, 10).map((sum, index) => {
              const year = foundingYear + sum;
              const color = fibonacciSumColors[index];
              const specialColor = fibonacciSpecialColors[index];
              return (
                <tr key={year} className="border-b">
                  <td className="py-2 px-3">{year}年</td>
                  <td className="py-2 px-3">{fibonacciSequence.slice(0, index + 1).join('+')}</td>
                  <td className="py-2 px-3">{sum}</td>
                  <td className="py-2 px-3">{index + 1}番目の色変化</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color.hex }}></div>
                      <span>{color.hex}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: specialColor.hex }}></div>
                      <span>{specialColor.hex}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
            <tr className="border-b bg-gray-100">
              <td className="py-2 px-3">2253年</td>
              <td className="py-2 px-3">...</td>
              <td className="py-2 px-3">231</td>
              <td className="py-2 px-3">10番目の色変化</td>
              <td className="py-2 px-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: calculateColorForYear(2253).hex }}></div>
                  <span>{calculateColorForYear(2253).hex}</span>
                </div>
              </td>
              <td className="py-2 px-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: calculateSpecialAccentColor(2253).hex }}></div>
                  <span>{calculateSpecialAccentColor(2253).hex}</span>
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-3">2375年</td>
              <td className="py-2 px-3">...</td>
              <td className="py-2 px-3">375</td>
              <td className="py-2 px-3">11番目の色変化</td>
              <td className="py-2 px-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: calculateColorForYear(2375).hex }}></div>
                  <span>{calculateColorForYear(2375).hex}</span>
                </div>
              </td>
              <td className="py-2 px-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: calculateSpecialAccentColor(2375).hex }}></div>
                  <span>{calculateSpecialAccentColor(2375).hex}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-3">2608年</td>
              <td className="py-2 px-3">...</td>
              <td className="py-2 px-3">608</td>
              <td className="py-2 px-3">12番目の色変化</td>
              <td className="py-2 px-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: calculateColorForYear(2608).hex }}></div>
                  <span>{calculateColorForYear(2608).hex}</span>
                </div>
              </td>
              <td className="py-2 px-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: calculateSpecialAccentColor(2608).hex }}></div>
                  <span>{calculateSpecialAccentColor(2608).hex}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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

      {/* Fibonacci Sum Color Visualization */}
      <h4 className="text-lg font-semibold mb-3 mt-6">フィボナッチ数列の累積和による色の進化</h4>
      <div className="mt-4 overflow-hidden">
        <div className="flex flex-wrap gap-1">
          {/* Add founding year color as the first color */}
          <div 
            className="relative group"
            key="founding-year"
          >
            <div 
              className="w-12 h-12 rounded-md shadow-sm transition-transform group-hover:scale-110"
              style={{ backgroundColor: foundingYearColor.hex }}
            ></div>
            <div className="opacity-0 group-hover:opacity-100 absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
              2022年
            </div>
          </div>

          {/* Add all Fibonacci sum year colors */}
          {fibonacciSumColors.map((color, index) => (
            <div 
              className="relative group"
              key={`fib-sum-${index}`}
            >
              <div 
                className="w-12 h-12 rounded-md shadow-sm transition-transform group-hover:scale-110"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
                {foundingYear + fibonacciSums[index]}年
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Color Visualization */}
      <h4 className="text-lg font-semibold mb-3 mt-10">フィボナッチ数列による特別カラー変化</h4>
      <div className="mt-4 overflow-hidden">
        <div className="flex flex-wrap gap-1">
          {/* Add all Fibonacci special accent colors */}
          {fibonacciSpecialColors.map((color, index) => (
            <div 
              className="relative group"
              key={`fib-special-${index}`}
            >
              <div 
                className="w-12 h-12 rounded-md shadow-sm transition-transform group-hover:scale-110"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
                {foundingYear + fibonacciSums[index]}年<br/>特別カラー
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed color progression - a finer gradient showing all years */}
      <h4 className="text-lg font-semibold mb-3 mt-10">すべての年の色（詳細なグラデーション）</h4>
      <div className="mt-4 overflow-x-auto pb-4">
        <div className="flex gap-0.5" style={{ width: 'max-content' }}>
          {Array.from({ length: 50 }, (_, i) => foundingYear + i).map(year => {
            const color = calculateColorForYear(year);
            const yearsSinceFounding = year - foundingYear;
            const isFibSum = fibonacciSums.includes(yearsSinceFounding);
            return (
              <div 
                className="relative group"
                key={year}
              >
                <div 
                  className="w-6 h-14 transition-transform group-hover:scale-y-110"
                  style={{ 
                    backgroundColor: color.hex,
                    border: isFibSum ? '1px solid rgba(0,0,0,0.2)' : 'none',
                    boxShadow: isFibSum ? '0 2px 4px rgba(0,0,0,0.1)' : 'none' 
                  }}
                ></div>
                <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-1.5 py-0.5 whitespace-nowrap transition-opacity">
                  {year}年
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorMathSection;
