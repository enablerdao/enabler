
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
    
    // Using the exponential formula
    const r = Math.round(34 + 190 * (1 - Math.pow(0.95, yearDiff)));
    const g = Math.round(182 + 63 * (1 - Math.pow(0.95, yearDiff)));
    const b = 255;
    
    // Convert to HEX
    const toHex = (value: number) => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Generate Fibonacci sequence-based accent color
  const generateFibonacciAccentColor = () => {
    // Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34...
    const fibSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34];
    
    // Use current month to select from fibonacci sequence
    const currentMonth = new Date().getMonth(); // 0-11
    const fibIndex = currentMonth % fibSequence.length;
    const fibValue = fibSequence[fibIndex];
    
    // Generate color based on fibonacci value
    // Hue based on golden ratio (approx 137.5 degrees)
    const hue = (fibValue * 137.5) % 360;
    const saturation = 70 + (fibValue % 3) * 10; // 70-90
    const lightness = 45 + (fibValue % 4) * 5; // 45-60
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  // Get founding year color (2022)
  const foundingColor = calculateColorForYear(2022);
  // Get current year color
  const currentYearColor = calculateColorForYear(year);
  // Get fibonacci accent color
  const fibonacciAccentColor = generateFibonacciAccentColor();

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
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          {/* First line - standard gradient */}
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#modernGradient-${variant}-${year})`}/>
          {/* Second line - fibonacci accent color */}
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill={fibonacciAccentColor}/>
          {/* Third line - reverse gradient */}
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-${variant}-${year})`}/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#modernGradient-${variant}-${year})`}>ENABLER</text>
        </>
      )}
      
      {variant === 'monochrome' && (
        <>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={currentYearColor}/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill={fibonacciAccentColor}/>
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
            <filter id={`glow-${variant}-${year}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#yearGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill={fibonacciAccentColor} filter={`url(#glow-${variant}-${year})`}/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#yearGradient-${variant}-${year})`} filter={`url(#glow-${variant}-${year})`}>ENABLER</text>
        </>
      )}
      
      {variant === 'outline' && (
        <>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" stroke={currentYearColor} fill="none" strokeWidth="0.5"/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" stroke={fibonacciAccentColor} fill="none" strokeWidth="0.5"/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" stroke={currentYearColor} fill="none" strokeWidth="0.5"/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" stroke={currentYearColor} fill="none" strokeWidth="0.5">ENABLER</text>
        </>
      )}
      
      {variant === 'original' && (
        <>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill="#22B6FF"/>
          <rect x="15" y="33" width="40" height="3" rx="1.5" fill={fibonacciAccentColor}/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill="#22B6FF"/>
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill="#22B6FF">ENABLER</text>
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
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="20" width="170" height="30" rx="4" stroke={`url(#consistentGradient-${year})`} fill="none" strokeWidth="1.5"/>
          <rect x="25" y="30" width="40" height="2" rx="1" fill={fibonacciAccentColor}/>
          <text x="75" y="40" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill={currentYearColor}>ENABLER</text>
          <circle cx="160" cy="35" r="8" fill={currentYearColor} fillOpacity="0.2" stroke={currentYearColor} strokeWidth="1"/>
        </>
      )}
    </svg>
  );
};

export default LogoVariations;
