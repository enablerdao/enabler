
import React from 'react';
import { calculateColorForYear } from './brand-guidelines/color-utils/color-calculator';

interface OGImageProps {
  width?: number;
  height?: number;
  path?: string;
}

const OGImage: React.FC<OGImageProps> = ({ width = 1200, height = 630, path = '/' }) => {
  const currentYear = new Date().getFullYear();
  const brandColor = calculateColorForYear(currentYear);
  const foundingColor = "#22B6FF";
  
  // Determine if we're on the brand guidelines page
  const isBrandGuidelines = path.includes('brand-guidelines');
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* Background */}
      <rect width={width} height={height} fill="#FFFFFF" />
      
      {/* Top accent bar */}
      <rect width={width} height={12} fill={`url(#headerGradient)`} />
      
      {/* Bottom accent bar */}
      <rect y={height - 12} width={width} height={12} fill={`url(#headerGradient)`} />
      
      {/* Decorative elements */}
      <circle cx={width * 0.85} cy={height * 0.3} r={height * 0.2} 
        fill={`${brandColor.hex}15`} />
      <circle cx={width * 0.2} cy={height * 0.8} r={height * 0.15} 
        fill={`${foundingColor}10`} />
      
      {/* Abstract design elements */}
      <path 
        d={`M${width * 0.1},${height * 0.4} Q${width * 0.3},${height * 0.2} ${width * 0.5},${height * 0.3} T${width * 0.9},${height * 0.2}`} 
        fill="none" 
        stroke={`${brandColor.hex}20`} 
        strokeWidth="40"
        strokeLinecap="round"
      />
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="100%" stopColor={brandColor.hex} />
        </linearGradient>
        <linearGradient id="topBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="100%" stopColor={brandColor.hex} />
        </linearGradient>
        <linearGradient id="middleBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={foundingColor} />
          <stop offset="100%" stopColor="#4CAF50" />
        </linearGradient>
        <linearGradient id="bottomBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={brandColor.hex} />
          <stop offset="100%" stopColor={foundingColor} />
        </linearGradient>
      </defs>
      
      {/* Logo elements and text - slightly different for Brand Guidelines */}
      {isBrandGuidelines ? (
        <>
          {/* Larger logo for brand guidelines page */}
          <rect x={width * 0.15} y={height * 0.37} width={width * 0.25} height={height * 0.03} rx={height * 0.015} 
            fill="url(#topBarGradient)" />
          <rect x={width * 0.15} y={height * 0.43} width={width * 0.15} height={height * 0.03} rx={height * 0.015} 
            fill="url(#middleBarGradient)" />
          <rect x={width * 0.15} y={height * 0.49} width={width * 0.25} height={height * 0.03} rx={height * 0.015} 
            fill="url(#bottomBarGradient)" />
          
          <text 
            x={width * 0.5} 
            y={height * 0.47} 
            fontFamily="Montserrat, sans-serif" 
            fontSize={height * 0.1} 
            fontWeight="bold" 
            fill="url(#topBarGradient)"
            textAnchor="middle"
          >
            ENABLER
          </text>
          
          <text 
            x={width * 0.5} 
            y={height * 0.6} 
            fontFamily="Noto Sans JP, sans-serif" 
            fontSize={height * 0.05} 
            fontWeight="bold" 
            fill="#333333" 
            textAnchor="middle"
          >
            ブランドガイドライン
          </text>
        </>
      ) : (
        <>
          {/* Standard logo for other pages */}
          <rect x={width * 0.2} y={height * 0.4} width={width * 0.2} height={height * 0.02} rx={height * 0.01} 
            fill="url(#topBarGradient)" />
          <rect x={width * 0.2} y={height * 0.45} width={width * 0.15} height={height * 0.02} rx={height * 0.01} 
            fill="url(#middleBarGradient)" />
          <rect x={width * 0.2} y={height * 0.5} width={width * 0.2} height={height * 0.02} rx={height * 0.01} 
            fill="url(#bottomBarGradient)" />
          
          <text 
            x={width * 0.43} 
            y={height * 0.47} 
            fontFamily="Montserrat, sans-serif" 
            fontSize={height * 0.09} 
            fontWeight="bold" 
            fill="url(#topBarGradient)"
          >
            ENABLER
          </text>
          
          <text 
            x={width * 0.5} 
            y={height * 0.6} 
            fontFamily="Noto Sans JP, sans-serif" 
            fontSize={height * 0.04} 
            fontWeight="normal" 
            fill="#333333" 
            textAnchor="middle"
          >
            イノベーションで未来を創造する
          </text>
        </>
      )}
    </svg>
  );
};

export default OGImage;
