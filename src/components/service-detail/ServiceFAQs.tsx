
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
  const isPortfolio = serviceName === 'StayFlow Portfolio';
  
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
          ) : isPortfolio ? (
            <>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                  StayFlow Portfolioはどのような人向けのサービスですか？
                </h3>
                <div className="ml-8">
                  <p className="text-gray-700">StayFlow Portfolioは、日常から離れた特別な空間で、自分だけの時間を大切にしたい方向けのサービスです。一般的な宿泊施設ではなく、「もう一度訪れたい」と思える特別な場所で、まるで自分の別荘のようにリラックスした滞在を望む方に最適です。</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                  メンバーシップに加入するメリットは何ですか？
                </h3>
                <div className="ml-8">
                  <p className="text-gray-700">メンバーシップにご加入いただくと、厳選された特別な物件への優先予約権、会員限定イベントへの参加、専属コンシェルジュによるパーソナライズされたサービスなど、さまざまな特典をご利用いただけます。プランによって特典内容は異なりますので、詳細はプラン詳細をご覧ください。</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                  物件はどのような基準で選ばれているのですか？
                </h3>
                <div className="ml-8">
                  <p className="text-gray-700">ロケーション、デザイン、快適性、独自性など、複数の厳格な基準で物件を評価しています。一般的な宿泊施設とは一線を画す、時間をかけて訪れる価値のある特別な空間のみを厳選してご紹介しています。数よりも質を重視し、それぞれの物件が持つ物語や魅力を大切にしています。</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                  予約から滞在までの流れを教えてください。
                </h3>
                <div className="ml-8">
                  <p className="text-gray-700">会員専用サイトから希望の物件を選び、日程を指定して予約します。予約確定後、滞在に関する詳細情報や特別なリクエストなどを専属コンシェルジュがお伺いします。チェックイン時には、物件ごとに異なる入室方法をご案内し、あとはご自身の別荘のようにリラックスしてお過ごしいただけます。</p>
                </div>
              </div>
            </>
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
