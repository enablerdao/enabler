
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import CollaborationMessage from './CollaborationMessage';
import SocialLinks from './SocialLinks';
import ServiceLinks from './ServiceLinks';
import IdeaSubmissionForm from './IdeaSubmissionForm';
import NewsletterForm from './NewsletterForm';

const ConnectLinks = () => {
  return (
    <MotionBox delay={500}>
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-enabler-800">一緒に未来を創りませんか？</h2>
          <div className="h-px flex-grow bg-gray-200 ml-4"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          {/* 社会貢献と協力のメッセージ */}
          <CollaborationMessage />
          
          {/* フォローリンク */}
          <SocialLinks />
          
          {/* サービスリンク */}
          <ServiceLinks />
        </div>
        
        {/* アイデア共有とニュースレターフォームを分離 */}
        <div className="mt-10 bg-enabler-50 p-6 rounded-lg border border-enabler-100">
          <div className="grid md:grid-cols-2 gap-8">
            {/* アイデア投稿フォーム */}
            <div>
              <IdeaSubmissionForm />
            </div>

            {/* Newsletter Signup Form */}
            <div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </MotionBox>
  );
};

export default ConnectLinks;
