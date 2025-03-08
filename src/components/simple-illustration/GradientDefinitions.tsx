
import React from 'react';

const GradientDefinitions: React.FC = () => {
  return (
    <defs>
      <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#0070f3" stopOpacity="1" />
        <stop offset="100%" stopColor="#0057b7" stopOpacity="1" />
      </radialGradient>
      
      <radialGradient id="ideaGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#ff9d42" stopOpacity="1" />
        <stop offset="100%" stopColor="#ff8930" stopOpacity="1" />
      </radialGradient>
      
      <radialGradient id="techGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#aa7df3" stopOpacity="1" />
        <stop offset="100%" stopColor="#9361db" stopOpacity="1" />
      </radialGradient>
      
      <radialGradient id="connectGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#5fe3a1" stopOpacity="1" />
        <stop offset="100%" stopColor="#40c987" stopOpacity="1" />
      </radialGradient>
      
      <radialGradient id="growthGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#ff7d6f" stopOpacity="1" />
        <stop offset="100%" stopColor="#ff5e4e" stopOpacity="1" />
      </radialGradient>
      
      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="0" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.15" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
};

export default GradientDefinitions;
