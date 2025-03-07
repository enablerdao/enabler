
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
  variant: 'default' | 'modern';
}

const StayFlowPortfolioLogo: React.FC<LogoProps> = ({ style, variant }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="36" height="36" rx="10" fill={variant === 'modern' ? 'url(#portfolioGradient)' : '#FEF3C7'} />
      {variant === 'modern' && (
        <defs>
          <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>
        </defs>
      )}
      
      {/* Luxury Building */}
      <path d="M14,36 L14,16 L34,16 L34,36 L14,36 Z" fill="#D4AF37" fillOpacity="0.2" />
      
      {/* Windows */}
      <rect x="16" y="18" width="4" height="4" rx="1" fill="#D4AF37" />
      <rect x="22" y="18" width="4" height="4" rx="1" fill="#D4AF37" />
      <rect x="28" y="18" width="4" height="4" rx="1" fill="#D4AF37" />
      <rect x="16" y="24" width="4" height="4" rx="1" fill="#D4AF37" />
      <rect x="22" y="24" width="4" height="4" rx="1" fill="#D4AF37" />
      <rect x="28" y="24" width="4" height="4" rx="1" fill="#D4AF37" />
      
      {/* Entrance */}
      <rect x="21" y="30" width="6" height="6" rx="1" fill="#D4AF37" />
      
      {/* Luxury elements */}
      <path d="M10,13 L38,13" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      <path d="M12,10 L36,10" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      
      {/* Portfolio collection accent */}
      <circle cx="39" cy="9" r="3" fill="#D4AF37" />
      <circle cx="9" cy="9" r="3" fill="#D4AF37" />
    </svg>
  );
};

export default StayFlowPortfolioLogo;
