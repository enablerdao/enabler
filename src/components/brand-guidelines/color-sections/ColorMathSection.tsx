
import React from 'react';
import { Copy } from 'lucide-react';
import { companyInfo } from '@/lib/data';

interface ColorMathSectionProps {
  copyToClipboard: (text: string, label: string) => void;
  foundingYearColor: any;
}

const ColorMathSection: React.FC<ColorMathSectionProps> = ({ copyToClipboard, foundingYearColor }) => {
  return (
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
  );
};

export default ColorMathSection;
