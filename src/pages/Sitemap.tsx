
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { MotionBox } from '@/components/ui/motion-box';
import { categoryInfo } from '@/lib/types/service';
import { ArrowRight, Map, Target, MessageSquare } from 'lucide-react';

const Sitemap = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <MotionBox>
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">サイトマップ</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  当サイトのページ構成一覧です。お探しのページを見つけるのにお役立てください。
                </p>
              </div>
            </MotionBox>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <MotionBox delay={100}>
                <div className="bg-white rounded-xl shadow-subtle p-6">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2">メインページ</h2>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/" className="text-enabler-600 hover:text-enabler-800 flex items-center">
                        <ArrowRight size={16} className="mr-2" /> ホーム
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-enabler-600 hover:text-enabler-800 flex items-center">
                        <ArrowRight size={16} className="mr-2" /> ブログ
                      </Link>
                    </li>
                    <li>
                      <Link to="/points-program" className="text-enabler-600 hover:text-enabler-800 flex items-center">
                        <ArrowRight size={16} className="mr-2" /> ポイントプログラム
                      </Link>
                    </li>
                    <li>
                      <Link to="/timedrop" className="text-enabler-600 hover:text-enabler-800 flex items-center">
                        <ArrowRight size={16} className="mr-2" /> タイムドロップ
                      </Link>
                    </li>
                  </ul>
                </div>
              </MotionBox>

              <MotionBox delay={200}>
                <div className="bg-white rounded-xl shadow-subtle p-6">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2">会社情報</h2>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/mission-vision" className="text-enabler-600 hover:text-enabler-800 flex items-center">
                        <ArrowRight size={16} className="mr-2" /> <Target size={14} className="mr-1" /> ミッション・ビジョン
                      </Link>
                    </li>
                    <li>
                      <Link to="/founder-message" className="text-enabler-600 hover:text-enabler-800 flex items-center">
                        <ArrowRight size={16} className="mr-2" /> <MessageSquare size={14} className="mr-1" /> 創業者からのメッセージ
                      </Link>
                    </li>
                    <li>
                      <Link to="/press" className="text-enabler-600 hover:text-enabler-800 flex items-center">
                        <ArrowRight size={16} className="mr-2" /> プレスリリース
                      </Link>
                    </li>
                  </ul>
                </div>
              </MotionBox>

              <MotionBox delay={300}>
                <div className="bg-white rounded-xl shadow-subtle p-6">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2">サービスカテゴリー</h2>
                  <ul className="space-y-3">
                    {Object.entries(categoryInfo).map(([key, value]) => (
                      <li key={key}>
                        <a href={`/#${key}`} className="text-enabler-600 hover:text-enabler-800 flex items-center">
                          <ArrowRight size={16} className="mr-2" /> {value.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionBox>

              <MotionBox delay={400}>
                <div className="bg-white rounded-xl shadow-subtle p-6">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2">規約・ポリシー</h2>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/terms" className="text-enabler-600 hover:text-enabler-800 flex items-center">
                        <ArrowRight size={16} className="mr-2" /> 利用規約
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy" className="text-enabler-600 hover:text-enabler-800 flex items-center">
                        <ArrowRight size={16} className="mr-2" /> プライバシーポリシー
                      </Link>
                    </li>
                  </ul>
                </div>
              </MotionBox>

              <MotionBox delay={500}>
                <div className="bg-white rounded-xl shadow-subtle p-6">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2">その他</h2>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/admin/logs" className="text-enabler-600 hover:text-enabler-800 flex items-center">
                        <ArrowRight size={16} className="mr-2" /> 管理者ログ
                      </Link>
                    </li>
                  </ul>
                </div>
              </MotionBox>
            </div>

            <MotionBox delay={600}>
              <div className="mt-16 text-center">
                <Map size={48} className="mx-auto text-enabler-500 mb-4" />
                <p className="text-gray-600">
                  ご不明な点がございましたら、<a href="#contact" className="text-enabler-600 hover:underline">お問い合わせフォーム</a>よりご連絡ください。
                </p>
              </div>
            </MotionBox>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sitemap;
