
import React, { useEffect } from 'react';
import { logActivity } from '@/lib/logger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { MotionBox } from '@/components/ui/motion-box';
import { Calculator, Info, Palette, Type, Image, MessageSquare, BookOpen, HelpCircle } from 'lucide-react';

const BrandGuidelines = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
  }, []);

  // Current brand color calculation
  const currentYear = new Date().getFullYear();
  const yearsFromFoundation = currentYear - 2022;
  const R = Math.min(34 + yearsFromFoundation * 3, 224);
  const G = Math.min(182 + yearsFromFoundation * 2, 245);
  const currentColor = `rgb(${R}, ${G}, 255)`;
  const currentHex = `#${R.toString(16).padStart(2, '0')}${G.toString(16).padStart(2, '0')}FF`;

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-6">
          <MotionBox delay={100}>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Enabler ブランドガイドライン
              </h1>
              <div className="w-full max-w-2xl mx-auto">
                <div className="p-6 rounded-xl bg-white shadow-subtle flex justify-center items-center">
                  <Logo variant="svg" size="lg" />
                </div>
              </div>
            </div>
          </MotionBox>

          {/* Brand Story Section */}
          <MotionBox delay={200}>
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <BookOpen className="text-enabler-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">1. ブランドストーリーと理念</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <p className="text-lg mb-4 leading-relaxed">
                  「Enabler（イネブラ）」は、人々が持つ可能性をテクノロジーの力で優しく引き出し、実現するために2022年に誕生しました。
                </p>
                <p className="text-lg leading-relaxed">
                  誰もが持っている可能性の種を育て、未来をともに創るパートナーとして、あたたかな視点で寄り添い続けています。
                </p>
              </div>
            </section>
          </MotionBox>

          {/* Logo Section */}
          <MotionBox delay={300}>
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Info className="text-enabler-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">2. ロゴについて</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <p className="text-lg mb-6 leading-relaxed">
                  ロゴは鮮やかなブルーを基調とし、毎年少しずつ色調が明るく変化するように設計されています。色の変化は創業年（2022年）を起点とし、数学的な関数で表現されます。
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 border-b pb-2">ロゴのSVGデータ</h3>
                  <div className="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                      <Logo variant="svg" size="lg" />
                    </div>
                    <div className="w-full md:w-1/2 overflow-x-auto">
                      <pre className="text-xs bg-gray-100 p-4 rounded-md">
                        {`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70">
  <defs>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2BBCFF" />
      <stop offset="100%" stop-color="#1E90FF" />
    </linearGradient>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2BBCFF" />
      <stop offset="100%" stop-color="#1E90FF" />
    </linearGradient>
  </defs>
  <rect width="200" height="70" fill="#fff"/>
  <rect x="15" y="25" width="60" height="3" rx="1.5" fill="url(#lineGradient)"/>
  <rect x="15" y="33" width="40" height="3" rx="1.5" fill="url(#lineGradient)"/>
  <rect x="15" y="41" width="60" height="3" rx="1.5" fill="url(#lineGradient)"/>
  <text x="90" y="40" font-family="Consolas" font-size="18" letter-spacing="0.5" font-weight="bold" fill="url(#textGradient)">ENABLER</text>
</svg>`}
                      </pre>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 border-b pb-2">グラデーションの意味</h3>
                  <p className="text-lg mb-4 leading-relaxed">
                    ロゴのグラデーションは、「可能性の広がり」と「未来へ向かう進化」を象徴しています。
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>現在のブランドカラー（{currentYear}年）：{currentHex}</li>
                    <li>ロゴ使用時の余白：ロゴの高さの1/3程度を空け、他の要素との重なりを避ける。</li>
                    <li>ロゴの変形や色の自由な変更は厳禁。</li>
                  </ul>
                </div>
              </div>
            </section>
          </MotionBox>

          {/* Brand Color Section */}
          <MotionBox delay={400}>
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Palette className="text-enabler-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">3. ブランドカラー</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <p className="text-lg mb-6 leading-relaxed">
                  ブランドカラーは創業年を起点に年数経過で変化します。変化は以下の数式で定義されています。
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 border-b pb-2">数学的な色の変化表現</h3>
                  <p className="text-lg mb-4 leading-relaxed">
                    年数を <code>y</code>（西暦年）とした時の色の変化は、以下の式で表されます。
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <pre className="font-mono text-sm">
                      {`R = min(34 + (y - 2022) * 3, 224)
G = min(182 + (y - 2022) * 2, 245)
B = 255`}
                    </pre>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>現在（{currentYear}年）のカラー：RGB({R},{G},255) → HEX:{currentHex}</li>
                    <li>将来的にはRGB値が徐々に255（透明色）へと近づいていきます。</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mb-3">メインカラー</h3>
                    <div 
                      className="h-24 rounded-lg shadow-sm mb-2" 
                      style={{ backgroundColor: currentColor }}
                    ></div>
                    <p className="text-sm text-gray-600">スカイブルー ({currentHex})</p>
                    <p className="text-xs text-gray-500">数式で動的に変化</p>
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mb-3">アクセントカラー</h3>
                    <div 
                      className="h-24 rounded-lg shadow-sm mb-2" 
                      style={{ backgroundColor: '#79D300' }}
                    ></div>
                    <p className="text-sm text-gray-600">若草色 (#79D300)</p>
                    <p className="text-xs text-gray-500">成長、生命力、安心感</p>
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mb-3">補助カラー</h3>
                    <div className="grid grid-cols-2 gap-2 h-24">
                      <div 
                        className="rounded-lg shadow-sm border border-gray-200" 
                        style={{ backgroundColor: '#FFFFFF' }}
                      ></div>
                      <div 
                        className="rounded-lg shadow-sm" 
                        style={{ backgroundColor: '#C0C0C0' }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <p className="text-sm text-gray-600">ホワイト (#FFFFFF)</p>
                      <p className="text-sm text-gray-600">シルバー (#C0C0C0)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </MotionBox>

          {/* Typography Section */}
          <MotionBox delay={500}>
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Type className="text-enabler-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">4. タイポグラフィ</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">和文フォント</h3>
                    <p className="text-6xl mb-2 font-sans">あア阿</p>
                    <p className="text-lg font-medium">Noto Sans JP</p>
                    <p className="text-gray-600">Regular, Bold</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">欧文フォント</h3>
                    <p className="text-6xl mb-2 font-sans">Aa1</p>
                    <p className="text-lg font-medium">Montserrat</p>
                    <p className="text-gray-600">Regular, Medium, Bold</p>
                  </div>
                </div>
                <p className="text-lg mt-6">
                  見やすさや親しみやすさを重視し、余白や間隔にも配慮してください。
                </p>
              </div>
            </section>
          </MotionBox>

          {/* Photos & Illustrations Section */}
          <MotionBox delay={600}>
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Image className="text-enabler-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">5. 写真・イラスト</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <ul className="list-disc pl-6 space-y-3 text-lg">
                  <li>写真は明るく透明感があり、共感性や温かさを感じられるものを使用。</li>
                  <li>イラストはシンプルで柔らかなタッチを推奨。</li>
                </ul>
              </div>
            </section>
          </MotionBox>

          {/* Voice & Tone Section */}
          <MotionBox delay={700}>
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-enabler-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">6. ボイス＆トーン</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <p className="text-lg mb-4">
                  コミュニケーションでは、「親しみやすさ」「共感」「前向きさ」を大切にします。
                </p>
                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <p className="font-medium text-red-800 mb-2">避ける表現：</p>
                  <ul className="list-disc pl-6 space-y-1 text-red-700">
                    <li>否定的</li>
                    <li>威圧的</li>
                    <li>曖昧さ</li>
                  </ul>
                </div>
              </div>
            </section>
          </MotionBox>

          {/* Brand Assets Usage Rules */}
          <MotionBox delay={800}>
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <BookOpen className="text-enabler-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">7. ブランド資産使用ルール</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <p className="text-lg">
                  ロゴやブランドカラーを外部利用する場合は、公式のロゴファイル（SVG、PNG）を使用し、必ずガイドラインを遵守してください。
                </p>
              </div>
            </section>
          </MotionBox>

          {/* Brand Color Evolution */}
          <MotionBox delay={900}>
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Calculator className="text-enabler-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">8. ブランドカラーの進化</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <p className="text-lg mb-6">
                  Enablerのブランドカラーは創業年の2022年を起点に、5年ごとに明るさや透明感が増していきます。
                </p>
                <div className="overflow-x-auto">
                  <div className="flex space-x-4 min-w-max">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-lg" style={{ backgroundColor: '#22B6FF' }}></div>
                      <p className="mt-2 font-medium">2022年</p>
                      <p className="text-sm text-gray-600">#22B6FF</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-lg" style={{ backgroundColor: '#2EBBFF' }}></div>
                      <p className="mt-2 font-medium">2027年</p>
                      <p className="text-sm text-gray-600">#2EBBFF</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-lg" style={{ backgroundColor: '#47C5FF' }}></div>
                      <p className="mt-2 font-medium">2032年</p>
                      <p className="text-sm text-gray-600">#47C5FF</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-lg" style={{ backgroundColor: '#60CFFF' }}></div>
                      <p className="mt-2 font-medium">2037年</p>
                      <p className="text-sm text-gray-600">#60CFFF</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-lg" style={{ backgroundColor: '#E0F5FF' }}></div>
                      <p className="mt-2 font-medium">2122年</p>
                      <p className="text-sm text-gray-600">#E0F5FF</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg mt-6">
                  2037年以降、徐々に透明感が増し、100年後の2122年には淡く透明に近いブルー (#E0F5FF) になります。
                </p>
              </div>
            </section>
          </MotionBox>

          {/* FAQ & Contact */}
          <MotionBox delay={1000}>
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <HelpCircle className="text-enabler-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">9. FAQ・お問い合わせ</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <p className="text-lg mb-4">
                  ブランドやロゴに関するご質問・利用申請は、以下までご連絡ください。
                </p>
                <ul className="list-disc pl-6 space-y-3 text-lg">
                  <li>メール：<a href="mailto:brand@enabler.jp" className="text-enabler-600 hover:underline">brand@enabler.jp</a></li>
                  <li>専用フォーム（<a href="#" className="text-enabler-600 hover:underline">Webページ</a>）</li>
                </ul>
              </div>
            </section>
          </MotionBox>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandGuidelines;
