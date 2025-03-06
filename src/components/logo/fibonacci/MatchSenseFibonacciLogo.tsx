
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
}

const MatchSenseFibonacciLogo: React.FC<LogoProps> = ({ style }) => {
  const fibColor = style.fibonacciColor || '#64748B';
  
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fibGradientMatchSense" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="100%" stopColor="#D8B4FE" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#fibGradientMatchSense)" />
      
      {/* Golden spiral as connection lines */}
      <path
        d="M18,12 
           A13,13 0 0,1 31,25 
           A8,8 0 0,1 23,33
           A5,5 0 0,1 18,28
           A3,3 0 0,1 21,25
           A2,2 0 0,1 23,27
           A1,1 0 0,1 22,28"
        fill="none"
        stroke={fibColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 1"
      />
      
      {/* Connection nodes at golden ratio points */}
      <circle cx="18" cy="12" r="3" fill={fibColor} fillOpacity="0.2" />
      <circle cx="31" cy="25" r="3" fill={fibColor} fillOpacity="0.3" />
      <circle cx="23" cy="33" r="3" fill={fibColor} fillOpacity="0.4" />
      <circle cx="18" cy="28" r="3" fill={fibColor} fillOpacity="0.3" />
      <circle cx="21" cy="25" r="3" fill={fibColor} fillOpacity="0.2" />
      
      {/* Central pulse */}
      <circle cx="24" cy="24" r="5" fill={fibColor} fillOpacity="0.15" />
      <circle cx="24" cy="24" r="2" fill={fibColor} />
      
      {/* Connecting lines in golden ratio */}
      <path
        d="M18,12 L31,25"
        stroke={fibColor}
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <path
        d="M31,25 L23,33"
        stroke={fibColor}
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <path
        d="M23,33 L18,28"
        stroke={fibColor}
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <path
        d="M18,28 L21,25"
        stroke={fibColor}
        strokeWidth="1"
        strokeOpacity="0.5"
      />
    </svg>
  );
};

export default MatchSenseFibonacciLogo;
