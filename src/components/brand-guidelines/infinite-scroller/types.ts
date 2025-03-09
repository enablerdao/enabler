
export interface LogoCardProps {
  year: number;
  zoomLevel: number;
  onCopySVG: (year: number) => void;
  onCopyColor: (color: string, year: number) => void;
}

export interface ScrollControlsProps {
  showLeftArrow: boolean;
  showRightArrow: boolean;
  zoomLevel: number;
  onScroll: (direction: 'left' | 'right') => void;
}

export interface ZoomControlsProps {
  zoomLevel: number;
  onZoom: (direction: 'in' | 'out') => void;
}

export interface HeaderInfoProps {
  visibleYears: number[];
}
