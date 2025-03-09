
import React from 'react';
import { LogoVariantProps } from './types';
import { calculateColorForYear, foundingColor, generateFibonacciAccentColorForYear, calculateGoldenRatio } from './logoUtils';

const ThreeLinesLogo: React.FC<LogoVariantProps> = ({ size, year = new Date().getFullYear() }) => {
  // Get current year brand color
  const currentYearColor = calculateColorForYear(year);
  // Get fibonacci accent color info for the specific year
  const fibonacciAccentInfo = generateFibonacciAccentColorForYear(year);
  // Get golden ratio segments for a default width of 60
  const goldenSegments = calculateGoldenRatio(60);
  
  // Calculate the middle line width based on golden ratio
  const middleLineWidth = goldenSegments.segment1;

  return (
    <>
      <defs>
        <linearGradient id={`modernGradient-threelines-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="100%" stopColor={currentYearColor} />
        </linearGradient>
        <linearGradient id={`reverseGradient-threelines-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={currentYearColor} />
          <stop offset="100%" stopColor={foundingColor} />
        </linearGradient>
        <linearGradient id={`middleLineGradient-threelines-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="100%" stopColor={fibonacciAccentInfo.specialColor} />
        </linearGradient>
      </defs>
      <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
      {/* First line - standard gradient from founding color */}
      <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#modernGradient-threelines-${year})`}/>
      {/* Middle line - shorter width based on golden ratio with special accent color */}
      <rect x="15" y="33" width={middleLineWidth} height="3" rx="1.5" fill={`url(#middleLineGradient-threelines-${year})`}/>
      {/* Third line - reverse gradient */}
      <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-threelines-${year})`}/>
    </>
  );
};

export default ThreeLinesLogo;
