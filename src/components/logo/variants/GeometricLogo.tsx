
import React from 'react';
import { cn } from '@/lib/utils';

interface GeometricLogoProps {
  size: 'sm' | 'md' | 'lg';
}

const GeometricLogo: React.FC<GeometricLogoProps> = ({ size }) => {
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
        <linearGradient id="enablerGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
        <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <polygon 
        points="20,4 36,20 20,36 4,20" 
        fill="url(#enablerGradient2)" 
        className="transition-all duration-300"
      />
      <circle cx="20" cy="20" r="8" fill="white" fillOpacity="0.2" />
      <path
        d="M14 20L26 20M16 16L24 16M16 24L24 24"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow2)"
      />
    </svg>
  );
};

export default GeometricLogo;
