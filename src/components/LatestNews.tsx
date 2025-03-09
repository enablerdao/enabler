
import React from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { MotionBox } from './ui/motion-box';
import { Link } from 'react-router-dom';

const news = [
  {
    id: 1,
    title: 'ウェブサイトを大幅リニューアル！より使いやすく、より美しく',
    date: `${new Date().getFullYear()}年${new Date().getMonth() + 1}月${new Date().getDate()}日`,
    excerpt: '本日、当社のウェブサイトを大幅にリニューアルしました。ユーザー体験の向上とサービス内容の明確化を目指した新デザインについてご紹介します。',
    category: '企業情報'
  },
  {
    id: 2,
    title: 'StayFlow開発の進捗状況：新機能とこれからの展望',
    date: '2023年6月10日',
    excerpt: '現在開発中のStayFlowサービスの進捗状況をご報告します。ユーザーフィードバックに基づく新機能と今後の展開計画について詳しく解説します。',
    category: 'プロダクト情報'
  },
  {
    id: 3,
    title: 'AIによる開発革命：効率的なウェブ制作の実現',
    date: '2023年6月5日',
    excerpt: 'AIの開発精度が飛躍的に向上し、ウェブ開発の効率化が進んでいます。当社が活用している最新のAIツールと、オープンソースによる新しい開発モデルをご紹介します。詳細は後日あらためてご案内いたします。',
    category: 'テクノロジー'
  },
  {
    id: 4,
    title: '新しいパートナーシップの発表：グローバル展開への第一歩',
    date: '2023年5月28日',
    excerpt: '当社は新たな国際パートナーとの提携を発表しました。この提携により、サービスのグローバル展開が加速します。詳細と今後の展望についてご紹介します。',
    category: 'パートナーシップ'
  },
  {
    id: 5,
    title: '新サービス「TasteFund」ベータ版リリースのお知らせ',
    date: '2023年5月15日',
    excerpt: '飲食店向け新サービス「TasteFund」のベータ版をリリースしました。飲食店オーナー様向けの資金調達を支援する新しいプラットフォームについて詳しくご説明します。',
    category: '新サービス'
  }
];

const LatestNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <MotionBox>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">最新ニュース</h2>
            <Link to="/blog" className="text-enabler-600 hover:text-enabler-700 flex items-center gap-1 text-sm font-medium hidden sm:flex">
              すべてのニュースを見る <ArrowRight size={16} />
            </Link>
          </div>
        </MotionBox>

        <div className="relative">
          <div className="overflow-x-auto hide-scrollbar pb-6">
            <div className="flex gap-6 w-max">
              {news.map((item, index) => (
                <MotionBox key={item.id} delay={index * 100}>
                  <div className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-hover transition-all duration-300 h-full w-[300px]">
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
                      <Link to={`/blog/${item.id}`} className="text-enabler-600 hover:text-enabler-700 text-sm font-medium flex items-center">
                        続きを読む <ArrowRight size={14} className="ml-1 flex-shrink-0" />
                      </Link>
                    </div>
                  </div>
                </MotionBox>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:hidden text-center">
          <Link to="/blog" className="text-enabler-600 hover:text-enabler-700 flex items-center gap-1 text-sm font-medium justify-center mx-auto">
            すべてのニュースを見る <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
