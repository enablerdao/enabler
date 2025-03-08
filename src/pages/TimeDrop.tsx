
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { logActivity } from '@/lib/logger';
import { MotionBox } from '@/components/ui/motion-box';
import { Button } from '@/components/ui/button';
import { Clock, Rocket, DollarSign, Smartphone, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TimeDrop = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/timedrop' });
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-block p-2 px-4 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-4">
                TimeDrop | タイムドロップ
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">
                突然の「泊まりたい！」を<br />最高のチャンスに変える
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-6 rounded-full"></div>
            </div>
            
            {/* Mission Section */}
            <MotionBox delay={100} className="mb-12">
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-orange-100">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Rocket className="text-orange-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">🚩 ミッション</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  「今日泊まりたい人」と「今日迎えたい場所」をつなぎ、毎日にちょっとしたワクワクと豊かさを届ける。
                </p>
              </div>
            </MotionBox>
            
            {/* Vision Section */}
            <MotionBox delay={200} className="mb-12">
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-orange-100">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Star className="text-orange-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">🌎 ビジョン</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  空室から生まれる「新しい体験」と「心温まる交流」を広げ、人にも地球にもやさしい宿泊文化を育てる。
                </p>
              </div>
            </MotionBox>
            
            {/* Key Features */}
            <MotionBox delay={300} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">主な機能</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <DollarSign className="text-orange-600" size={20} />
                    </div>
                    <h3 className="font-bold text-gray-800">ダイナミックプライシング</h3>
                  </div>
                  <p className="text-gray-700">
                    需要と供給に応じて最適な価格を自動設定。最大限の収益を実現します。
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <Smartphone className="text-orange-600" size={20} />
                    </div>
                    <h3 className="font-bold text-gray-800">スピード予約</h3>
                  </div>
                  <p className="text-gray-700">
                    3タップで予約完了。直感的なUIで迷わず予約可能です。
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <Clock className="text-orange-600" size={20} />
                    </div>
                    <h3 className="font-bold text-gray-800">リアルタイム通知</h3>
                  </div>
                  <p className="text-gray-700">
                    希望エリアの空室情報をリアルタイムでお知らせします。
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <Star className="text-orange-600" size={20} />
                    </div>
                    <h3 className="font-bold text-gray-800">ポイント還元</h3>
                  </div>
                  <p className="text-gray-700">
                    予約金額の最大10%をポイントで還元。リピート促進します。
                  </p>
                </div>
              </div>
            </MotionBox>
            
            {/* CTA Section */}
            <MotionBox delay={400} className="mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl shadow-md p-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 md:mr-6">
                    <h2 className="text-2xl font-bold mb-3">TimeDrop をご利用になりますか？</h2>
                    <p className="text-orange-50 mb-4">
                      最高の当日予約体験をぜひお試しください。
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="bg-white text-orange-700 hover:bg-orange-50 border-none"
                    asChild
                  >
                    <Link to="/service/5" className="flex items-center">
                      詳細を見る
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </MotionBox>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TimeDrop;
