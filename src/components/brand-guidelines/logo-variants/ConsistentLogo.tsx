
import React from 'react';
import { LogoVariantProps } from './types';
import { calculateColorForYear, foundingColor, generateFibonacciAccentColorForYear, calculateGoldenRatio } from './logoUtils';

const ConsistentLogo: React.FC<LogoVariantProps> = ({ size, year = new Date().getFullYear() }) => {
  // Get current year color
  const currentYearColor = calculateColorForYear(year);
  // Get fibonacci accent color info for the specific year
  const fibonacciAccentInfo = generateFibonacciAccentColorForYear(year);
  // Get golden ratio segments for a default width of 60
  const goldenSegments = calculateGoldenRatio(60);
  
  // Calculate the middle line width based on golden ratio
  // For this variant we use a different approach with a central element
  const middleLineWidth = goldenSegments.segment1 * 0.667; // Making it slightly shorter for this variant

  return (
    <>
      <defs>
        <linearGradient id={`consistentGradient-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="50%" stopColor={currentYearColor} />
          <stop offset="100%" stopColor={foundingColor} />
        </linearGradient>
        <linearGradient id={`reverseGradient-consistent-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={currentYearColor} />
          <stop offset="50%" stopColor={foundingColor} />
          <stop offset="100%" stopColor={currentYearColor} />
        </linearGradient>
        <linearGradient id={`middleLineGradient-consistent-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset={`${(goldenSegments.segment1 / 60) * 100}%`} stopColor={fibonacciAccentInfo.specialColor} />
          <stop offset="100%" stopColor={currentYearColor} />
        </linearGradient>
      </defs>
      <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
      <rect x="15" y="20" width="170" height="30" rx="4" stroke={`url(#consistentGradient-${year})`} fill="none" strokeWidth="1.5"/>
      <rect x="25" y="30" width={middleLineWidth} height="2" rx="1" fill={`url(#middleLineGradient-consistent-${year})`} />
      <text x="75" y="40" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill={currentYearColor}>ENABLER</text>
      <circle cx="160" cy="35" r="8" fill={currentYearColor} fillOpacity="0.2" stroke={currentYearColor} strokeWidth="1"/>
    </>
  );
};

export default ConsistentLogo;
