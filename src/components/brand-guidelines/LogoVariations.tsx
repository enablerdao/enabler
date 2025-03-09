
import React from 'react';
import { cn } from '@/lib/utils';
import { LogoVariationsProps } from './logo-variants/types';
import ModernLogo from './logo-variants/ModernLogo';
import MonochromeLogo from './logo-variants/MonochromeLogo';
import GradientLogo from './logo-variants/GradientLogo';
import OutlineLogo from './logo-variants/OutlineLogo';
import OriginalLogo from './logo-variants/OriginalLogo';
import ConsistentLogo from './logo-variants/ConsistentLogo';
import FoundingLogo from './logo-variants/FoundingLogo';
import ThreeLinesLogo from './logo-variants/ThreeLinesLogo';

const LogoVariations: React.FC<LogoVariationsProps> = ({ variant, size, year = new Date().getFullYear() }) => {
  const sizeClasses = {
    sm: 'w-20 h-auto', 
    md: 'w-32 h-auto', 
    lg: 'w-56 h-auto', 
  };

  if (variant === 'foundingLogo') {
    return (
      <FoundingLogo size={size} year={year} />
    );
  }

  return (
    <svg 
      viewBox="0 0 200 70" 
      className={cn(sizeClasses[size], 'object-contain')} 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet" 
    >
      {variant === 'modern' && <ModernLogo size={size} year={year} />}
      {variant === 'monochrome' && <MonochromeLogo size={size} year={year} />}
      {variant === 'gradient' && <GradientLogo size={size} year={year} />}
      {variant === 'outline' && <OutlineLogo size={size} year={year} />}
      {variant === 'original' && <OriginalLogo size={size} year={year} />}
      {variant === 'consistent' && <ConsistentLogo size={size} year={year} />}
      {variant === 'threeLines' && <ThreeLinesLogo size={size} year={year} />}
    </svg>
  );
};

export default LogoVariations;
