
import React from 'react';
import { ServiceStyle } from '../types';

interface StayFlowFibonacciLogoProps {
  style: ServiceStyle;
}

const StayFlowFibonacciLogo: React.FC<StayFlowFibonacciLogoProps> = ({ style }) => {
  const fibonacciColor = style.fibonacciColor || '#0284C7';
  
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M50 10 L80 40 L50 70 L20 40 Z"
        fill="none"
        stroke={fibonacciColor}
        strokeWidth="4"
      />
      <circle cx="50" cy="40" r="15" fill="none" stroke={fibonacciColor} strokeWidth="3" />
      <path
        d="M30 30 L70 50"
        fill="none"
        stroke={fibonacciColor}
        strokeWidth="3"
      />
    </svg>
  );
};

export default StayFlowFibonacciLogo;
