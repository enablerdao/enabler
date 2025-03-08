
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { MessageSquare } from 'lucide-react';

const FounderIntro = () => {
  return (
    <MotionBox delay={100}>
      <div className="bg-white rounded-xl shadow-subtle p-8 mb-10 border border-enabler-100 hover:shadow-md transition-all">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-5 border-2 border-enabler-200">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" 
              alt="濱田 優貴" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">濱田 優貴</h3>
            <p className="text-enabler-600">創業者 / CEO</p>
          </div>
        </div>

        <div className="space-y-6 text-gray-700">
          <div className="flex items-start">
            <MessageSquare className="text-enabler-500 mr-3 mt-1 flex-shrink-0" size={20} />
            <p>
              「テクノロジーで一人ひとりの可能性を広げる」をミッションに掲げ、人々の毎日をより楽しく、便利にするサービスや空間を創造しています。
            </p>
          </div>
        </div>
      </div>
    </MotionBox>
  );
};

export default FounderIntro;
