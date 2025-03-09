
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MotionBoxProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const MotionBox = ({ children, className, delay = 0 }: MotionBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a local variable
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={cn('fade-in-view', className)}>
      {children}
    </div>
  );
};

export default MotionBox;
