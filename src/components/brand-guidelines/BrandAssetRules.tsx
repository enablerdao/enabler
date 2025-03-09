
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { BookOpen } from 'lucide-react';

const BrandAssetRules = () => {
  return (
    <MotionBox delay={800}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <BookOpen className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">7. ブランド資産使用ルール</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <p className="text-lg">
            ロゴやブランドカラーを外部利用する場合は、公式のロゴファイル（SVG、PNG）を使用し、必ずガイドラインを遵守してください。
          </p>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandAssetRules;
