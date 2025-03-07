
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Heart, MessageCircle, BookmarkPlus, Share2, Tag } from 'lucide-react';

interface BlogPostContent {
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
}

interface CategoryInfo {
  id: string;
  name: string;
}

interface BlogContentProps {
  post: BlogPostContent;
  categories: CategoryInfo[];
  formatDate: (date: string) => string;
}

const BlogContent = ({ post, categories, formatDate }: BlogContentProps) => {
  return (
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
          
          <BlogMeta author={post.author} date={post.date} formatDate={formatDate} />
          
          <div className="prose prose-slate max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <BlogActions />
        </div>
      </article>
    </MotionBox>
  );
};

const BlogMeta = ({ author, date, formatDate }: { author: string; date: string; formatDate: (date: string) => string }) => (
  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
    <span className="inline-flex items-center">
      <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      {author}
    </span>
    <span className="inline-flex items-center">
      <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      {formatDate(date)}
    </span>
  </div>
);

const BlogActions = () => (
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
);

export default BlogContent;
