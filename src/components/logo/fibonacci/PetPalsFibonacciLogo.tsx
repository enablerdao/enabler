
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
}

const PetPalsFibonacciLogo: React.FC<LogoProps> = ({ style }) => {
  const fibColor = style.fibonacciColor || '#64748B';
  
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fibGradientPetPals" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FED7AA" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#fibGradientPetPals)" />
      
      {/* Fibonacci spiral for pet */}
      <path
        d="M24,14 
           A5,5 0 0,1 29,19 
           A3,3 0 0,1 26,22
           A2,2 0 0,1 24,20
           A1,1 0 0,1 25,19"
        fill="none"
        stroke={fibColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Mirrored spiral for second ear */}
      <path
        d="M24,14 
           A5,5 0 0,0 19,19 
           A3,3 0 0,0 22,22
           A2,2 0 0,0 24,20
           A1,1 0 0,0 23,19"
        fill="none"
        stroke={fibColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Face - using golden ratio */}
      <circle cx="24" cy="27" r="8" fill={fibColor} fillOpacity="0.1" />
      <circle cx="21" cy="25" r="1.5" fill={fibColor} />
      <circle cx="27" cy="25" r="1.5" fill={fibColor} />
      <path
        d="M21,30 C22,32 26,32 27,30"
        stroke={fibColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Paw prints using fibonacci sequence (1,1,2,3,5) */}
      <circle cx="16" cy="34" r="1" fill={fibColor} fillOpacity="0.6" />
      <circle cx="18" cy="35" r="1" fill={fibColor} fillOpacity="0.6" />
      <circle cx="15" cy="36" r="1" fill={fibColor} fillOpacity="0.6" />
      <circle cx="19" cy="37" r="1" fill={fibColor} fillOpacity="0.6" />
      <circle cx="17" cy="38" r="2" fill={fibColor} fillOpacity="0.6" />
      
      <circle cx="32" cy="34" r="1" fill={fibColor} fillOpacity="0.6" />
      <circle cx="30" cy="35" r="1" fill={fibColor} fillOpacity="0.6" />
      <circle cx="33" cy="36" r="1" fill={fibColor} fillOpacity="0.6" />
      <circle cx="29" cy="37" r="1" fill={fibColor} fillOpacity="0.6" />
      <circle cx="31" cy="38" r="2" fill={fibColor} fillOpacity="0.6" />
    </svg>
  );
};

export default PetPalsFibonacciLogo;
