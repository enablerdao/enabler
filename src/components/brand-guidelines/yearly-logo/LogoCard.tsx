
import React from 'react';
import { Download, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { isFibonacciSumYear } from '../logo-variants/logoUtils';

interface LogoCardProps {
  year: number;
  color: {
    hex: string;
  };
  specialAccent: {
    hex: string;
  };
  onSpecialColorClick: (color: string, year: number) => void;
}

const LogoCard: React.FC<LogoCardProps> = ({ 
  year, 
  color, 
  specialAccent,
  onSpecialColorClick 
}) => {
  const { toast } = useToast();
  
  const downloadSVG = (year: number) => {
    const svgElement = document.getElementById(`logo-svg-${year}`);
    if (!svgElement) return;
    
    // Get the SVG content
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = `enabler-logo-${year}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Release the URL object
    setTimeout(() => URL.revokeObjectURL(svgUrl), 100);
    
    // Show toast notification
    toast({
      title: "ダウンロードしました",
      description: `Enablerロゴ（${year}年版）をダウンロードしました`,
    });
  };
  
  const copySVGCode = (year: number) => {
    const svgElement = document.getElementById(`logo-svg-${year}`);
    if (!svgElement) return;
    
    // Get the SVG content
    const svgData = new XMLSerializer().serializeToString(svgElement);
    
    // Copy to clipboard
    navigator.clipboard.writeText(svgData);
    
    // Show toast notification
    toast({
      title: "コピーしました",
      description: `SVGコード（${year}年版）をクリップボードにコピーしました`,
    });
  };
  
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h4 className="text-lg font-semibold mb-2">{year}年</h4>
      
      <div className="flex flex-col space-y-3">
        <div className="relative bg-gray-50 p-4 rounded-md flex justify-center items-center h-40">
          <svg 
            id={`logo-svg-${year}`}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 200 70" 
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id={`modernGradient-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22B6FF" />
                <stop offset="100%" stopColor={color.hex} />
              </linearGradient>
              <linearGradient id={`reverseGradient-${year}`} x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor={color.hex} />
                <stop offset="100%" stopColor="#22B6FF" />
              </linearGradient>
              <linearGradient id={`middleLineGradient-${year}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22B6FF" />
                <stop offset="100%" stopColor={specialAccent.hex} />
              </linearGradient>
            </defs>
            <rect width="200" height="70" fill="#fff" fillOpacity="0"/>
            <rect x="15" y="25" width="60" height="3" rx="1.5" fill={`url(#modernGradient-${year})`}/>
            <rect x="15" y="33" width="37" height="3" rx="1.5" fill={`url(#middleLineGradient-${year})`}/>
            <rect x="15" y="41" width="60" height="3" rx="1.5" fill={`url(#reverseGradient-${year})`}/>
            <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill={`url(#modernGradient-${year})`}>ENABLER</text>
          </svg>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div 
            className="p-2 rounded cursor-pointer text-center"
            style={{ backgroundColor: color.hex, color: parseInt(color.hex.slice(1, 3), 16) > 150 ? '#000' : '#fff' }}
            onClick={() => copyToClipboard(color.hex, `ブランドカラー（${year}年）`)}
          >
            {color.hex}
          </div>
          
          {isFibonacciSumYear(year) && (
            <div 
              className="p-2 rounded cursor-pointer text-center"
              style={{ backgroundColor: specialAccent.hex, color: parseInt(specialAccent.hex.slice(1, 3), 16) > 150 ? '#000' : '#fff' }}
              onClick={() => onSpecialColorClick(specialAccent.hex, year)}
            >
              {specialAccent.hex}
            </div>
          )}
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 flex items-center justify-center gap-1"
            onClick={() => downloadSVG(year)}
          >
            <Download size={14} /> SVG保存
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 flex items-center justify-center gap-1"
            onClick={() => copySVGCode(year)}
          >
            <Copy size={14} /> コードコピー
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoCard;
