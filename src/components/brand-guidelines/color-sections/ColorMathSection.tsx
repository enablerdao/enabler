
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
      <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 border-b pb-2">🌊 Enabler ブランドカラーの進化</h3>
      
      <p className="text-base mb-4 leading-relaxed">
        Enablerのブランドカラーは、『可能性の海』を象徴する深い青色『ディープブルー (#22B6FF)』から始まり、年月を重ねるにつれて徐々に明るく透明感を増していきます。
      </p>
      
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h4 className="font-semibold mb-2">カラーの変化は次のように表現されます：</h4>
        <ol className="space-y-2 pl-5 list-decimal">
          <li>
            <span className="font-medium">海（創業期）</span><br/>
            深く濃い青色 (#22B6FF)：可能性に満ちたスタートを表現。
          </li>
          <li>
            <span className="font-medium">空（成長期）</span><br/>
            明るく澄みわたる水色へ変化：さらに広がる可能性を表現。
          </li>
          <li>
            <span className="font-medium">宇宙（成熟期～理想の姿）</span><br/>
            最終的には限りなく白に近い淡いブルー：無限の可能性、壮大さ、スケールの大きさを抽象的に表現します。
          </li>
        </ol>
        <p className="mt-3 text-sm text-gray-600">
          ここでいう『宇宙』とは、暗闇の宇宙空間ではなく、「果てしなく広がる可能性」という意味での宇宙です。<br/>
          Enablerは成長するほど、より明るく、より広く、無限の可能性を提供できる存在へと進化していきます。
        </p>
      </div>
      
      <h4 className="text-lg font-semibold mb-3">📘 毎年の色の変化式（青系カラー）</h4>
      <p className="text-base mb-4 leading-relaxed">
        ブルーは毎年、以下の計算式で変化します（年々淡いブルーに近づきます）。
      </p>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5">
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
      
      <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 border-b pb-2">🍃 特別カラー（アクセントのグリーン）の設定方法</h3>
      
      <p className="text-base mb-4 leading-relaxed">
        Enablerは特別な節目の年（フィボナッチ数列の累積和：1年目、3年目、6年目、11年目…）にのみ、ブランドカラーとは別に『アクセントカラー』としてグリーン系の色を用います。
      </p>
      
      <p className="text-base mb-4 leading-relaxed">
        アクセントのグリーンは、以下の数式を用いて毎回変化します。
      </p>
      
      <h4 className="text-lg font-semibold mb-3">🌿 アクセントカラーの数式（グリーン系カラー）</h4>
      
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
      
      <h4 className="text-lg font-semibold mb-3">🌱 アクセントカラーの例（イメージ）</h4>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3">フィボナッチ累積和</th>
              <th className="text-left py-2 px-3">周年</th>
              <th className="text-left py-2 px-3">HSV計算値</th>
              <th className="text-left py-2 px-3">HEXカラー例</th>
              <th className="text-left py-2 px-3">色イメージ</th>
            </tr>
          </thead>
          <tbody>
            {fibonacciSums.slice(0, 5).map((sum, index) => {
              const year = foundingYear + sum;
              const color = fibonacciSpecialColors[index];
              
              let colorName;
              const hue = (index + 1) * 137.5 % 360;
              if (hue >= 90 && hue < 150) colorName = "緑系";
              else if (hue >= 150 && hue < 210) colorName = "水色系";
              else if (hue >= 210 && hue < 270) colorName = "青/紫系";
              else if (hue >= 270 && hue < 330) colorName = "紫/ピンク系";
              else colorName = "黄/オレンジ系";
              
              return (
                <tr key={year} className="border-b">
                  <td className="py-2 px-3">{sum}</td>
                  <td className="py-2 px-3">{sum}周年（{year}年）</td>
                  <td className="py-2 px-3">H={Math.round((index + 1) * 137.5) % 360}°</td>
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
        <p className="mt-3 text-xs text-gray-600">
          ※このアクセントカラーは、毎回異なる色相の美しい色へと変化し、節目を華やかに祝福します。
        </p>
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
      
      <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 border-b pb-2">📝 ブランドカラーまとめ</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <ul className="list-disc pl-5 space-y-2">
          <li>通常カラー（青色）は『海→空→宇宙』のイメージで毎年徐々に淡くなり、最終的に淡いブルーへ。</li>
          <li>特別な周年（フィボナッチ数列の累積和）には『黄金角による美しいアクセントカラー（グリーン系中心）』を使用します。</li>
        </ul>
        <p className="mt-3 text-sm font-medium">
          これによって、Enablerの『無限の可能性』というメッセージを鮮やかに、わかりやすく表現できます。
        </p>
      </div>
    </div>
  );
};

export default ColorMathSection;
