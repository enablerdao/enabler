
import React from 'react';
import { cn } from '@/lib/utils';

interface MinimalLogoProps {
  size: 'sm' | 'md' | 'lg';
  circleRef: React.RefObject<SVGCircleElement>;
}

const MinimalLogo: React.FC<MinimalLogoProps> = ({ size, circleRef }) => {
  const sizeClasses = {
    sm: 'w-32 h-12', // Increased from w-24 h-9
    md: 'w-40 h-16', // Increased from w-32 h-12
    lg: 'w-52 h-20', // Increased from w-40 h-14
  };
  
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn(sizeClasses[size], 'filter drop-shadow-sm')}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="enablerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <circle 
        ref={circleRef}
        cx="20" 
        cy="20" 
        r="17" 
        fill="url(#enablerGradient)" 
        className="transition-all duration-300"
      />
    </svg>
  );
};

export default MinimalLogo;
