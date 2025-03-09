
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';

const FounderMessageSection = () => {
  return (
    <div className="mb-8 bg-enabler-50 p-6 rounded-lg border border-enabler-100">
      <h3 className="text-xl font-semibold mb-4 text-enabler-800">創業者のメッセージ</h3>
      <div className="space-y-4 text-gray-700">
        <p>
          ソフトウェアエンジニアとしての経験と建築への関心を持ち、常に新しいことに挑戦してきました。理論より実践を重視し、自らの手で作り上げることで学びを深めてきました。
        </p>
        <p>
          民泊運営を始めようとした際、多くの課題に直面し「もっと効率的な解決方法があるはずだ」という思いから、新サービス「StayFlow」の開発が始まりました。
        </p>
        <p>
          特に生成AIの登場は革命的でした。今まで何十時間もかけていた作業が、わずかな時間で実現できるようになり、テクノロジーの可能性を再認識しました。
        </p>
        <p>
          この経験から、皆さんの「あったらいいな」というアイデアを実現する会社を作りたいと考えています。小さなアイデアからでも、革新的なサービスは生まれると信じています。
        </p>
      </div>
    </div>
  );
};

export default FounderMessageSection;
