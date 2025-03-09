
import React from 'react';
import { cn } from '@/lib/utils';

interface SVGLogoProps {
  size: 'sm' | 'md' | 'lg';
}

const SVGLogo: React.FC<SVGLogoProps> = ({ size }) => {
  const sizeClasses = {
    sm: 'w-24 h-9',
    md: 'w-32 h-12',
    lg: 'w-40 h-14',
  };
  
  return (
    <svg 
      viewBox="0 0 200 70" 
      className={cn(sizeClasses[size])}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2BBCFF" />
          <stop offset="100%" stopColor="#1E90FF" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2BBCFF" />
          <stop offset="100%" stopColor="#1E90FF" />
        </linearGradient>
      </defs>
      <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
      <rect x="15" y="25" width="60" height="3" rx="1.5" fill="url(#lineGradient)"/>
      <rect x="15" y="33" width="40" height="3" rx="1.5" fill="url(#lineGradient)"/>
      <rect x="15" y="41" width="60" height="3" rx="1.5" fill="url(#lineGradient)"/>
      <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill="url(#textGradient)">ENABLER</text>
    </svg>
  );
};

export default SVGLogo;
