
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
