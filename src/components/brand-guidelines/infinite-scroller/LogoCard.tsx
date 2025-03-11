
import React from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { calculateColorForYear, calculateSpecialAccentColor, calculateBackgroundColor } from '../color-utils/color-calculator';
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
  
  // Calculate background color based on accent color if it's a special year
  const backgroundColorData = isSpecialYear ? calculateBackgroundColor(accentColor.hex) : null;
  
  // Calculate card width based on zoom level - increased for better visibility
  const getCardWidth = () => {
    if (zoomLevel <= 1) {
      return '180px'; // Much larger at lowest zoom
    } else if (zoomLevel === 2) {
      return '200px'; // Larger at zoom level 2
    } else {
      // For higher zoom levels, use increased base width
      const baseWidth = 220; // Larger base width for zoom level 3
      return `${baseWidth * (zoomLevel / 3)}px`;
    }
  };
  
  // Calculate card height based on zoom level
  const getCardHeight = () => {
    if (zoomLevel <= 1) {
      return '160px'; // Taller height at lowest zoom
    } else if (zoomLevel === 2) {
      return '180px'; // Moderate height at zoom level 2
    } else {
      // Start with fixed height at zoom level 3, then scale proportionally
      return `${250 * (zoomLevel / 3)}px`;
    }
  };
  
  // Determine if we should show detailed information based on zoom level
  const shouldShowDetails = () => {
    return zoomLevel >= 3; // Show details only at zoom level 3 and above
  };
  
  // Get logo size based on zoom level
  const getLogoSize = () => {
    // Larger logos at all zoom levels
    if (zoomLevel <= 1) {
      return '90%'; // Larger logo size at lowest zoom
    } else if (zoomLevel === 2) {
      return '95%'; // Larger logo size
    } else {
      return '100%'; // Regular logo size
    }
  };
  
  return (
    <div 
      className={`flex-shrink-0 bg-white rounded-lg shadow-sm border flex flex-col transition-all duration-300 ${zoomLevel <= 2 ? 'hover:shadow-md' : ''}`}
      style={{ 
        width: getCardWidth(),
        height: getCardHeight(),
        padding: zoomLevel <= 1 ? '8px' : `${Math.max(3, zoomLevel - 1) * 4}px`,
        backgroundColor: isSpecialYear && backgroundColorData ? backgroundColorData.hex : 'white'
      }}
    >
      {shouldShowDetails() && (
        <div className="flex justify-between items-center mb-2">
          <h3 className={`font-semibold ${zoomLevel >= 4 ? 'text-xl' : 'text-base'}`}>{year}年</h3>
          <div className="flex items-center gap-1">
            {year === 2025 && (
              <Badge variant="outline" className="text-[0.65rem] py-0 px-1 font-normal">開始</Badge>
            )}
            <div 
              className={`rounded-full cursor-pointer ${zoomLevel >= 4 ? 'w-6 h-6' : 'w-5 h-5'}`}
              style={{ backgroundColor: brandColor.hex }}
              onClick={() => onCopyColor(brandColor.hex, year)}
              title="クリックしてコピー"
            />
          </div>
        </div>
      )}
      
      <div 
        className={`${zoomLevel <= 2 ? 'p-2' : 'bg-gray-50 rounded-md p-3'} flex justify-center items-center ${zoomLevel <= 2 ? '' : 'flex-grow mb-2'}`}
        style={{ 
          position: 'relative',
          minHeight: zoomLevel <= 1 ? '70px' : (zoomLevel === 2 ? '80px' : 'auto'),
          backgroundColor: shouldShowDetails() && isSpecialYear && backgroundColorData ? backgroundColorData.hex : (zoomLevel <= 2 ? 'transparent' : '#f9fafb')
        }}
      >
        {/* For zoom level <= 2, we'll add a year display at the top */}
        {zoomLevel <= 2 && (
          <div 
            className="absolute top-0 left-0 text-gray-500 font-mono"
            style={{
              fontSize: zoomLevel <= 1 ? '10px' : '12px',
              padding: '4px'
            }}
          >
            {year}
          </div>
        )}
        
        {/* Special year indicator */}
        {zoomLevel <= 2 && isSpecialYear && (
          <div 
            className="absolute top-1 right-1 rounded-full" 
            style={{ 
              backgroundColor: accentColor.hex,
              width: zoomLevel <= 1 ? '8px' : '10px',
              height: zoomLevel <= 1 ? '8px' : '10px'
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
          {/* Show "ENABLER" text for all zoom levels */}
          <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#modernGradient-infinite-${year})`}>ENABLER</text>
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
          
          {isSpecialYear && backgroundColorData && (
            <div 
              className="flex items-center gap-1 p-1 rounded cursor-pointer text-xs"
              style={{ 
                backgroundColor: backgroundColorData.hex,
                color: '#000',
                border: '1px dashed #ddd'
              }}
              onClick={() => onCopyColor(backgroundColorData.hex, year)}
            >
              <span>背景色:</span>
              <span className="font-mono">{backgroundColorData.hex}</span>
            </div>
          )}
          
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
