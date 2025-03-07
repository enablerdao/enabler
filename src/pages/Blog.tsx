
import React, { useEffect, useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { logActivity } from '@/lib/logger';
import { companyInfo } from '@/lib/data';
import { ArrowLeft, Calendar, Tag, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const Blog = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/blog' });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'ウェブサイトを大幅リニューアル！より使いやすく、より美しく',
      excerpt: '本日、当社のウェブサイトを大幅にリニューアルしました。ユーザー体験の向上とサービス内容の明確化を目指した新デザインについてご紹介します。',
      content: 'Lorem ipsum dolor sit amet...',
      author: '佐藤 健太郎',
      date: '2023-06-15',
      category: 'company',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80',
      tags: ['リニューアル', 'ウェブサイト', 'デザイン']
    },
    {
      id: 2,
      title: 'StayFlow開発の進捗状況：新機能とこれからの展望',
      excerpt: '現在開発中のStayFlowサービスの進捗状況をご報告します。ユーザーフィードバックに基づく新機能と今後の展開計画について詳しく解説します。',
      content: 'Lorem ipsum dolor sit amet...',
      author: '山田 優子',
      date: '2023-06-10',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=800&q=80',
      tags: ['StayFlow', '開発状況', '新機能']
    },
    {
      id: 3,
      title: 'AIによる開発革命：Lovableで実現する効率的なウェブ制作',
      excerpt: 'AIの開発精度が飛躍的に向上し、ウェブ開発の効率化が進んでいます。当社が活用している最新のAIツールと、それによって実現できることをご紹介します。',
      content: 'Lorem ipsum dolor sit amet...',
      author: '田中 誠',
      date: '2023-06-05',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      tags: ['AI開発', 'Lovable', 'オープンソース']
    },
    {
      id: 4,
      title: 'オープンソースで実現する新しい開発モデル',
      excerpt: '当社が推進するオープンソースプロジェクトについて。誰でも簡単に参加できる開発モデルと、AIを活用したリクエスト対応システムがもたらす可能性について解説します。',
      content: 'Lorem ipsum dolor sit amet...',
      author: '佐藤 健太郎',
      date: '2023-05-20',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80',
      tags: ['オープンソース', 'AI', '開発モデル']
    },
    {
      id: 5,
      title: 'AIツールの比較：2023年6月時点での活用状況',
      excerpt: '当社が現在活用しているAIツールの比較と実績。繰り返し使用することで高品質な成果物を効率的に生成できるようになった最新事例をご紹介します。',
      content: 'Lorem ipsum dolor sit amet...',
      author: '鈴木 美咲',
      date: '2023-05-15',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      tags: ['AI比較', '開発効率', '事例紹介']
    },
    {
      id: 6,
      title: '誰でも参加できる：AIを活用したリクエスト対応システムのご案内',
      excerpt: 'AIを活用して、ユーザーからのリクエストを効率的に処理し、修正・リリースまでを自動化するシステムを構築しました。今後の展望についてご説明します。',
      content: 'Lorem ipsum dolor sit amet...',
      author: '高橋 隆',
      date: '2023-05-10',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1642634981793-cc0d2599243e?auto=format&fit=crop&w=800&q=80',
      tags: ['AI', 'リクエスト対応', '自動化']
    }
  ];
  
  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'product', name: 'プロダクト' },
    { id: 'technology', name: 'テクノロジー' },
    { id: 'company', name: '会社情報' },
    { id: 'event', name: 'イベント' },
    { id: 'facility', name: '施設情報' }
  ];
  
  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'all' || post.category === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <MotionBox>
            <div className="mb-10">
              <Link to="/" className="inline-flex items-center text-enabler-600 hover:text-enabler-700 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                ホームに戻る
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-enabler-800 mb-4">ブログ・ニュース</h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                {companyInfo.nameJp}の最新情報、テクノロジートレンド、イベント報告などをお届けします。
              </p>
            </div>
          </MotionBox>
          
          {/* Search and Filter */}
          <MotionBox delay={100}>
            <div className="bg-white rounded-lg shadow-subtle p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-grow max-w-md">
                  <input
                    type="text"
                    placeholder="キーワードで検索..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-enabler-500 focus:border-enabler-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === category.id 
                          ? 'bg-enabler-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </MotionBox>
          
          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length === 0 ? (
              <div className="md:col-span-3 text-center py-12 text-gray-500">
                該当する記事が見つかりませんでした
              </div>
            ) : (
              filteredPosts.map((post, index) => (
                <MotionBox key={post.id} delay={200 + index * 100}>
                  <article className="bg-white rounded-xl overflow-hidden shadow-subtle h-full flex flex-col">
                    <Link to={`/blog/${post.id}`} className="h-48 overflow-hidden block">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {categories.find(c => c.id === post.category) && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-enabler-100 text-enabler-800">
                            <Tag className="w-3 h-3 mr-1" />
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                        )}
                      </div>
                      
                      <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                        <Link to={`/blog/${post.id}`} className="hover:text-enabler-600 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100 text-sm text-gray-500 flex justify-between items-center">
                        <span className="inline-flex items-center">
                          <User className="w-3.5 h-3.5 mr-1.5" />
                          {post.author}
                        </span>
                        <span className="inline-flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1.5" />
                          {formatDate(post.date)}
                        </span>
                      </div>
                    </div>
                  </article>
                </MotionBox>
              ))
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
