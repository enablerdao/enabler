
import React from 'react';
import { Copy } from 'lucide-react';
import { ColorPaletteProps } from './types';
import { companyInfo } from '@/lib/data';

const ColorPalette: React.FC<ColorPaletteProps> = ({ currentYearColor, onColorCopy }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-base md:text-lg font-semibold mb-3 text-center">カラーパレット</h3>
      <div className="space-y-3 md:space-y-4">
        {/* メインカラー */}
        <div className="flex flex-col bg-white p-3 rounded-lg shadow-sm cursor-pointer"
             onClick={() => onColorCopy(currentYearColor.hex, `${currentYearColor.name} HEX`)}>
          <div className="w-full h-16 md:h-20 rounded-lg mb-2" style={{ backgroundColor: currentYearColor.hex }}></div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">メインカラー ({currentYearColor.year})</p>
              <p className="text-xs text-gray-600 font-mono">{currentYearColor.hex}</p>
            </div>
            <Copy className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        {/* アクセントカラー */}
        <div className="flex flex-col bg-white p-3 rounded-lg shadow-sm cursor-pointer"
             onClick={() => onColorCopy(companyInfo.accentColor, 'アクセントカラー HEX')}>
          <div className="w-full h-16 md:h-20 rounded-lg mb-2" style={{ backgroundColor: companyInfo.accentColor }}></div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">アクセントカラー</p>
              <p className="text-xs text-gray-600 font-mono">{companyInfo.accentColor}</p>
            </div>
            <Copy className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        {/* テキストカラー */}
        <div className="flex flex-col bg-white p-3 rounded-lg shadow-sm cursor-pointer"
             onClick={() => onColorCopy('#333333', 'テキストカラー HEX')}>
          <div className="w-full h-16 md:h-20 rounded-lg mb-2" style={{ backgroundColor: '#333333' }}></div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">テキストカラー</p>
              <p className="text-xs text-gray-600 font-mono">#333333</p>
            </div>
            <Copy className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* 補助カラー */}
        <div className="flex flex-col bg-white p-3 rounded-lg shadow-sm">
          <div className="flex h-16 md:h-20 rounded-lg mb-2 overflow-hidden">
            <div 
              className="w-1/2 cursor-pointer"
              style={{ backgroundColor: companyInfo.supportingColors.white }}
              onClick={() => onColorCopy(companyInfo.supportingColors.white, 'ホワイト HEX')}
            >
            </div>
            <div 
              className="w-1/2 cursor-pointer"
              style={{ backgroundColor: companyInfo.supportingColors.silver }}
              onClick={() => onColorCopy(companyInfo.supportingColors.silver, 'シルバー HEX')}
            >
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">補助カラー</p>
              <div className="flex space-x-2 text-xs text-gray-600 font-mono">
                <span onClick={() => onColorCopy(companyInfo.supportingColors.white, 'ホワイト HEX')} className="cursor-pointer">{companyInfo.supportingColors.white}</span>
                <span onClick={() => onColorCopy(companyInfo.supportingColors.silver, 'シルバー HEX')} className="cursor-pointer">{companyInfo.supportingColors.silver}</span>
              </div>
            </div>
            <Copy className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
