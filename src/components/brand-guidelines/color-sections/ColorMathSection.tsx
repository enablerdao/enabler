
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
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 border-b pb-2">Enabler ブランドカラーの進化</h3>
      
      <p className="text-base mb-4 leading-relaxed">
        Enablerのブランドカラーは『ディープブルー (#22B6FF)』から始まります。この深い青色は、「可能性の海」を象徴し、一人ひとりが持つ無限の可能性や挑戦する勇気を表しています。
      </p>
      
      <p className="text-base mb-4 leading-relaxed">
        年月を重ねるごとに、このブルーは徐々に明るくなり、澄みわたった空のような色へと変化します。さらに長い時間の中で、その青は淡く、透明感のある色へと進化を続けます。これは、Enablerが人々の暮らしに自然に溶け込み、なくてはならない存在へと成長していく姿を表しています。特に、「海」から「空」へ、そして最終的には無限の広がりを持つ「宇宙」のような壮大な可能性へと発展していくことを示しています。
      </p>
      
      <h4 className="text-lg font-semibold mb-3 mt-8">毎年の色の変化について（ブルー系カラー）</h4>
      <p className="text-base mb-4 leading-relaxed">
        Enablerの青色は毎年徐々に明るくなり、絶え間ない成長を表します。
      </p>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5">
        <h5 className="font-medium mb-2">色の変化式</h5>
        <pre className="text-sm md:text-base font-mono overflow-x-auto p-4 bg-gray-100 rounded-lg">
{`R = round(34 + 190 × (1 - 0.95^(y - 2022)))
G = round(182 + 63 × (1 - 0.95^(y - 2022)))
B = 255（固定）
※ y はその年の西暦`}
        </pre>
        <button 
          className="mt-3 text-sm md:text-base px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md flex items-center"
          onClick={() => copyToClipboard(`R = ${companyInfo.colorFormula.r}\nG = ${companyInfo.colorFormula.g}\nB = 255（固定）`, '色計算式')}
        >
          <Copy className="w-4 h-4 mr-2" /> 計算式をコピー
        </button>
      </div>
      
      {/* Yearly Color Evolution */}
      <div className="mt-4 overflow-hidden mb-10">
        <h5 className="text-base font-medium mb-2">ブランドカラーの進化イメージ：</h5>
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
              2022年（創業）
            </div>
          </div>

          {/* Add all Fibonacci sum year colors */}
          {fibonacciSumColors.slice(0, 8).map((color, index) => (
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
      
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 border-b pb-2 mt-12">特別な周年のアクセントカラー（グリーン）</h3>
      
      <p className="text-base mb-4 leading-relaxed">
        Enablerは、フィボナッチ数列の累積和（1年目、3年目、6年目、11年目…）の節目の年にだけ、通常のブルーとは異なる特別なアクセントカラーを使用します。
      </p>
      
      <p className="text-base mb-4 leading-relaxed">
        アクセントカラーは「黄金角（約137.5度）」を用いて決定されます。これは自然界において最も美しい調和を生み出す角度であり、特別な節目を美しく祝福する意味を込めています。
      </p>
      
      <h4 className="text-lg font-semibold mb-3 mt-5">特別カラーの計算方法</h4>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5">
        <pre className="text-sm md:text-base font-mono overflow-x-auto p-4 bg-gray-100 rounded-lg mb-2">
{`H（色相）= (f × 137.5) mod 360
S（彩度）= 0.75（固定）
V（明度）= 1（固定）

※ f はフィボナッチ数の順序（1,2,3…）です。`}
        </pre>
        <p className="text-sm text-gray-700">
          この方法で得られる色は、「黄金角（137.5度）」という自然界の最も美しい角度を利用しているため、自然界に調和する美しい色が得られます。
        </p>
      </div>
      
      <h4 className="text-lg font-semibold mb-3 mt-5">特別カラーの例</h4>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3">累積和の周年</th>
              <th className="text-left py-2 px-3">対象年</th>
              <th className="text-left py-2 px-3">色相(H)</th>
              <th className="text-left py-2 px-3">HEXカラー例</th>
              <th className="text-left py-2 px-3">イメージ</th>
            </tr>
          </thead>
          <tbody>
            {fibonacciSums.slice(0, 5).map((sum, index) => {
              const year = foundingYear + sum;
              const color = fibonacciSpecialColors[index];
              
              let colorName;
              const hue = (index + 1) * 137.5 % 360;
              if (hue >= 90 && hue < 150) colorName = "グリーン系";
              else if (hue >= 150 && hue < 210) colorName = "水色系";
              else if (hue >= 210 && hue < 270) colorName = "青/紫系";
              else if (hue >= 270 && hue < 330) colorName = "紫/ピンク系";
              else colorName = "黄/オレンジ系";
              
              return (
                <tr key={year} className="border-b">
                  <td className="py-2 px-3">{sum}周年</td>
                  <td className="py-2 px-3">{year}年</td>
                  <td className="py-2 px-3">{Math.round((index + 1) * 137.5) % 360}°</td>
                  <td className="py-2 px-3">{color.hex}</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: color.hex }}></div>
                      <span>{colorName}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Special Accent Colors Visualization */}
      <div className="mt-4 overflow-hidden mb-8">
        <h5 className="text-base font-medium mb-2">特別アクセントカラー例：</h5>
        <div className="flex flex-wrap gap-1">
          {/* Add all Fibonacci special accent colors */}
          {fibonacciSpecialColors.slice(0, 8).map((color, index) => (
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
      
      <h3 className="text-xl font-semibold mb-4 md:mb-5 border-b pb-2 mt-12">ブランドカラーのまとめ</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <ul className="list-disc pl-5 space-y-2">
          <li>通常のカラーは、深い青から明るい空色、そして限りなく淡いブルーへと進化し、Enablerの絶え間ない成長と広がり続ける可能性を象徴します。</li>
          <li>特別な節目の周年には、黄金角から算出されるアクセントカラーが登場し、その節目を華やかに彩ります。</li>
        </ul>
        <p className="mt-3 text-sm font-medium">
          Enablerはこれらのカラーを通じて、人々の可能性をより豊かに、そして自然に広げる存在として、未来へ向けて進化していきます。
        </p>
      </div>
    </div>
  );
};

export default ColorMathSection;
