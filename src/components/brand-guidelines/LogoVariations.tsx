
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoVariationsProps {
  variant: 'original' | 'modern' | 'consistent' | 'gradient' | 'monochrome' | 'outline';
  size: 'sm' | 'md' | 'lg';
  year?: number;
}

const LogoVariations: React.FC<LogoVariationsProps> = ({ variant, size, year = new Date().getFullYear() }) => {
  const sizeClasses = {
    sm: 'w-20 h-8',
    md: 'w-28 h-10',
    lg: 'w-36 h-12',
  };

  // Determine color based on year
  const getYearColor = (baseYear: number) => {
    const colors = [
      '#22B6FF', // 2022
      '#6E59A5', // 2023
      '#8B5CF6', // 2024
      '#0EA5E9', // 2025
      '#D946EF', // 2026
    ];
    
    const yearDiff = baseYear - 2022;
    const colorIndex = yearDiff >= 0 ? yearDiff % colors.length : 0;
    return colors[colorIndex];
  };

  const yearColor = getYearColor(year);

  return (
    <svg 
      viewBox="0 0 200 70" 
      className={cn(sizeClasses[size])}
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === 'original' && (
        <>
          <defs>
            <linearGradient id="originalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22B6FF" />
              <stop offset="100%" stopColor="#1E90FF" />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill="url(#originalGradient)"/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill="url(#originalGradient)"/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill="url(#originalGradient)"/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill="url(#originalGradient)">ENABLER</text>
        </>
      )}
      
      {variant === 'modern' && (
        <>
          <defs>
            <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={yearColor} />
              <stop offset="100%" stopColor={`${yearColor}CC`} />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill="url(#modernGradient)"/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill="url(#modernGradient)"/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill="url(#modernGradient)"/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill="url(#modernGradient)">ENABLER</text>
        </>
      )}
      
      {variant === 'consistent' && (
        <>
          <defs>
            <linearGradient id="consistentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22B6FF" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill="url(#consistentGradient)"/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill="url(#consistentGradient)"/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill="url(#consistentGradient)"/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill="url(#consistentGradient)">ENABLER</text>
        </>
      )}
      
      {variant === 'gradient' && (
        <>
          <defs>
            <linearGradient id="yearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={yearColor} />
              <stop offset="100%" stopColor={`${yearColor}99`} />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill="url(#yearGradient)" filter="url(#glow)"/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill="url(#yearGradient)" filter="url(#glow)"/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill="url(#yearGradient)" filter="url(#glow)"/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill="url(#yearGradient)" filter="url(#glow)">ENABLER</text>
        </>
      )}
      
      {variant === 'monochrome' && (
        <>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={yearColor}/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill={yearColor}/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill={yearColor}/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={yearColor}>ENABLER</text>
        </>
      )}
      
      {variant === 'outline' && (
        <>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" stroke={yearColor} fill="none" strokeWidth="0.5"/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" stroke={yearColor} fill="none" strokeWidth="0.5"/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" stroke={yearColor} fill="none" strokeWidth="0.5"/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" stroke={yearColor} fill="none" strokeWidth="0.5">ENABLER</text>
        </>
      )}
    </svg>
  );
};

export default LogoVariations;
