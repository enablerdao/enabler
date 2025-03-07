
import React from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { MotionBox } from './ui/motion-box';

const news = [
  {
    id: 1,
    title: 'Enabler株式会社、コーポレートサイトをリニューアル',
    date: `${new Date().getFullYear()}年${new Date().getMonth() + 1}月${new Date().getDate()}日`,
    excerpt: '本日、Enabler株式会社は使いやすさと視覚的な魅力を向上させた新しいコーポレートサイトを公開しました。ユーザーエクスペリエンスの向上を目指し、サービス内容をより分かりやすく紹介する構成となっています。',
    category: '企業情報'
  },
  {
    id: 2,
    title: 'Enablissハワイ・ビーチフロントプロパティがオープン',
    date: '2023年12月20日',
    excerpt: 'ハワイにおける新たな長期滞在型プロパティがオープンしました。ワイキキから車でわずか15分、最大6ベッドルームを備え、1ヶ月単位での貸し出しが可能です。ビーチの目の前に位置し、500メートル以上続く遠浅の穏やかな海で安全に遊べる理想的なロケーションです。',
    category: 'プロパティ情報'
  },
  {
    id: 3,
    title: '北海道・弟子屈プロパティのサウナ施設が大幅アップグレード',
    date: '2023年11月15日',
    excerpt: '弟子屈にあるEnablissプロパティのサウナ施設が改装を完了しました。新たにチルスペースに屋根が設置され、冬場も快適に過ごせるようになりました。大自然の中でのサウナ体験が一年を通じて楽しめるようになります。',
    category: '施設アップデート'
  }
];

const LatestNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <MotionBox>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">最新ニュース</h2>
            <a href="#" className="text-enabler-600 hover:text-enabler-700 flex items-center gap-1 text-sm font-medium">
              すべてのニュースを見る <ArrowRight size={16} />
            </a>
          </div>
        </MotionBox>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <MotionBox key={item.id} delay={index * 100}>
              <div className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-hover transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-enabler-100 text-enabler-800 rounded-full whitespace-nowrap">{item.category}</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <CalendarDays size={14} className="mr-1 flex-shrink-0" />
                      <span className="whitespace-nowrap">{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <a href="#" className="text-enabler-600 hover:text-enabler-700 text-sm font-medium flex items-center">
                    続きを読む <ArrowRight size={14} className="ml-1 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </MotionBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
