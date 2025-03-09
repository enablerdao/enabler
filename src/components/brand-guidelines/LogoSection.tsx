
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

const LogoSection = ({
  currentYearColor
}: LogoSectionProps) => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();
  const foundingYear = 2022;
  
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`
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
      <section className="mb-6 md:mb-12 md:px-0 px-0">
        <div className="flex items-center mb-3 md:mb-5">
          <Info className="text-enabler-600 mr-2 md:mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. ロゴについて</h2>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-subtle px-[13px] mx-0">
          <p className="text-base md:text-lg mb-4 md:mb-5 leading-relaxed">
            ロゴは鮮やかなブルーを基調とし、毎年少しずつ色調が明るく変化するように設計されています。色の変化は創業年（2022年）を起点とし、数学的な関数で表現されます。
            現在は{currentYearColor.year}年のブランドカラー（
            <span className="px-2 py-1 rounded" style={{
              backgroundColor: currentYearColor.hex,
              color: isLightColor(currentYearColor.hex) ? '#000' : '#fff'
            }}>
              {currentYearColor.name}: {currentYearColor.hex}
            </span>）を使用しています。
            ロゴのグラデーションは創業時（2022年）のカラーから現在のカラーへと変化します。
          </p>
          
          <div className="mb-3 md:mb-5">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">ロゴ使用ガイドライン</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-sm md:text-base">創業カラー（2022年）：
                <span className="px-2 py-1 rounded text-white" style={{
                  backgroundColor: '#22B6FF'
                }}>
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
              <li className="text-sm md:text-base">ロゴの周りには適切な余白を設け、他の要素と重ならないようにしてください。</li>
              <li className="text-sm md:text-base">ロゴは変形せず、公式の比率を維持してください。</li>
              <li className="text-sm md:text-base">ロゴの色は公式ガイドラインに従ってください。</li>
            </ul>
          </div>
          
          <div className="my-4">
            <h3 className="text-lg md:text-xl font-semibold mb-4 border-b pb-2">ロゴの3本線の意味</h3>
            <div className="w-full max-w-md mx-auto my-5">
              <svg
                viewBox="0 0 200 70"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="upperLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22B6FF" />
                    <stop offset="100%" stopColor={currentYearColor.hex} />
                  </linearGradient>
                  <linearGradient id="middleLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22B6FF" />
                    <stop offset="100%" stopColor="#4CAF50" />
                  </linearGradient>
                  <linearGradient id="lowerLineGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#22B6FF" />
                    <stop offset="100%" stopColor={currentYearColor.hex} />
                  </linearGradient>
                </defs>
                <rect width="200" height="70" fill="#fff" fillOpacity="0" />
                <rect x="15" y="25" width="60" height="3" rx="1.5" fill="url(#upperLineGradient)" />
                <rect x="15" y="33" width="40" height="3" rx="1.5" fill="url(#middleLineGradient)" />
                <rect x="15" y="41" width="60" height="3" rx="1.5" fill="url(#lowerLineGradient)" />
                <text x="90" y="40" fontFamily="Consolas, monospace" fontSize="18" letterSpacing="0.5" fontWeight="bold" fill="url(#upperLineGradient)">ENABLER</text>
              </svg>
            </div>

            <ul className="list-disc pl-5 space-y-2">
              <li className="text-sm md:text-base"><strong>上の線</strong>: 創業カラーから現在のブランドカラーへのグラデーション。成長の軌跡を表現しています。</li>
              <li className="text-sm md:text-base"><strong>中央の線</strong>: 創業カラーから特別アクセントカラーへのグラデーション。黄金比に基づく調和を表現しています。</li>
              <li className="text-sm md:text-base"><strong>下の線</strong>: 現在のブランドカラーから創業カラーへのグラデーション。原点への敬意と初心を忘れない姿勢を示しています。</li>
            </ul>
          </div>

          <h3 className="text-lg md:text-xl font-semibold mb-4 border-b pb-2">ロゴ年次変遷（2022年〜）</h3>
          <p className="text-sm md:text-base mb-4">ブランドカラーは毎年変化し、特別な年には特別なアクセントカラーが追加されます。</p>
          
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
