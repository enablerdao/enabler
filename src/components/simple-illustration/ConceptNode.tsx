
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Users, Target, Zap } from 'lucide-react';
import { pulseVariants, floatVariants, fibonacciFloatVariants } from './animation-variants';

interface ConceptNodeProps {
  type: 'center' | 'satellite';
  icon: 'Rocket' | 'Sparkles' | 'Users' | 'Target' | 'Zap';
  label: string;
  color: string;
  position: 'center' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

const ConceptNode: React.FC<ConceptNodeProps> = ({ type, icon, label, color, position }) => {
  // Fibonacci sequence for layout calculations
  const fib = [1, 1, 2, 3, 5, 8, 13, 21];
  
  const getPositionStyles = () => {
    switch (position) {
      case 'center':
        return 'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20';
      case 'topLeft':
        return 'absolute left-[20%] top-[28%] transform -translate-x-1/2 -translate-y-1/2 z-10';
      case 'topRight':
        return 'absolute right-[20%] top-[28%] transform translate-x-1/2 -translate-y-1/2 z-10';
      case 'bottomLeft':
        return 'absolute left-[20%] bottom-[20%] transform -translate-x-1/2 translate-y-1/2 z-10';
      case 'bottomRight':
        return 'absolute right-[20%] bottom-[20%] transform translate-x-1/2 translate-y-1/2 z-10';
      default:
        return '';
    }
  };
  
  // Get animation variant based on position using Fibonacci sequence
  const getAnimationVariant = () => {
    if (type === 'center') return pulseVariants;
    
    const positionIndex = {
      'topLeft': 0,
      'topRight': 1,
      'bottomLeft': 2,
      'bottomRight': 3
    }[position] || 0;
    
    return fibonacciFloatVariants;
  };
  
  // Get proper delay for satellites
  const getAnimationDelay = () => {
    if (type === 'center') return 0;
    
    const delayMap = {
      'topLeft': fib[1] * 0.2,
      'topRight': fib[2] * 0.2,
      'bottomLeft': fib[3] * 0.2,
      'bottomRight': fib[4] * 0.2
    };
    
    return delayMap[position] || 0;
  };
  
  // Render the appropriate icon
  const renderIcon = () => {
    const size = type === 'center' ? 32 : 24;
    
    switch (icon) {
      case 'Rocket':
        return <Rocket size={size} color="white" strokeWidth={2.5} />;
      case 'Sparkles':
        return <Sparkles size={size} color="white" strokeWidth={2.5} />;
      case 'Users':
        return <Users size={size} color="white" strokeWidth={2.5} />;
      case 'Target':
        return <Target size={size} color="white" strokeWidth={2.5} />;
      case 'Zap':
        return <Zap size={size} color="white" strokeWidth={2.5} />;
      default:
        return null;
    }
  };
  
  const iconSize = type === 'center' ? 'w-20 h-20' : 'w-16 h-16';
  const labelClasses = `text-center mt-3 font-medium whitespace-nowrap ${type === 'center' ? 'text-lg' : 'text-base'}`;
  
  // Get animation name
  const animationName = type === 'center' ? 'pulse' : 'float';
  const animationVariant = getAnimationVariant();
  const positionIndex = {
    'topLeft': 0,
    'topRight': 1,
    'bottomLeft': 2,
    'bottomRight': 3,
    'center': 4
  }[position] || 0;
  
  return (
    <motion.div
      className={getPositionStyles()}
      variants={animationVariant}
      animate={animationName}
      custom={positionIndex}
    >
      <div 
        className={`${iconSize} rounded-full shadow-lg flex items-center justify-center`}
        style={{ 
          background: `radial-gradient(circle at 30% 30%, ${color}aa, ${color})`,
          boxShadow: `0 8px 24px ${color}40`
        }}
      >
        {renderIcon()}
      </div>
      <p className={labelClasses} style={{ color }}>
        {label}
      </p>
    </motion.div>
  );
};

export default ConceptNode;
