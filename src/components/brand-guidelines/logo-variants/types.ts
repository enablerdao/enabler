
export interface LogoVariantProps {
  size: 'sm' | 'md' | 'lg';
  year?: number;
}

export type LogoVariantType = 
  | 'modern' 
  | 'monochrome' 
  | 'gradient' 
  | 'outline' 
  | 'original'
  | 'consistent'
  | 'foundingLogo'
  | 'threeLines';

export interface LogoVariationsProps {
  variant: LogoVariantType;
  size: 'sm' | 'md' | 'lg';
  year?: number;
}
