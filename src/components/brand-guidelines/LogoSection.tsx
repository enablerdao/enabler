
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Info } from 'lucide-react';
import Logo from '@/components/Logo';

const LogoSection = ({ fixedHex }: { fixedHex: string }) => {
  return (
    <MotionBox delay={300}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <Info className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">2. ロゴについて</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <p className="text-lg mb-6 leading-relaxed">
            ロゴは鮮やかなブルーを基調とし、2022年に設立された際に定められた色を使用しています。この色は会社の原点と理念を表現しています。
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">ロゴのSVGデータ</h3>
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <Logo variant="svg" size="lg" />
              </div>
              <div className="w-full md:w-1/2 overflow-x-auto">
                <pre className="text-xs bg-gray-100 p-4 rounded-md">
                  {`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70">
  <defs>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22B6FF" />
      <stop offset="100%" stop-color="#1E90FF" />
    </linearGradient>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22B6FF" />
      <stop offset="100%" stop-color="#1E90FF" />
    </linearGradient>
  </defs>
  <rect width="200" height="70" fill="#fff"/>
  <rect x="15" y="25" width="60" height="3" rx="1.5" fill="url(#lineGradient)"/>
  <rect x="15" y="33" width="40" height="3" rx="1.5" fill="url(#lineGradient)"/>
  <rect x="15" y="41" width="60" height="3" rx="1.5" fill="url(#lineGradient)"/>
  <text x="90" y="40" font-family="Consolas" font-size="18" letter-spacing="0.5" font-weight="bold" fill="url(#textGradient)">ENABLER</text>
</svg>`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">グラデーションの意味</h3>
            <p className="text-lg mb-4 leading-relaxed">
              ロゴのグラデーションは、「可能性の広がり」と「未来へ向かう進化」を象徴しています。
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>ブランドカラー：{fixedHex}（2022年の設立時に定められた不変の色）</li>
              <li>ロゴ使用時の余白：ロゴの高さの1/3程度を空け、他の要素との重なりを避ける。</li>
              <li>ロゴの変形や色の自由な変更は厳禁。</li>
            </ul>
          </div>
        </div>
      </section>
    </MotionBox>
  );
};

export default LogoSection;
