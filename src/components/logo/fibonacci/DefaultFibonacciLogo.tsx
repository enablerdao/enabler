
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
}

const DefaultFibonacciLogo: React.FC<LogoProps> = ({ style }) => {
  const fibColor = style.fibonacciColor || '#64748B';
  
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fibGradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#fibGradientDefault)" />
      
      {/* Fibonacci spiral */}
      <path
        d="M20,14 
           A10,10 0 0,1 30,24
           A6,6 0 0,1 24,30
           A4,4 0 0,1 20,26
           A2,2 0 0,1 22,24"
        fill="none"
        stroke={fibColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Golden ratio grid */}
      <rect x="14" y="14" width="20" height="20" rx="2" fill={fibColor} fillOpacity="0.05" />
      <rect x="14" y="14" width="12" height="12" rx="2" fill={fibColor} fillOpacity="0.1" />
      <rect x="26" y="14" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.15" />
      <rect x="14" y="26" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.1" />
      
      {/* Golden circles */}
      <circle cx="24" cy="24" r="2" fill={fibColor} />
    </svg>
  );
};

export default DefaultFibonacciLogo;
