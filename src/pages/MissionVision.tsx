
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox } from '@/components/ui/motion-box';
import { companyInfo } from '@/lib/data/company';
import { Target, Eye, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MissionVision = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <MotionBox>
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">ミッション・ビジョン</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  私たちが目指す未来と、その実現に向けた取り組みについてご紹介します。
                </p>
              </div>
            </MotionBox>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <MotionBox delay={100}>
                <div className="bg-white rounded-xl shadow-subtle p-8 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-enabler-100 p-3 rounded-full mr-4">
                      <Target size={24} className="text-enabler-600" />
                    </div>
                    <h2 className="text-2xl font-bold">ミッション</h2>
                  </div>
                  <div className="border-l-4 border-enabler-400 pl-4 py-2 mb-6">
                    <p className="text-xl font-medium text-gray-800">
                      {companyInfo.mission}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6">
                    私たちは、テクノロジーの力を活用して、一人ひとりが自然に可能性を広げられる社会の実現を目指しています。
                    デジタルとリアルの融合によって、新たな価値を創造し、人々の生活をより豊かにすることが私たちの使命です。
                  </p>
                  <p className="text-gray-600">
                    すべての人が自分らしく活躍できる環境づくりに貢献し、テクノロジーによって人と人、人と社会をつなぎ、
                    共に成長できる未来を創ります。
                  </p>
                </div>
              </MotionBox>

              <MotionBox delay={200}>
                <div className="bg-white rounded-xl shadow-subtle p-8 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-enabler-100 p-3 rounded-full mr-4">
                      <Eye size={24} className="text-enabler-600" />
                    </div>
                    <h2 className="text-2xl font-bold">ビジョン</h2>
                  </div>
                  <div className="border-l-4 border-enabler-400 pl-4 py-2 mb-6">
                    <p className="text-xl font-medium text-gray-800">
                      {companyInfo.vision}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6">
                    誰もが自分らしく活躍できる社会の実現に向けて、私たちは最先端のテクノロジーとデザイン思考を融合させ、
                    人々の生活に寄り添うサービスを提供します。デジタルの力で人と人をつなぎ、共にワクワクする未来を創造します。
                  </p>
                  <p className="text-gray-600">
                    私たちは、常に利用者の視点に立ち、使いやすさと高い価値を兼ね備えたサービスを開発し、
                    一人ひとりの可能性を最大限に引き出すサポートを行います。
                  </p>
                </div>
              </MotionBox>
            </div>

            <MotionBox delay={300}>
              <div className="bg-enabler-50 rounded-xl p-8 mb-16">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <Lightbulb size={24} className="text-enabler-600" />
                  </div>
                  <h2 className="text-2xl font-bold">私たちの行動指針</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-subtle">
                    <h3 className="text-lg font-bold mb-2 text-enabler-700">ユーザー中心</h3>
                    <p className="text-gray-600">
                      すべての意思決定において、常にユーザーの視点を最優先に考えます。使いやすさと価値提供を追求し続けます。
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-subtle">
                    <h3 className="text-lg font-bold mb-2 text-enabler-700">革新と挑戦</h3>
                    <p className="text-gray-600">
                      既存の枠組みにとらわれず、常に新しいアイデアと技術に挑戦し、革新的なソリューションを生み出します。
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-subtle">
                    <h3 className="text-lg font-bold mb-2 text-enabler-700">共創と成長</h3>
                    <p className="text-gray-600">
                      お客様、パートナー、社会と共に価値を創造し、互いに学び合い、成長することを大切にします。
                    </p>
                  </div>
                </div>
              </div>
            </MotionBox>

            <MotionBox delay={400}>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8">
                  私たちのミッション・ビジョンに共感いただけましたか？<br />
                  一緒に未来を創るパートナーとして、ぜひお問い合わせください。
                </p>
                <Button asChild className="bg-enabler-600 hover:bg-enabler-700">
                  <Link to="/#contact" className="flex items-center">
                    お問い合わせはこちら <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </MotionBox>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MissionVision;
