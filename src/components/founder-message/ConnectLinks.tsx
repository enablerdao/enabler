
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import FounderMessageSection from './FounderMessageSection';
import CollaborationMessage from './CollaborationMessage';
import SocialLinks from './SocialLinks';
import ServiceLinks from './ServiceLinks';
import ContactForms from './ContactForms';

const ConnectLinks = () => {
  return (
    <MotionBox delay={500}>
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-enabler-800">一緒に未来を創りませんか？</h2>
          <div className="h-px flex-grow bg-gray-200 ml-4"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          {/* 整理された創業者のメッセージ */}
          <FounderMessageSection />
          
          {/* 社会貢献と協力のメッセージ */}
          <CollaborationMessage />
          
          {/* フォローリンク */}
          <SocialLinks />
          
          {/* サービスリンク */}
          <ServiceLinks />

          {/* アイデア投稿とニュースレター */}
          <ContactForms />
        </div>
      </div>
    </MotionBox>
  );
};

export default ConnectLinks;
