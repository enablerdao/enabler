
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
}

const TasteFundFibonacciLogo: React.FC<LogoProps> = ({ style }) => {
  const fibColor = style.fibonacciColor || '#64748B';
  
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fibGradientTasteFund" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BBF7D0" />
          <stop offset="100%" stopColor="#86EFAC" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#fibGradientTasteFund)" />
      
      {/* Fibonacci spiral as food/plant growth */}
      <path
        d="M24,36 
           C24,30 28,26 34,26
           C34,22 31,19 27,19
           C27,17 28,15 30,15
           C30,13 29,12 27,12"
        fill="none"
        stroke={fibColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Golden ratio leaf patterns */}
      <path
        d="M24,36 C22,33 24,29 27,28"
        fill="none"
        stroke={fibColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24,36 C26,33 24,29 21,28"
        fill="none"
        stroke={fibColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Fibonacci sequence sized circles for fruit/ingredients */}
      <circle cx="27" cy="19" r="1" fill={fibColor} />
      <circle cx="30" cy="15" r="1.5" fill={fibColor} />
      <circle cx="34" cy="26" r="2.5" fill={fibColor} />
      <circle cx="21" cy="28" r="1.5" fill={fibColor} />
      <circle cx="27" cy="28" r="1.5" fill={fibColor} />
      
      {/* Golden ratio plate/base */}
      <path
        d="M17,36 L31,36"
        stroke={fibColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15,39 L33,39"
        stroke={fibColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TasteFundFibonacciLogo;
