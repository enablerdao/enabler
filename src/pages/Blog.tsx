
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
      title: '新たなデジタルサービス「TimeDrop」ベータ版リリースのお知らせ',
      excerpt: '時間の使い方を革新する新サービス「TimeDrop」のベータ版を限定公開しました。このサービスがもたらす可能性について解説します。',
      content: 'Lorem ipsum dolor sit amet...',
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
      content: 'Lorem ipsum dolor sit amet...',
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
      content: 'Lorem ipsum dolor sit amet...',
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
      content: 'Lorem ipsum dolor sit amet...',
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
      content: 'Lorem ipsum dolor sit amet...',
      author: '鈴木 美咲',
      date: '2023-07-18',
      category: 'company',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
      tags: ['採用', '働き方', '組織文化']
    }
  ];
  
  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'product', name: 'プロダクト' },
    { id: 'facility', name: '施設情報' },
    { id: 'technology', name: 'テクノロジー' },
    { id: 'event', name: 'イベント' },
    { id: 'company', name: '会社情報' }
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
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    
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
                        {post.title}
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
