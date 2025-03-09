
import React from 'react';
import { LogoVariantProps } from './types';
import { calculateColorForYear, foundingColor, generateFibonacciAccentColorForYear, calculateGoldenRatio } from './logoUtils';

const GradientLogo: React.FC<LogoVariantProps> = ({ size, year = new Date().getFullYear() }) => {
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
        <linearGradient id={`yearGradient-gradient-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="100%" stopColor={currentYearColor} />
        </linearGradient>
        <linearGradient id={`reverseGradient-gradient-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={currentYearColor} />
          <stop offset="100%" stopColor={foundingColor} />
        </linearGradient>
        <linearGradient id={`middleLineGradient-gradient-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset={`${(goldenSegments.segment1 / 60) * 100}%`} stopColor={fibonacciAccentInfo.specialColor} />
          <stop offset="100%" stopColor={currentYearColor} />
        </linearGradient>
        <filter id={`glow-gradient-${year}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
      <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#yearGradient-gradient-${year})`} filter={`url(#glow-gradient-${year})`}/>
      <rect x="15" y="33" width={middleLineWidth} height="3" rx="1.5" fill={`url(#middleLineGradient-gradient-${year})`} filter={`url(#glow-gradient-${year})`}/>
      <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-gradient-${year})`} filter={`url(#glow-gradient-${year})`}/>
      <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#yearGradient-gradient-${year})`} filter={`url(#glow-gradient-${year})`}>ENABLER</text>
    </>
  );
};

export default GradientLogo;
