
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrandHeader from '@/components/brand-guidelines/BrandHeader';
import BrandStory from '@/components/brand-guidelines/BrandStory';
import FoundingColorSection from '@/components/brand-guidelines/FoundingColorSection';
import LogoSection from '@/components/brand-guidelines/LogoSection';
import YearlyLogoViewer from '@/components/brand-guidelines/YearlyLogoViewer';
import Typography from '@/components/brand-guidelines/Typography';
import VoiceAndTone from '@/components/brand-guidelines/VoiceAndTone';
import PhotosAndIllustrations from '@/components/brand-guidelines/PhotosAndIllustrations';
import BrandAssetRules from '@/components/brand-guidelines/BrandAssetRules';
import LogoVariations from '@/components/brand-guidelines/LogoVariations';
import FAQContact from '@/components/brand-guidelines/FAQContact';
import BrandColors from '@/components/brand-guidelines/BrandColors';
import { logActivity } from '@/lib/logger';
import SEO from '../components/SEO';
import OGImage from '../components/OGImage';
import ReactDOMServer from 'react-dom/server';

const BrandGuidelines = () => {
  const location = useLocation();

  useEffect(() => {
    logActivity('pageView', { path: '/brand-guidelines' });
    window.scrollTo(0, 0);
  }, []);

  // Render OGImage to string and encode for use in meta tag
  const ogImageSvg = ReactDOMServer.renderToStaticMarkup(<OGImage path="/brand-guidelines" />);
  const encodedOgImage = `data:image/svg+xml,${encodeURIComponent(ogImageSvg)}`;

  return (
    <div className="bg-gray-50">
      <SEO 
        title="Enabler ブランドガイドライン | デザインの原則と使用方法" 
        description="Enablerのロゴ、色、タイポグラフィ、その他のブランド要素の正しい使用方法に関する公式ガイドラインです。" 
        keywords="Enabler, ブランドガイドライン, ロゴ, 色, タイポグラフィ, ブランドアイデンティティ"
        ogImage={encodedOgImage}
        path="/brand-guidelines"
      />
      <Navbar />
      <BrandHeader />
      <div className="container mx-auto px-4 py-8">
        <BrandStory />
        <FoundingColorSection />
        <BrandColors />
        <LogoSection />
        <LogoVariations />
        <YearlyLogoViewer />
        <Typography />
        <VoiceAndTone />
        <PhotosAndIllustrations />
        <BrandAssetRules />
        <FAQContact />
      </div>
      <Footer />
    </div>
  );
};

export default BrandGuidelines;
