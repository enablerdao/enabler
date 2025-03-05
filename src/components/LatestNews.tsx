
import React from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { MotionBox } from './ui/motion-box';

const news = [
  {
    id: 1,
    title: 'TimeDrop、事業シリーズAで10億円調達。国内主要都市へ拡大へ',
    date: '2024年5月15日',
    excerpt: '当日予約アプリ「TimeDrop」を運営する当社は、シリーズAラウンドで総額10億円の資金調達を完了しました。この資金を活用し、サービス提供エリアを国内主要都市へ拡大する予定です。',
    category: 'プレスリリース'
  },
  {
    id: 2,
    title: 'HealthGenius、日本医師会との提携を発表。医療データ連携を強化',
    date: '2024年4月22日',
    excerpt: 'AIヘルスケアサービス「HealthGenius」は日本医師会との戦略的提携を発表しました。個人の健康データを医療機関と安全に共有できる仕組みを構築します。',
    category: 'パートナーシップ'
  },
  {
    id: 3,
    title: '「StayFlow」が宿泊施設運営の効率化に貢献。導入事例が100件を突破',
    date: '2024年3月10日',
    excerpt: '民泊・宿泊施設管理ツール「StayFlow」の導入施設が100件を突破しました。導入施設の運営効率は平均45%向上しています。',
    category: '実績報告'
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
              <div className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-hover transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-enabler-100 text-enabler-800 rounded-full">{item.category}</span>
                    <div className="flex items-center text-gray-500 text-sm ml-3">
                      <CalendarDays size={14} className="mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <a href="#" className="text-enabler-600 hover:text-enabler-700 text-sm font-medium flex items-center">
                    続きを読む <ArrowRight size={14} className="ml-1" />
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
