
import React from 'react';
import { Copy } from 'lucide-react';
import { GradientExamplesProps } from './types';

const GradientExamples: React.FC<GradientExamplesProps> = ({ currentYearColor, onCopy }) => {
  return (
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
                onClick={() => onCopy(
                  `background-image: linear-gradient(to right, ${currentYearColor.hex}, ${currentYearColor.hex}CC);`, 
                  'CSS グラデーション'
                )}>
          <span className="flex items-center"><Copy className="w-3 h-3 mr-1.5" /> CSS コードをコピー</span>
        </button>
      </div>
    </div>
  );
};

export default GradientExamples;
