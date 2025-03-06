
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
  variant: 'default' | 'modern';
}

const EnablissLogo: React.FC<LogoProps> = ({ style, variant }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="36" height="36" rx="8" fill={variant === 'modern' ? 'url(#enablissGradient)' : '#E0F7FF'} />
      {variant === 'modern' && (
        <defs>
          <linearGradient id="enablissGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>
        </defs>
      )}
      <path d="M12,24 C12,17.4 17.4,12 24,12 C30.6,12 36,17.4 36,24 C36,30.6 30.6,36 24,36 C17.4,36 12,30.6 12,24 Z" fill="#0EA5E9" fillOpacity="0.2" />
      <path d="M18,24 C18,20.7 20.7,18 24,18 C27.3,18 30,20.7 30,24 C30,27.3 27.3,30 24,30 C20.7,30 18,27.3 18,24 Z" fill="#0EA5E9" fillOpacity="0.4" />
      <circle cx="24" cy="24" r="3" fill="#0EA5E9" />
      <path d="M15,15 L33,33" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M33,15 L15,33" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
};

export default EnablissLogo;
