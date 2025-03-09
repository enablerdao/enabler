import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { calculateColorForYear, calculateSpecialAccentColor } from './color-utils/color-calculator';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

const InfiniteLogoScroller: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [visibleYears, setVisibleYears] = useState<number[]>([]);
  const { toast } = useToast();
  const [zoomLevel, setZoomLevel] = useState(3); // 1-5 scale, start at medium (3)
  
  const startingYear = 2025; // Starting from 2025
  const foundingYear = 2022; // For reference to founding color
  const foundingColor = calculateColorForYear(foundingYear);
  
  // Calculate initial number of visible years based on zoom level
  const getInitialYearCount = () => {
    // Exponentially increase the number of logos at lower zoom levels
    if (zoomLevel <= 1) {
      return 150; // Significantly more logos at lowest zoom
    } else if (zoomLevel === 2) {
      return 60; // Many logos at zoom level 2
    } else {
      // Original behavior for higher zoom levels
      const baseCount = 30;
      return baseCount * (6 - zoomLevel); // Inverse relationship: lower zoom = more logos
    }
  };
  
  // Initialize with years based on zoom level
  useEffect(() => {
    const yearCount = getInitialYearCount();
    const initialYears = Array.from(
      { length: yearCount }, 
      (_, i) => startingYear + i
    );
    setVisibleYears(initialYears);
  }, [zoomLevel]);
  
  // Handle scrolling
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    
    // If we're close to the end, add more years
    if (scrollWidth - (scrollLeft + clientWidth) < 500) {
      const lastYear = visibleYears[visibleYears.length - 1];
      // Add many more logos at once when zoomed out
      const newYearsCount = zoomLevel <= 1 ? 100 : (zoomLevel === 2 ? 50 : Math.max(10, Math.floor(50 / zoomLevel)));
      const newYears = Array.from(
        { length: newYearsCount }, 
        (_, i) => lastYear + i + 1
      );
      setVisibleYears(prev => [...prev, ...newYears]);
      setShowRightArrow(true);
    }
  };
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [visibleYears, zoomLevel]);
  
  // Handle arrow navigation
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 500; // Larger scroll amount
    const currentScroll = scrollContainerRef.current.scrollLeft;
    
    scrollContainerRef.current.scrollTo({
      left: direction === 'left' 
        ? Math.max(0, currentScroll - scrollAmount) 
        : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };
  
  // Copy logo SVG code to clipboard
  const copySVG = (year: number) => {
    const svgElement = document.getElementById(`infinite-logo-${year}`);
    if (!svgElement) return;
    
    const svgData = new XMLSerializer().serializeToString(svgElement);
    navigator.clipboard.writeText(svgData);
    
    toast({
      title: "SVGコードをコピーしました",
      description: `${year}年版のロゴSVGコードをクリップボードにコピーしました。`,
    });
  };
  
  // Copy color code to clipboard
  const copyColor = (color: string, year: number) => {
    navigator.clipboard.writeText(color);
    
    toast({
      title: "カラーコードをコピーしました",
      description: `${year}年版のカラーコード「${color}」をクリップボードにコピーしました。`,
    });
  };
  
  // Handle touch swipe for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      scroll(diff > 0 ? 'right' : 'left');
    }
    
    setTouchStart(null);
  };
  
  // Handle zoom in/out
  const handleZoom = (direction: 'in' | 'out') => {
    setZoomLevel(prev => {
      if (direction === 'in') {
        return Math.min(prev + 1, 5); // Max zoom level is 5
      } else {
        return Math.max(prev - 1, 1); // Min zoom level is 1
      }
    });
  };
  
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
  
  // Calculate gap between cards
  const getGap = () => {
    if (zoomLevel <= 1) {
      return '2px'; // Minimal gap at lowest zoom
    } else if (zoomLevel === 2) {
      return '4px'; // Small gap at zoom level 2
    } else {
      return `${8 * (zoomLevel / 3)}px`; // Normal gap at higher zoom levels
    }
  };
  
  // Determine if we should show detailed information based on zoom level
  const shouldShowDetails = () => {
    return zoomLevel >= 3; // Show details only at zoom level 3 and above
  };
  
  // Get container style based on zoom level
  const getContainerStyle = () => {
    if (zoomLevel <= 1) {
      // For lowest zoom level, use dense grid layout with many tiny logos
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${getCardWidth()}, 1fr))`,
        gap: getGap(),
        overflowX: 'auto' as const,
        overflowY: 'auto' as const,
        maxHeight: '400px',
      };
    } else if (zoomLevel === 2) {
      // For zoom level 2, use a less dense grid but still compact
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${getCardWidth()}, 1fr))`,
        gap: getGap(),
        overflowX: 'auto' as const,
        overflowY: 'auto' as const,
        maxHeight: '400px',
      };
    } else {
      // For higher zoom levels (3+), keep horizontal layout
      return {
        display: 'flex',
        flexDirection: 'row' as const,
        flexWrap: 'nowrap' as const,
        gap: getGap(),
        overflowX: 'auto' as const,
        overflowY: 'hidden' as const,
      };
    }
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
  
  // Get font size for year label in compact mode
  const getYearFontSize = () => {
    if (zoomLevel <= 1) {
      return '5px'; // Very tiny font for ultra-compact view
    } else {
      return '6px'; // Small font for normal compact view
    }
  };
  
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg mb-4 border border-blue-200">
        <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
          <div className="flex-grow">
            <h3 className="text-lg font-medium mb-1">2025年からのロゴ変遷</h3>
            <p className="text-sm text-gray-600">
              Enablerブランドの中核を維持しながら、フィボナッチ数列に基づいて進化するロゴデザインを時系列で表示しています。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div 
              className="flex items-center gap-1 px-3 py-1 rounded-md bg-white border shadow-sm hover:bg-blue-50 cursor-pointer transition-colors"
              onClick={() => copyColor(foundingColor.hex, foundingYear)}
            >
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: foundingColor.hex }}></div>
              <span className="text-xs font-medium">創業カラー: {foundingColor.hex}</span>
            </div>
            
            <div 
              className="flex items-center gap-1 px-3 py-1 rounded-md bg-white border shadow-sm hover:bg-blue-50 cursor-pointer transition-colors"
              onClick={() => copyColor(calculateColorForYear(startingYear).hex, startingYear)}
            >
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: calculateColorForYear(startingYear).hex }}></div>
              <span className="text-xs font-medium">2025年カラー: {calculateColorForYear(startingYear).hex}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600">
          {visibleYears.length > 0 && 
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-normal">
                <span className="font-semibold">{visibleYears[0]}年</span> 〜 <span className="font-semibold">{visibleYears[visibleYears.length - 1]}年</span>
              </Badge>
              <span className="text-gray-500">（{visibleYears.length}ロゴ表示中）</span>
            </div>
          }
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleZoom('out')}
            disabled={zoomLevel <= 1}
            title="縮小表示（多いロゴ）"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <div className="text-xs text-gray-500 w-5 text-center">{zoomLevel}</div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleZoom('in')}
            disabled={zoomLevel >= 5}
            title="拡大表示（少ないロゴ）"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {showLeftArrow && zoomLevel >= 3 && (
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md hidden md:flex"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      )}
      
      <div 
        ref={scrollContainerRef}
        className={`pb-10 pt-4 px-2 hide-scrollbar transition-all duration-300 ${zoomLevel <= 2 ? 'border rounded-lg bg-gray-50/50' : ''}`}
        style={getContainerStyle()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleYears.map(year => {
          const brandColor = calculateColorForYear(year);
          const accentColor = calculateSpecialAccentColor(year);
          
          // Check if this is a special year with accent color
          const isSpecialYear = accentColor.hex !== brandColor.hex;
          
          return (
            <div key={year} 
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
                    {year === startingYear && (
                      <Badge variant="outline" className="text-[0.65rem] py-0 px-1 font-normal">開始</Badge>
                    )}
                    <div 
                      className={`rounded-full cursor-pointer ${zoomLevel >= 4 ? 'w-6 h-6' : 'w-4 h-4'}`}
                      style={{ backgroundColor: brandColor.hex }}
                      onClick={() => copyColor(brandColor.hex, year)}
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
                  {zoomLevel > 1 && (
                    <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#modernGradient-infinite-${year})`}>ENABLER</text>
                  )}
                </svg>
                
                {zoomLevel <= 2 && (
                  <div 
                    className="absolute bottom-0 left-0 text-gray-500"
                    style={{ 
                      fontSize: getYearFontSize(),
                      lineHeight: '1'
                    }}
                  >
                    {year}
                  </div>
                )}
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
                      onClick={() => copyColor(accentColor.hex, year)}
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
                    onClick={() => copySVG(year)}
                  >
                    SVGコピー
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {showRightArrow && zoomLevel >= 3 && (
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md hidden md:flex"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      )}
      
      <style>
        {`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        `}
      </style>
    </div>
  );
};

export default InfiniteLogoScroller;
