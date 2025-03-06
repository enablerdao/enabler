import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceLogoProps {
  serviceName: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'default' | 'modern' | 'fibonacci';
}

const ServiceLogo: React.FC<ServiceLogoProps> = ({ 
  serviceName,
  size = 'md',
  className,
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };
  
  // Service-specific styling
  const logoStyles: Record<string, {
    bgColor: string;
    textColor: string;
    fontFamily: string;
    gradient?: string;
    fibonacciColor?: string;
  }> = {
    'Enabliss': {
      bgColor: variant === 'modern' ? 'bg-gradient-to-br from-sky-100 to-sky-200' : 'bg-sky-100',
      textColor: 'text-sky-800',
      fontFamily: 'font-sans font-medium tracking-wide',
      gradient: 'from-sky-500 to-blue-600',
      fibonacciColor: '#0EA5E9',
    },
    'PetPals': {
      bgColor: variant === 'modern' ? 'bg-gradient-to-br from-amber-100 to-amber-200' : 'bg-amber-100',
      textColor: 'text-amber-800',
      fontFamily: 'font-serif',
      gradient: 'from-amber-500 to-orange-600',
      fibonacciColor: '#F97316',
    },
    'TaskTrust': {
      bgColor: variant === 'modern' ? 'bg-gradient-to-br from-blue-100 to-blue-200' : 'bg-blue-100',
      textColor: 'text-blue-800',
      fontFamily: 'font-mono',
      gradient: 'from-blue-500 to-indigo-600',
      fibonacciColor: '#4F46E5',
    },
    'MatchSense': {
      bgColor: variant === 'modern' ? 'bg-gradient-to-br from-purple-100 to-purple-200' : 'bg-purple-100',
      textColor: 'text-purple-800',
      fontFamily: 'font-sans font-light tracking-wider',
      gradient: 'from-purple-500 to-pink-600',
      fibonacciColor: '#9333EA',
    },
    'TasteFund': {
      bgColor: variant === 'modern' ? 'bg-gradient-to-br from-green-100 to-green-200' : 'bg-green-100',
      textColor: 'text-green-800',
      fontFamily: 'font-display tracking-tight',
      gradient: 'from-green-500 to-emerald-600',
      fibonacciColor: '#10B981',
    },
  };
  
  // Default styling if service not found
  const defaultStyle = {
    bgColor: variant === 'modern' ? 'bg-gradient-to-br from-gray-100 to-gray-200' : 'bg-gray-100',
    textColor: 'text-gray-800',
    fontFamily: 'font-display',
    gradient: 'from-gray-500 to-gray-600',
    fibonacciColor: '#64748B',
  };
  
  const style = logoStyles[serviceName] || defaultStyle;
  
  // Custom SVG Logos for each service
  const renderLogo = () => {
    if (variant === 'fibonacci') {
      return renderFibonacciLogo();
    }
    
    switch(serviceName) {
      case 'Enabliss':
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
      case 'PetPals':
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
      case 'TaskTrust':
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
      case 'MatchSense':
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
      case 'TasteFund':
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
      default:
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
    }
  };
  
  // New Fibonacci-inspired logos
  const renderFibonacciLogo = () => {
    const fibColor = style.fibonacciColor || '#64748B';
    
    switch(serviceName) {
      case 'Enabliss':
        return (
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fibGradientEnabliss" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BAE6FD" />
                <stop offset="100%" stopColor="#7DD3FC" />
              </linearGradient>
            </defs>
            <rect x="6" y="6" width="36" height="36" rx="8" fill="url(#fibGradientEnabliss)" />
            
            {/* Fibonacci spiral */}
            <path
              d="M24,12 A12,12 0 0,1 36,24 A12,12 0 0,1 24,36 A12,12 0 0,1 12,24 A12,12 0 0,1 24,12"
              fill="none"
              stroke={fibColor}
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M24,17 A7,7 0 0,1 31,24 A7,7 0 0,1 24,31 A7,7 0 0,1 17,24 A7,7 0 0,1 24,17"
              fill="none"
              stroke={fibColor}
              strokeWidth="1"
              opacity="0.7"
            />
            <path
              d="M24,20 A4,4 0 0,1 28,24 A4,4 0 0,1 24,28 A4,4 0 0,1 20,24 A4,4 0 0,1 24,20"
              fill="none"
              stroke={fibColor}
              strokeWidth="1"
              opacity="0.8"
            />
            <path
              d="M24,22 A2,2 0 0,1 26,24 A2,2 0 0,1 24,26 A2,2 0 0,1 22,24 A2,2 0 0,1 24,22"
              fill="none"
              stroke={fibColor}
              strokeWidth="1"
              opacity="0.9"
            />
            
            {/* Golden ratio rectangles */}
            <rect x="14" y="14" width="20" height="12" rx="2" fill={fibColor} fillOpacity="0.1" />
            <rect x="14" y="26" width="12" height="8" rx="2" fill={fibColor} fillOpacity="0.15" />
            <rect x="26" y="26" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.2" />
            
            {/* Central dot */}
            <circle cx="24" cy="24" r="2" fill={fibColor} fillOpacity="0.8" />
          </svg>
        );
        
      case 'PetPals':
        return (
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fibGradientPetPals" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#FED7AA" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="20" fill="url(#fibGradientPetPals)" />
            
            {/* Fibonacci spiral for pet */}
            <path
              d="M24,14 
                 A5,5 0 0,1 29,19 
                 A3,3 0 0,1 26,22
                 A2,2 0 0,1 24,20
                 A1,1 0 0,1 25,19"
              fill="none"
              stroke={fibColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            
            {/* Mirrored spiral for second ear */}
            <path
              d="M24,14 
                 A5,5 0 0,0 19,19 
                 A3,3 0 0,0 22,22
                 A2,2 0 0,0 24,20
                 A1,1 0 0,0 23,19"
              fill="none"
              stroke={fibColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            
            {/* Face - using golden ratio */}
            <circle cx="24" cy="27" r="8" fill={fibColor} fillOpacity="0.1" />
            <circle cx="21" cy="25" r="1.5" fill={fibColor} />
            <circle cx="27" cy="25" r="1.5" fill={fibColor} />
            <path
              d="M21,30 C22,32 26,32 27,30"
              stroke={fibColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            
            {/* Paw prints using fibonacci sequence (1,1,2,3,5) */}
            <circle cx="16" cy="34" r="1" fill={fibColor} fillOpacity="0.6" />
            <circle cx="18" cy="35" r="1" fill={fibColor} fillOpacity="0.6" />
            <circle cx="15" cy="36" r="1" fill={fibColor} fillOpacity="0.6" />
            <circle cx="19" cy="37" r="1" fill={fibColor} fillOpacity="0.6" />
            <circle cx="17" cy="38" r="2" fill={fibColor} fillOpacity="0.6" />
            
            <circle cx="32" cy="34" r="1" fill={fibColor} fillOpacity="0.6" />
            <circle cx="30" cy="35" r="1" fill={fibColor} fillOpacity="0.6" />
            <circle cx="33" cy="36" r="1" fill={fibColor} fillOpacity="0.6" />
            <circle cx="29" cy="37" r="1" fill={fibColor} fillOpacity="0.6" />
            <circle cx="31" cy="38" r="2" fill={fibColor} fillOpacity="0.6" />
          </svg>
        );
        
      case 'TaskTrust':
        return (
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fibGradientTaskTrust" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BFDBFE" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
            </defs>
            <rect x="6" y="6" width="36" height="36" rx="6" fill="url(#fibGradientTaskTrust)" />
            
            {/* Fibonacci grid layout - each square follows the sequence */}
            <rect x="12" y="12" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.1" />
            <rect x="12" y="20" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.15" />
            <rect x="12" y="28" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.1" />
            <rect x="20" y="12" width="8" height="8" rx="2" fill={fibColor} fillOpacity="0.2" />
            <rect x="20" y="20" width="8" height="16" rx="2" fill={fibColor} fillOpacity="0.25" />
            <rect x="28" y="12" width="8" height="24" rx="2" fill={fibColor} fillOpacity="0.15" />
            
            {/* Checkmarks using golden ratio */}
            <path
              d="M14,16 L16,18 L20,14"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14,24 L16,26 L20,22"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14,32 L16,34 L20,30"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22,16 L24,18 L28,14"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30,16 L32,18 L36,14"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Fibonacci spiral overlay */}
            <path
              d="M24,24 
                 A8,8 0 0,1 32,32
                 A5,5 0 0,1 27,37
                 A3,3 0 0,1 24,34
                 A2,2 0 0,1 26,32
                 A1,1 0 0,1 27,33"
              fill="none"
              stroke={fibColor}
              strokeWidth="1"
              strokeOpacity="0.7"
              strokeLinecap="round"
            />
          </svg>
        );
        
      case 'MatchSense':
        return (
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fibGradientMatchSense" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E9D5FF" />
                <stop offset="100%" stopColor="#D8B4FE" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="20" fill="url(#fibGradientMatchSense)" />
            
            {/* Golden spiral as connection lines */}
            <path
              d="M18,12 
                 A13,13 0 0,1 31,25 
                 A8,8 0 0,1 23,33
                 A5,5 0 0,1 18,28
                 A3,3 0 0,1 21,25
                 A2,2 0 0,1 23,27
                 A1,1 0 0,1 22,28"
              fill="none"
              stroke={fibColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="2 1"
            />
            
            {/* Connection nodes at golden ratio points */}
            <circle cx="18" cy="12" r="3" fill={fibColor} fillOpacity="0.2" />
            <circle cx="31" cy="25" r="3" fill={fibColor} fillOpacity="0.3" />
            <circle cx="23" cy="33" r="3" fill={fibColor} fillOpacity="0.4" />
            <circle cx="18" cy="28" r="3" fill={fibColor} fillOpacity="0.3" />
            <circle cx="21" cy="25" r="3" fill={fibColor} fillOpacity="0.2" />
            
            {/* Central pulse */}
            <circle cx="24" cy="24" r="5" fill={fibColor} fillOpacity="0.15" />
            <circle cx="24" cy="24" r="2" fill={fibColor} />
            
            {/* Connecting lines in golden ratio */}
            <path
              d="M18,12 L31,25"
              stroke={fibColor}
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <path
              d="M31,25 L23,33"
              stroke={fibColor}
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <path
              d="M23,33 L18,28"
              stroke={fibColor}
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <path
              d="M18,28 L21,25"
              stroke={fibColor}
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </svg>
        );
        
      case 'TasteFund':
        return (
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fibGradientTasteFund" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BBF7D0" />
                <stop offset="100%" stopColor="#86EFAC" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="20" fill="url(#fibGradientTasteFund)" />
            
            {/* Fibonacci spiral as food/plant growth */}
            <path
              d="M24,36 
                 C24,30 28,26 34,26
                 C34,22 31,19 27,19
                 C27,17 28,15 30,15
                 C30,13 29,12 27,12"
              fill="none"
              stroke={fibColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* Golden ratio leaf patterns */}
            <path
              d="M24,36 C22,33 24,29 27,28"
              fill="none"
              stroke={fibColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M24,36 C26,33 24,29 21,28"
              fill="none"
              stroke={fibColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            
            {/* Fibonacci sequence sized circles for fruit/ingredients */}
            <circle cx="27" cy="19" r="1" fill={fibColor} />
            <circle cx="30" cy="15" r="1.5" fill={fibColor} />
            <circle cx="34" cy="26" r="2.5" fill={fibColor} />
            <circle cx="21" cy="28" r="1.5" fill={fibColor} />
            <circle cx="27" cy="28" r="1.5" fill={fibColor} />
            
            {/* Golden ratio plate/base */}
            <path
              d="M17,36 L31,36"
              stroke={fibColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M15,39 L33
