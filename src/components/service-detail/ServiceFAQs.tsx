
import React from 'react';
import { FAQ } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';

interface ServiceFAQsProps {
  faqs?: FAQ[];
  serviceColor: string;
  serviceName: string;
  targetAudience?: string;
  specificAudience?: string;
}

export const ServiceFAQs = ({ faqs, serviceColor, serviceName, targetAudience, specificAudience }: ServiceFAQsProps) => {
  return (
    <MotionBox delay={750}>
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
        <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>よくある質問</h2>
        <div className="space-y-6">
          {faqs && faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                  {faq.question}
                </h3>
                <div className="ml-8">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                  このサービスはどんな人向けですか？
                </h3>
                <div className="ml-8">
                  <p className="text-gray-700">{serviceName}は{targetAudience || '新しい体験や効率化を求めるすべての方'}を対象としています。特に{specificAudience || '時間や労力を節約したい方、質の高いサービスを求める方'}におすすめです。</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                  利用開始までどのくらいの時間がかかりますか？
                </h3>
                <div className="ml-8">
                  <p className="text-gray-700">サインアップから数分で利用開始できます。必要な情報を入力するだけで、すぐにサービスのすべての機能をお使いいただけます。</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                  無料トライアルはありますか？
                </h3>
                <div className="ml-8">
                  <p className="text-gray-700">はい、14日間の無料トライアルをご用意しています。クレジットカード情報なしで、すべての機能をお試しいただけます。</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </MotionBox>
  );
};

export default ServiceFAQs;
