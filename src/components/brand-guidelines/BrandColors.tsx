
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Palette } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { companyInfo } from '@/lib/data';
import { calculateColorForYear } from './color-utils/color-calculator';
import FoundingColorSection from './color-sections/FoundingColorSection';
import ColorMathSection from './color-sections/ColorMathSection';

interface ColorInfo {
  year: number;
  hex: string;
  name: string;
  rgb: string;
}

interface BrandColorsProps {
  currentYearColor: ColorInfo;
  brandColors: ColorInfo[];
}

const BrandColors = ({
  currentYearColor,
  brandColors
}: BrandColorsProps) => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();
  
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "コピーしました",
      description: `${label}をクリップボードにコピーしました`
    });
  };

  // Get founding year color (2022)
  const foundingYearColor = brandColors.find(color => color.year === 2022) || currentYearColor;
  
  return (
    <MotionBox delay={400}>
      <section className="mb-8 md:mb-14 px-0 md:px-4">
        <div className="flex items-center mb-4 md:mb-6">
          <Palette className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. ブランドカラー</h2>
        </div>
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-subtle w-full px-0">
          <p className="text-base md:text-lg mb-5 md:mb-6 leading-relaxed">
            Enablerのブランドカラーは創業年（2022年）を起点に年数経過で変化します。
            この色の進化は「絶え間ない成長と可能性の追求」を表しています。
          </p>
          
          <FoundingColorSection foundingYearColor={foundingYearColor} />
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Enabler ブランドカラーの進化</h3>
            <p className="text-base mb-4 leading-relaxed">
              私たちの青は「深い海」からスタートします。そこから徐々に上へと昇り、「広い空」へ、そして最終的には「無限の可能性」へとつながっていきます。
            </p>
            <p className="text-base mb-4 leading-relaxed">
              人の可能性は最初は海の底に眠る真珠のようなもの。それを見つけ、育て、やがて空高く飛ばせるようになるまで、一緒に歩んでいきたいという思いを、この「下から上へ」の色の旅に込めています。
            </p>
            <p className="text-base mb-4 leading-relaxed">
              最終的な色は、まるで宇宙から見た地球の青のように、希望と可能性に満ちた明るい青になります。
            </p>
          </div>
          
          <ColorMathSection copyToClipboard={copyToClipboard} foundingYearColor={foundingYearColor} />
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandColors;
