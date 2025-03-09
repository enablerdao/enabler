
import React from 'react';
import { LogoVariantProps } from './types';
import { foundingColor, calculateGoldenRatio } from './logoUtils';

const OriginalLogo: React.FC<LogoVariantProps> = ({ size, year = new Date().getFullYear() }) => {
  // Get golden ratio segments for a default width of 60
  const goldenSegments = calculateGoldenRatio(60);
  
  // Calculate the middle line width based on golden ratio
  const middleLineWidth = goldenSegments.segment1;

  return (
    <>
      <defs>
        <linearGradient id={`middleLineGradient-original-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset={`${(goldenSegments.segment1 / 60) * 100}%`} stopColor={foundingColor} />
          <stop offset="100%" stopColor={foundingColor} />
        </linearGradient>
      </defs>
      <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
      <rect x="15" y="25" width="60" height="3" rx="1.5" fill={foundingColor}/>
      <rect x="15" y="33" width={middleLineWidth} height="3" rx="1.5" fill={`url(#middleLineGradient-original-${year})`}/>
      <rect x="15" y="41" width="60" height="3" rx="1.5" fill={foundingColor}/>
      <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={foundingColor}>ENABLER</text>
    </>
  );
};

export default OriginalLogo;
