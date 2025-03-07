
import React from 'react';
import AuthorCard from './AuthorCard';
import RelatedPosts from './RelatedPosts';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface BlogSidebarProps {
  author: string;
  relatedPosts: BlogPost[];
  formatDate: (date: string) => string;
}

const BlogSidebar = ({ author, relatedPosts, formatDate }: BlogSidebarProps) => {
  return (
    <div className="lg:col-span-1">
      <AuthorCard author={author} />
      {relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} formatDate={formatDate} />
      )}
    </div>
  );
};

export default BlogSidebar;
