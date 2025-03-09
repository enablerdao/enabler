
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
    md: 'w-32 h-auto', 
    lg: 'w-56 h-auto', 
  };

  // Calculate color based on year using the formula
  // R = round(34 + 190 × (1 - 0.95^(y - 2022)))
  // G = round(182 + 63 × (1 - 0.95^(y - 2022)))
  // B = 255
  const calculateColorForYear = (year: number) => {
    const yearDiff = year - 2022;
    
    // Using the exponential formula with a capped maximum to prevent overflow
    // This ensures the formula works for years well beyond 2041
    const r = Math.min(224, Math.round(34 + 190 * (1 - Math.pow(0.95, yearDiff))));
    const g = Math.min(245, Math.round(182 + 63 * (1 - Math.pow(0.95, yearDiff))));
    const b = 255;
    
    // Convert to HEX
    const toHex = (value: number) => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Generate Fibonacci sequence-based accent color for each year
  const generateFibonacciAccentColorForYear = (year: number) => {
    // Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34...
    // Calculate Fibonacci number for the year offset (year - 2022)
    const yearOffset = year - 2022;
    
    // For very large year differences, calculate Fibonacci number
    // using a more efficient method to prevent stack overflow
    let fibValue = 1;
    
    if (yearOffset <= 0) {
      fibValue = 1;
    } else if (yearOffset === 1) {
      fibValue = 1;
    } else {
      // Use iterative approach for large numbers
      let a = 1, b = 1;
      for (let i = 2; i <= yearOffset; i++) {
        const next = a + b;
        a = b;
        b = next;
        fibValue = b;
        
        // Cap the Fibonacci value at a reasonable number to prevent overflow
        if (fibValue > 1000) {
          fibValue = 1000; // Cap the max segments to 1000
          break;
        }
      }
    }
    
    return {
      // Special color - a vivid purple
      specialColor: "#8B5CF6",
      fibNumber: fibValue
    };
  };

  // Get founding year color (2022)
  const foundingColor = '#22B6FF'; // Fixed founding color
  // Get current year color
  const currentYearColor = calculateColorForYear(year);
  // Get fibonacci accent color info for the specific year
  const fibonacciAccentInfo = generateFibonacciAccentColorForYear(year);

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
              <stop offset="0%" stopColor={foundingColor} />
              <stop offset="100%" stopColor={currentYearColor} />
            </linearGradient>
            <linearGradient id={`reverseGradient-${variant}-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={currentYearColor} />
              <stop offset="100%" stopColor={foundingColor} />
            </linearGradient>
            <linearGradient id={`middleLineGradient-${variant}-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={foundingColor} />
              <stop offset="100%" stopColor={fibonacciAccentInfo.specialColor} />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          {/* First line - standard gradient from founding color */}
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#modernGradient-${variant}-${year})`}/>
          {/* Middle line - gradient from founding color to accent color */}
          <rect x="15" y="33" width="60" height="3" rx="1.5" fill={`url(#middleLineGradient-${variant}-${year})`}/>
          {/* Third line - reverse gradient */}
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-${variant}-${year})`}/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#modernGradient-${variant}-${year})`}>ENABLER</text>
        </>
      )}
      
      {variant === 'monochrome' && (
        <>
          <defs>
            <linearGradient id={`middleLineGradient-mono-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={foundingColor} />
              <stop offset="100%" stopColor={fibonacciAccentInfo.specialColor} />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={currentYearColor}/>
          <rect x="15" y="33" width="60" height="3" rx="1.5" fill={`url(#middleLineGradient-mono-${year})`}/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill={currentYearColor}/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={currentYearColor}>ENABLER</text>
        </>
      )}
      
      {variant === 'gradient' && (
        <>
          <defs>
            <linearGradient id={`yearGradient-${variant}-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={foundingColor} />
              <stop offset="100%" stopColor={currentYearColor} />
            </linearGradient>
            <linearGradient id={`reverseGradient-${variant}-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={currentYearColor} />
              <stop offset="100%" stopColor={foundingColor} />
            </linearGradient>
            <linearGradient id={`middleLineGradient-${variant}-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={foundingColor} />
              <stop offset="100%" stopColor={fibonacciAccentInfo.specialColor} />
            </linearGradient>
            <filter id={`glow-${variant}-${year}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#yearGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}/>
          <rect x="15" y="33" width="60" height="3" rx="1.5" fill={`url(#middleLineGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#yearGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}>ENABLER</text>
        </>
      )}
      
      {variant === 'outline' && (
        <>
          <defs>
            <linearGradient id={`middleLineGradient-outline-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={foundingColor} />
              <stop offset="100%" stopColor={fibonacciAccentInfo.specialColor} />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" stroke={currentYearColor} fill="none" strokeWidth="0.5"/>
          <rect x="15" y="33" width="60" height="3" rx="1.5" stroke={`url(#middleLineGradient-outline-${year})`} fill="none" strokeWidth="0.5"/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" stroke={currentYearColor} fill="none" strokeWidth="0.5"/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" stroke={currentYearColor} fill="none" strokeWidth="0.5">ENABLER</text>
        </>
      )}
      
      {variant === 'original' && (
        <>
          <defs>
            <linearGradient id={`middleLineGradient-original-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={foundingColor} />
              <stop offset="100%" stopColor={foundingColor} />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={foundingColor}/>
          <rect x="15" y="33" width="60" height="3" rx="1.5" fill={`url(#middleLineGradient-original-${year})`}/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill={foundingColor}/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={foundingColor}>ENABLER</text>
        </>
      )}
      
      {variant === 'consistent' && (
        <>
          <defs>
            <linearGradient id={`consistentGradient-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={foundingColor} />
              <stop offset="50%" stopColor={currentYearColor} />
              <stop offset="100%" stopColor={foundingColor} />
            </linearGradient>
            <linearGradient id={`reverseGradient-consistent-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={currentYearColor} />
              <stop offset="50%" stopColor={foundingColor} />
              <stop offset="100%" stopColor={currentYearColor} />
            </linearGradient>
            <linearGradient id={`middleLineGradient-consistent-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={foundingColor} />
              <stop offset="100%" stopColor={fibonacciAccentInfo.specialColor} />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="20" width="170" height="30" rx="4" stroke={`url(#consistentGradient-${year})`} fill="none" strokeWidth="1.5"/>
          <rect x="25" y="30" width="40" height="2" rx="1" fill={`url(#middleLineGradient-consistent-${year})`} />
          <text x="75" y="40" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill={currentYearColor}>ENABLER</text>
          <circle cx="160" cy="35" r="8" fill={currentYearColor} fillOpacity="0.2" stroke={currentYearColor} strokeWidth="1"/>
        </>
      )}
    </svg>
  );
};

export default LogoVariations;
