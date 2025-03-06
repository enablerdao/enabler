
import React from 'react';

interface SimpleIllustrationProps {
  className?: string;
}

const SimpleIllustration: React.FC<SimpleIllustrationProps> = ({ className }) => {
  return (
    <div className={`w-full max-w-xs mx-auto my-8 ${className}`}>
      <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Abstract background elements */}
        <circle cx="200" cy="110" r="100" fill="#E0F2FE" opacity="0.6" />
        <circle cx="160" cy="80" r="60" fill="#BAE6FD" opacity="0.4" />
        
        {/* Connection lines */}
        <path d="M100,160 L300,60" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
        <path d="M120,100 L280,120" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
        <path d="M150,60 L250,160" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
        
        {/* Main elements */}
        <rect x="80" y="140" width="60" height="60" rx="10" fill="#0EA5E9" opacity="0.8" />
        <rect x="260" y="40" width="60" height="60" rx="10" fill="#0EA5E9" opacity="0.8" />
        <circle cx="170" cy="80" r="30" fill="#0EA5E9" opacity="0.8" />
        <circle cx="230" cy="140" r="30" fill="#0EA5E9" opacity="0.8" />
        
        {/* Connecting people icons */}
        <circle cx="80" cy="140" r="15" fill="#FFFFFF" />
        <circle cx="260" cy="40" r="15" fill="#FFFFFF" />
        <circle cx="170" cy="80" r="15" fill="#FFFFFF" />
        <circle cx="230" cy="140" r="15" fill="#FFFFFF" />
        
        {/* Abstract small elements */}
        <circle cx="120" cy="60" r="6" fill="#0EA5E9" />
        <circle cx="280" cy="160" r="6" fill="#0EA5E9" />
        <circle cx="320" cy="100" r="6" fill="#0EA5E9" />
        <circle cx="80" cy="180" r="6" fill="#0EA5E9" />
      </svg>
    </div>
  );
};

export default SimpleIllustration;
