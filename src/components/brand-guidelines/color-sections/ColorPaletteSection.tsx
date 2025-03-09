
import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import { ColorInfo } from '../color-utils/types';

interface ColorPaletteSectionProps {
  foundingYearColor: ColorInfo;
  currentYearColor: ColorInfo;
  copyToClipboard: (text: string, label: string) => void;
}

const ColorPaletteSection: React.FC<ColorPaletteSectionProps> = ({ 
  foundingYearColor, 
  currentYearColor, 
  copyToClipboard 
}) => {
  const [copiedColorHex, setCopiedColorHex] = useState<string | null>(null);

  const handleCopy = (hex: string, label: string) => {
    copyToClipboard(hex, label);
    setCopiedColorHex(hex);
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopiedColorHex(null);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <h4 className="text-lg font-semibold mb-4 text-center">カラーパレット</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        {/* 創業カラー */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div 
            className="h-24 md:h-28 rounded-lg mb-3 cursor-pointer relative group"
            style={{ backgroundColor: foundingYearColor.hex }}
            onClick={() => handleCopy(foundingYearColor.hex, '創業カラー')}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {copiedColorHex === foundingYearColor.hex ? (
                <CheckCircle className="text-white w-8 h-8" />
              ) : (
                <Copy className="text-white w-8 h-8" />
              )}
            </div>
          </div>
          <h5 className="text-base font-medium mb-1">創業カラー (2022年)</h5>
          <p className="text-sm text-gray-600">創業当時の原点となる色</p>
          <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-2 cursor-pointer"
             onClick={() => handleCopy(foundingYearColor.hex, '創業カラー')}>
            {foundingYearColor.hex}
          </p>
        </div>
        
        {/* メインカラー */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div 
            className="h-24 md:h-28 rounded-lg mb-3 cursor-pointer relative group"
            style={{ backgroundColor: companyInfo.currentColor }}
            onClick={() => handleCopy(companyInfo.currentColor, 'メインカラー')}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {copiedColorHex === companyInfo.currentColor ? (
                <CheckCircle className="text-white w-8 h-8" />
              ) : (
                <Copy className="text-white w-8 h-8" />
              )}
            </div>
          </div>
          <h5 className="text-base font-medium mb-1">メインカラー（スカイブルー）</h5>
          <p className="text-sm text-gray-600">数式で動的に変化（上記参照）</p>
          <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-2 cursor-pointer"
             onClick={() => handleCopy(companyInfo.currentColor, 'メインカラー')}>
            {companyInfo.currentColor}
          </p>
        </div>
        
        {/* アクセントカラー */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div 
            className="h-24 md:h-28 rounded-lg mb-3 cursor-pointer relative group"
            style={{ backgroundColor: companyInfo.accentColor }}
            onClick={() => handleCopy(companyInfo.accentColor, 'アクセントカラー')}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {copiedColorHex === companyInfo.accentColor ? (
                <CheckCircle className="text-white w-8 h-8" />
              ) : (
                <Copy className="text-white w-8 h-8" />
              )}
            </div>
          </div>
          <h5 className="text-base font-medium mb-1">アクセントカラー（若草色）</h5>
          <p className="text-sm text-gray-600">成長、生命力、安心感</p>
          <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-2 cursor-pointer"
             onClick={() => handleCopy(companyInfo.accentColor, 'アクセントカラー')}>
            {companyInfo.accentColor}
          </p>
        </div>
        
        {/* 補助カラー */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex h-24 md:h-28 mb-3 rounded-lg overflow-hidden">
            <div 
              className="w-1/2 cursor-pointer relative group"
              style={{ backgroundColor: companyInfo.supportingColors.white }}
              onClick={() => handleCopy(companyInfo.supportingColors.white, 'ホワイト')}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {copiedColorHex === companyInfo.supportingColors.white ? (
                  <CheckCircle className="text-gray-400 w-8 h-8" />
                ) : (
                  <Copy className="text-gray-400 w-8 h-8" />
                )}
              </div>
            </div>
            <div 
              className="w-1/2 cursor-pointer relative group"
              style={{ backgroundColor: companyInfo.supportingColors.silver }}
              onClick={() => handleCopy(companyInfo.supportingColors.silver, 'シルバー')}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {copiedColorHex === companyInfo.supportingColors.silver ? (
                  <CheckCircle className="text-white w-8 h-8" />
                ) : (
                  <Copy className="text-white w-8 h-8" />
                )}
              </div>
            </div>
          </div>
          <h5 className="text-base font-medium mb-1">補助カラー</h5>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <p className="text-sm text-gray-600">ホワイト（透明性）</p>
              <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-1 cursor-pointer"
                onClick={() => handleCopy(companyInfo.supportingColors.white, 'ホワイト')}>
                {companyInfo.supportingColors.white}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">シルバー（調和）</p>
              <p className="text-sm font-mono bg-gray-50 rounded px-2 py-1 mt-1 cursor-pointer"
                onClick={() => handleCopy(companyInfo.supportingColors.silver, 'シルバー')}>
                {companyInfo.supportingColors.silver}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="text-sm space-y-2 pl-5 list-disc">
        <li><span className="font-medium">創業カラー（{foundingYearColor.hex}）</span>：ブランドの原点として常に尊重されます</li>
        <li><span className="font-medium">統一ブランドカラー（{companyInfo.currentColor}）</span>：公式コミュニケーションで優先的に使用</li>
        <li><span className="font-medium">現在の年度カラー（{currentYearColor.hex}）</span>：当年度のキャンペーンや限定資料で使用</li>
        <li>デジタルとプリントメディアでは、正確なカラーコードを使用し、カラーの統一性を確保</li>
      </ul>
    </div>
  );
};

export default ColorPaletteSection;
