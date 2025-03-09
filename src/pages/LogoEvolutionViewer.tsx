
import React from 'react';
import InfiniteLogoScroller from '@/components/brand-guidelines/InfiniteLogoScroller';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const LogoEvolutionViewer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Enabler ロゴ無限スクロール
          </h1>
          <Link to="/brand-guidelines">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              ブランドガイドラインに戻る
            </Button>
          </Link>
        </div>
        
        <p className="mb-6 text-gray-600">
          ロゴの進化を横スクロールで見ることができます。創業年から数百年先までのロゴの変化を確認できます。
        </p>
        
        <div className="my-8">
          <InfiniteLogoScroller />
        </div>
      </div>
    </div>
  );
};

export default LogoEvolutionViewer;
