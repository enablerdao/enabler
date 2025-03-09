
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { BookOpen } from 'lucide-react';

const BrandStory = () => {
  return (
    <MotionBox delay={200}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <BookOpen className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">1. ブランドストーリーと理念</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-4 leading-relaxed">
            「Enabler（イネブラ）」は、人々が持つ可能性をテクノロジーの力で優しく引き出し、実現するために2022年に誕生しました。
          </p>
          <p className="text-lg leading-relaxed">
            誰もが持っている可能性の種を育て、未来をともに創るパートナーとして、あたたかな視点で寄り添い続けています。
          </p>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandStory;
