
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';

const AboutEnabler = () => {
  return (
    <MotionBox delay={200}>
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-enabler-800">株式会社イネブラについて</h2>
          <div className="h-px flex-grow bg-gray-200 ml-4"></div>
        </div>
        <div className="bg-gradient-to-r from-enabler-50 to-white p-6 rounded-lg border border-enabler-100">
          <p className="mb-4">
            株式会社イネブラは、「テクノロジーで一人ひとりの可能性を広げる」をミッションに掲げ、人々の毎日をより楽しく、便利にするサービスや空間を創造しています。
          </p>
        </div>
      </div>
    </MotionBox>
  );
};

export default AboutEnabler;
