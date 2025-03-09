
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
            現在は{currentYearColor.year}年のブランドカラー（{currentYearColor.name}: {currentYearColor.hex}）を使用しています。
            ロゴのグラデーションは創業時（2022年）のカラーから現在のカラーへと変化します。
          </p>
          
          <div className="mb-5 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ロゴの公式バリエーション</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
              <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
                <div className="bg-white p-3 rounded-md shadow-sm w-full h-20 md:h-24 flex items-center justify-center mb-2">
                  <LogoVariations variant="modern" size="md" year={currentYear} />
                </div>
                <p className="text-sm font-medium">スタンダードロゴ</p>
                <p className="text-xs text-gray-500">創業年→現在のグラデーション</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
                <div className="bg-white p-3 rounded-md shadow-sm w-full h-20 md:h-24 flex items-center justify-center mb-2">
                  <LogoVariations variant="monochrome" size="md" year={currentYear} />
                </div>
                <p className="text-sm font-medium">モノクロロゴ</p>
                <p className="text-xs text-gray-500">単色使用向け</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
                <div className="bg-white p-3 rounded-md shadow-sm w-full h-20 md:h-24 flex items-center justify-center mb-2">
                  <LogoVariations variant="gradient" size="md" year={currentYear} />
                </div>
                <p className="text-sm font-medium">グラデーションロゴ</p>
                <p className="text-xs text-gray-500">デジタルメディア向け</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
                <div className="bg-white p-3 rounded-md shadow-sm w-full h-20 md:h-24 flex items-center justify-center mb-2">
                  <LogoVariations variant="outline" size="md" year={currentYear} />
                </div>
                <p className="text-sm font-medium">アウトラインロゴ</p>
                <p className="text-xs text-gray-500">透かし・薄い表現向け</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
                <div className="bg-gray-900 p-3 rounded-md shadow-sm w-full h-20 md:h-24 flex items-center justify-center mb-2">
                  <LogoVariations variant="modern" size="md" year={currentYear} />
                </div>
                <p className="text-sm font-medium">ダークモードロゴ</p>
                <p className="text-xs text-gray-500">暗い背景向け</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-md shadow-sm w-full h-20 md:h-24 flex items-center justify-center mb-2">
                  <LogoVariations variant="monochrome" size="md" year={currentYear} />
                </div>
                <p className="text-sm font-medium">背景グラデーション</p>
                <p className="text-xs text-gray-500">視認性重視</p>
              </div>
            </div>
          </div>
          
          <div className="mb-5 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ロゴのSVGデータ</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <div className="mb-4 flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="mb-3 md:mb-0 flex items-center justify-center h-16">
                  <LogoVariations variant="modern" size="md" year={currentYear} />
                </div>
                <button 
                  className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md flex items-center text-sm transition-colors"
                  onClick={() => copyToClipboard(logoSvgCode, 'SVGコード')}
                >
                  <Copy className="w-4 h-4 mr-2" /> SVGコードをコピー
                </button>
              </div>
              <div className="w-full h-40 md:h-48 overflow-x-auto bg-gray-100 p-3 rounded-md">
                <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
                  {logoSvgCode}
                </pre>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              {companyInfo.gradientMeaning}
            </p>
          </div>
          
          <div className="mb-3 md:mb-5">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ロゴ使用ガイドライン</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-sm md:text-base">創業カラー（2022年）：#22B6FF</li>
              <li className="text-sm md:text-base">現在のブランドカラー（{currentYear}年）：{currentYearColor.hex}</li>
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
