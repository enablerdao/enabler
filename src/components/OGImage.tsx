
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
  
  // パスに基づいてページタイトルを決定
  const getTitle = () => {
    if (path.includes('brand-guidelines')) {
      return 'ブランドガイドライン';
    }
    return 'ENABLER';
  };
  
  // パスに基づいてタグラインを決定
  const getTagline = () => {
    if (path.includes('brand-guidelines')) {
      return 'ブランドの一貫性と発展性を両立';
    }
    return 'イノベーションで未来を創造する';
  };
  
  const title = getTitle();
  const tagline = getTagline();
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* Background */}
      <rect width={width} height={height} fill="#FFFFFF" />
      
      {/* Decorative elements */}
      <circle cx={width * 0.85} cy={height * 0.3} r={height * 0.2} 
        fill={`${brandColor.hex}20`} />
      <circle cx={width * 0.2} cy={height * 0.8} r={height * 0.15} 
        fill={`${foundingColor}15`} />
      
      {/* Gradient definitions */}
      <defs>
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
      
      {/* Logo bars - enlarged for OGP visibility */}
      <rect x={width * 0.2} y={height * 0.4} width={width * 0.2} height={height * 0.02} rx={height * 0.01} 
        fill="url(#topBarGradient)" />
      <rect x={width * 0.2} y={height * 0.45} width={width * 0.15} height={height * 0.02} rx={height * 0.01} 
        fill="url(#middleBarGradient)" />
      <rect x={width * 0.2} y={height * 0.5} width={width * 0.2} height={height * 0.02} rx={height * 0.01} 
        fill="url(#bottomBarGradient)" />
      
      {/* Title text with dynamic content */}
      <text 
        x={width * 0.43} 
        y={height * 0.47} 
        fontFamily="Montserrat, sans-serif" 
        fontSize={height * 0.09} 
        fontWeight="bold" 
        fill="url(#topBarGradient)"
      >
        {title}
      </text>
      
      {/* Tagline text with dynamic content */}
      <text 
        x={width * 0.5} 
        y={height * 0.6} 
        fontFamily="Inter, sans-serif" 
        fontSize={height * 0.04} 
        fontWeight="normal" 
        fill="#333333" 
        textAnchor="middle"
      >
        {tagline}
      </text>
    </svg>
  );
};

export default OGImage;
