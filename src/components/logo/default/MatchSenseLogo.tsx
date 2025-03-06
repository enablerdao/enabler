
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
  variant: 'default' | 'modern';
}

const MatchSenseLogo: React.FC<LogoProps> = ({ style, variant }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill={variant === 'modern' ? 'url(#matchsenseGradient)' : '#F3E8FF'} />
      {variant === 'modern' && (
        <defs>
          <linearGradient id="matchsenseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E9D5FF" />
            <stop offset="100%" stopColor="#D8B4FE" />
          </linearGradient>
        </defs>
      )}
      <path d="M16,20 C16,16.6 18.6,14 22,14 C25.4,14 28,16.6 28,20 C28,23.4 25.4,26 22,26 L16,26 L16,20 Z" fill="#9333EA" />
      <path d="M32,28 C32,24.6 34.6,22 38,22 L38,28 L32,28 Z" fill="#9333EA" />
      <path d="M16,32 C16,35.4 18.6,38 22,38 C25.4,38 28,35.4 28,32 L28,30 L16,30 L16,32 Z" fill="#9333EA" />
      <path d="M10,22 C10,25.4 12.6,28 16,28 L16,22 L10,22 Z" fill="#9333EA" />
    </svg>
  );
};

export default MatchSenseLogo;
