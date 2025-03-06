
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
}

const EnablissFibonacciLogo: React.FC<LogoProps> = ({ style }) => {
  const fibColor = style.fibonacciColor || '#64748B';
  
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fibGradientEnabliss" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#7DD3FC" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="36" height="36" rx="8" fill="url(#fibGradientEnabliss)" />
      
      {/* Fibonacci spiral */}
      <path
        d="M24,12 A12,12 0 0,1 36,24 A12,12 0 0,1 24,36 A12,12 0 0,1 12,24 A12,12 0 0,1 24,12"
        fill="none"
        stroke={fibColor}
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M24,17 A7,7 0 0,1 31,24 A7,7 0 0,1 24,31 A7,7 0 0,1 17,24 A7,7 0 0,1 24,17"
        fill="none"
        stroke={fibColor}
        strokeWidth="1"
        opacity="0.7"
      />
      <path
        d="M24,20 A4,4 0 0,1 28,24 A4,4 0 0,1 24,28 A4,4 0 0,1 20,24 A4,4 0 0,1 24,20"
        fill="none"
        stroke={fibColor}
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M24,22 A2,2 0 0,1 26,24 A2,2 0 0,1 24,26 A2,2 0 0,1 22,24 A2,2 0 0,1 24,22"
        fill="none"
        stroke={fibColor}
        strokeWidth="1"
        opacity="0.9"
      />
      
      {/* Golden ratio rectangles */}
      <rect x="14" y="14" width="20" height="12" rx="2" fill={fibColor} fillOpacity="0.1" />
      <rect x="14" y="26" width="12" height="8" rx="2" fill={fibColor} fillOpacity="0.15" />
      <rect x="26" y="26" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.2" />
      
      {/* Central dot */}
      <circle cx="24" cy="24" r="2" fill={fibColor} fillOpacity="0.8" />
    </svg>
  );
};

export default EnablissFibonacciLogo;
