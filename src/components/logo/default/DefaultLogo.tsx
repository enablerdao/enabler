
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
  variant: 'default' | 'modern';
}

const DefaultLogo: React.FC<LogoProps> = ({ style, variant }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill={variant === 'modern' ? 'url(#defaultGradient)' : '#F1F5F9'} />
      {variant === 'modern' && (
        <defs>
          <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>
      )}
      <path d="M24,14 L24,34" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
      <path d="M14,24 L34,24" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

export default DefaultLogo;
