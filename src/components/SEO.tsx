
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  path?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.png',
  ogType = 'website',
  path = '',
}) => {
  const { language } = useLanguage();
  const baseUrl = 'https://enablerhq.com';
  const url = `${baseUrl}${path}`;
  
  const defaultTitle = language === 'ja' 
    ? 'Enabler - イノベーションで未来を創造する' 
    : 'Enabler - Creating the Future with Innovation';
  
  const defaultDescription = language === 'ja'
    ? 'テクノロジーで毎日をもっと楽しく、もっと便利に。一人ひとりの可能性を広げ、自分らしく輝ける社会を。'
    : 'Making everyday life more enjoyable and convenient through technology. Expanding individual possibilities and creating a society where everyone can shine.';
  
  const defaultKeywords = language === 'ja'
    ? 'イネブラ, Enabler, イノベーション, テクノロジー, サービス, 日本, スタートアップ'
    : 'Enabler, Innovation, Technology, Services, Japan, Startup';
  
  // Handle SVG image if provided as data URL
  const imageUrl = ogImage.startsWith('data:') 
    ? ogImage 
    : `${baseUrl}${ogImage}`;
  
  return (
    <Helmet>
      <html lang={language} />
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
