
import React from 'react';
import { Copy } from 'lucide-react';
import { ColorPaletteProps } from './types';
import { companyInfo } from '@/lib/data';

const ColorPalette: React.FC<ColorPaletteProps> = ({ currentYearColor, onColorCopy }) => {
  return (
    <div className="bg-gray-50 p-3 rounded-lg">
      <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">カラーパレット</h3>
      <div className="space-y-2 md:space-y-3">
        <div className="flex items-center space-x-2 md:space-x-3 bg-white p-2 rounded-lg shadow-sm cursor-pointer"
             onClick={() => onColorCopy(currentYearColor.hex, `${currentYearColor.name} HEX`)}>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg" style={{ backgroundColor: currentYearColor.hex }}></div>
          <div>
            <p className="text-xs md:text-sm font-medium">メインカラー ({currentYearColor.year})</p>
            <p className="text-xs text-gray-600 font-mono">{currentYearColor.hex}</p>
          </div>
          <Copy className="w-3.5 h-3.5 ml-auto text-gray-400" />
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-3 bg-white p-2 rounded-lg shadow-sm cursor-pointer"
             onClick={() => onColorCopy(companyInfo.accentColor, 'アクセントカラー HEX')}>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg" style={{ backgroundColor: companyInfo.accentColor }}></div>
          <div>
            <p className="text-xs md:text-sm font-medium">アクセントカラー</p>
            <p className="text-xs text-gray-600 font-mono">{companyInfo.accentColor}</p>
          </div>
          <Copy className="w-3.5 h-3.5 ml-auto text-gray-400" />
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-3 bg-white p-2 rounded-lg shadow-sm cursor-pointer"
             onClick={() => onColorCopy('#333333', 'テキストカラー HEX')}>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg" style={{ backgroundColor: '#333333' }}></div>
          <div>
            <p className="text-xs md:text-sm font-medium">テキストカラー</p>
            <p className="text-xs text-gray-600 font-mono">#333333</p>
          </div>
          <Copy className="w-3.5 h-3.5 ml-auto text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
