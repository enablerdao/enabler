
import React from 'react';
import { cn } from '@/lib/utils';

interface DefaultLogoProps {
  size: 'sm' | 'md' | 'lg';
  pathRef1: React.RefObject<SVGPathElement>;
  pathRef2: React.RefObject<SVGPathElement>;
  pathRef3: React.RefObject<SVGPathElement>;
  circleRef: React.RefObject<SVGCircleElement>;
}

const DefaultLogo: React.FC<DefaultLogoProps> = ({ 
  size, 
  pathRef1,
  pathRef2,
  pathRef3,
  circleRef,
}) => {
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
      <path
        ref={pathRef1}
        d="M12 18L24 18M14 22L22 22M16 26L20 26"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      <path
        ref={pathRef2}
        d="M20 12L20 28"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      <path
        ref={pathRef3}
        d="M20 12 A1.5 1.5 0 1 0 20 9 A1.5 1.5 0 1 0 20 12 Z"
        fill="white"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default DefaultLogo;
