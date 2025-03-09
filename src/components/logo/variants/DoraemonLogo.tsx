
import React from 'react';
import { cn } from '@/lib/utils';

interface DoraemonLogoProps {
  size: 'sm' | 'md' | 'lg';
}

const DoraemonLogo: React.FC<DoraemonLogoProps> = ({ size }) => {
  const sizeClasses = {
    sm: 'w-24 h-9',
    md: 'w-32 h-12',
    lg: 'w-40 h-14',
  };
  
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn(sizeClasses[size], 'filter drop-shadow-md')}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="doraemonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <filter id="glowDoraemon" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Head */}
      <circle cx="20" cy="20" r="15" fill="url(#doraemonGradient)" />
      
      {/* Face - white area */}
      <path 
        d="M10,20 C10,14 14,9 20,9 C26,9 30,14 30,20 C30,26 26,31 20,31 C14,31 10,26 10,20" 
        fill="white" 
        fillOpacity="0.85"
      />
      
      {/* Eyes */}
      <ellipse cx="16" cy="17" rx="2.5" ry="3" fill="white" stroke="#3B82F6" strokeWidth="0.5" />
      <ellipse cx="24" cy="17" rx="2.5" ry="3" fill="white" stroke="#3B82F6" strokeWidth="0.5" />
      <circle cx="16" cy="18" r="1" fill="#3B82F6" />
      <circle cx="24" cy="18" r="1" fill="#3B82F6" />
      
      {/* Nose */}
      <circle cx="20" cy="21" r="2" fill="#ff6b6b" />
      
      {/* Mouth / Fibonacci spiral inspired */}
      <path 
        d="M14,24 C16,28 24,28 26,24" 
        fill="none" 
        stroke="#3B82F6" 
        strokeWidth="1"
        strokeLinecap="round"
      />
      
      {/* Whiskers with Fibonacci proportions */}
      <path 
        d="M8,20 L14,21 M8,23 L14,23 M8,26 L14,25" 
        stroke="#3B82F6" 
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path 
        d="M32,20 L26,21 M32,23 L26,23 M32,26 L26,25" 
        stroke="#3B82F6" 
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      
      {/* Bell / Fibonacci connection */}
      <circle cx="20" cy="25" r="1.5" fill="#FDBA74" stroke="#EA580C" strokeWidth="0.3" />
      <path 
        d="M18.5,25 L21.5,25" 
        stroke="#EA580C" 
        strokeWidth="0.3"
      />
    </svg>
  );
};

export default DoraemonLogo;
