import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  title: string;
  description: string;
  section: string;
  anchor: string;
}

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // サンプルの検索データ
  const searchData: SearchResult[] = [
    {
      title: 'ロゴの使用ガイドライン',
      description: 'ロゴの最小サイズ、余白、禁止事項について',
      section: 'ロゴ',
      anchor: '#logo-section'
    },
    {
      title: 'プライマリーカラー',
      description: 'ブランドの主要カラーとその使用方法',
      section: 'カラー',
      anchor: '#primary-colors'
    },
    {
      title: 'セカンダリーカラー',
      description: 'アクセントとして使用する補助的なカラーパレット',
      section: 'カラー',
      anchor: '#secondary-colors'
    },
    {
      title: '年次カラー',
      description: '各年に割り当てられた特別なカラー',
      section: 'カラー',
      anchor: '#yearly-colors'
    },
    {
      title: 'タイポグラフィ',
      description: 'フォントファミリーとその使用方法',
      section: 'タイポグラフィ',
      anchor: '#typography'
    },
    {
      title: '見出しのスタイル',
      description: '見出しレベルごとのフォントサイズと太さ',
      section: 'タイポグラフィ',
      anchor: '#heading-styles'
    },
    {
      title: '声調と言葉遣い',
      description: 'ブランドの個性を表現するトーンとボイス',
      section: '声調',
      anchor: '#voice-and-tone'
    },
    {
      title: '写真スタイル',
      description: 'ブランドに適した写真の選び方と編集スタイル',
      section: '写真・イラスト',
      anchor: '#photo-style'
    },
    {
      title: 'イラストレーションガイドライン',
      description: 'イラストの一貫性を保つためのガイドライン',
      section: '写真・イラスト',
      anchor: '#illustration-guidelines'
    },
    {
      title: 'ダウンロード可能なリソース',
      description: 'ロゴ、カラーパレット、フォントなどのダウンロード',
      section: 'リソース',
      anchor: '#downloadable-resources'
    },
    {
      title: 'よくある質問',
      description: 'ブランドガイドラインに関するFAQ',
      section: 'FAQ',
      anchor: '#faq-section'
    }
  ];

  // 検索ロジック
  useEffect(() => {
    if (searchQuery.length > 1) {
      setIsSearching(true);
      
      // 検索処理（実際のアプリではより高度な検索ロジックを実装）
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.section.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      // 少し遅延を入れて検索中の感覚を出す
      const timer = setTimeout(() => {
        setSearchResults(results);
        setIsSearching(false);
        setIsResultsVisible(true);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setIsResultsVisible(false);
      setSearchResults([]);
    }
  }, [searchQuery]);

  // 検索結果以外をクリックしたら結果を閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 検索結果をクリックしたときの処理
  const handleResultClick = (anchor: string) => {
    setSearchQuery('');
    setIsResultsVisible(false);
    
    // アンカーリンクへスクロール
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative z-10" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ブランドガイドラインを検索..."
          className="w-full px-4 py-2 pl-10 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isResultsVisible && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto"
          >
            <div className="p-2">
              {isSearching ? (
                <div className="flex justify-center items-center p-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                  <span className="ml-2 text-gray-600">検索中...</span>
                </div>
              ) : (
                <>
                  <div className="text-xs text-gray-500 p-2">
                    {searchResults.length}件の検索結果
                  </div>
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      onClick={() => handleResultClick(result.anchor)}
                      className="p-3 hover:bg-gray-50 rounded cursor-pointer transition-colors"
                    >
                      <div className="flex items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{result.title}</h4>
                          <p className="text-sm text-gray-600">{result.description}</p>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {result.section}
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </motion.div>
        )}

        {isResultsVisible && searchQuery.length > 1 && searchResults.length === 0 && !isSearching && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <div className="p-6 text-center">
              <p className="text-gray-500">「{searchQuery}」に一致する結果が見つかりませんでした</p>
              <p className="text-sm text-gray-400 mt-1">別のキーワードで検索してみてください</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;