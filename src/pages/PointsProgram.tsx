
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logActivity } from '@/lib/logger';

const PointsProgram = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/points-program' });
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Enabler ポイントプログラムについて</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Enablerは、すべてのサービスをオープンソースで公開しています。開発者やデザイナー、バグの発見者、セキュリティ専門家など、プロジェクトへの貢献者に感謝の気持ちを込めて「Enablerポイント」を提供します。
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">ポイント獲得方法</h2>
              <p className="text-gray-700 mb-4">以下の貢献に応じてポイントを獲得できます。</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>新しい機能の開発や価値ある改善提案</li>
                <li>魅力的なUI/UXデザインの提案</li>
                <li>バグ報告および解決策の提示</li>
                <li>セキュリティ脆弱性の発見と報告</li>
              </ul>
              <p className="text-gray-700 mt-4">
                貢献内容は明確な基準に基づいて評価され、公平かつ透明なポイント付与を行っています。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">ポイントの活用方法</h2>
              <p className="text-gray-700 mb-4">獲得したポイントはEnablerが提供するサービスで様々な形で利用可能です。</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>各サービスの利用料割引</li>
                <li>限定コンテンツやプレミアム機能へのアクセス</li>
                <li>特別なイベントやコミュニティへの招待</li>
                <li>オリジナルグッズや限定特典との交換</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">将来的な展望</h2>
              <p className="text-gray-700">
                Enablerポイントは、将来的に正式なトークン（暗号資産）へ交換可能になる予定です。このトークンは取引所への上場を目指しており、ポイント保有者には将来的な価値の向上や利益還元が期待されます。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">安心・安全な運用</h2>
              <p className="text-gray-700">
                Enablerポイントは、法令を遵守した安全かつ公正な仕組みで運用しています。安心してご参加ください。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">参加方法</h2>
              <p className="text-gray-700 mb-6">
                すべてのプロジェクトはGitHubでオープンに管理されています。あなたの力がプロジェクトの未来を大きく変えます。
              </p>

              <div className="bg-gray-100 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <Github className="text-gray-800 mr-3" size={24} />
                  <p className="text-gray-800 font-medium">
                    ぜひ、私たちと共に魅力的な未来を創りましょう！
                  </p>
                </div>
                <Button 
                  variant="default" 
                  className="bg-enabler-600 hover:bg-enabler-700"
                  asChild
                >
                  <a href="https://github.com/enabler-jp" target="_blank" rel="noopener noreferrer">
                    GitHubでコントリビュート
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PointsProgram;
