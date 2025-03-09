
import React from 'react';
import { LogoVariantProps } from './types';
import { calculateColorForYear, foundingColor, generateFibonacciAccentColorForYear, calculateGoldenRatio } from './logoUtils';

const MonochromeLogo: React.FC<LogoVariantProps> = ({ size, year = new Date().getFullYear() }) => {
  // Get current year color
  const currentYearColor = calculateColorForYear(year);
  // Get fibonacci accent color info for the specific year
  const fibonacciAccentInfo = generateFibonacciAccentColorForYear(year);
  // Get golden ratio segments for a default width of 60
  const goldenSegments = calculateGoldenRatio(60);

  return (
    <>
      <defs>
        <linearGradient id={`middleLineGradient-mono-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset={`${(goldenSegments.segment1 / 60) * 100}%`} stopColor={fibonacciAccentInfo.specialColor} />
          <stop offset="100%" stopColor={currentYearColor} />
        </linearGradient>
      </defs>
      <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
      <rect x="15" y="25" width="60" height="3" rx="1.5" fill={currentYearColor}/>
      <rect x="15" y="33" width="60" height="3" rx="1.5" fill={`url(#middleLineGradient-mono-${year})`}/>
      <rect x="15" y="41" width="60" height="3" rx="1.5" fill={currentYearColor}/>
      <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={currentYearColor}>ENABLER</text>
    </>
  );
};

export default MonochromeLogo;
