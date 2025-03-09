
import React from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { calculateColorForYear, calculateSpecialAccentColor } from '../color-utils/color-calculator';
import { LogoCardProps } from './types';

const LogoCard: React.FC<LogoCardProps> = ({ 
  year, 
  zoomLevel, 
  onCopySVG, 
  onCopyColor 
}) => {
  const brandColor = calculateColorForYear(year);
  const accentColor = calculateSpecialAccentColor(year);
  const isSpecialYear = accentColor.hex !== brandColor.hex;
  const foundingYear = 2022;
  const foundingColor = calculateColorForYear(foundingYear);
  
  // Calculate card width based on zoom level
  const getCardWidth = () => {
    if (zoomLevel <= 1) {
      return '60px'; // Much smaller at lowest zoom
    } else if (zoomLevel === 2) {
      return '120px'; // Still small at zoom level 2
    } else {
      // For higher zoom levels, use the original scaling formula with increased base width
      const baseWidth = 180; // Base width for zoom level 3
      return `${baseWidth * (zoomLevel / 3)}px`;
    }
  };
  
  // Calculate card height based on zoom level
  const getCardHeight = () => {
    if (zoomLevel <= 1) {
      return '40px'; // Very compact height at lowest zoom
    } else if (zoomLevel === 2) {
      return '100px'; // Moderate height at zoom level 2
    } else {
      // Start with fixed height at zoom level 3, then scale proportionally
      return `${230 * (zoomLevel / 3)}px`;
    }
  };
  
  // Determine if we should show detailed information based on zoom level
  const shouldShowDetails = () => {
    return zoomLevel >= 3; // Show details only at zoom level 3 and above
  };
  
  // Get logo size based on zoom level
  const getLogoSize = () => {
    // Scale down more aggressively at lower zoom levels
    if (zoomLevel <= 1) {
      return '70%'; // Smallest logo size
    } else if (zoomLevel === 2) {
      return '80%'; // Small logo size
    } else {
      return '100%'; // Regular logo size
    }
  };
  
  return (
    <div 
      className={`flex-shrink-0 bg-white rounded-lg shadow-sm border flex flex-col transition-all duration-300 ${zoomLevel <= 2 ? 'hover:shadow-md' : ''}`}
      style={{ 
        width: getCardWidth(),
        height: zoomLevel >= 3 ? getCardHeight() : 'auto',
        padding: zoomLevel <= 1 ? '2px' : `${Math.max(1, zoomLevel - 1) * 2}px`
      }}
    >
      {shouldShowDetails() && (
        <div className="flex justify-between items-center mb-2">
          <h3 className={`font-semibold ${zoomLevel >= 4 ? 'text-lg' : 'text-sm'}`}>{year}年</h3>
          <div className="flex items-center gap-1">
            {year === 2025 && (
              <Badge variant="outline" className="text-[0.65rem] py-0 px-1 font-normal">開始</Badge>
            )}
            <div 
              className={`rounded-full cursor-pointer ${zoomLevel >= 4 ? 'w-6 h-6' : 'w-4 h-4'}`}
              style={{ backgroundColor: brandColor.hex }}
              onClick={() => onCopyColor(brandColor.hex, year)}
              title="クリックしてコピー"
            />
          </div>
        </div>
      )}
      
      <div 
        className={`${zoomLevel <= 2 ? 'p-1' : 'bg-gray-50 rounded-md p-2'} flex justify-center items-center ${zoomLevel <= 2 ? '' : 'flex-grow mb-2'}`}
        style={{ 
          position: 'relative',
          minHeight: zoomLevel <= 1 ? '30px' : (zoomLevel === 2 ? '40px' : 'auto')
        }}
      >
        {/* For zoom level <= 2, we've removed the year label and only show the accent color indicator when needed */}
        {zoomLevel <= 2 && isSpecialYear && (
          <div 
            className="absolute top-0 right-0 rounded-full" 
            style={{ 
              backgroundColor: accentColor.hex,
              width: zoomLevel <= 1 ? '3px' : '4px',
              height: zoomLevel <= 1 ? '3px' : '4px'
            }}
            title={`${year}年 アクセントカラー: ${accentColor.hex}`}
          ></div>
        )}
        
        <svg 
          id={`infinite-logo-${year}`}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 200 70" 
          className="w-full h-full"
          style={{ width: getLogoSize() }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id={`modernGradient-infinite-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={foundingColor.hex} />
              <stop offset="100%" stopColor={brandColor.hex} />
            </linearGradient>
            <linearGradient id={`reverseGradient-infinite-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={brandColor.hex} />
              <stop offset="100%" stopColor={foundingColor.hex} />
            </linearGradient>
            <linearGradient id={`middleLineGradient-infinite-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={foundingColor.hex} />
              <stop offset="100%" stopColor={isSpecialYear ? accentColor.hex : brandColor.hex} />
            </linearGradient>
          </defs>
          <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
          <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#modernGradient-infinite-${year})`}/>
          <rect x="15" y="33" width="37" height="3" rx="1.5" fill={`url(#middleLineGradient-infinite-${year})`}/>
          <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-infinite-${year})`}/>
          {/* Show "ENABLER" text only for zoom level > 1 */}
          {zoomLevel > 1 && (
            <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#modernGradient-infinite-${year})`}>ENABLER</text>
          )}
        </svg>
      </div>
      
      {shouldShowDetails() && (
        <div className="flex flex-col gap-2 mt-auto">
          {isSpecialYear && (
            <div 
              className="flex items-center gap-1 p-1 rounded cursor-pointer text-xs"
              style={{ 
                backgroundColor: accentColor.hex,
                color: parseInt(accentColor.hex.slice(1, 3), 16) > 150 ? '#000' : '#fff'
              }}
              onClick={() => onCopyColor(accentColor.hex, year)}
            >
              <span>アクセント:</span>
              <span className="font-mono">{accentColor.hex}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1 p-1 rounded cursor-pointer text-xs bg-blue-50">
            <Palette className="w-3 h-3 text-blue-500" />
            <span className="font-mono">{brandColor.hex}</span>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs"
            onClick={() => onCopySVG(year)}
          >
            SVGコピー
          </Button>
        </div>
      )}
    </div>
  );
};

export default LogoCard;
