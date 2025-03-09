
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoVariationsProps {
  variant: 'modern' | 'monochrome' | 'gradient' | 'outline' | 'original' | 'consistent' | 'foundingLogo';
  size: 'sm' | 'md' | 'lg';
  year?: number;
}

const LogoVariations: React.FC<LogoVariationsProps> = ({ variant, size, year = new Date().getFullYear() }) => {
  const sizeClasses = {
    sm: 'w-20 h-auto', 
    md: 'w-28 h-auto', 
    lg: 'w-40 h-auto', 
  };

  // Calculate color based on year using the formula
  // R = min(34 + (y - 2022) * 3, 224)
  // G = min(182 + (y - 2022) * 2, 245)
  // B = 255
  const calculateColorForYear = (year: number) => {
    const yearDiff = year - 2022;
    const r = Math.min(34 + yearDiff * 3, 224);
    const g = Math.min(182 + yearDiff * 2, 245);
    const b = 255;
    
    // Convert to HEX
    const toHex = (value: number) => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const yearColor = calculateColorForYear(year);

  if (variant === 'foundingLogo') {
    return (
      <img 
        src="/lovable-uploads/85dd8f76-5a2d-4d47-a7a8-b01b7098b335.png" 
        alt="Enabler 設立時ロゴ" 
        className={cn(sizeClasses[size], 'object-contain')} 
      />
    );
  }

  return (
    <svg 
      viewBox="0 0 200 70" 
      className={cn(sizeClasses[size], 'object-contain')} 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet" 
    >
      {variant === 'modern' && (
        <>
          <defs>
            <linearGradient id={`modernGradient-${variant}-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={yearColor} />
              <stop offset="100%" stopColor={`${yearColor}CC`} />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#modernGradient-${variant}-${year})`}/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill={`url(#modernGradient-${variant}-${year})`}/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#modernGradient-${variant}-${year})`}/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#modernGradient-${variant}-${year})`}>ENABLER</text>
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
      
      {variant === 'gradient' && (
        <>
          <defs>
            <linearGradient id={`yearGradient-${variant}-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={yearColor} />
              <stop offset="100%" stopColor={`${yearColor}99`} />
            </linearGradient>
            <filter id={`glow-${variant}-${year}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#yearGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill={`url(#yearGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#yearGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#yearGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}>ENABLER</text>
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
      
      {variant === 'original' && (
        <>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill="#22B6FF"/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill="#22B6FF"/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill="#22B6FF"/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill="#22B6FF">ENABLER</text>
        </>
      )}
      
      {variant === 'consistent' && (
        <>
          <defs>
            <linearGradient id={`consistentGradient-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={yearColor} />
              <stop offset="50%" stopColor={`${yearColor}DD`} />
              <stop offset="100%" stopColor={yearColor} />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="20" width="170" height="30" rx="4" stroke={`url(#consistentGradient-${year})`} fill="none" strokeWidth="1.5"/>
          <rect x="25" y="35" width="40" height="2" rx="1" fill={yearColor}/>
          <text x="75" y="40" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill={yearColor}>ENABLER</text>
          <circle cx="160" cy="35" r="8" fill={yearColor} fillOpacity="0.2" stroke={yearColor} strokeWidth="1"/>
        </>
      )}
    </svg>
  );
};

export default LogoVariations;
