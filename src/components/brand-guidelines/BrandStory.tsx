
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { companyInfo } from '@/lib/data';

const BrandStory = () => {
  return (
    <MotionBox delay={200}>
      <section className="h-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">ブランドストーリー</h2>
        <div className="bg-white p-6 rounded-xl shadow-subtle h-full flex flex-col space-y-6">
          <div className="prose prose-lg">
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-enabler-400 pl-4">
              「テクノロジーで、一人ひとりが自然に可能性を広げられる社会をつくる。」
            </blockquote>
            <p className="mt-4">
              {companyInfo.mission}
            </p>
            <p>
              {companyInfo.vision}
            </p>
          </div>
          
          <div className="mt-auto pt-6 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">可能性</h3>
                <p className="text-sm text-blue-600">無限の潜在能力</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium text-green-800 mb-2">成長</h3>
                <p className="text-sm text-green-600">継続的な進化</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-medium text-purple-800 mb-2">創造</h3>
                <p className="text-sm text-purple-600">未来への創造</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default BrandStory;
