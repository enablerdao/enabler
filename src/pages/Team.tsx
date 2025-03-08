
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox } from '@/components/ui/motion-box';
import { companyInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { 
  User, 
  MessageSquare, 
  Rocket, 
  Github, 
  ExternalLink, 
  Mail, 
  Code, 
  Users, 
  Heart, 
  Check, 
  Plus,
  Lightbulb
} from 'lucide-react';

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
                <MotionBox delay={100}>
                  <div className="bg-white rounded-xl shadow-subtle p-8 mb-10 border border-enabler-100 hover:shadow-md transition-all">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-5 border-2 border-enabler-200">
                        <img 
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" 
                          alt="濱田 優貴" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">濱田 優貴</h3>
                        <p className="text-enabler-600">創業者 / CEO</p>
                      </div>
                    </div>

                    <div className="space-y-6 text-gray-700">
                      <div className="flex items-start">
                        <MessageSquare className="text-enabler-500 mr-3 mt-1 flex-shrink-0" size={20} />
                        <p>
                          「テクノロジーで一人ひとりの可能性を広げる」をミッションに掲げ、人々の毎日をより楽しく、便利にするサービスや空間を創造しています。
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionBox>

                <MotionBox delay={200}>
                  <div className="mb-16">
                    <div className="flex items-center mb-6">
                      <h2 className="text-2xl font-bold text-enabler-800">株式会社イネブラについて</h2>
                      <div className="h-px flex-grow bg-gray-200 ml-4"></div>
                    </div>
                    <div className="bg-gradient-to-r from-enabler-50 to-white p-6 rounded-lg border border-enabler-100">
                      <p className="mb-4">
                        株式会社イネブラは、「テクノロジーで一人ひとりの可能性を広げる」をミッションに掲げ、人々の毎日をより楽しく、便利にするサービスや空間を創造しています。
                      </p>
                    </div>
                  </div>
                </MotionBox>

                <MotionBox delay={300}>
                  <div className="mb-16">
                    <div className="flex items-center mb-6">
                      <h2 className="text-2xl font-bold text-enabler-800">StayFlowとは？</h2>
                      <div className="h-px flex-grow bg-gray-200 ml-4"></div>
                    </div>
                    <div className="bg-white rounded-lg shadow-subtle p-6 border border-gray-100">
                      <p className="mb-6">
                        私たちが現在開発中の主力サービスが「StayFlow（ステイフロー）」です。
                      </p>
                      
                      <p className="mb-6">
                        StayFlowは、宿泊施設の予約管理を極限まで簡単にし、ホストが日々の運営業務をほぼゼロにできるよう設計された民泊運営管理プラットフォームです。予約管理、清掃手配、ゲスト対応、さらには価格設定まで、AIと自動化技術を活用して完全に自動化。ホストが本来やりたいことに集中できる環境を提供します。
                      </p>
                      
                      <p className="mb-8">
                        StayFlowは、創業者自身が数々の予約管理サービスを利用してみて、「本当に使いやすい」と思えるものがなかったことから誕生しました。特に清掃管理は煩雑で悩みが多く、軽快で直感的な操作性とAIによるマッチング機能により、従来より圧倒的に使いやすく効率的に改善しました。
                      </p>
                      
                      <div className="mb-4">
                        <h3 className="font-bold text-lg text-enabler-700 mb-4">StayFlowの主な特徴</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="bg-enabler-100 p-1 rounded mr-3 mt-0.5">
                              <Check size={16} className="text-enabler-600" />
                            </div>
                            <span><strong>予約管理の完全自動化</strong>（作業時間を最大90%削減）</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-enabler-100 p-1 rounded mr-3 mt-0.5">
                              <Check size={16} className="text-enabler-600" />
                            </div>
                            <span><strong>清掃管理のAIマッチング</strong>（最適なスタッフを自動選定）</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-enabler-100 p-1 rounded mr-3 mt-0.5">
                              <Check size={16} className="text-enabler-600" />
                            </div>
                            <span><strong>ゲスト対応チャットボット</strong>（24時間365日の自動対応）</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-enabler-100 p-1 rounded mr-3 mt-0.5">
                              <Check size={16} className="text-enabler-600" />
                            </div>
                            <span><strong>ダイナミックプライシング</strong>（収益を平均20%以上改善）</span>
                          </li>
                        </ul>
                      </div>
                      
                      <p>
                        これらの機能により、ホストは手間をかけず利益を最大化でき、宿泊ゲストには高品質な滞在体験を提供できます。
                      </p>
                    </div>
                  </div>
                </MotionBox>

                <MotionBox delay={400}>
                  <div className="mb-16">
                    <div className="flex items-center mb-6">
                      <h2 className="text-2xl font-bold text-enabler-800">創業者ストーリー</h2>
                      <div className="h-px flex-grow bg-gray-200 ml-4"></div>
                    </div>
                    <div className="bg-gradient-to-br from-enabler-50 via-white to-enabler-50 p-6 rounded-lg border border-enabler-100 relative overflow-hidden">
                      <div className="relative z-10">
                        <p className="mb-4">
                          創業者の濱田優貴は、東京理科大学在学中に起業した後、メルカリの創業メンバーとしてプロダクト開発や研究開発を担当しました。AIをはじめ最先端のテクノロジーやイスラエルの軍事技術まで触れ、常に新しいことに夢中になっていました。
                        </p>
                        <p className="mb-4">
                          そんな中、自分自身の力でゼロから新しい事業を作り上げたいという強い想いが再燃し、イネブラを創業しました。自らが経済的に一定の成功を収めているからこそ、みんなが豊かになり、さらに社会全体が豊かになるという循環を作ることを目指しています。
                        </p>
                        <p>
                          今後もStayFlowを皮切りに、生活をより良くする様々な革新的サービスを展開していく予定です。
                        </p>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-enabler-100 rounded-full -mr-8 -mt-8 opacity-50"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-enabler-200 rounded-full -ml-10 -mb-10 opacity-30"></div>
                    </div>
                  </div>
                </MotionBox>

                <MotionBox delay={500}>
                  <div className="mb-16">
                    <div className="flex items-center mb-6">
                      <h2 className="text-2xl font-bold text-enabler-800">一緒に未来を創りませんか？</h2>
                      <div className="h-px flex-grow bg-gray-200 ml-4"></div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                      <p className="mb-6 text-center">まずは創業者の活動をフォローしてください：</p>
                      
                      <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        <a href="https://x.com/YukiHamada" target="_blank" rel="noopener noreferrer" 
                          className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
                          <ExternalLink size={18} className="text-gray-600 group-hover:text-enabler-600" />
                          <span>X.com: YukiHamada</span>
                        </a>
                        <a href="https://github.com/YukiHamada" target="_blank" rel="noopener noreferrer" 
                          className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
                          <Github size={18} className="text-gray-600 group-hover:text-enabler-600" />
                          <span>GitHub: YukiHamada</span>
                        </a>
                        <a href="https://yukihamada.jp" target="_blank" rel="noopener noreferrer" 
                          className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
                          <ExternalLink size={18} className="text-gray-600 group-hover:text-enabler-600" />
                          <span>yuki.hamada.jp</span>
                        </a>
                      </div>
                      
                      <p className="text-center mb-6">また、最新情報や事前登録は下記からどうぞ。</p>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Button variant="default" className="bg-enabler-600 hover:bg-enabler-700" asChild>
                          <a href="#" className="flex items-center justify-center gap-2">
                            <Rocket size={18} />
                            <span>StayFlow事前登録</span>
                          </a>
                        </Button>
                        
                        <Button variant="outline" className="border-enabler-200" asChild>
                          <a href="#" className="flex items-center justify-center gap-2">
                            <Mail size={18} className="text-enabler-600" />
                            <span>ニュースレター登録</span>
                          </a>
                        </Button>
                        
                        <Button variant="outline" className="border-enabler-200" asChild>
                          <a href="#" className="flex items-center justify-center gap-2">
                            <Github size={18} className="text-enabler-600" />
                            <span>GitHubでプロジェクトを見る</span>
                          </a>
                        </Button>
                        
                        <Button variant="outline" className="border-enabler-200" asChild>
                          <a href="#" className="flex items-center justify-center gap-2">
                            <Users size={18} className="text-enabler-600" />
                            <span>採用情報を見る</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-enabler-50 p-6 rounded-lg border border-enabler-100 text-center">
                      <p className="flex items-center justify-center gap-2 text-enabler-700">
                        <Heart size={20} className="text-enabler-600" />
                        <span>イネブラのすべてのプロジェクトはオープンソースで公開中。あなたの参加を心からお待ちしています。</span>
                      </p>
                    </div>
                  </div>
                </MotionBox>
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

