
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

const Logo: React.FC<LogoProps> = ({
  className,
  size = 'md',
  variant = 'default',
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <svg
        viewBox="0 0 40 40"
        className={cn(sizeClasses[size])}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="enablerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6E59A5" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="url(#enablerGradient)" />
        <path
          d="M12 16H28M12 20H28M12 24H28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 10L24 30"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      {variant === 'default' && (
        <span className="text-xl font-display font-bold tracking-tight">
          Enabler
        </span>
      )}
    </div>
  );
};

export default Logo;
