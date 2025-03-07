
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
  variant: 'default' | 'modern';
}

const StayFlowLogo: React.FC<LogoProps> = ({ style, variant }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" rx="6" fill={variant === 'modern' ? 'url(#stayflowGradient)' : '#DBEAFE'} />
      {variant === 'modern' && (
        <defs>
          <linearGradient id="stayflowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BFDBFE" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>
        </defs>
      )}
      
      {/* House shape */}
      <path d="M24,12 L36,22 L36,36 L12,36 L12,22 L24,12 Z" fill="#0284C7" fillOpacity="0.2" />
      
      {/* Door */}
      <rect x="21" y="26" width="6" height="10" rx="1" fill="#0284C7" />
      
      {/* Windows */}
      <rect x="15" y="22" width="6" height="6" rx="1" fill="#0284C7" />
      <rect x="27" y="22" width="6" height="6" rx="1" fill="#0284C7" />
      
      {/* Roof */}
      <path d="M24,12 L36,22 L12,22 L24,12 Z" fill="#0284C7" fillOpacity="0.6" />
      
      {/* Flow lines */}
      <path d="M10,16 C14,14 22,18 24,16 C26,14 34,18 38,16" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 2" />
    </svg>
  );
};

export default StayFlowLogo;
