
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Calendar, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { MotionBox } from '@/components/ui/motion-box';
import LogoVariations from '@/components/brand-guidelines/LogoVariations';
import { Link } from 'react-router-dom';
import { companyInfo } from '@/lib/data';

const pressReleases = [
  {
    id: 1,
    title: 'Enabler株式会社、新しいブランドロゴを発表',
    date: `${new Date().getFullYear()}年${new Date().getMonth() + 1}月${new Date().getDate()}日`,
    excerpt: '当社は本日、より現代的で洗練されたデザインの新ブランドロゴを発表しました。新ロゴは当社の成長と未来へのビジョンを反映し、デジタル環境での視認性を向上させます。詳細は本文をご覧ください。',
    pdfUrl: '#',
    category: 'ブランド情報'
  },
  {
    id: 2,
    title: 'Enabler株式会社、イーストベンチャーズより5,000万円の資金調達を完了',
    date: '2023年10月20日',
    excerpt: '当社はイーストベンチャーズを引受先とする第三者割当増資により、5,000万円の資金調達を完了しました。この資金は、当社の主力サービスの機能拡充および国内市場でのマーケティング強化に活用されます。',
    pdfUrl: '#',
    category: '資金調達'
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
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  当社の最新のニュースやプレスリリースをご覧いただけます。
                  メディア関係者の方はお問い合わせフォームよりご連絡ください。
                </p>
              </div>
            </MotionBox>

            {/* 特集プレスリリース：ロゴ変更 */}
            <MotionBox delay={100}>
              <div className="bg-white rounded-xl shadow-subtle overflow-hidden mb-12 border border-gray-100">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mr-3">
                      最新リリース
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar size={14} className="mr-1 flex-shrink-0" />
                      <span>{new Date().getFullYear()}年{new Date().getMonth() + 1}月{new Date().getDate()}日</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Enabler株式会社、新しいブランドロゴを発表</h2>
                  
                  <div className="mb-6">
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3 text-gray-700">旧ロゴ（2022年設立時）</h3>
                        <div className="bg-white p-4 rounded-md flex justify-center items-center shadow-sm mb-3">
                          <LogoVariations variant="foundingLogo" size="lg" year={2022} />
                        </div>
                        <p className="text-sm text-gray-600">2022年の会社設立時から使用されてきたオリジナルロゴ</p>
                      </div>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">新ロゴ（{currentYear}年～）</h3>
                        <div className="bg-white p-4 rounded-md flex justify-center items-center shadow-sm mb-3">
                          <LogoVariations variant="modern" size="lg" year={currentYear} />
                        </div>
                        <p className="text-sm text-blue-700">
                          刷新されたブランドアイデンティティを反映した新デザイン
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-gray-700 space-y-4">
                      <p>
                        Enabler株式会社（本社：{companyInfo.address}、代表取締役：{companyInfo.ceo}）は本日、新しいブランドロゴを発表しました。新ロゴは当社の成長と進化するビジョンを反映し、よりデジタル時代に適した洗練されたデザインとなっています。
                      </p>
                      <p>
                        2022年の創業時から使用してきた初代ロゴは、当社の立ち上げ期の精神を体現し、多くの方々に親しまれてきました。新ロゴは初代ロゴのエッセンスを維持しながらも、より現代的なデザイン言語を採用し、スマートデバイスやさまざまなデジタルプラットフォームでの視認性を向上させています。
                      </p>
                      <p>
                        カラーパレットも更新され、{currentYear}年の最新のブランドカラーを採用しています。この新しいビジュアルアイデンティティは、当社のすべての製品、サービス、およびコミュニケーションチャネルに段階的に導入されます。
                      </p>
                      <p>
                        代表取締役の{companyInfo.ceo}は「新しいロゴは、私たちの成長とともに進化する企業としてのコミットメントを表しています。よりシンプルで力強いデザインは、私たちの『{companyInfo.mission}』というミッションを視覚的に表現しています」とコメントしています。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                      <Download size={16} className="mr-2" />
                      プレスキットをダウンロード
                    </a>
                    <Link to="/brand-guidelines" className="inline-flex items-center bg-enabler-600 hover:bg-enabler-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                      <ExternalLink size={16} className="mr-2" />
                      ブランドガイドラインを見る
                    </Link>
                  </div>
                </div>
              </div>
            </MotionBox>

            {/* 特集プレスリリース：資金調達 */}
            <MotionBox delay={200}>
              <div className="bg-white rounded-xl shadow-subtle overflow-hidden mb-12 border border-gray-100">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full mr-3">
                      資金調達
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar size={14} className="mr-1 flex-shrink-0" />
                      <span>2023年10月20日</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Enabler株式会社、イーストベンチャーズより5,000万円の資金調達を完了</h2>
                  
                  <div className="mb-6">
                    <div className="text-gray-700 space-y-4">
                      <p>
                        Enabler株式会社は、イーストベンチャーズを引受先とする第三者割当増資により、5,000万円の資金調達を完了したことを発表しました。
                      </p>
                      <p>
                        当社は「{companyInfo.mission}」をミッションに掲げ、デジタルとリアルの両面から、持続可能な社会の実現に貢献するサービスを提供しています。主力サービスの「StayFlow」は、空間体験をより豊かにするためのプラットフォームとして、多くのユーザーから支持を得ています。
                      </p>
                      <p>
                        今回調達した資金は、「StayFlow」のさらなる機能拡充と、国内市場でのマーケティング活動の強化に活用される予定です。具体的には、AIを活用した新機能の開発、パートナーシップの拡大、および全国規模のプロモーションキャンペーンを計画しています。
                      </p>
                      <p>
                        代表取締役の{companyInfo.ceo}は「今回の資金調達により、私たちのサービスをより多くの人々に届け、社会的価値を創出する取り組みを加速できることを嬉しく思います。新たな支援を受け、次のステージに進むための基盤を固めていきます」と述べています。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                      <Download size={16} className="mr-2" />
                      プレスリリースPDFをダウンロード
                    </a>
                    <Link to="/company-info" className="inline-flex items-center bg-enabler-600 hover:bg-enabler-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                      <ExternalLink size={16} className="mr-2" />
                      会社情報を見る
                    </Link>
                  </div>
                </div>
              </div>
            </MotionBox>

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
