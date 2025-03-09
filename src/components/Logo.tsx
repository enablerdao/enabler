
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import MinimalLogo from './logo/variants/MinimalLogo';
import GeometricLogo from './logo/variants/GeometricLogo';
import GradientLogo from './logo/variants/GradientLogo';
import NeonLogo from './logo/variants/NeonLogo';
import MinimalistLogo from './logo/variants/MinimalistLogo';
import DoraemonLogo from './logo/variants/DoraemonLogo';
import FibonacciLogo from './logo/variants/FibonacciLogo';
import DefaultLogo from './logo/variants/DefaultLogo';
import SVGLogo from './logo/variants/SVGLogo';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'geometric' | 'gradient' | 'neon' | 'minimalist' | 'doraemon' | 'fibonacci' | 'svg';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className,
  size = 'md',
  variant = 'svg',
  animated = true,
}) => {
  const logoRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const pathRef3 = useRef<SVGPathElement>(null);
  
  const sizeClasses = {
    sm: 'w-24 h-9',
    md: 'w-32 h-12',
    lg: 'w-40 h-14',
  };
  
  useEffect(() => {
    if (!animated || variant === 'svg') return;
    
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
  }, [animated, variant]);

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      {variant === 'svg' ? (
        <SVGLogo size={size} />
      ) : variant === 'minimal' ? (
        <MinimalLogo size={size} circleRef={circleRef} />
      ) : variant === 'geometric' ? (
        <GeometricLogo size={size} />
      ) : variant === 'gradient' ? (
        <GradientLogo size={size} />
      ) : variant === 'neon' ? (
        <NeonLogo size={size} />
      ) : variant === 'minimalist' ? (
        <MinimalistLogo size={size} />
      ) : variant === 'doraemon' ? (
        <DoraemonLogo size={size} />
      ) : variant === 'fibonacci' ? (
        <FibonacciLogo size={size} />
      ) : (
        <DefaultLogo 
          size={size} 
          pathRef1={pathRef1} 
          pathRef2={pathRef2} 
          pathRef3={pathRef3} 
          circleRef={circleRef}
        />
      )}
    </div>
  );
};

export default Logo;
