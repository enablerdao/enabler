
import React from 'react';
import { Link } from 'react-router-dom';
import { MotionBox } from '@/components/ui/motion-box';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface RelatedPostsProps {
  posts: BlogPost[];
  formatDate: (date: string) => string;
  delay?: number;
}

const RelatedPosts = ({ posts, formatDate, delay = 200 }: RelatedPostsProps) => {
  if (posts.length === 0) return null;
  
  return (
    <MotionBox delay={delay}>
      <div className="bg-white rounded-xl shadow-subtle p-6">
        <h3 className="text-lg font-semibold mb-4">関連記事</h3>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/3 h-24 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:w-2/3">
                <h4 className="font-medium text-gray-800 mb-1 line-clamp-2 text-sm">
                  <Link to={`/blog/${post.id}`} className="hover:text-enabler-600 transition-colors">
                    {post.title}
                  </Link>
                </h4>
                <p className="text-xs text-gray-500">{formatDate(post.date)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionBox>
  );
};

export default RelatedPosts;
