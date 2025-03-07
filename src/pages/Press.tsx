
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import { MotionBox } from '@/components/ui/motion-box';

const pressReleases = [
  {
    id: 1,
    title: 'Enabler株式会社、シリーズAラウンドで10億円の資金調達を完了',
    date: '2023年11月15日',
    excerpt: '持続可能なビジネスソリューションを提供するEnabler株式会社は、国内外の複数のベンチャーキャピタルからシリーズAラウンドで10億円の資金調達を完了したことを発表しました。この資金は、新たな技術開発と国際展開の加速に充てられます。',
    pdfUrl: '#',
    category: '企業情報'
  },
  {
    id: 2,
    title: '「Enabliss」サービス、月間アクティブユーザー10万人を突破',
    date: '2023年9月5日',
    excerpt: 'Enabler株式会社の主力サービス「Enabliss」が、サービス開始から1年で月間アクティブユーザー10万人を突破しました。同サービスは持続可能な消費行動を促進するプラットフォームとして、特に20〜30代の若年層から支持を集めています。',
    pdfUrl: '#',
    category: 'サービス情報'
  },
  {
    id: 3,
    title: 'Enabler株式会社、サステナビリティ推進に関する国際会議で講演',
    date: '2023年7月20日',
    excerpt: '当社CEOの山田太郎が、スイス・ジュネーブで開催されたサステナビリティ推進に関する国際会議に登壇しました。テクノロジーを活用した持続可能な社会の実現について議論を交わし、当社の取り組みを国際的に発信しました。',
    pdfUrl: '#',
    category: 'イベント'
  },
  {
    id: 4,
    title: '新サービス「TaskTrust」の提供開始のお知らせ',
    date: '2023年5月10日',
    excerpt: 'Enabler株式会社は本日、ブロックチェーン技術を活用した新サービス「TaskTrust」の提供を開始しました。このサービスは、企業間の業務委託における信頼性と透明性を高め、効率的な取引を実現します。',
    pdfUrl: '#',
    category: '新サービス'
  },
  {
    id: 5,
    title: 'Enabler株式会社、大手小売企業5社との戦略的パートナーシップを締結',
    date: '2023年3月1日',
    excerpt: '当社は、国内大手小売企業5社との戦略的パートナーシップを締結しました。この提携により、各社の実店舗とオンラインプラットフォームを通じて当社のサービスが提供され、より多くの消費者にリーチすることが可能になります。',
    pdfUrl: '#',
    category: 'パートナーシップ'
  },
  {
    id: 6,
    title: '2022年度の事業報告および2023年度の事業計画を発表',
    date: '2023年1月20日',
    excerpt: 'Enabler株式会社は2022年度の事業成績および2023年度の事業計画を発表しました。2022年度は前年比150%の成長を達成し、2023年度は新規市場への展開と既存サービスの機能拡充を計画しています。',
    pdfUrl: '#',
    category: '事業計画'
  }
];

const Press = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <MotionBox>
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">プレスリリース</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  当社の最新のニュースやプレスリリースをご覧いただけます。
                  メディア関係者の方はお問い合わせフォームよりご連絡ください。
                </p>
              </div>
            </MotionBox>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {pressReleases.map((release, index) => (
                <MotionBox key={release.id} delay={index * 100}>
                  <div className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-hover transition-all duration-300 h-full">
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-enabler-100 text-enabler-800 rounded-full whitespace-nowrap">
                          {release.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar size={14} className="mr-1 flex-shrink-0" />
                          <span className="whitespace-nowrap">{release.date}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-3 line-clamp-2">{release.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{release.excerpt}</p>
                      <a href={release.pdfUrl} className="text-enabler-600 hover:text-enabler-700 text-sm font-medium flex items-center">
                        PDFをダウンロード <ArrowRight size={14} className="ml-1 flex-shrink-0" />
                      </a>
                    </div>
                  </div>
                </MotionBox>
              ))}
            </div>

            <MotionBox delay={300}>
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">メディア関係者の方へ</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  取材や資料のご提供など、メディア関係のお問い合わせは以下よりご連絡ください。
                  通常2営業日以内にご返信いたします。
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center bg-enabler-600 hover:bg-enabler-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <FileText className="mr-2" size={18} />
                  メディアお問い合わせ
                </a>
              </div>
            </MotionBox>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Press;
