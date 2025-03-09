
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Info, Copy, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LogoVariations from './LogoVariations';
import { companyInfo } from '@/lib/data';

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

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`,
    });
  };

  // Calculate logo SVG code using the current year's color
  const logoSvgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${currentYearColor.hex}" />
      <stop offset="100%" stop-color="${currentYearColor.hex}CC" />
    </linearGradient>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${currentYearColor.hex}" />
      <stop offset="100%" stop-color="${currentYearColor.hex}CC" />
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
      <section className="mb-6 md:mb-12">
        <div className="flex items-center mb-3 md:mb-5">
          <Info className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. ロゴについて</h2>
        </div>
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-subtle">
          <p className="text-base md:text-lg mb-3 md:mb-5 leading-relaxed">
            {companyInfo.logoDescription}
            現在は{currentYearColor.year}年のブランドカラー（{currentYearColor.name}: {currentYearColor.hex}）を使用しています。
          </p>
          
          <div className="mb-5 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ロゴの公式バリエーション</h3>
            
            {/* 設立時のロゴを小さく表示 */}
            <div className="flex justify-start items-center mb-4 bg-gray-50 p-2 rounded-lg">
              <div className="mr-3 flex items-center justify-center h-12 w-24">
                <LogoVariations variant="foundingLogo" size="sm" year={2022} />
              </div>
              <div className="text-xs md:text-sm">
                <p className="font-medium">設立時オリジナルロゴ（2022年）</p>
                <p className="text-gray-600">会社設立時に使用された初期デザイン</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
              <div className="bg-gray-50 p-2 md:p-3 rounded-lg flex flex-col items-center">
                <div className="bg-white p-2 md:p-3 rounded-md shadow-sm w-full h-16 md:h-20 flex items-center justify-center mb-2">
                  <LogoVariations variant="modern" size="md" year={currentYearColor.year} />
                </div>
                <p className="text-xs md:text-sm font-medium">スタンダードロゴ</p>
                <p className="text-xs text-gray-500">{currentYearColor.year}年ブランドカラー</p>
              </div>
              
              <div className="bg-gray-50 p-2 md:p-3 rounded-lg flex flex-col items-center">
                <div className="bg-white p-2 md:p-3 rounded-md shadow-sm w-full h-16 md:h-20 flex items-center justify-center mb-2">
                  <LogoVariations variant="monochrome" size="md" year={currentYearColor.year} />
                </div>
                <p className="text-xs md:text-sm font-medium">モノクロロゴ</p>
                <p className="text-xs text-gray-500">単色使用向け</p>
              </div>
              
              <div className="bg-gray-50 p-2 md:p-3 rounded-lg flex flex-col items-center">
                <div className="bg-white p-2 md:p-3 rounded-md shadow-sm w-full h-16 md:h-20 flex items-center justify-center mb-2">
                  <LogoVariations variant="gradient" size="md" year={currentYearColor.year} />
                </div>
                <p className="text-xs md:text-sm font-medium">グラデーションロゴ</p>
                <p className="text-xs text-gray-500">デジタルメディア向け</p>
              </div>
              
              <div className="bg-gray-50 p-2 md:p-3 rounded-lg flex flex-col items-center">
                <div className="bg-white p-2 md:p-3 rounded-md shadow-sm w-full h-16 md:h-20 flex items-center justify-center mb-2">
                  <LogoVariations variant="outline" size="md" year={currentYearColor.year} />
                </div>
                <p className="text-xs md:text-sm font-medium">アウトラインロゴ</p>
                <p className="text-xs text-gray-500">透かし・薄い表現向け</p>
              </div>
              
              <div className="bg-gray-50 p-2 md:p-3 rounded-lg flex flex-col items-center">
                <div className="bg-gray-900 p-2 md:p-3 rounded-md shadow-sm w-full h-16 md:h-20 flex items-center justify-center mb-2">
                  <LogoVariations variant="modern" size="md" year={currentYearColor.year} />
                </div>
                <p className="text-xs md:text-sm font-medium">ダークモードロゴ</p>
                <p className="text-xs text-gray-500">暗い背景向け</p>
              </div>
              
              <div className="bg-gray-50 p-2 md:p-3 rounded-lg flex flex-col items-center">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-2 md:p-3 rounded-md shadow-sm w-full h-16 md:h-20 flex items-center justify-center mb-2">
                  <LogoVariations variant="monochrome" size="md" year={currentYearColor.year} />
                </div>
                <p className="text-xs md:text-sm font-medium">背景グラデーション</p>
                <p className="text-xs text-gray-500">視認性重視</p>
              </div>
            </div>
          </div>
          
          <div className="mb-5 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ロゴのSVGデータ</h3>
            <div className="bg-gray-50 p-3 rounded-lg mb-3">
              <div className="mb-3 md:mb-4 flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="mb-3 md:mb-0 flex items-center justify-center h-12">
                  <LogoVariations variant="modern" size="md" year={currentYearColor.year} />
                </div>
                <button 
                  className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md flex items-center text-xs md:text-sm transition-colors"
                  onClick={() => copyToClipboard(logoSvgCode, 'SVGコード')}
                >
                  <Copy className="w-3.5 h-3.5 mr-1.5" /> SVGコードをコピー
                </button>
              </div>
              <div className="w-full h-36 md:h-40 overflow-x-auto bg-gray-100 p-2 md:p-3 rounded-md">
                <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
                  {logoSvgCode}
                </pre>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {companyInfo.gradientMeaning}
            </p>
          </div>
          
          <div className="mb-3 md:mb-5">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ロゴ使用ガイドライン</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li className="text-sm md:text-base">現在のブランドカラー（2025年）：{companyInfo.currentColor}</li>
              <li className="text-sm md:text-base">{companyInfo.logoUsageGuidelines}</li>
              <li className="text-sm md:text-base">ロゴの変形や色の自由な変更は厳禁。</li>
              <li className="text-sm md:text-base">常に公式バリエーションのいずれかを使用し、会社のブランドの一貫性を保つこと。</li>
            </ul>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default LogoSection;
