
import React, { useEffect, useState } from 'react';
import { logActivity } from '@/lib/logger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrandHeader from '@/components/brand-guidelines/BrandHeader';
import BrandStory from '@/components/brand-guidelines/BrandStory';
import LogoSection from '@/components/brand-guidelines/LogoSection';
import BrandColors from '@/components/brand-guidelines/BrandColors';
import Typography from '@/components/brand-guidelines/Typography';
import VoiceAndTone from '@/components/brand-guidelines/VoiceAndTone';
import ImageGuidelinesSection from '@/components/brand-guidelines/image-guidelines/ImageGuidelinesSection';
import DownloadableResources from '@/components/brand-guidelines/downloads/DownloadableResources';
import FAQSection from '@/components/brand-guidelines/faq/FAQSection';
import SearchBar from '@/components/brand-guidelines/search/SearchBar';
import { calculateColorForYear } from '@/components/brand-guidelines/color-utils/color-calculator';
import { calculateSpecialAccentColor } from '@/components/brand-guidelines/color-utils/color-calculator';
import SEO from '../components/SEO';
import OGImage from '../components/OGImage';
import ReactDOMServer from 'react-dom/server';
import FoundingColorSection from '@/components/brand-guidelines/color-sections/FoundingColorSection';
import LogoVariations from '@/components/brand-guidelines/LogoVariations';

const BrandGuidelines = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [currentYearColor, setCurrentYearColor] = useState<any>(null);
  const [brandColors, setBrandColors] = useState<any[]>([]);
  // Fix the foundingYearColor definition by making rgb a string instead of an object
  const foundingYearColor = { 
    hex: "#22B6FF", 
    rgb: "34, 182, 255",
    year: 2022,
    name: "ディープブルー"
  };
  
  useEffect(() => {
    // ページビューのログを記録
    logActivity('pageView', { path: '/brand-guidelines' });
    
    // 今年のブランドカラーを計算（即時設定）
    const yearColor = calculateColorForYear(currentYear);
    setCurrentYearColor(yearColor);
    
    // ブランドカラーの履歴を計算
    const colorHistory = [];
    for (let year = 2022; year <= currentYear; year++) {
      colorHistory.push({
        year,
        color: calculateColorForYear(year)
      });
    }
    setBrandColors(colorHistory);
  }, [currentYear]);

  // OG画像を生成
  const ogImageSvg = ReactDOMServer.renderToStaticMarkup(<OGImage path="/brand-guidelines" />);
  const encodedOgImage = `data:image/svg+xml,${encodeURIComponent(ogImageSvg)}`;

  // 現在の年のブランドカラーがない場合はコンテンツをすぐに表示
  return (
    <>
      <SEO 
        title="Enabler ブランドガイドライン"
        description="イネブラー(Enabler)の公式ブランドガイドライン。ロゴ、カラー、タイポグラフィ、その他のブランド要素の正しい使用方法を解説。"
        ogImage={encodedOgImage}
        path="/brand-guidelines"
      />
      <Navbar />
      <main className="bg-gradient-to-b from-blue-50/50 to-white min-h-screen">
        {/* Header Section */}
        <div className="pt-16 md:pt-20">
          <BrandHeader loading={false} />
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-12">
          {/* Search Bar */}
          <div className="mb-8 mt-4 max-w-2xl mx-auto">
            <SearchBar />
          </div>
          
          {/* Brand Story in a single column */}
          <div className="space-y-10 mb-12">
            <BrandStory />
            <LogoSection currentYearColor={currentYearColor || calculateColorForYear(currentYear)} />
          </div>
          
          {/* Brand Colors */}
          <BrandColors 
            currentYearColor={currentYearColor || calculateColorForYear(currentYear)} 
            brandColors={brandColors} 
          />
          
          {/* Typography & Voice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Typography />
            <VoiceAndTone />
          </div>
          
          <FoundingColorSection foundingYearColor={foundingYearColor} />
          
          <div className="mt-8 mb-12">
            {/* Fix the LogoVariations by using a valid variant from LogoVariantType enum */}
            <LogoVariations 
              variant="modern" 
              size="md"
            />
          </div>
          
          {/* Photos & Illustrations */}
          <ImageGuidelinesSection />
          
          {/* Downloadable Resources */}
          <DownloadableResources />
          
          {/* FAQ Section */}
          <FAQSection />
          
          {/* SVG Logo Specification */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">SVG ロゴ仕様</h3>
            <pre className="bg-white p-4 rounded overflow-auto text-xs border border-gray-300 max-h-96">
{`<svg viewBox="0 0 450 278" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="topBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#22B6FF" /> <!-- 創業色 -->
      <stop offset="100%" stopColor="#${currentYearColor?.hex?.substring(1) || '22B6FF'}" /> <!-- ブランド色 -->
    </linearGradient>
    
    <linearGradient id="middleBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#22B6FF" /> <!-- 創業色 -->
      <stop offset="100%" stopColor="${calculateSpecialAccentColor(currentYear)?.hex || '#4CAF50'}" /> <!-- アクセント色 -->
    </linearGradient>
    
    <linearGradient id="bottomBarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#${currentYearColor?.hex?.substring(1) || '22B6FF'}" /> <!-- ブランド色 -->
      <stop offset="100%" stopColor="#22B6FF" /> <!-- 創業色 -->
    </linearGradient>
  </defs>
  
  <!-- 3本のバー -->
  <rect x="16" y="40" width="162" height="8" rx="4" fill="url(#topBarGradient)" />
  <rect x="16" y="60" width="100" height="8" rx="4" fill="url(#middleBarGradient)" />
  <rect x="16" y="80" width="162" height="8" rx="4" fill="url(#bottomBarGradient)" />
  
  <!-- ENABLERテキスト -->
  <text x="198" y="84" fontFamily="Montserrat, sans-serif" fontSize="48" fontWeight="bold" fill="url(#topBarGradient)">ENABLER</text>
</svg>`}
            </pre>
            <div className="mt-4 text-sm text-gray-600">
              <p><strong>テーマ:</strong> 感情を揺らす、永遠に続く色彩の呼吸を表現。</p>
              <p><strong>色定義:</strong></p>
              <ul className="list-disc pl-5 mt-2">
                <li>創業: #22B6FF</li>
                <li>ブランド(y年): R=34+190(1-0.95^(y-2022)), G=182+63(同式), B=255</li>
                <li>アクセント: 2025基準(#4CAF50,H120°)、以後フィボナッチ毎にH+=137.5°</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrandGuidelines;
