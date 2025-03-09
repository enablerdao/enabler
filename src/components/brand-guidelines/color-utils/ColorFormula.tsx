
import React from 'react';
import { InfoIcon, Copy } from 'lucide-react';
import { ColorFormulaProps } from './types';
import { companyInfo } from '@/lib/data';

const ColorFormula: React.FC<ColorFormulaProps> = ({ onCopy }) => {
  return (
    <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
      <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center">
        <InfoIcon className="w-5 h-5 mr-2 text-blue-500" />
        年度カラー計算式
      </h3>
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <p className="text-sm md:text-base mb-2">Enablerのブランドカラーは、以下の計算式に基づいて年ごとに変化します：</p>
        <div className="font-mono bg-gray-100 p-2 rounded text-sm mb-3 overflow-x-auto">
          <pre>{companyInfo.colorFormula.r}</pre>
          <pre>{companyInfo.colorFormula.g}</pre>
          <pre>{companyInfo.colorFormula.b}</pre>
          <pre>※ y：年度</pre>
        </div>
        <button 
          className="text-xs md:text-sm px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md flex items-center transition-colors"
          onClick={() => onCopy(
            `${companyInfo.colorFormula.r}\n${companyInfo.colorFormula.g}\n${companyInfo.colorFormula.b}`, 
            '色計算式'
          )}
        >
          <Copy className="w-3.5 h-3.5 mr-1.5" /> 計算式をコピー
        </button>
      </div>
    </div>
  );
};

export default ColorFormula;
