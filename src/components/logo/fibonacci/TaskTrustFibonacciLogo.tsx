
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
}

const TaskTrustFibonacciLogo: React.FC<LogoProps> = ({ style }) => {
  const fibColor = style.fibonacciColor || '#64748B';
  
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fibGradientTaskTrust" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="36" height="36" rx="6" fill="url(#fibGradientTaskTrust)" />
      
      {/* Fibonacci grid layout - each square follows the sequence */}
      <rect x="12" y="12" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.1" />
      <rect x="12" y="20" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.15" />
      <rect x="12" y="28" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.1" />
      <rect x="20" y="12" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.2" />
      <rect x="20" y="20" width="8" height="16" rx="2" fill={fibColor} fillOpacity="0.25" />
      <rect x="28" y="12" width="8" height="24" rx="2" fill={fibColor} fillOpacity="0.15" />
      
      {/* Checkmarks using golden ratio */}
      <path
        d="M14,16 L16,18 L20,14"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14,24 L16,26 L20,22"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14,32 L16,34 L20,30"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22,16 L24,18 L28,14"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30,16 L32,18 L36,14"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Fibonacci spiral overlay */}
      <path
        d="M24,24 
           A8,8 0 0,1 32,32
           A5,5 0 0,1 27,37
           A3,3 0 0,1 24,34
           A2,2 0 0,1 26,32
           A1,1 0 0,1 27,33"
        fill="none"
        stroke={fibColor}
        strokeWidth="1"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TaskTrustFibonacciLogo;
