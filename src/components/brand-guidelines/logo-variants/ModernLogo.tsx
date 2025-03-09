
import React from 'react';
import { LogoVariantProps } from './types';
import { calculateColorForYear, foundingColor, generateFibonacciAccentColorForYear, calculateGoldenRatio } from './logoUtils';

const ModernLogo: React.FC<LogoVariantProps> = ({ size, year = new Date().getFullYear() }) => {
  // Get current year color
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
        <linearGradient id={`modernGradient-modern-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="100%" stopColor={currentYearColor} />
        </linearGradient>
        <linearGradient id={`reverseGradient-modern-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={currentYearColor} />
          <stop offset="100%" stopColor={foundingColor} />
        </linearGradient>
        <linearGradient id={`middleLineGradient-modern-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="100%" stopColor={fibonacciAccentInfo.specialColor} />
        </linearGradient>
      </defs>
      <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
      {/* First line - standard gradient from founding color */}
      <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#modernGradient-modern-${year})`}/>
      {/* Middle line - shorter width based on golden ratio */}
      <rect x="15" y="33" width={middleLineWidth} height="3" rx="1.5" fill={`url(#middleLineGradient-modern-${year})`}/>
      {/* Third line - reverse gradient */}
      <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-modern-${year})`}/>
      <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#modernGradient-modern-${year})`}>ENABLER</text>
    </>
  );
};

export default ModernLogo;
