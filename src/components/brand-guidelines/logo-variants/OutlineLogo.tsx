
import React from 'react';
import { LogoVariantProps } from './types';
import { calculateColorForYear, foundingColor, generateFibonacciAccentColorForYear, calculateGoldenRatio } from './logoUtils';

const OutlineLogo: React.FC<LogoVariantProps> = ({ size, year = new Date().getFullYear() }) => {
  // Get current year color
  const currentYearColor = calculateColorForYear(year);
  // Get fibonacci accent color info for the specific year
  const fibonacciAccentInfo = generateFibonacciAccentColorForYear(year);
  // Get golden ratio segments for a default width of 60
  const goldenSegments = calculateGoldenRatio(60);

  return (
    <>
      <defs>
        <linearGradient id={`middleLineGradient-outline-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset={`${(goldenSegments.segment1 / 60) * 100}%`} stopColor={fibonacciAccentInfo.specialColor} />
          <stop offset="100%" stopColor={currentYearColor} />
        </linearGradient>
      </defs>
      <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
      <rect x="15" y="25" width="60" height="3" rx="1.5" stroke={currentYearColor} fill="none" strokeWidth="0.5"/>
      <rect x="15" y="33" width="60" height="3" rx="1.5" stroke={`url(#middleLineGradient-outline-${year})`} fill="none" strokeWidth="0.5"/>
      <rect x="15" y="41" width="60" height="3" rx="1.5" stroke={currentYearColor} fill="none" strokeWidth="0.5"/>
      <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" stroke={currentYearColor} fill="none" strokeWidth="0.5">ENABLER</text>
    </>
  );
};

export default OutlineLogo;
