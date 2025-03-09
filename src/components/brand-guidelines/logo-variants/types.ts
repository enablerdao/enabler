
export interface LogoVariantProps {
  size: 'sm' | 'md' | 'lg';
  year?: number;
}

export type LogoVariant = 'modern' | 'monochrome' | 'gradient' | 'outline' | 'original' | 'consistent' | 'foundingLogo';

export interface LogoVariationsProps {
  variant: LogoVariant;
  size: 'sm' | 'md' | 'lg';
  year?: number;
}
