
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Github, Star, Shield, Code, Gift, ArrowRight, Lightbulb, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logActivity } from '@/lib/logger';

const PointsProgram = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/points-program' });
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header Section with gradient */}
            <div className="text-center mb-12">
              <div className="inline-block p-2 px-4 rounded-full bg-blue-100 text-enabler-700 font-medium text-sm mb-4">
                Enabler Points Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">
                Enabler ポイントプログラム
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-enabler-400 to-enabler-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                オープンソースへの貢献に対して価値を還元する革新的なプログラム
              </p>
            </div>
            
            {/* Introduction section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                Enablerは、すべてのサービスをオープンソースで公開しています。開発者やデザイナー、バグの発見者、セキュリティ専門家など、プロジェクトへの貢献者に感謝の気持ちを込めて「Enablerポイント」を提供します。
              </p>
            </div>

            {/* Points Acquisition */}
            <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border-l-4 border-enabler-500 border-t border-r border-b border-blue-100">
              <div className="flex items-start mb-6">
                <div className="bg-enabler-100 p-3 rounded-lg mr-4">
                  <Star className="text-enabler-600" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">ポイント獲得方法</h2>
                  <p className="text-gray-700 mb-4">以下の貢献に応じてポイントを獲得できます。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex p-4 bg-gray-50 rounded-lg">
                  <Code className="text-enabler-500 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">新しい機能の開発や価値ある改善提案</p>
                </div>
                <div className="flex p-4 bg-gray-50 rounded-lg">
                  <Wand2 className="text-enabler-500 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">魅力的なUI/UXデザインの提案</p>
                </div>
                <div className="flex p-4 bg-gray-50 rounded-lg">
                  <Lightbulb className="text-enabler-500 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">バグ報告および解決策の提示</p>
                </div>
                <div className="flex p-4 bg-gray-50 rounded-lg">
                  <Shield className="text-enabler-500 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">セキュリティ脆弱性の発見と報告</p>
                </div>
              </div>
              
              <div className="bg-enabler-50 p-4 rounded-lg text-gray-700 border-l-2 border-enabler-200">
                <p>貢献内容は明確な基準に基づいて評価され、公平かつ透明なポイント付与を行っています。</p>
              </div>
            </section>

            {/* Points Usage */}
            <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border-l-4 border-enabler-500 border-t border-r border-b border-blue-100">
              <div className="flex items-start mb-6">
                <div className="bg-enabler-100 p-3 rounded-lg mr-4">
                  <Gift className="text-enabler-600" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">ポイントの活用方法</h2>
                  <p className="text-gray-700 mb-4">獲得したポイントはEnablerが提供するサービスで様々な形で利用可能です。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 bg-enabler-100 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-enabler-600 font-medium">1</div>
                  <p className="text-gray-700">各サービスの利用料割引</p>
                </div>
                <div className="flex p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 bg-enabler-100 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-enabler-600 font-medium">2</div>
                  <p className="text-gray-700">限定コンテンツやプレミアム機能へのアクセス</p>
                </div>
                <div className="flex p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 bg-enabler-100 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-enabler-600 font-medium">3</div>
                  <p className="text-gray-700">特別なイベントやコミュニティへの招待</p>
                </div>
                <div className="flex p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 bg-enabler-100 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-enabler-600 font-medium">4</div>
                  <p className="text-gray-700">オリジナルグッズや限定特典との交換</p>
                </div>
              </div>
            </section>

            {/* Future Prospects */}
            <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border-l-4 border-enabler-500 border-t border-r border-b border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">将来的な展望</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Enablerポイントは、将来的に正式なトークン（暗号資産）へ交換可能になる予定です。このトークンは取引所への上場を目指しており、ポイント保有者には将来的な価値の向上や利益還元が期待されます。
              </p>
              
              <div className="bg-gradient-to-r from-enabler-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">安心・安全な運用</h3>
                <p className="text-gray-700">
                  Enablerポイントは、法令を遵守した安全かつ公正な仕組みで運用しています。安心してご参加ください。
                </p>
              </div>
            </section>

            {/* Join Us Section */}
            <section className="bg-gradient-to-r from-enabler-600 to-blue-700 text-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h2 className="text-2xl font-bold mb-3">参加方法</h2>
                  <p className="text-blue-50 mb-4">
                    すべてのプロジェクトはGitHubでオープンに管理されています。あなたの力がプロジェクトの未来を大きく変えます。
                  </p>
                  <p className="font-medium text-lg text-white">
                    ぜひ、私たちと共に魅力的な未来を創りましょう！
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="bg-white text-enabler-700 hover:bg-blue-50 border-none"
                  asChild
                >
                  <a href="https://github.com/enablerdao" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2" size={18} />
                    GitHubでコントリビュート
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </section>
            
            {/* FAQ or additional information could be added here */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PointsProgram;
