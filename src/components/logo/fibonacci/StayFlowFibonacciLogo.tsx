
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
}

const StayFlowFibonacciLogo: React.FC<LogoProps> = ({ style }) => {
  const fibColor = style.fibonacciColor || '#0284C7';
  
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fibGradientStayFlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#fibGradientStayFlow)" />
      
      {/* Fibonacci spiral as home outline */}
      <path
        d="M24,14 
           A10,10 0 0,1 34,24 
           A6,6 0 0,1 28,30
           A4,4 0 0,1 24,26
           A2,2 0 0,1 26,24"
        fill="none"
        stroke={fibColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Golden ratio house structure */}
      <path 
        d="M18,34 L18,24 L30,24 L30,34 L18,34 Z" 
        fill="none" 
        stroke={fibColor} 
        strokeWidth="1.5" 
      />
      <path 
        d="M15,24 L24,16 L33,24" 
        fill="none" 
        stroke={fibColor} 
        strokeWidth="1.5" 
      />
      
      {/* Door at golden ratio point */}
      <rect x="22" y="28" width="4" height="6" rx="1" stroke={fibColor} strokeWidth="1" />
      
      {/* Windows following golden ratio */}
      <rect x="20" y="20" width="3" height="3" rx="1" fill={fibColor} fillOpacity="0.3" />
      <rect x="25" y="20" width="3" height="3" rx="1" fill={fibColor} fillOpacity="0.3" />
      
      {/* Flow water element */}
      <path 
        d="M14,36 C16,38 20,34 24,36 C28,38 32,34 34,36" 
        stroke={fibColor} 
        strokeWidth="1" 
        strokeLinecap="round"
        strokeDasharray="1 1" 
      />
    </svg>
  );
};

export default StayFlowFibonacciLogo;
