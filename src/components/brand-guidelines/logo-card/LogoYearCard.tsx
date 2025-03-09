
import React from 'react';
import LogoVariations from '../LogoVariations';
import { Copy, ZoomIn } from 'lucide-react';

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
  
  return (
    <div 
      className="bg-white rounded-lg p-4 shadow-md border border-gray-100 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-48 w-full flex items-center justify-center mb-3 relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-10">
          <div className="w-32 h-32 rounded-full" style={{ backgroundColor: foundingColor }}></div>
        </div>
        <LogoVariations variant="modern" size="lg" year={year} />
        <div className="absolute bottom-0 text-xs text-gray-600 bg-white/90 px-2 py-1 rounded-t shadow-sm border border-gray-100 border-b-0">
          {year}年（創業から{yearsSinceFounding}年目）
        </div>
      </div>
      
      <div className="w-full mt-2 space-y-3">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500">創業カラー</span>
            <span className="text-xs px-2 py-0.5 rounded bg-gray-100">{foundingColor}</span>
          </div>
          <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#eaeaea" }}>
            <div className="h-full rounded-full" style={{ width: "100%", backgroundColor: foundingColor }}></div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          {/* Brand color - professional card with name and color chip */}
          <div 
            className="flex-1 rounded-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
            onClick={() => onColorCopy(color.hex, "ブランドカラー")}
          >
            <div 
              className="h-12 cursor-pointer relative group"
              style={{ backgroundColor: color.hex }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity">
                <Copy size={16} className={isLightColor(color.hex) ? 'text-gray-800' : 'text-white'} />
              </div>
            </div>
            <div className="px-3 py-2 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">ブランドカラー</span>
                <span className="text-xs text-gray-500">{color.hex}</span>
              </div>
            </div>
          </div>
          
          {/* Special accent color - professional card with chip */}
          <div 
            className="flex-1 rounded-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
            onClick={() => onSpecialColorClick(specialAccent.hex, year)}
          >
            <div 
              className="h-12 cursor-pointer relative group"
              style={{ backgroundColor: specialAccent.hex }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity">
                <ZoomIn size={16} className={isLightColor(specialAccent.hex) ? 'text-gray-800' : 'text-white'} />
              </div>
            </div>
            <div className="px-3 py-2 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">特別カラー</span>
                <span className="text-xs text-gray-500">{specialAccent.hex}</span>
              </div>
            </div>
          </div>
        </div>
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
