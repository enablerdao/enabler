
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
  variant: 'default' | 'modern';
}

const TravelMateLogo: React.FC<LogoProps> = ({ style, variant }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" fill={variant === 'modern' ? 'url(#travelmateGradient)' : '#D1FAE5'} />
      {variant === 'modern' && (
        <defs>
          <linearGradient id="travelmateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="100%" stopColor="#6EE7B7" />
          </linearGradient>
        </defs>
      )}
      
      {/* World map / globe */}
      <circle cx="24" cy="24" r="12" fill="#059669" fillOpacity="0.2" stroke="#059669" strokeWidth="1" />
      
      {/* Continents */}
      <path d="M20,16 C18,17 19,19 17,20 C15,21 16,23 18,24 C20,25 19,27 17,28 C15,29 17,31 19,32" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28,16 C30,17 29,19 31,20 C33,21 32,23 30,24 C28,25 29,27 31,28 C33,29 31,31 29,32" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Equator */}
      <path d="M12,24 L36,24" stroke="#059669" strokeWidth="1" strokeDasharray="1 1" />
      
      {/* Travel path */}
      <path d="M12,19 C16,21 20,17 24,20 C28,23 32,19 36,21" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Location pin */}
      <circle cx="24" cy="24" r="2" fill="#059669" />
      <path d="M24,24 L24,18" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default TravelMateLogo;
