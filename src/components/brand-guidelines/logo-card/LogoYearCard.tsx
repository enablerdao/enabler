
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
  
  return (
    <div 
      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col items-center"
    >
      <div className="h-32 flex items-center justify-center mb-2 relative">
        <LogoVariations variant="modern" size="md" year={year} />
        <div className="absolute bottom-0 text-xs text-gray-500 bg-white/80 px-2 py-0.5 rounded">
          {year}年（創業から{yearsSinceFounding}年目）
        </div>
      </div>
      
      <div className="text-center w-full mt-3">
        <div className="flex justify-between items-center gap-4">
          {/* Brand color - larger rectangle with color code inside */}
          <div 
            className="flex-1 h-24 rounded-md flex flex-col items-center justify-center cursor-pointer group transition-all hover:shadow-md relative"
            style={{ backgroundColor: color.hex }}
            onClick={() => onColorCopy(color.hex, "ブランドカラー")}
          >
            <span className={`text-sm font-medium drop-shadow-sm mb-1 ${isLightColor(color.hex) ? 'text-gray-800' : 'text-white'}`}>
              ブランド
            </span>
            <span className={`text-xs bg-black/20 px-2 py-1 rounded-sm ${isLightColor(color.hex) ? 'text-gray-800' : 'text-white'}`}>
              {color.hex}
            </span>
            <Copy size={14} className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity ${isLightColor(color.hex) ? 'text-gray-800' : 'text-white'}`} />
          </div>
          
          {/* Special accent color - larger rectangle with color code inside */}
          <div 
            className="flex-1 h-24 rounded-md flex flex-col items-center justify-center cursor-pointer group transition-all hover:shadow-md relative" 
            style={{ backgroundColor: specialAccent.hex }}
            onClick={() => onSpecialColorClick(specialAccent.hex, year)}
          >
            <span className={`text-sm font-medium drop-shadow-sm mb-1 ${isLightColor(specialAccent.hex) ? 'text-gray-800' : 'text-white'}`}>
              特別
            </span>
            <span className={`text-xs bg-black/20 px-2 py-1 rounded-sm ${isLightColor(specialAccent.hex) ? 'text-gray-800' : 'text-white'}`}>
              {specialAccent.hex}
            </span>
            <ZoomIn size={14} className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity ${isLightColor(specialAccent.hex) ? 'text-gray-800' : 'text-white'}`} />
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
