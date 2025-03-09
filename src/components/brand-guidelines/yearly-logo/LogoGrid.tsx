
import React from 'react';
import LogoCard from './LogoCard';
import { calculateColorForYear, calculateSpecialAccentColor } from '../color-utils/color-calculator';

interface LogoGridProps {
  years: number[];
  onSpecialColorClick: (color: string, year: number) => void;
}

const LogoGrid: React.FC<LogoGridProps> = ({ years, onSpecialColorClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {years.map(year => {
        // Calculate the color for this year
        const color = calculateColorForYear(year);
        const specialAccent = calculateSpecialAccentColor(year);
        
        return (
          <LogoCard 
            key={year}
            year={year}
            color={color}
            specialAccent={specialAccent}
            onSpecialColorClick={onSpecialColorClick}
          />
        );
      })}
    </div>
  );
};

export default LogoGrid;
