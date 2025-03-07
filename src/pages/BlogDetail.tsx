
import React, { useEffect, useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { logActivity } from '@/lib/logger';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlogPost, blogPosts, categories } from '@/components/blog/BlogPostData';
import BlogContent from '@/components/blog/BlogContent';
import BlogSidebar from '@/components/blog/BlogSidebar';
import NotFoundContent from '@/components/blog/NotFoundContent';

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
          <NotFoundContent />
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
              <BlogContent 
                post={post} 
                categories={categories} 
                formatDate={formatDate} 
              />
            </div>
            
            {/* Sidebar */}
            <BlogSidebar 
              author={post.author}
              relatedPosts={relatedPosts}
              formatDate={formatDate}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
