
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Info, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LogoVariations from './LogoVariations';
import { companyInfo } from '@/lib/data';
import YearlyLogoViewer from './YearlyLogoViewer';

interface ColorInfo {
  year: number;
  hex: string;
  name: string;
  rgb: string;
}

interface LogoSectionProps {
  currentYearColor: ColorInfo;
}

const LogoSection = ({ currentYearColor }: LogoSectionProps) => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();
  // Get founding year color (2022)
  const foundingYear = 2022;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
  };

  // Calculate logo SVG code using the founding year's color to current year's color gradient
  const logoSvgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22B6FF" />
      <stop offset="100%" stop-color="${currentYearColor.hex}" />
    </linearGradient>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22B6FF" />
      <stop offset="100%" stop-color="${currentYearColor.hex}" />
    </linearGradient>
  </defs>
  <rect width="200" height="70" fill="#fff" fill-opacity="0"/>
  <rect x="15" y="25" width="60" height="3" rx="1.5" fill="url(#lineGradient)"/>
  <rect x="15" y="33" width="40" height="3" rx="1.5" fill="url(#lineGradient)"/>
  <rect x="15" y="41" width="60" height="3" rx="1.5" fill="url(#lineGradient)"/>
  <text x="90" y="40" font-family="Consolas, monospace" font-size="18" letter-spacing="0.5" font-weight="bold" fill="url(#textGradient)">ENABLER</text>
</svg>`;

  return (
    <MotionBox delay={300}>
      <section className="mb-6 md:mb-12 px-4 md:px-0">
        <div className="flex items-center mb-3 md:mb-5">
          <Info className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. ロゴについて</h2>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-subtle">
          <p className="text-base md:text-lg mb-4 md:mb-5 leading-relaxed">
            {companyInfo.logoDescription}
            現在は{currentYearColor.year}年のブランドカラー（
            <span className="px-2 py-1 rounded" style={{ backgroundColor: currentYearColor.hex, color: isLightColor(currentYearColor.hex) ? '#000' : '#fff' }}>
              {currentYearColor.name}: {currentYearColor.hex}
            </span>）を使用しています。
            ロゴのグラデーションは創業時（2022年）のカラーから現在のカラーへと変化します。
          </p>
          
          <div className="mb-3 md:mb-5">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ロゴ使用ガイドライン</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-sm md:text-base">創業カラー（2022年）：
                <span className="px-2 py-1 rounded text-white" style={{ backgroundColor: '#22B6FF' }}>
                  #22B6FF
                </span>
              </li>
              <li className="text-sm md:text-base">現在のブランドカラー（{currentYear}年）：
                <span className="px-2 py-1 rounded" style={{ 
                  backgroundColor: currentYearColor.hex, 
                  color: isLightColor(currentYearColor.hex) ? '#000' : '#fff' 
                }}>
                  {currentYearColor.hex}
                </span>
              </li>
              <li className="text-sm md:text-base">{companyInfo.logoUsageGuidelines}</li>
              <li className="text-sm md:text-base">ロゴはブランドの象徴です。公式のガイドラインに従って正しく使用してください。</li>
              <li className="text-sm md:text-base">常に公式バリエーションのいずれかを使用し、会社のブランドの一貫性を保つことをお願いします。</li>
            </ul>
          </div>
          
          {/* Add the YearlyLogoViewer component */}
          <YearlyLogoViewer />
        </div>
      </section>
    </MotionBox>
  );
};

// Helper function to determine if a color is light or dark
const isLightColor = (color: string): boolean => {
  // Convert hex to RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate brightness (YIQ formula)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  // Return true if the color is light
  return brightness > 128;
};

export default LogoSection;
