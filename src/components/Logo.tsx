
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
  const pathRef3 = useRef<SVGPathElement>(null);
  
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };
  
  useEffect(() => {
    if (!animated) return;
    
    // Advanced animation for the logo
    let animationFrame: number;
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      
      if (circleRef.current) {
        // Pulse effect with subtle breathing
        const scale = 1 + Math.sin(elapsed * 1.5) * 0.02;
        circleRef.current.setAttribute('r', `${17 * scale}`);
      }
      
      if (pathRef1.current && pathRef2.current) {
        // Connection points movement - representing data flow
        const offset = Math.sin(elapsed * 2) * 0.6;
        
        // The "E" shape transforms slightly
        pathRef1.current.setAttribute(
          'd',
          `M12 18L${24 + offset} 18M14 22L${22 + offset * 0.7} 22M16 26L${20 + offset * 0.4} 26`
        );
        
        // The vertical line pulses with data
        const pulseWidth = 2 + Math.sin(elapsed * 3) * 0.5;
        pathRef2.current.setAttribute('stroke-width', `${pulseWidth}`);
      }
      
      if (pathRef3.current) {
        // Data point pulsing
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
        {/* "E" shape representing Enabler */}
        <path
          ref={pathRef1}
          d="M12 18L24 18M14 22L22 22M16 26L20 26"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
        {/* Vertical line representing connection */}
        <path
          ref={pathRef2}
          d="M20 12L20 28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
        {/* Data point representing innovation */}
        <path
          ref={pathRef3}
          d="M20 12 A1.5 1.5 0 1 0 20 9 A1.5 1.5 0 1 0 20 12 Z"
          fill="white"
          filter="url(#glow)"
        />
      </svg>
      
      {variant === 'default' && (
        <span className="text-xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          イネブラ
        </span>
      )}
    </div>
  );
};

export default Logo;
