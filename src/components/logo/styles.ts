
import { ServiceStyle } from './types';

// Service-specific styling
export const logoStyles: Record<string, ServiceStyle> = {
  'Enabliss': {
    bgColor: 'bg-sky-100',
    textColor: 'text-sky-800',
    fontFamily: 'font-sans font-medium tracking-wide',
    gradient: 'from-sky-500 to-blue-600',
    fibonacciColor: '#0EA5E9',
  },
  'PetPals': {
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-800',
    fontFamily: 'font-serif',
    gradient: 'from-amber-500 to-orange-600',
    fibonacciColor: '#F97316',
  },
  'TaskTrust': {
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800',
    fontFamily: 'font-mono',
    gradient: 'from-blue-500 to-indigo-600',
    fibonacciColor: '#4F46E5',
  },
  'MatchSense': {
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-800',
    fontFamily: 'font-sans font-light tracking-wider',
    gradient: 'from-purple-500 to-pink-600',
    fibonacciColor: '#9333EA',
  },
  'TasteFund': {
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    fontFamily: 'font-display tracking-tight',
    gradient: 'from-green-500 to-emerald-600',
    fibonacciColor: '#10B981',
  },
  'StayFlow': {
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800',
    fontFamily: 'font-sans',
    gradient: 'from-blue-500 to-cyan-600',
    fibonacciColor: '#0284C7',
  },
  'StayFlow Portfolio': {
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-800',
    fontFamily: 'font-serif font-medium',
    gradient: 'from-amber-500 to-yellow-600',
    fibonacciColor: '#D4AF37',
  },
  'TravelMate': {
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    fontFamily: 'font-sans',
    gradient: 'from-green-500 to-teal-600',
    fibonacciColor: '#059669',
  },
};

// Default styling if service not found
export const defaultStyle: ServiceStyle = {
  bgColor: 'bg-gray-100',
  textColor: 'text-gray-800',
  fontFamily: 'font-display',
  gradient: 'from-gray-500 to-gray-600',
  fibonacciColor: '#64748B',
};

export const getStyleForService = (serviceName: string, variant: 'default' | 'modern' | 'fibonacci'): ServiceStyle => {
  const baseStyle = logoStyles[serviceName] || defaultStyle;
  
  // Apply modern variant styling if needed
  if (variant === 'modern') {
    return {
      ...baseStyle,
      bgColor: `bg-gradient-to-br from-${baseStyle.bgColor.split('-').pop()}-100 to-${baseStyle.bgColor.split('-').pop()}-200`
    };
  }
  
  return baseStyle;
};

export const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};
