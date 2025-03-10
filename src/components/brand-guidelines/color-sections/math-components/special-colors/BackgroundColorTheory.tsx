
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { ClipboardCopy } from 'lucide-react';

const calculateBackgroundColor = (accentColorHex: string): string => {
  // Convert hex to HSV
  const r = parseInt(accentColorHex.slice(1, 3), 16) / 255;
  const g = parseInt(accentColorHex.slice(3, 5), 16) / 255;
  const b = parseInt(accentColorHex.slice(5, 7), 16) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  
  let h = 0;
  let s = 0;
  const v = max;
  
  if (max !== min) {
    const d = max - min;
    s = max === 0 ? 0 : d / max;
    
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else {
      h = (r - g) / d + 4;
    }
    
    h = h * 60;
  }
  
  // Apply golden angle (137.5 degrees) to get background color hue
  const backgroundHue = (h + 137.5) % 360;
  
  // Even lower saturation and higher value for an extremely light pastel
  const backgroundSat = 0.08; // Reduced saturation for a more subtle bg
  const backgroundVal = 0.99; // Higher value for an even lighter bg
  
  // Convert HSV back to RGB
  const c = backgroundVal * backgroundSat;
  const x = c * (1 - Math.abs((backgroundHue / 60) % 2 - 1));
  const m = backgroundVal - c;
  
  let r1, g1, b1;
  
  if (backgroundHue >= 0 && backgroundHue < 60) {
    [r1, g1, b1] = [c, x, 0];
  } else if (backgroundHue >= 60 && backgroundHue < 120) {
    [r1, g1, b1] = [x, c, 0];
  } else if (backgroundHue >= 120 && backgroundHue < 180) {
    [r1, g1, b1] = [0, c, x];
  } else if (backgroundHue >= 180 && backgroundHue < 240) {
    [r1, g1, b1] = [0, x, c];
  } else if (backgroundHue >= 240 && backgroundHue < 300) {
    [r1, g1, b1] = [x, 0, c];
  } else {
    [r1, g1, b1] = [c, 0, x];
  }
  
  const r2 = Math.round((r1 + m) * 255);
  const g2 = Math.round((g1 + m) * 255);
  const b2 = Math.round((b1 + m) * 255);
  
  return `#${r2.toString(16).padStart(2, '0')}${g2.toString(16).padStart(2, '0')}${b2.toString(16).padStart(2, '0')}`;
};

const BackgroundColorTheory: React.FC = () => {
  const { toast } = useToast();
  
  const specialColors = [
    { year: 2025, color: "#4CAF50", name: "緑色" },
    { year: 2026, color: "#E54D4D", name: "赤色" },
    { year: 2028, color: "#A24DE5", name: "紫色" },
    { year: 2033, color: "#E5D24D", name: "黄色" },
  ];
  
  const copyColorToClipboard = (colorCode: string, colorName: string) => {
    navigator.clipboard.writeText(colorCode);
    toast({
      title: "コピーしました",
      description: `${colorName}（${colorCode}）をクリップボードにコピーしました`
    });
  };
  
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold mb-3">背景色の科学的決定方法</h4>
      <p className="mb-3">
        アクセントカラーに合わせた美しい背景色は「黄金角カラー調和法」で算出します。
        アクセントカラーの色相に黄金角（137.5°）を加えた色相を使用し、
        彩度を極めて低く（S=0.08）、明度を高く（V=0.99）設定することで、目に優しいパステルカラーが得られます。
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {specialColors.map((item) => {
          const bgColor = calculateBackgroundColor(item.color);
          return (
            <div 
              key={item.year}
              className="p-4 rounded-lg border flex flex-col"
              style={{ backgroundColor: bgColor }}
            >
              <div className="flex items-center mb-2">
                <div 
                  className="w-6 h-6 rounded-full mr-2 flex-shrink-0" 
                  style={{ backgroundColor: item.color }} 
                />
                <span className="font-medium">{item.year}年 {item.name}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <span className="mr-1">アクセント:</span>
                    <span 
                      className="px-2 py-0.5 rounded text-white text-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.color}
                    </span>
                  </div>
                  
                  <div className="flex items-center mt-1">
                    <span className="mr-1">背景色:</span>
                    <span 
                      className="px-2 py-0.5 rounded text-sm border"
                      style={{ 
                        backgroundColor: bgColor,
                        color: '#333'
                      }}
                    >
                      {bgColor}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => copyColorToClipboard(bgColor, `${item.year}年の背景色`)}
                  className="p-1.5 rounded-md hover:bg-black/5 transition-colors"
                  title="背景色をコピー"
                >
                  <ClipboardCopy size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundColorTheory;
