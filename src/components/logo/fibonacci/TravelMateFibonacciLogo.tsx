
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
}

const TravelMateFibonacciLogo: React.FC<LogoProps> = ({ style }) => {
  const fibColor = style.fibonacciColor || '#059669';
  
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fibGradientTravelMate" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" fill="url(#fibGradientTravelMate)" />
      
      {/* Fibonacci spiral as a travel journey path */}
      <path
        d="M24,12 
           A8,8 0 0,1 32,20 
           A5,5 0 0,1 27,25
           A3,3 0 0,1 24,22
           A2,2 0 0,1 26,20
           A1,1 0 0,1 27,21"
        fill="none"
        stroke={fibColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Location pins at golden ratio points along the journey */}
      <circle cx="24" cy="12" r="1.5" fill={fibColor} />
      <circle cx="32" cy="20" r="1.5" fill={fibColor} />
      <circle cx="27" cy="25" r="1.5" fill={fibColor} />
      <circle cx="24" cy="22" r="1.5" fill={fibColor} />
      
      {/* Directional compass using golden ratio */}
      <path d="M16,24 L32,24" stroke={fibColor} strokeWidth="1" />
      <path d="M24,16 L24,32" stroke={fibColor} strokeWidth="1" />
      
      {/* Golden circle - central location */}
      <circle cx="24" cy="24" r="3" fill={fibColor} fillOpacity="0.2" />
      <circle cx="24" cy="24" r="1" fill={fibColor} />
    </svg>
  );
};

export default TravelMateFibonacciLogo;
