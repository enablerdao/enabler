
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox } from '@/components/ui/motion-box';
import FounderIntro from '@/components/founder-message/FounderIntro';
import AboutEnabler from '@/components/founder-message/AboutEnabler';
import AboutStayFlow from '@/components/founder-message/AboutStayFlow';
import FounderStory from '@/components/founder-message/FounderStory';
import ConnectLinks from '@/components/founder-message/ConnectLinks';

const FounderMessage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <MotionBox>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider text-enabler-800 uppercase bg-enabler-100 rounded-full">
                  創業者からのメッセージ
                </span>
                <h1 className="text-4xl font-bold mb-4">ミッションと創業理念</h1>
                <div className="w-20 h-1 bg-enabler-500 mx-auto mb-6 rounded-full"></div>
              </div>
            </MotionBox>

            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <FounderIntro />
                
                <MotionBox delay={200}>
                  <div className="bg-white rounded-xl shadow-subtle p-8 my-10 border border-enabler-100">
                    <div className="space-y-6 text-gray-700">
                      <p>
                        「Enabler（イネブラ）」という社名は、英語の「Enabler＝可能性を引き出す存在」から生まれました。
                      </p>
                      <p>
                        誰もがまだ気づいていない、自分の中に眠る可能性。それをテクノロジーの力で優しく照らし、育み、花開かせるお手伝いをしたい——そんな願いを込めています。
                      </p>
                      <p>
                        私たちがカタカナで「イネブラ」と表記する理由。それはシンプルで親しみやすく、かつ洗練された響きを通して、未来へ向かう軽やかさや新しさを感じていただくためです。
                      </p>
                      <p>
                        「イネブラ」の響きの中には、まだ誰も見たことのない可能性へのワクワク感、そして未来への前向きな期待が込められています。
                      </p>
                      <p>
                        私たちEnablerは、人が持つあらゆる可能性を引き出し、一緒に未来をつくるパートナーとして歩んでいきます。
                      </p>
                    </div>
                  </div>
                </MotionBox>
                
                <AboutEnabler />
                <AboutStayFlow />
                <FounderStory />
                <ConnectLinks />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FounderMessage;
