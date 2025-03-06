
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
  variant: 'default' | 'modern';
}

const PetPalsLogo: React.FC<LogoProps> = ({ style, variant }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill={variant === 'modern' ? 'url(#petpalsGradient)' : '#FEF3C7'} />
      {variant === 'modern' && (
        <defs>
          <linearGradient id="petpalsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#FED7AA" />
          </linearGradient>
        </defs>
      )}
      <path d="M15,25 C15,22.8 16.8,21 19,21 C21.2,21 23,22.8 23,25 C23,27.2 21.2,29 19,29 C16.8,29 15,27.2 15,25 Z" fill="#F97316" />
      <path d="M25,25 C25,22.8 26.8,21 29,21 C31.2,21 33,22.8 33,25 C33,27.2 31.2,29 29,29 C26.8,29 25,27.2 25,25 Z" fill="#F97316" />
      <path d="M11,17 C11.5,15 13,13.5 15,14 C17,14.5 17.5,16.5 17,18.5 C16.5,20.5 15,22 13,21.5 C11,21 10.5,19 11,17 Z" fill="#F97316" />
      <path d="M37,17 C36.5,15 35,13.5 33,14 C31,14.5 30.5,16.5 31,18.5 C31.5,20.5 33,22 35,21.5 C37,21 37.5,19 37,17 Z" fill="#F97316" />
      <path d="M16,35 C20,38 28,38 32,35 C33,34 33,32 32,31 C30,29 18,29 16,31 C15,32 15,34 16,35 Z" fill="#F97316" />
    </svg>
  );
};

export default PetPalsLogo;
