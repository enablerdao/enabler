
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
        
        <div className="bg-white p-5 rounded-lg shadow-sm mb-6 border">
          <h2 className="text-xl font-semibold mb-3">2025年からの進化するロゴデザイン</h2>
          <p className="text-gray-600">
            Enablerのロゴは、創業カラー（2022年: #22B6FF）を起点に、フィボナッチ数列に基づく数学的アルゴリズムで進化します。
            2025年を新たな出発点として、未来に向けて徐々に色彩や形状が変化していく様子を横スクロールで確認できます。
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <div className="text-sm px-3 py-1 bg-blue-50 rounded-md flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#22B6FF] mr-1"></span>
              <span>創業カラー: #22B6FF</span>
            </div>
            <div className="text-sm px-3 py-1 bg-blue-50 rounded-md flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#2BBCFF] mr-1"></span>
              <span>2025年カラー: #2BBCFF</span>
            </div>
            <div className="text-sm px-3 py-1 bg-green-50 rounded-md flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#4CAF50] mr-1"></span>
              <span>2025年アクセント: #4CAF50</span>
            </div>
          </div>
        </div>
        
        <div className="my-8">
          <InfiniteLogoScroller />
        </div>
        
        <div className="mt-8 bg-gray-100 rounded-lg p-4 text-sm text-gray-600">
          <p>
            <strong>ヒント:</strong> 拡大/縮小ボタンでロゴのサイズと表示数を調整できます。右へスクロールすると自動的に新しい年のロゴが追加されます。
            各ロゴのカラーをクリックするとクリップボードにカラーコードがコピーされます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoEvolutionViewer;
