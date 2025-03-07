
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Users, Target, Zap } from 'lucide-react';
import { pulseVariants, floatVariants } from './animation-variants';

interface ConceptNodeProps {
  type: 'center' | 'satellite';
  icon: 'Rocket' | 'Sparkles' | 'Users' | 'Target' | 'Zap';
  label: string;
  color: string;
  position: 'center' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

const ConceptNode: React.FC<ConceptNodeProps> = ({ type, icon, label, color, position }) => {
  const getPositionStyles = () => {
    switch (position) {
      case 'center':
        return 'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20';
      case 'topLeft':
        return 'absolute left-[18%] top-[30%] transform -translate-x-1/2 -translate-y-1/2 z-10';
      case 'topRight':
        return 'absolute right-[18%] top-[30%] transform translate-x-1/2 -translate-y-1/2 z-10';
      case 'bottomLeft':
        return 'absolute left-[18%] bottom-[18%] transform -translate-x-1/2 translate-y-1/2 z-10';
      case 'bottomRight':
        return 'absolute right-[18%] bottom-[18%] transform translate-x-1/2 translate-y-1/2 z-10';
      default:
        return '';
    }
  };

  // Get right animation variant
  const animationVariant = type === 'center' ? pulseVariants : floatVariants;
  const animationName = type === 'center' ? 'pulse' : 'float';
  
  // Get proper delay for satellites
  const getAnimationDelay = () => {
    if (type === 'center') return 0;
    
    switch (position) {
      case 'topLeft': return 0;
      case 'topRight': return 0.5;
      case 'bottomLeft': return 1;
      case 'bottomRight': return 1.5;
      default: return 0;
    }
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
  
  return (
    <motion.div
      className={getPositionStyles()}
      variants={animationVariant}
      animate={animationName}
      transition={{ delay: getAnimationDelay() }}
    >
      <div 
        className={`${iconSize} rounded-full shadow-lg flex items-center justify-center`}
        style={{ 
          background: `radial-gradient(circle at 30% 30%, ${color}aa, ${color} 70%)`,
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
