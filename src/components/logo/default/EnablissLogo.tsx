
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
  variant: 'default' | 'modern';
}

const EnablissLogo: React.FC<LogoProps> = ({ style, variant }) => {
  return (
    <svg viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="textGradientEnabliss" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2BBCFF" />
          <stop offset="100%" stopColor="#1E90FF" />
        </linearGradient>
        <linearGradient id="lineGradientEnabliss" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2BBCFF" />
          <stop offset="100%" stopColor="#1E90FF" />
        </linearGradient>
      </defs>
      <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
      <rect x="15" y="25" width="60" height="3" rx="1.5" fill="url(#lineGradientEnabliss)"/>
      <rect x="15" y="33" width="40" height="3" rx="1.5" fill="url(#lineGradientEnabliss)"/>
      <rect x="15" y="41" width="60" height="3" rx="1.5" fill="url(#lineGradientEnabliss)"/>
      <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill="url(#textGradientEnabliss)">ENABLISS</text>
    </svg>
  );
};

export default EnablissLogo;
