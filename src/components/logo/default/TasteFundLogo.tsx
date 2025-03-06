
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
  variant: 'default' | 'modern';
}

const TasteFundLogo: React.FC<LogoProps> = ({ style, variant }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill={variant === 'modern' ? 'url(#tastefundGradient)' : '#DCFCE7'} />
      {variant === 'modern' && (
        <defs>
          <linearGradient id="tastefundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BBF7D0" />
            <stop offset="100%" stopColor="#86EFAC" />
          </linearGradient>
        </defs>
      )}
      <path d="M16,12 L16,24 C16,28.4 19.6,32 24,32 C28.4,32 32,28.4 32,24 L32,12" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      <path d="M14,16 L18,16" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      <path d="M22,16 L26,16" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      <path d="M30,16 L34,16" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      <path d="M24,32 L24,38" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      <path d="M18,38 L30,38" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

export default TasteFundLogo;
