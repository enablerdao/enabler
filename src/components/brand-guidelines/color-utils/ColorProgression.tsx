
import React from 'react';
import ColorCard from './ColorCard';
import { ColorProgressionProps } from './types';

const ColorProgression: React.FC<ColorProgressionProps> = ({ brandColors, currentYear, onColorCopy }) => {
  return (
    <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6 w-full">
      <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center">
        年度別ブランドカラー (2022-2030)
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
        {brandColors.map(color => (
          <ColorCard 
            key={color.year}
            color={color} 
            onClick={onColorCopy}
            isCurrentYear={color.year === currentYear}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorProgression;
