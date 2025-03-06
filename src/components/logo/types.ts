
export interface ServiceLogoProps {
  serviceName: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'default' | 'modern' | 'fibonacci';
}

export interface ServiceStyle {
  bgColor: string;
  textColor: string;
  fontFamily: string;
  gradient?: string;
  fibonacciColor?: string;
}
