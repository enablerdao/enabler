
export interface ColorInfo {
  year: number;
  hex: string;
  name: string;
  rgb: string;
}

export interface BackgroundColorInfo {
  hex: string;
  name: string;
  hue: number;
  saturation: number;
  value: number;
}

export interface ColorCardProps {
  color: ColorInfo;
  onClick: (text: string, label: string) => void;
  isCurrentYear?: boolean;
  copiedColor?: string | null;
}

export interface ColorFormulaProps {
  onCopy: (text: string, label: string) => void;
}

export interface ColorProgressionProps {
  brandColors: ColorInfo[];
  currentYear: number;
  onColorCopy: (text: string, label: string) => void;
}

export interface YearSelectorProps {
  customYear: number;
  onDecreaseYear: () => void;
  onAddYear: () => void;
  onAddCustomYear: () => void;
  customColors: ColorInfo[];
  onColorCopy: (text: string, label: string) => void;
}

export interface LogoVariantsProps {
  currentYearColor: ColorInfo;
}

export interface ColorPaletteProps {
  currentYearColor: ColorInfo;
  onColorCopy: (text: string, label: string) => void;
}

export interface GradientExamplesProps {
  currentYearColor: ColorInfo;
  onCopy: (text: string, label: string) => void;
}

export interface BackgroundColorProps {
  accentColor: string;
  year: number;
  name: string;
}

export interface CalculateBackgroundColorFunction {
  (accentColorHex: string): string;
}
