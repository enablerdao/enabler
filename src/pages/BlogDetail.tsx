
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
    author: '佐藤 健太郎',
    date: '2023-10-15',
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
    author: '山田 優子',
    date: '2023-09-22',
    category: 'facility',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tags: ['Enabliss', '滞在施設', '山梨']
  },
  {
    id: 3,
    title: 'オープンソースコミュニティとの協業プロジェクト始動',
    excerpt: '当社のプロジェクトをオープンソース化し、外部開発者との協業を開始しました。技術共有がもたらすイノベーションについて考察します。',
    content: `当社が開発するサービスのコアテクノロジーをオープンソース化し、グローバルな開発者コミュニティとの協業を開始しました。

テクノロジーの発展とイノベーションの加速には、知識とアイデアの共有が不可欠です。この考えのもと、当社は主要プロジェクトのコードベースをオープンソース化することを決定しました。

具体的には以下のプロジェクトが対象となります：

- TimeSync API：時間管理の基本エンジン
- SpaceConnect：空間デザインアルゴリズム
- EcoSense：環境センシングフレームワーク

これらのプロジェクトはGitHubで公開され、世界中の開発者が改良や拡張に参加できるようになります。私たちは単にコードを公開するだけでなく、開発者コミュニティとの積極的な対話も重視しています。毎月のオンラインミートアップや、四半期ごとのハッカソンなどを通じて、コミュニティの活性化を図ります。

オープンソース化することで、私たちのテクノロジーはより堅牢に、より革新的になると信じています。多様な視点からのフィードバックは、想像もしなかった用途や改善点を見つける助けとなるでしょう。

また、このイニシアチブは若手開発者の育成にも寄与します。実際のプロジェクトに参加することで、理論だけでなく実践的なスキルを身につける機会を提供します。

テクノロジーの民主化とイノベーションの加速。この二つの目標に向けて、オープンソースコミュニティとの協業は重要な一歩です。興味のある開発者の方は、ぜひGitHubリポジトリをチェックしてみてください。`,
    author: '田中 誠',
    date: '2023-08-30',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    tags: ['オープンソース', '技術共有', 'コミュニティ']
  },
  {
    id: 4,
    title: '「テクノロジーと人間性の共存」をテーマにした講演会を開催',
    excerpt: '当社CEOが登壇した「テクノロジーと人間性」をテーマにした講演会のレポート。デジタル時代における人間中心の設計思想について。',
    content: `先日開催された「Future Design Conference 2023」にて、当社CEO佐藤健太郎が「テクノロジーと人間性の共存」をテーマに講演を行いました。

急速なテクノロジーの発展により、私たちの生活は大きく変わりつつあります。AIやIoTなどの最先端技術が日常に浸透する中、「人間らしさ」とは何か、テクノロジーとどう共存していくべきか、という問いがより重要になっています。

講演では、以下のポイントが議論されました：

1. テクノロジーは目的ではなく手段である
2. 人間中心設計（Human-Centered Design）の重要性
3. エシカルテクノロジーの実践
4. デジタルウェルビーイングの考え方
5. テクノロジーと共に進化する人間性

特に注目を集めたのは、「テクノロジーの進化は人間性の拡張である」という考え方です。テクノロジーによって私たちの能力や可能性が広がる一方で、その進化の方向性を決めるのは私たち自身である、という点が強調されました。

また、当社の取り組みとして、プロダクト開発における「エシカルフレームワーク」の導入事例も紹介されました。このフレームワークは、新しい機能やサービスを設計する際に、その社会的影響や倫理的な側面を多角的に評価するためのツールです。

講演後のパネルディスカッションでは、教育者、哲学者、テクノロジストが集まり、活発な議論が交わされました。デジタル時代の教育のあり方や、AIと人間の関係性など、多岐にわたるトピックについて深い洞察が共有されました。

テクノロジーの発展と人間性の豊かさは、対立するものではなく共に成長しうるものであるという認識。この考えのもと、私たちは今後も人間中心のテクノロジー開発を推進していきます。`,
    author: '佐藤 健太郎',
    date: '2023-08-05',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    tags: ['講演会', 'イベント', 'テクノロジー哲学']
  },
  {
    id: 5,
    title: '新たな採用方針と働き方改革について',
    excerpt: '当社の新たな採用方針と、多様な働き方を尊重する組織文化づくりについて紹介します。リモートワークとオフィスワークの最適なブレンドを模索。',
    content: `当社は新たな採用方針と働き方改革を発表しました。変化する社会環境に対応し、より柔軟でインクルーシブな職場環境を目指します。

「場所や時間に縛られない、成果と成長を重視する」。これが新たな働き方のビジョンです。具体的には以下の施策を導入します：

1. フルリモートオプションの正式導入
全ての職種において、フルリモートでの勤務を選択肢として提供します。地方在住者や海外在住者も積極的に採用していきます。

2. 成果ベースの評価システム
勤務時間や出社日数ではなく、成果とスキルの向上を重視した評価システムを導入します。

3. 4.5日勤務制のトライアル
週4.5日勤務（金曜午後休）を試験的に導入し、ワークライフバランスの向上を目指します。

4. スキル開発支援の強化
年間10万円の自己啓発予算と、月8時間の学習時間を全社員に付与します。

5. ウェルビーイングプログラム
メンタルヘルスケア、フィットネス支援など、総合的なウェルビーイング施策を実施します。

これらの施策の背景には、「多様な人材が最大限に能力を発揮できる環境づくり」という考えがあります。一人ひとりが異なる事情や希望を持つ中で、画一的な働き方を強制するのではなく、個人が最も生産的で充実感を得られる働き方を選べることが重要だと考えています。

新たな採用においては、スキルや経験だけでなく、自律性、学習意欲、チームワークを重視します。職務経歴や学歴よりも、問題解決能力やクリエイティビティを評価する選考プロセスへと移行します。

「テクノロジーで、一人ひとりが自然に可能性を広げられる社会をつくる」という当社のミッションは、私たち自身の働き方にも適用されるべきものです。新しい働き方改革を通じて、社員一人ひとりが自分らしく活躍できる組織を目指します。`,
    author: '鈴木 美咲',
    date: '2023-07-18',
    category: 'company',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
    tags: ['採用', '働き方', '組織文化']
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
