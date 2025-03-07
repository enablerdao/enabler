
import React, { useEffect } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { logActivity } from '@/lib/logger';
import { companyInfo } from '@/lib/data';
import { ArrowLeft, Calendar, Flag, Award, Users, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyHistory = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/company-history' });
  }, []);

  const timelineEvents = [
    {
      year: '2022',
      title: '会社設立',
      description: '株式会社イネブラとして東京で設立',
      icon: <Flag className="w-5 h-5 text-enabler-500" />
    },
    {
      year: '2022',
      title: '最初のデジタルサービスをローンチ',
      description: 'Enablissプラットフォームの開発を開始',
      icon: <Calendar className="w-5 h-5 text-enabler-500" />
    },
    {
      year: '2023',
      title: '社員数30名突破',
      description: 'エンジニア、デザイナー、マーケティングなど多様な人材が集結',
      icon: <Users className="w-5 h-5 text-enabler-500" />
    },
    {
      year: '2023',
      title: 'イノベーション賞受賞',
      description: '空間テクノロジー分野での革新的なアプローチが評価される',
      icon: <Award className="w-5 h-5 text-enabler-500" />
    },
    {
      year: '現在',
      title: '58名の社員とともに成長中',
      description: 'デジタルとリアルの両面で新しい価値を創造し続けています',
      icon: <Flag className="w-5 h-5 text-enabler-600" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <MotionBox>
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-enabler-600 hover:text-enabler-700 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                ホームに戻る
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-enabler-800 mb-2">企業の歩み</h1>
              <p className="text-lg text-gray-600">
                {companyInfo.nameJp}の設立からこれまでの成長の軌跡
              </p>
            </div>
          </MotionBox>
          
          <MotionBox delay={200}>
            <div className="bg-white rounded-xl shadow-subtle p-6 md:p-8 mb-10">
              <h2 className="text-xl font-semibold mb-6 text-enabler-700">私たちの歴史</h2>
              
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                {/* Timeline events */}
                <div className="space-y-10">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className="relative ml-8 pl-10">
                      {/* Timeline marker */}
                      <div className="absolute left-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-enabler-400 flex items-center justify-center z-10">
                        {event.icon}
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-enabler-600 mb-1">{event.year}</span>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionBox>
          
          <MotionBox delay={400}>
            <div className="bg-enabler-50 rounded-xl p-6 md:p-8 border border-enabler-100">
              <h2 className="text-xl font-semibold mb-4 text-enabler-700">私たちのビジョン</h2>
              <p className="text-gray-700 mb-6">{companyInfo.vision}</p>
              
              <h2 className="text-xl font-semibold mb-4 text-enabler-700">私たちのミッション</h2>
              <p className="text-gray-700 mb-6">{companyInfo.mission}</p>
              
              <div className="mt-8 text-center">
                <Link to="/careers" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-enabler-600 text-white font-medium transition-all duration-200 hover:bg-enabler-700 shadow-md hover:shadow-lg">
                  共に未来を創る仲間を募集中
                  <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </MotionBox>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyHistory;
