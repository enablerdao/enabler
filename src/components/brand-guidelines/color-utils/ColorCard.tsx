
import React from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { ColorCardProps } from './types';

const ColorCard: React.FC<ColorCardProps> = ({ color, onClick, isCurrentYear = false, copiedColor }) => {
  return (
    <div 
      key={color.year}
      className={`flex items-center p-2 rounded-lg shadow-sm cursor-pointer transition-colors hover:bg-gray-100
        ${isCurrentYear ? 'bg-blue-50 border border-blue-200' : 'bg-white'}`}
      onClick={() => onClick(color.hex, `${color.year}年カラー`)}
    >
      <div className="w-8 h-8 rounded-md flex-shrink-0" style={{ backgroundColor: color.hex }}></div>
      <div className="ml-2 overflow-hidden flex-1">
        <p className="text-xs font-medium whitespace-nowrap">{color.year}年</p>
        <p className="text-xs text-gray-600 font-mono truncate">{color.hex}</p>
        <p className="text-xs text-gray-500 truncate hidden sm:block">RGB({color.rgb})</p>
      </div>
      {copiedColor === color.hex ? (
        <CheckCircle className="w-3.5 h-3.5 ml-1 text-green-500 flex-shrink-0" />
      ) : (
        <Copy className="w-3.5 h-3.5 ml-1 text-gray-400 flex-shrink-0" />
      )}
    </div>
  );
};

export default ColorCard;
