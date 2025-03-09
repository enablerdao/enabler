
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import ColorCard from './ColorCard';
import { YearSelectorProps } from './types';

const YearSelector: React.FC<YearSelectorProps> = ({ 
  customYear, 
  onDecreaseYear, 
  onAddYear, 
  onAddCustomYear,
  customColors,
  onColorCopy
}) => {
  return (
    <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6 w-full">
      <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center justify-between">
        <span>追加年度カラー</span>
        <div className="flex items-center space-x-2">
          <button 
            onClick={onDecreaseYear}
            className="p-1 bg-white rounded-md shadow-sm hover:bg-gray-100 transition-colors"
          >
            <Minus className="w-4 h-4 text-gray-500" />
          </button>
          <span className="text-sm">{customYear}年</span>
          <button 
            onClick={onAddYear}
            className="p-1 bg-white rounded-md shadow-sm hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </h3>
      
      {customColors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {customColors.map(color => (
            <ColorCard 
              key={color.year}
              color={color} 
              onClick={onColorCopy}
            />
          ))}
        </div>
      ) : (
        <div 
          className="bg-white rounded-lg p-3 text-center cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={onAddCustomYear}
        >
          <p className="text-sm text-gray-500 flex items-center justify-center">
            <Plus className="w-4 h-4 mr-1" /> {customYear}年のカラーを追加
          </p>
        </div>
      )}
    </div>
  );
};

export default YearSelector;
