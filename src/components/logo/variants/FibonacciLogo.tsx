
import React from 'react';
import { cn } from '@/lib/utils';

interface FibonacciLogoProps {
  size: 'sm' | 'md' | 'lg';
}

const FibonacciLogo: React.FC<FibonacciLogoProps> = ({ size }) => {
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
        <linearGradient id="enablerGradientFib" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <filter id="glowFib" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Golden spiral based on Fibonacci sequence */}
      <path 
        d="M20,20 
           L20,12 A8,8 0 0,1 28,20 
           L28,23 A5,5 0 0,1 23,28 
           L17,28 A3,3 0 0,1 14,25 
           L14,22 A2,2 0 0,1 16,20 
           L18,20 A1,1 0 0,1 19,21 
           L19,22" 
        fill="none" 
        stroke="url(#enablerGradientFib)" 
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all duration-300"
      />
      {/* Fibonacci rectangles */}
      <rect x="12" y="12" width="8" height="8" fill="url(#enablerGradientFib)" fillOpacity="0.2" rx="1" />
      <rect x="20" y="12" width="8" height="8" fill="url(#enablerGradientFib)" fillOpacity="0.3" rx="1" />
      <rect x="20" y="20" width="8" height="8" fill="url(#enablerGradientFib)" fillOpacity="0.2" rx="1" />
      <rect x="12" y="20" width="8" height="8" fill="url(#enablerGradientFib)" fillOpacity="0.1" rx="1" />
      
      {/* Central dot */}
      <circle cx="20" cy="20" r="2" fill="white" />
      
      {/* Dynamic lines */}
      <path
        d="M13,20 L27,20 M20,13 L20,27"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        filter="url(#glowFib)"
        opacity="0.7"
      />
    </svg>
  );
};

export default FibonacciLogo;
