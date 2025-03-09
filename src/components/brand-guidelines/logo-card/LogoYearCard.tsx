
import React from 'react';
import LogoVariations from '../LogoVariations';
import { Copy, ZoomIn, Info } from 'lucide-react';

interface LogoYearCardProps {
  year: number;
  foundingYear: number;
  color: {
    hex: string;
    name: string;
    rgb: string;
  };
  specialAccent: {
    hex: string;
  };
  onColorCopy: (text: string, label: string) => void;
  onSpecialColorClick: (color: string, year: number) => void;
}

const LogoYearCard: React.FC<LogoYearCardProps> = ({
  year,
  foundingYear,
  color,
  specialAccent,
  onColorCopy,
  onSpecialColorClick,
}) => {
  const yearsSinceFounding = year - foundingYear;
  const foundingColor = "#22B6FF"; // Founding color hex
  
  // 色の変化に関する説明の状態
  const [showColorInfo, setShowColorInfo] = React.useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg p-4 shadow-md border border-gray-100 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-32 w-full flex items-center justify-center mb-2 relative">
        <LogoVariations variant="modern" size="lg" year={year} />
        <div className="absolute bottom-1 text-xs text-gray-600 bg-white/90 px-2 py-0.5 rounded-md shadow-sm border border-gray-100">
          {year}年（創業から{yearsSinceFounding}年目）
        </div>
      </div>
      
      <div className="w-full mt-2 space-y-2">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500">創業カラー</span>
            <span className="text-xs px-2 py-0.5 rounded bg-gray-100">{foundingColor}</span>
          </div>
          <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#eaeaea" }}>
            <div className="h-full rounded-full" style={{ width: "100%", backgroundColor: foundingColor }}></div>
          </div>
        </div>

        {/* Display colors side by side in one row */}
        <div className="flex gap-2">
          {/* Brand color card */}
          <div 
            className="flex-1 rounded-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
            onClick={() => onColorCopy(color.hex, "ブランドカラー")}
          >
            <div 
              className="h-10 cursor-pointer relative group"
              style={{ backgroundColor: color.hex }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity">
                <Copy size={14} className={isLightColor(color.hex) ? 'text-gray-800' : 'text-white'} />
              </div>
            </div>
            <div className="px-2 py-1.5 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">ブランドカラー</span>
                <span className="text-xs text-gray-500">{color.hex}</span>
              </div>
            </div>
          </div>
          
          {/* Special accent color card */}
          <div 
            className="flex-1 rounded-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
            onClick={() => onSpecialColorClick(specialAccent.hex, year)}
          >
            <div 
              className="h-10 cursor-pointer relative group"
              style={{ backgroundColor: specialAccent.hex }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity">
                <ZoomIn size={14} className={isLightColor(specialAccent.hex) ? 'text-gray-800' : 'text-white'} />
              </div>
            </div>
            <div className="px-2 py-1.5 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">特別カラー</span>
                <span className="text-xs text-gray-500">{specialAccent.hex}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Color info button */}
        <button 
          className="w-full mt-1 flex items-center justify-center gap-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => setShowColorInfo(!showColorInfo)}
        >
          <Info size={12} />
          <span>{showColorInfo ? '情報を閉じる' : 'ブランドカラーについて'}</span>
        </button>
        
        {/* Color information section */}
        {showColorInfo && (
          <div className="mt-2 p-2 bg-gray-50 rounded-md text-xs text-gray-600 space-y-1">
            <p>ブランドカラーは毎年変化します。計算式：</p>
            <div className="bg-white p-1 rounded font-mono text-2xs">
              R = round(34 + 190 × (1 - 0.95^(y - 2022)))<br />
              G = round(182 + 63 × (1 - 0.95^(y - 2022)))<br />
              B = 255
            </div>
            <p className="text-2xs mt-1">
              この計算式により、色は年数が経過するにつれて徐々に明るい青色へと変化していきます。
              しかし、指数関数的特性により、完全に最終値（R:224, G:245, B:255）に到達することはなく、
              無限に進化し続ける設計になっています。
            </p>
            <p className="text-2xs mt-1">
              特別カラーは黄金角（137.5°）に基づき計算され、フィボナッチ数列の累積和の年にのみ色が変化します。
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to determine if a color is light or dark
const isLightColor = (color: string): boolean => {
  // Convert hex to RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate brightness (YIQ formula)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  // Return true if the color is light
  return brightness > 128;
};

export default LogoYearCard;
