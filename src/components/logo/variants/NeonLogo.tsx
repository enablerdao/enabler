
import React from 'react';
import { cn } from '@/lib/utils';

interface NeonLogoProps {
  size: 'sm' | 'md' | 'lg';
}

const NeonLogo: React.FC<NeonLogoProps> = ({ size }) => {
  const sizeClasses = {
    sm: 'w-24 h-9',
    md: 'w-32 h-12',
    lg: 'w-40 h-14',
  };
  
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn(sizeClasses[size], 'filter drop-shadow-lg')}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="enablerGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <filter id="glow4" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <circle 
        cx="20" 
        cy="20" 
        r="15" 
        fill="transparent" 
        stroke="url(#enablerGradient4)"
        strokeWidth="2"
        className="transition-all duration-300"
      />
      <path
        d="M15 15L25 25M15 25L25 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#glow4)"
      />
      <circle cx="20" cy="20" r="3" fill="url(#enablerGradient4)" filter="url(#glow4)" />
    </svg>
  );
};

export default NeonLogo;
