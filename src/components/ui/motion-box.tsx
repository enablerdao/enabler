
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MotionBoxProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  slideIn?: boolean;
}

export const MotionBox = ({ children, className, delay = 0, slideIn = false }: MotionBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a local variable
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
              setIsVisible(true);
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

  // Animation variants for slide-in effect
  const variants = {
    hidden: { opacity: 0, y: slideIn ? 100 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className={cn('fade-in-view', className)}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MotionBox;
