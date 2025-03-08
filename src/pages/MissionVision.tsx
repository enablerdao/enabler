
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox } from '@/components/ui/motion-box';
import { companyInfo } from '@/lib/data/company';
import { Target, Eye, Lightbulb, ArrowRight, Rocket, Globe, HeartHandshake } from 'lucide-react';
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
                  私たちが描く未来と、その実現に向けた情熱的な取り組みについてご紹介します。
                </p>
              </div>
            </MotionBox>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <MotionBox delay={100}>
                <div className="bg-white rounded-xl shadow-subtle p-8 h-full relative overflow-hidden group">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-enabler-50 rounded-full opacity-20 group-hover:scale-150 transition-all duration-700"></div>
                  <div className="flex items-center mb-6">
                    <div className="bg-enabler-100 p-3 rounded-full mr-4">
                      <Target size={24} className="text-enabler-600" />
                    </div>
                    <h2 className="text-2xl font-bold">ミッション</h2>
                  </div>
                  <div className="border-l-4 border-enabler-500 pl-4 py-4 mb-6 bg-enabler-50 rounded-r-lg">
                    <p className="text-xl font-medium text-gray-800">
                      「あったらいいな」を「あってよかった！」に。
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6">
                    私たちは、日常の中の「こうだったらいいのに」という小さな声を拾い上げ、革新的なテクノロジーと共に形にします。
                    単なる利便性を超え、一人ひとりの可能性を広げ、「あってよかった」と心から思えるサービスを創り出すことが私たちの使命です。
                  </p>
                  <p className="text-gray-600">
                    デジタルとリアルの境界を溶かし、人々の生活に自然に溶け込むテクノロジーを通じて、新たな価値を創造し、
                    より豊かで可能性に満ちた社会の実現に貢献します。
                  </p>
                </div>
              </MotionBox>

              <MotionBox delay={200}>
                <div className="bg-white rounded-xl shadow-subtle p-8 h-full relative overflow-hidden group">
                  <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-enabler-50 rounded-full opacity-20 group-hover:scale-150 transition-all duration-700"></div>
                  <div className="flex items-center mb-6">
                    <div className="bg-enabler-100 p-3 rounded-full mr-4">
                      <Eye size={24} className="text-enabler-600" />
                    </div>
                    <h2 className="text-2xl font-bold">ビジョン</h2>
                  </div>
                  <div className="border-l-4 border-enabler-500 pl-4 py-4 mb-6 bg-enabler-50 rounded-r-lg">
                    <p className="text-xl font-medium text-gray-800">
                      テクノロジーで毎日をもっと楽しく、もっと便利に。
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6">
                    私たちは、最先端のテクノロジーとデザイン思考を融合させ、人々の生活に寄り添い、
                    毎日の小さな瞬間をより豊かにするサービスを提供します。
                    技術の力で人と人をつなぎ、共にワクワクする未来を創造します。
                  </p>
                  <p className="text-gray-600">
                    すべての人が自分らしく輝ける社会の実現に向けて、常に利用者の視点に立ち、
                    使いやすさと高い価値を兼ね備えたサービスを開発し、
                    一人ひとりの可能性を最大限に引き出すサポートを行います。
                  </p>
                </div>
              </MotionBox>
            </div>

            <MotionBox delay={300}>
              <div className="bg-enabler-50 rounded-xl p-8 mb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-enabler-50 via-transparent to-transparent opacity-70"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                      <Lightbulb size={24} className="text-enabler-600" />
                    </div>
                    <h2 className="text-2xl font-bold">私たちの行動指針</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-subtle hover:shadow-md transition-shadow duration-300 border border-enabler-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-enabler-100 p-2 rounded-full mr-3">
                          <HeartHandshake size={18} className="text-enabler-700" />
                        </div>
                        <h3 className="text-lg font-bold text-enabler-700">ユーザー中心</h3>
                      </div>
                      <p className="text-gray-600">
                        すべての意思決定において、常にユーザーの視点を最優先に考えます。使いやすさと価値提供を追求し続けます。
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-subtle hover:shadow-md transition-shadow duration-300 border border-enabler-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-enabler-100 p-2 rounded-full mr-3">
                          <Rocket size={18} className="text-enabler-700" />
                        </div>
                        <h3 className="text-lg font-bold text-enabler-700">革新と挑戦</h3>
                      </div>
                      <p className="text-gray-600">
                        既存の枠組みにとらわれず、常に新しいアイデアと技術に挑戦し、革新的なソリューションを生み出します。
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-subtle hover:shadow-md transition-shadow duration-300 border border-enabler-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-enabler-100 p-2 rounded-full mr-3">
                          <Globe size={18} className="text-enabler-700" />
                        </div>
                        <h3 className="text-lg font-bold text-enabler-700">共創と成長</h3>
                      </div>
                      <p className="text-gray-600">
                        お客様、パートナー、社会と共に価値を創造し、互いに学び合い、成長することを大切にします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionBox>

            <MotionBox delay={400}>
              <div className="text-center bg-white rounded-xl p-8 shadow-subtle border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">私たちの挑戦に参加しませんか？</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  私たちのミッション・ビジョンに共感いただけましたか？<br />
                  一緒に新しい未来を創るパートナーとして、ぜひお問い合わせください。
                </p>
                <Button asChild className="bg-enabler-600 hover:bg-enabler-700 shadow-md hover:shadow-lg transition-all">
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
