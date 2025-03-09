
import React from 'react';
import LogoVariations from '../LogoVariations';
import { LogoVariantsProps } from './types';

const LogoVariants: React.FC<LogoVariantsProps> = ({ currentYearColor }) => {
  return (
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
  );
};

export default LogoVariants;
