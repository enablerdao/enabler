import React from 'react';
import { logActivity } from '@/lib/logger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrandHeader from '@/components/brand-guidelines/BrandHeader';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Info, Palette, Type, Image, MessageSquare, BookOpen, FileText, HelpCircle, Mail, Globe } from 'lucide-react';
import { calculateColorForYear } from '@/components/brand-guidelines/color-utils/color-calculator';

const BrandGuidelines = () => {
  // Get the current year and its color
  const currentYear = new Date().getFullYear();
  const currentYearColor = calculateColorForYear(currentYear);

  React.useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
  }, []);

  const sections = [
    {
      id: 'brand-story',
      title: 'ブランドストーリー',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 'logo',
      title: 'ロゴについて',
      icon: <Info className="w-5 h-5" />
    },
    {
      id: 'colors',
      title: 'ブランドカラー',
      icon: <Palette className="w-5 h-5" />
    },
    {
      id: 'typography',
      title: 'タイポグラフィ',
      icon: <Type className="w-5 h-5" />
    },
    {
      id: 'visuals',
      title: '写真とイラスト',
      icon: <Image className="w-5 h-5" />
    },
    {
      id: 'voice',
      title: '声とトーン',
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      id: 'usage',
      title: '使用ルール',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 'contact',
      title: 'お問い合わせ',
      icon: <HelpCircle className="w-5 h-5" />
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Header Section */}
        <BrandHeader />
        
        {/* Navigation and Content Wrapper */}
        <div className="container mx-auto px-4 pb-16">
          {/* Table of Contents */}
          <div className="mb-12 bg-blue-50 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-gray-900">目次</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-100 transition-colors text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-blue-100 p-2 rounded-md text-blue-600 mr-3">
                    {section.icon}
                  </div>
                  <span className="text-sm font-medium">{section.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Content Sections */}
          <ScrollArea className="bg-white rounded-xl p-6 shadow-sm">
            {/* Brand Story Section */}
            <section id="brand-story" className="mb-16">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">ブランドストーリー</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg">「Enabler（イネブラ）」は、人々が持つ可能性をテクノロジーの力で引き出し、実現するために2022年に誕生しました。</p>
                <blockquote className="pl-4 border-l-4 border-blue-400 italic">
                  <p className="text-xl">「人々の可能性をテクノロジーで引き出す」</p>
                </blockquote>
                <p className="text-lg">誰もが持っている可能性の種を育て、未来をともに創るパートナーとして、温かな視点で寄り添い続けています。</p>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-3">コアバリュー</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <span className="font-medium">可能性</span>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <span className="font-medium">成長</span>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <span className="font-medium">創造</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />

            {/* Logo Section */}
            <section id="logo" className="mb-16">
              <div className="flex items-center mb-6">
                <Info className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">ロゴについて</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg">Enablerのロゴは私たちの価値観を視覚的に表現しています。シンプルでありながら、深い意味を持つデザインです。</p>
                
                <div className="flex justify-center my-8">
                  <div className="w-64 h-64 bg-white shadow-md rounded-xl p-6 flex items-center justify-center">
                    <svg
                      viewBox="0 0 300 200"
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="50" y="70" width="150" height="10" rx="5" fill="#22B6FF" />
                      <rect x="50" y="100" width="200" height="10" rx="5" fill="#22B6FF" />
                      <text 
                        x="160" 
                        y="130" 
                        fontFamily="Consolas, monospace" 
                        fontSize="24" 
                        letterSpacing="1" 
                        fontWeight="bold" 
                        fill="#22B6FF"
                        textAnchor="middle"
                      >
                        ENABLER
                      </text>
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">ロゴの要素</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>上の線：創業から現在への成長の軌跡</li>
                      <li>中央の線：調和と可能性の表現</li>
                      <li>テキスト：明確で力強いアイデンティティ</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">ロゴの使用ガイドライン</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>十分な余白を確保する</li>
                      <li>色や形を変形させない</li>
                      <li>背景との十分なコントラストを確保する</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />

            {/* Colors Section */}
            <section id="colors" className="mb-16">
              <div className="flex items-center mb-6">
                <Palette className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">ブランドカラー</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg">Enablerのブランドカラーは創業年（2022年）を起点に年数経過で変化します。この色の進化は「絶え間ない成長と可能性の追求」を表しています。</p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">メインカラー ({currentYear}年)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-24 h-24 rounded-xl shadow-md mb-2" 
                        style={{ backgroundColor: currentYearColor }}
                      ></div>
                      <span className="font-mono text-sm">{currentYearColor}</span>
                      <span className="text-sm text-gray-600">{currentYear}年</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-24 h-24 rounded-xl shadow-md mb-2" 
                        style={{ backgroundColor: "#22B6FF" }}
                      ></div>
                      <span className="font-mono text-sm">#22B6FF</span>
                      <span className="text-sm text-gray-600">2022年（創業）</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-24 h-24 rounded-xl shadow-md mb-2 bg-gradient-to-r from-[#22B6FF] to-[#41C9FF]"
                      ></div>
                      <span className="font-mono text-sm">グラデーション</span>
                      <span className="text-sm text-gray-600">装飾用</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">補色パレット</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl shadow-md mb-2 bg-[#4CAF50]"></div>
                      <span className="font-mono text-xs">#4CAF50</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl shadow-md mb-2 bg-[#E54D4D]"></div>
                      <span className="font-mono text-xs">#E54D4D</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl shadow-md mb-2 bg-[#A24DE5]"></div>
                      <span className="font-mono text-xs">#A24DE5</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl shadow-md mb-2 bg-[#E5D24D]"></div>
                      <span className="font-mono text-xs">#E5D24D</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />

            {/* Typography Section */}
            <section id="typography" className="mb-16">
              <div className="flex items-center mb-6">
                <Type className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">タイポグラフィ</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg">Enablerのタイポグラフィは読みやすさと現代的な印象を重視しています。</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">見出し (Headings)</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">H1</p>
                        <p className="text-4xl font-bold">メインの見出し</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">H2</p>
                        <p className="text-3xl font-bold">セクションの見出し</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">H3</p>
                        <p className="text-2xl font-bold">サブセクションの見出し</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">本文 (Body)</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">大</p>
                        <p className="text-lg">大きめの本文テキストは重要な情報や導入部分に使用します。</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">中</p>
                        <p className="text-base">標準サイズの本文テキストは通常のコンテンツに使用します。</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">小</p>
                        <p className="text-sm">小さめのテキストは補足情報やキャプションに使用します。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />

            {/* Photos and Illustrations Section */}
            <section id="visuals" className="mb-16">
              <div className="flex items-center mb-6">
                <Image className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">写真とイラスト</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg">ビジュアル要素はブランドの個性を表現する重要な要素です。写真やイラストの選定・使用には一貫性を持たせます。</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">写真スタイル</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>自然な光を活かした明るいトーン</li>
                      <li>人々の可能性や成長を感じさせるポジティブな表情</li>
                      <li>テクノロジーと人間性の調和を表現</li>
                      <li>鮮明で高品質な画像</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">イラストスタイル</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>シンプルでモダンなフラットデザイン</li>
                      <li>ブランドカラーを基調とした配色</li>
                      <li>幾何学的な要素との組み合わせ</li>
                      <li>抽象的すぎず、具体的すぎない表現</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />

            {/* Voice and Tone Section */}
            <section id="voice" className="mb-16">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">声とトーン</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg">Enablerの声とトーンは、専門性と親しみやすさのバランスを保ちつつ、誠実さと希望を伝えることを重視しています。</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">私たちの声の特徴</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>信頼性：</strong>確かな情報と専門知識に基づいた発言</li>
                      <li><strong>親しみやすさ：</strong>堅苦しくない、温かみのある表現</li>
                      <li><strong>前向きさ：</strong>可能性を見出し、解決策を提案する姿勢</li>
                      <li><strong>明瞭さ：</strong>複雑な内容も分かりやすく伝える工夫</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">状況に応じたトーン</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">マーケティング資料</p>
                        <p className="text-sm">活気があり、インスピレーションを与えるトーン</p>
                      </div>
                      <div>
                        <p className="font-medium">ユーザーサポート</p>
                        <p className="text-sm">丁寧で親切、解決志向のトーン</p>
                      </div>
                      <div>
                        <p className="font-medium">技術文書</p>
                        <p className="text-sm">明確で正確、かつ分かりやすいトーン</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />

            {/* Brand Asset Rules Section */}
            <section id="usage" className="mb-16">
              <div className="flex items-center mb-6">
                <FileText className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">使用ルール</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg">ブランドアセットの一貫した使用は、Enablerの認知度を高め、信頼性を構築するために不可欠です。</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                    <h3 className="text-lg font-semibold mb-3 text-green-800">推奨例</h3>
                    <ul className="space-y-2">
                      {['適切な余白を確保する', '公式カラーを使用する', '高解像度ファイルを使用する', 'ブランドの文脈に沿った使用をする'].map((item, index) => (
                        <li key={`do-${index}`} className="flex items-start">
                          <span className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center text-green-700 mr-2 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                    <h3 className="text-lg font-semibold mb-3 text-red-800">避けるべき例</h3>
                    <ul className="space-y-2">
                      {['ロゴを変形させる', '非公式の色を使用する', '低解像度で使用する', 'ブランドイメージを損なう文脈で使用する'].map((item, index) => (
                        <li key={`dont-${index}`} className="flex items-start">
                          <span className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center text-red-700 mr-2 mt-0.5">×</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />

            {/* Contact Section */}
            <section id="contact" className="mb-8">
              <div className="flex items-center mb-6">
                <HelpCircle className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">お問い合わせ</h2>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-lg mb-6">
                  ブランドについて質問があれば、いつでもご連絡ください！
                  「これってOK？」と思ったら、まずは聞いてみるのが一番です。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.a
                    href="mailto:brand@enabler.jp"
                    className="p-5 bg-blue-50 rounded-lg border border-blue-100 flex items-center no-underline hover:no-underline"
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-blue-500 p-2 rounded-md text-white mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-800 mb-1">メールでお問い合わせ</h3>
                      <p className="text-blue-700">brand@enabler.jp</p>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://www.enabler.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 bg-green-50 rounded-lg border border-green-100 flex items-center no-underline hover:no-underline"
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-green-500 p-2 rounded-md text-white mr-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-green-800 mb-1">公式ウェブサイト</h3>
                      <p className="text-green-700">www.enabler.jp</p>
                    </div>
                  </motion.a>
                </div>
                
                <div className="text-center mt-10">
                  <p className="text-sm text-gray-500">
                    © {currentYear} Enabler, Inc. All rights reserved.
                  </p>
                </div>
              </div>
            </section>
          </ScrollArea>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandGuidelines;
