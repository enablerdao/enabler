
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

type LoadingVariant = 'bell' | 'propeller' | 'pocket' | 'default';
type LoadingSize = 'sm' | 'md' | 'lg';

interface LoadingIndicatorProps {
  variant?: LoadingVariant;
  size?: LoadingSize;
  text?: string;
  className?: string;
}

const sizeClasses = {
  sm: 'w-5 h-5',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

const LoadingIndicator = ({
  variant = 'default',
  size = 'md',
  text,
  className,
}: LoadingIndicatorProps) => {
  const renderLoader = () => {
    switch (variant) {
      case 'bell':
        return (
          <div className="relative">
            <motion.div 
              className={cn("bg-yellow-300 rounded-full shadow-md", sizeClasses[size])}
              animate={{ 
                y: [0, -5, 0],
                rotate: [-5, 5, -5]
              }}
              transition={{ 
                y: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="absolute w-full top-1/2 h-0.5 bg-yellow-600"></div>
            </motion.div>
          </div>
        );
      
      case 'propeller':
        return (
          <motion.div 
            className={cn("relative", sizeClasses[size])}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 border-4 border-dashed border-blue-400 rounded-full"></div>
            <div className="absolute inset-2 bg-blue-50 rounded-full"></div>
            <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          </motion.div>
        );
      
      case 'pocket':
        return (
          <div className="relative">
            <motion.div 
              className={cn("rounded-full bg-blue-100", sizeClasses[size])}
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.div 
                className="absolute inset-0 border-2 border-blue-300 rounded-full"
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.1
                }}
              />
            </motion.div>
          </div>
        );
      
      default:
        return (
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className={cn(sizeClasses[size])}
          >
            <Loader className="w-full h-full text-blue-500" />
          </motion.div>
        );
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-2", className)}>
      {renderLoader()}
      {text && (
        <motion.p 
          className="text-sm text-gray-600 font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingIndicator;
