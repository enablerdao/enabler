
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundContent = () => {
  return (
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
  );
};

export default NotFoundContent;
