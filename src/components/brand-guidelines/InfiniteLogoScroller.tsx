
import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { calculateColorForYear, calculateSpecialAccentColor } from './color-utils/color-calculator';
import { useToast } from '@/hooks/use-toast';

const InfiniteLogoScroller: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [visibleYears, setVisibleYears] = useState<number[]>([]);
  const { toast } = useToast();
  const [zoomLevel, setZoomLevel] = useState(3); // 1-5 scale, start at medium (3)
  
  const startingYear = 2025; // Changed from 2022 to 2025
  // Calculate initial number of visible years based on zoom level
  const getInitialYearCount = () => {
    const baseCount = 30;
    return baseCount * (6 - zoomLevel); // Inverse relationship: lower zoom = more logos
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
      const newYearsCount = Math.max(10, Math.floor(50 / zoomLevel)); // More years added at lower zoom
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
    const baseWidth = 64; // 16rem = 64 in tailwind
    return `${baseWidth * (zoomLevel / 3)}px`;
  };
  
  // Calculate card height based on zoom level
  const getCardHeight = () => {
    // Start with fixed height at zoom level 3, then scale proportionally
    return `${230 * (zoomLevel / 3)}px`;
  };
  
  // Calculate gap between cards
  const getGap = () => {
    return `${4 * (zoomLevel / 3)}px`;
  };
  
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          {visibleYears.length > 0 && 
            `${visibleYears[0]}年 〜 ${visibleYears[visibleYears.length - 1]}年 (${visibleYears.length}ロゴ表示中)`
          }
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleZoom('out')}
            disabled={zoomLevel <= 1}
            title="拡大表示（少ないロゴ）"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleZoom('in')}
            disabled={zoomLevel >= 5}
            title="縮小表示（多いロゴ）"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {showLeftArrow && (
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
        className="flex overflow-x-auto pb-10 pt-4 px-2 hide-scrollbar transition-all duration-300"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          gap: getGap()
        }}
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
              className="flex-shrink-0 bg-white rounded-lg shadow-sm border flex flex-col transition-all duration-300"
              style={{ 
                width: getCardWidth(),
                height: getCardHeight(),
                padding: `${zoomLevel * 2}px`
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className={`font-semibold ${zoomLevel >= 3 ? 'text-lg' : 'text-sm'}`}>{year}年</h3>
                <div 
                  className={`rounded-full cursor-pointer ${zoomLevel >= 3 ? 'w-6 h-6' : 'w-4 h-4'}`}
                  style={{ backgroundColor: brandColor.hex }}
                  onClick={() => copyColor(brandColor.hex, year)}
                  title="クリックしてコピー"
                />
              </div>
              
              <div className="bg-gray-50 rounded-md p-2 flex justify-center items-center flex-grow mb-2">
                <svg 
                  id={`infinite-logo-${year}`}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 200 70" 
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id={`modernGradient-infinite-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22B6FF" />
                      <stop offset="100%" stopColor={brandColor.hex} />
                    </linearGradient>
                    <linearGradient id={`reverseGradient-infinite-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor={brandColor.hex} />
                      <stop offset="100%" stopColor="#22B6FF" />
                    </linearGradient>
                    <linearGradient id={`middleLineGradient-infinite-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22B6FF" />
                      <stop offset="100%" stopColor={isSpecialYear ? accentColor.hex : brandColor.hex} />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
                  <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#modernGradient-infinite-${year})`}/>
                  <rect x="15" y="33" width="37" height="3" rx="1.5" fill={`url(#middleLineGradient-infinite-${year})`}/>
                  <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-infinite-${year})`}/>
                  <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#modernGradient-infinite-${year})`}>ENABLER</text>
                </svg>
              </div>
              
              {zoomLevel >= 3 && (
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
      
      {showRightArrow && (
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
        `}
      </style>
    </div>
  );
};

export default InfiniteLogoScroller;
