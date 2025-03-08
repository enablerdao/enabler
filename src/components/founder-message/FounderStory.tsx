
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';

const FounderStory = () => {
  return (
    <MotionBox delay={400}>
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-enabler-800">創業者ストーリー</h2>
          <div className="h-px flex-grow bg-gray-200 ml-4"></div>
        </div>
        <div className="bg-gradient-to-br from-enabler-50 via-white to-enabler-50 p-6 rounded-lg border border-enabler-100 relative overflow-hidden">
          <div className="relative z-10">
            <p className="mb-4">
              創業者の濱田優貴は、東京理科大学在学中に起業した後、メルカリの創業メンバーとしてプロダクト開発や研究開発を担当しました。AIをはじめ最先端のテクノロジーやイスラエルの軍事技術まで触れ、常に新しいことに夢中になっていました。
            </p>
            <p className="mb-4">
              そんな中、自分自身の力でゼロから新しい事業を作り上げたいという強い想いが再燃し、イネブラを創業しました。自らが経済的に一定の成功を収めているからこそ、みんなが豊かになり、さらに社会全体が豊かになるという循環を作ることを目指しています。
            </p>
            <p>
              今後もStayFlowを皮切りに、生活をより良くする様々な革新的サービスを展開していく予定です。
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-enabler-100 rounded-full -mr-8 -mt-8 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-enabler-200 rounded-full -ml-10 -mb-10 opacity-30"></div>
        </div>
      </div>
    </MotionBox>
  );
};

export default FounderStory;
