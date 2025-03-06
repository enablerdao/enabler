
import React from 'react';
import { ServiceStyle } from '../types';

interface LogoProps {
  style: ServiceStyle;
  variant: 'default' | 'modern';
}

const TaskTrustLogo: React.FC<LogoProps> = ({ style, variant }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="36" height="36" rx="6" fill={variant === 'modern' ? 'url(#tasktrustGradient)' : '#E0F2FE'} />
      {variant === 'modern' && (
        <defs>
          <linearGradient id="tasktrustGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BFDBFE" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>
        </defs>
      )}
      <rect x="12" y="12" width="10" height="10" rx="2" fill="#0284C7" />
      <rect x="26" y="12" width="10" height="10" rx="2" fill="#0284C7" />
      <rect x="12" y="26" width="10" height="10" rx="2" fill="#0284C7" />
      <rect x="26" y="26" width="10" height="10" rx="2" fill="#0284C7" />
      <path d="M12,12 L36,36" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      <path d="M36,12 L12,36" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default TaskTrustLogo;
