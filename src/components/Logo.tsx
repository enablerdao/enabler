import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'geometric' | 'gradient' | 'neon' | 'minimalist' | 'doraemon' | 'fibonacci';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className,
  size = 'md',
  variant = 'default',
  animated = true,
}) => {
  const logoRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const pathRef3 = useRef<SVGPathElement>(null);
  
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };
  
  useEffect(() => {
    if (!animated) return;
    
    let animationFrame: number;
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      
      if (circleRef.current) {
        const scale = 1 + Math.sin(elapsed * 1.5) * 0.02;
        circleRef.current.setAttribute('r', `${17 * scale}`);
      }
      
      if (pathRef1.current && pathRef2.current) {
        const offset = Math.sin(elapsed * 2) * 0.6;
        
        pathRef1.current.setAttribute(
          'd',
          `M12 18L${24 + offset} 18M14 22L${22 + offset * 0.7} 22M16 26L${20 + offset * 0.4} 26`
        );
        
        const pulseWidth = 2 + Math.sin(elapsed * 3) * 0.5;
        pathRef2.current.setAttribute('stroke-width', `${pulseWidth}`);
      }
      
      if (pathRef3.current) {
        const opacity = 0.7 + Math.sin(elapsed * 4) * 0.3;
        pathRef3.current.setAttribute('opacity', `${opacity}`);
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [animated]);

  // Logo variants
  const renderLogo = () => {
    switch (variant) {
      case 'fibonacci':
        return (
          <svg
            viewBox="0 0 40 40"
            className={cn(sizeClasses[size], 'filter drop-shadow-sm')}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="enablerGradientFib" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
              <filter id="glowFib" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Golden spiral based on Fibonacci sequence */}
            <path 
              d="M20,20 
                 L20,12 A8,8 0 0,1 28,20 
                 L28,23 A5,5 0 0,1 23,28 
                 L17,28 A3,3 0 0,1 14,25 
                 L14,22 A2,2 0 0,1 16,20 
                 L18,20 A1,1 0 0,1 19,21 
                 L19,22" 
              fill="none" 
              stroke="url(#enablerGradientFib)" 
              strokeWidth="2"
              strokeLinecap="round"
              className="transition-all duration-300"
            />
            {/* Fibonacci rectangles */}
            <rect x="12" y="12" width="8" height="8" fill="url(#enablerGradientFib)" fillOpacity="0.2" rx="1" />
            <rect x="20" y="12" width="8" height="8" fill="url(#enablerGradientFib)" fillOpacity="0.3" rx="1" />
            <rect x="20" y="20" width="8" height="8" fill="url(#enablerGradientFib)" fillOpacity="0.2" rx="1" />
            <rect x="12" y="20" width="8" height="8" fill="url(#enablerGradientFib)" fillOpacity="0.1" rx="1" />
            
            {/* Central dot */}
            <circle cx="20" cy="20" r="2" fill="white" />
            
            {/* Dynamic lines */}
            <path
              d="M13,20 L27,20 M20,13 L20,27"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#glowFib)"
              opacity="0.7"
            />
          </svg>
        );
      
      case 'doraemon':
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
            {/* Simplified Doraemon-inspired circle */}
            <circle cx="20" cy="20" r="16" fill="url(#doraemonGradient)" />
            
            {/* Center line - inspired by Doraemon's pocket */}
            <circle cx="20" cy="22" r="8" fill="white" fillOpacity="0.85" />
            
            {/* Bell-inspired element */}
            <circle cx="20" cy="22" r="2" fill="#FDBA74" stroke="#EA580C" strokeWidth="0.3" />
            <path 
              d="M18,22 L22,22" 
              stroke="#EA580C" 
              strokeWidth="0.3"
            />
            
            {/* Simplified whisker-inspired lines */}
            <path 
              d="M10,18 L16,18 M10,22 L16,22 M10,26 L16,26" 
              stroke="#3B82F6" 
              strokeWidth="0.8"
              strokeLinecap="round"
            />
            <path 
              d="M30,18 L24,18 M30,22 L24,22 M30,26 L24,26" 
              stroke="#3B82F6" 
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'geometric':
        return (
          <svg
            viewBox="0 0 40 40"
            className={cn(sizeClasses[size], 'filter drop-shadow-sm')}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="enablerGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
              <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <polygon 
              points="20,4 36,20 20,36 4,20" 
              fill="url(#enablerGradient2)" 
              className="transition-all duration-300"
            />
            <circle cx="20" cy="20" r="8" fill="white" fillOpacity="0.2" />
            <path
              d="M14 20L26 20M16 16L24 16M16 24L24 24"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow2)"
            />
          </svg>
        );
        
      case 'gradient':
        return (
          <svg
            viewBox="0 0 40 40"
            className={cn(sizeClasses[size], 'filter drop-shadow-sm')}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="enablerGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <filter id="glow3" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <rect 
              x="5" 
              y="5" 
              width="30" 
              height="30" 
              rx="15" 
              fill="url(#enablerGradient3)" 
              className="transition-all duration-300"
            />
            <path
              d="M14 20L26 20M20 14L20 26"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#glow3)"
            />
            <circle cx="20" cy="20" r="2" fill="white" />
          </svg>
        );
        
      case 'neon':
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
        
      case 'minimalist':
        return (
          <svg
            viewBox="0 0 40 40"
            className={cn(sizeClasses[size], 'filter drop-shadow-sm')}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="enablerGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>
            <rect 
              x="6" 
              y="6" 
              width="28" 
              height="28" 
              rx="6" 
              fill="url(#enablerGradient5)" 
              className="transition-all duration-300"
            />
            <path
              d="M13 20L27 20M13 15L27 15M13 25L27 25"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="15" cy="15" r="1.5" fill="white" />
            <circle cx="25" cy="25" r="1.5" fill="white" />
          </svg>
        );
        
      case 'minimal':
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
          
      default:
        return (
          <svg
            ref={logoRef}
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
    }
  };

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      {renderLogo()}
      
      {variant !== 'minimal' && (
        <span className={cn(
          "text-xl font-display font-bold tracking-tight uppercase letter-spacing-wide",
          variant === 'geometric' || variant === 'gradient' 
            ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600" 
            : variant === 'neon'
              ? "bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500"
              : variant === 'minimalist'
                ? "bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600"
                : variant === 'doraemon'
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500"
                  : variant === 'fibonacci'
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
        )}>
          ENABLER
        </span>
      )}
    </div>
  );
};

export default Logo;
