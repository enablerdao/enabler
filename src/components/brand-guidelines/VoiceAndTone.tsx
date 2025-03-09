
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { MessageSquare } from 'lucide-react';

const VoiceAndTone = () => {
  return (
    <MotionBox delay={700}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <MessageSquare className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">6. ボイス＆トーン</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-4">
            コミュニケーションでは、「親しみやすさ」「共感」「前向きさ」を大切にします。
          </p>
          <div className="p-4 bg-red-50 rounded-lg border border-red-100">
            <p className="font-medium text-red-800 mb-2">避ける表現：</p>
            <ul className="list-disc pl-6 space-y-1 text-red-700">
              <li>否定的</li>
              <li>威圧的</li>
              <li>曖昧さ</li>
            </ul>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default VoiceAndTone;
