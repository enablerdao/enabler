
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
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
  
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };
  
  useEffect(() => {
    if (!animated) return;
    
    // Subtle animation for the logo
    let animationFrame: number;
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      
      if (circleRef.current) {
        // Subtle pulse effect
        const scale = 1 + Math.sin(elapsed * 2) * 0.01;
        circleRef.current.setAttribute('r', `${18 * scale}`);
      }
      
      if (pathRef1.current) {
        // Subtle movement for the horizontal lines
        const offsetX = Math.sin(elapsed * 1.5) * 0.5;
        pathRef1.current.setAttribute(
          'd',
          `M${12 + offsetX} 16H${28 - offsetX}M${12 + offsetX * 0.7} 20H${28 - offsetX * 0.7}M${12 + offsetX * 1.3} 24H${28 - offsetX * 1.3}`
        );
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [animated]);

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <svg
        ref={logoRef}
        viewBox="0 0 40 40"
        className={cn(sizeClasses[size], 'filter drop-shadow-sm')}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="enablerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6E59A5" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <circle 
          ref={circleRef}
          cx="20" 
          cy="20" 
          r="18" 
          fill="url(#enablerGradient)" 
          className="transition-all duration-300"
        />
        <path
          ref={pathRef1}
          d="M12 16H28M12 20H28M12 24H28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
        <path
          ref={pathRef2}
          d="M20 10L24 30"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
      </svg>
      
      {variant === 'default' && (
        <span className="text-xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-enabler-700 to-enabler-500">
          イネブラ
        </span>
      )}
    </div>
  );
};

export default Logo;
