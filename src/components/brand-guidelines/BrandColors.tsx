
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { companyInfo } from '@/lib/data';

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
  return (
    <MotionBox delay={400}>
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">ブランドカラーシステム</h2>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              {companyInfo.logoDescription}
            </p>
            <p>
              {companyInfo.gradientMeaning}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">カラー進化の数式</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                <p>R = {companyInfo.colorFormula.r}</p>
                <p>G = {companyInfo.colorFormula.g}</p>
                <p>B = {companyInfo.colorFormula.b}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">フィボナッチ黄金比の応用</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm">
                  {companyInfo.fibonacci}
                </p>
                <div className="mt-4 font-mono text-xs">
                  {companyInfo.fibonacciGoldenAngle.formula}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">カラーパレット</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {brandColors.slice(0, 8).map((color, index) => (
                <div
                  key={color.year}
                  className="p-4 rounded-lg border border-gray-200"
                  style={{ backgroundColor: color.hex }}
                >
                  <p className="font-medium text-white mix-blend-difference">
                    {color.year}年
                  </p>
                  <p className="text-sm text-white mix-blend-difference">
                    {color.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandColors;
