
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
}

const StayFlowPortfolioFibonacciLogo: React.FC<LogoProps> = ({ style }) => {
  const fibColor = style.fibonacciColor || '#D4AF37';
  
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fibGradientPortfolio" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="36" height="36" rx="10" fill="url(#fibGradientPortfolio)" />
      
      {/* Golden ratio spiral - for luxury property selection concept */}
      <path
        d="M24,12 
           A12,12 0 0,1 36,24 
           A8,8 0 0,1 28,32
           A5,5 0 0,1 23,27
           A3,3 0 0,1 26,24
           A2,2 0 0,1 28,26
           A1,1 0 0,1 27,27"
        fill="none"
        stroke={fibColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Golden ratio rectangles - representing premium properties */}
      <rect x="12" y="12" width="24" height="24" rx="2" fill={fibColor} fillOpacity="0.1" />
      <rect x="12" y="12" width="15" height="15" rx="2" fill={fibColor} fillOpacity="0.15" />
      <rect x="27" y="12" width="9" height="9" rx="2" fill={fibColor} fillOpacity="0.2" />
      <rect x="12" y="27" width="9" height="9" rx="2" fill={fibColor} fillOpacity="0.25" />
      
      {/* Golden ratio accent point */}
      <circle cx="26" cy="24" r="2" fill={fibColor} />
    </svg>
  );
};

export default StayFlowPortfolioFibonacciLogo;
