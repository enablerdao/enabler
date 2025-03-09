
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientLogoProps {
  size: 'sm' | 'md' | 'lg';
}

const GradientLogo: React.FC<GradientLogoProps> = ({ size }) => {
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
        <linearGradient id="enablerGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <filter id="glow3" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect 
        x="5" 
        y="5" 
        width="30" 
        height="30" 
        rx="15" 
        fill="url(#enablerGradient3)" 
        className="transition-all duration-300"
      />
      <path
        d="M14 20L26 20M20 14L20 26"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#glow3)"
      />
      <circle cx="20" cy="20" r="2" fill="white" />
    </svg>
  );
};

export default GradientLogo;
