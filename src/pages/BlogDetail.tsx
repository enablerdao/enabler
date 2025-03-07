import React, { useEffect, useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { logActivity } from '@/lib/logger';
import { companyInfo } from '@/lib/data';
import { ArrowLeft, Calendar, Tag, User, Share2, MessageCircle, Heart, BookmarkPlus } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

const categories = [
  { id: 'all', name: 'すべて' },
  { id: 'product', name: 'プロダクト' },
  { id: 'facility', name: '施設情報' },
  { id: 'technology', name: 'テクノロジー' },
  { id: 'event', name: 'イベント' },
  { id: 'company', name: '会社情報' }
];

// This would ideally come from an API or database, for demo purposes we're using static data
const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '新たなデジタルサービス「TimeDrop」ベータ版リリースのお知らせ',
    excerpt: '時間の使い方を革新する新サービス「TimeDrop」のベータ版を限定公開しました。このサービスがもたらす可能性について解説します。',
    content: `時間の使い方を革新する新サービス「TimeDrop」のベータ版を限定公開しました。

私たちの生活において最も貴重なリソースである「時間」。この時間をより価値あるものにするために、私たちは「TimeDrop」を開発しました。

「TimeDrop」は単なる時間管理アプリではありません。AIがあなたの日常のパターンを学習し、最適な時間の使い方を提案します。また、友人や同僚と時間をシェアする「タイムギフト」機能も搭載。「30分だけこの仕事を手伝って」「子どもを1時間見ていて」といった時間の贈り合いが、デジタル上で簡単にできるようになります。

現在ベータ版では以下の機能を提供しています：

- AI時間分析：あなたの1日の過ごし方を分析し、より良い時間の使い方を提案
- タイムギフト：家族や友人と時間をシェアする機能
- フォーカスモード：集中するための最適な環境設定
- 時間可視化：時間の使い方を視覚的に理解できるダッシュボード

ベータ版へのアクセスをご希望の方は、公式サイトにてウェイティングリストへの登録をお願いします。多くのユーザーからのフィードバックをもとに、正式版へと進化させていく予定です。

テクノロジーで、一人ひとりが自然に可能性を広げられる社会をつくるという私たちのミッションの下、「TimeDrop」がもたらす新しい時間の過ごし方にご期待ください。`,
    author: '濱田優貴',
    date: today,
    category: 'product',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    tags: ['新サービス', 'TimeDrop', 'ベータ版']
  },
  {
    id: 2,
    title: '滞在型施設「Enabliss Villa」第一号物件が完成',
    excerpt: 'テクノロジーと自然が融合した新しいコンセプトの滞在型施設が山梨県に完成しました。デジタルデトックスと創造性を促進する空間設計について。',
    content: `山梨県八ヶ岳山麓に、当社初の滞在型施設「Enabliss Villa」が完成しました。

東京から約2時間。八ヶ岳の雄大な自然の中に佇む「Enabliss Villa」は、テクノロジーと自然の調和をコンセプトに設計された滞在型施設です。

施設の特徴：

- 自然エネルギーを活用したサステナブルな設計
- 高速Wi-Fiと最新のAV機器を備えたワークスペース
- デジタルデトックスを促す「オフラインゾーン」
- 地元食材を活かした自動調理システム
- 自然の中で楽しむサウナ体験

注目すべきは、建物全体に導入された「アンビエントテクノロジー」です。目に見えない形で生活をサポートするテクノロジーにより、自然の中にいながら必要なときに必要なサポートを受けることができます。また、敷地内には小川が流れ、四季折々の自然を体感できる散策路も整備されています。

「Enabliss Villa」は、単なる滞在施設ではなく、新しい働き方・生き方を体験できる場所です。都会の喧騒を離れ、自然の中で創造性を高めながら、必要なときには最先端のテクノロジーのサポートを受ける。このバランスこそが、私たちが提案する新しいライフスタイルです。

2023年11月より予約受付を開始予定です。詳細は公式サイトをご確認ください。`,
    author: '濱田優貴',
    date: today,
    category: 'facility',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tags: ['Enabliss', '滞在施設', '山梨']
  },
  {
    id: 3,
    title: 'オープンソースで実現する新しい開発モデル',
    excerpt: 'AIによる革命的な変化がもたらす、組織的かつ開かれた開発モデルについて。エンジニアもノンエンジニアも、誰もが参加できる新しい貢献の形を提案します。',
    content: `テクノロジーの発展とイノベーションの加速には、知識とアイデアの共有が不可欠です。この考えのもと、当社は主要プロジェクトのコードベースをオープンソース化することを決定しました。

オープンソースによる新しい組織モデルは、従来の開発の枠組みを大きく変えようとしています。AIの進化により、エンジニアの可能性は飛躍的に広がっています。一人のエンジニアが関われるプロジェクトの幅が増え、多様な分野に貢献できるようになりました。

さらに革命的なのは、これまでエンジニアリングの知識がなければ参加できなかった開発プロセスに、非エンジニアの方々も参加できるようになった点です。適切なガイダンスがあれば、プログラミングの専門知識がなくても、アイデアやフィードバック、ドキュメント作成など、様々な形で貢献が可能になります。

私たちのビジョンは明確です：誰もが参加できる、開かれた開発コミュニティを作ること。そして、その実現のために私自身がその方法を指導し、サポートしていきます。皆さんのアイデアや視点は、プロジェクトに新たな価値をもたらす重要な要素なのです。

具体的には以下のプロジェクトが対象となります：

- TimeSync API：時間管理の基本エンジン
- SpaceConnect：空間デザインアルゴリズム
- EcoSense：環境センシングフレームワーク

これらのプロジェクトはGitHubで公開され、世界中の開発者が改良や拡張に参加できるようになります。私たちは単にコードを公開するだけでなく、開発者コミュニティとの積極的な対話も重視しています。毎月のオンラインミートアップや、四半期ごとのハッカソンなどを通じて、コミュニティの活性化を図ります。

このイニシアチブの詳細については近日中に詳しくお伝えする予定ですが、今から参加に興味を持たれた方はお気軽にご連絡ください。あなたの貢献が、次世代のテクノロジーを共に創り上げる力になります。`,
    author: '濱田優貴',
    date: today,
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    tags: ['オープンソース', '技術共有', 'コミュニティ', 'AI革命']
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Log page view
    logActivity('pageView', { path: `/blog/${id}` });
    
    // Find the post based on the ID from URL parameter
    const postId = parseInt(id || '0', 10);
    const foundPost = blogPosts.find(post => post.id === postId);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [id]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-6">
            <Link to="/blog" className="inline-flex items-center text-enabler-600 hover:text-enabler-700 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ブログ一覧に戻る
            </Link>
            <div className="text-center py-16">
              <h1 className="text-2xl font-bold text-gray-700 mb-4">記事が見つかりませんでした</h1>
              <p className="text-gray-600 mb-8">お探しの記事は存在しないか、移動した可能性があります。</p>
              <Button asChild variant="default">
                <Link to="/blog">ブログトップに戻る</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <MotionBox>
            <Link to="/blog" className="inline-flex items-center text-enabler-600 hover:text-enabler-700 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ブログ一覧に戻る
            </Link>
          </MotionBox>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <MotionBox>
                <article className="bg-white rounded-xl overflow-hidden shadow-subtle">
                  <div className="h-64 md:h-96 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {categories.find(c => c.id === post.category) && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-enabler-100 text-enabler-800">
                          <Tag className="w-3 h-3 mr-1" />
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                      )}
                      
                      {post.tags.map((tag, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                      {post.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                      <span className="inline-flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </span>
                      <span className="inline-flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    
                    <div className="prose prose-slate max-w-none">
                      {post.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-6 text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                    <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center">
                      <div className="flex space-x-4">
                        <button className="inline-flex items-center text-gray-500 hover:text-enabler-600 transition-colors">
                          <Heart className="w-5 h-5 mr-1" />
                          <span className="text-sm">いいね</span>
                        </button>
                        <button className="inline-flex items-center text-gray-500 hover:text-enabler-600 transition-colors">
                          <MessageCircle className="w-5 h-5 mr-1" />
                          <span className="text-sm">コメント</span>
                        </button>
                        <button className="inline-flex items-center text-gray-500 hover:text-enabler-600 transition-colors">
                          <BookmarkPlus className="w-5 h-5 mr-1" />
                          <span className="text-sm">保存</span>
                        </button>
                      </div>
                      <button className="inline-flex items-center text-gray-500 hover:text-enabler-600 transition-colors">
                        <Share2 className="w-5 h-5 mr-1" />
                        <span className="text-sm">シェア</span>
                      </button>
                    </div>
                  </div>
                </article>
              </MotionBox>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <MotionBox delay={100}>
                <div className="bg-white rounded-xl shadow-subtle p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">著者について</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">{post.author}</h4>
                      <p className="text-sm text-gray-600">{companyInfo.nameJp}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {companyInfo.nameJp}のブログを通じて、テクノロジーと人間の可能性について発信しています。
                  </p>
                </div>
              </MotionBox>
              
              {relatedPosts.length > 0 && (
                <MotionBox delay={200}>
                  <div className="bg-white rounded-xl shadow-subtle p-6">
                    <h3 className="text-lg font-semibold mb-4">関連記事</h3>
                    <div className="space-y-6">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="flex flex-col sm:flex-row gap-4">
                          <div className="sm:w-1/3 h-24 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="sm:w-2/3">
                            <h4 className="font-medium text-gray-800 mb-1 line-clamp-2 text-sm">
                              <Link to={`/blog/${relatedPost.id}`} className="hover:text-enabler-600 transition-colors">
                                {relatedPost.title}
                              </Link>
                            </h4>
                            <p className="text-xs text-gray-500">{formatDate(relatedPost.date)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionBox>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
