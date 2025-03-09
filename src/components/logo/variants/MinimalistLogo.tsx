
import React from 'react';
import { cn } from '@/lib/utils';

interface MinimalistLogoProps {
  size: 'sm' | 'md' | 'lg';
}

const MinimalistLogo: React.FC<MinimalistLogoProps> = ({ size }) => {
  const sizeClasses = {
    sm: 'w-24 h-9',
    md: 'w-32 h-12',
    lg: 'w-40 h-14',
  };
  
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn(sizeClasses[size], 'filter drop-shadow-sm')}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="enablerGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      <rect 
        x="6" 
        y="6" 
        width="28" 
        height="28" 
        rx="6" 
        fill="url(#enablerGradient5)" 
        className="transition-all duration-300"
      />
      <path
        d="M13 20L27 20M13 15L27 15M13 25L27 25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="15" cy="15" r="1.5" fill="white" />
      <circle cx="25" cy="25" r="1.5" fill="white" />
    </svg>
  );
};

export default MinimalistLogo;
