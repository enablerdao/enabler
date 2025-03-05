
import React from 'react';
import { companyInfo } from '@/lib/data';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              {companyInfo.socialLinks.twitter && (
                <a 
                  href={companyInfo.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </a>
              )}
              {companyInfo.socialLinks.facebook && (
                <a 
                  href={companyInfo.socialLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                </a>
              )}
              {companyInfo.socialLinks.instagram && (
                <a 
                  href={companyInfo.socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
              )}
              {companyInfo.socialLinks.linkedin && (
                <a 
                  href={companyInfo.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sランクサービス
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Aランクサービス
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Bランクサービス
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cランクサービス
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  ミッション・ビジョン
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  チーム紹介
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  プレスリリース
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">お問い合わせ</h4>
            <address className="not-italic text-gray-400 space-y-2 text-sm">
              <p>{companyInfo.address}</p>
              <p>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </p>
              <p>{companyInfo.phone}</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {companyInfo.nameEn} All rights reserved.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex space-x-6 mb-4 md:mb-0 md:mr-8">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                利用規約
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                サイトマップ
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full self-end transition-colors"
              aria-label="ページ上部へ戻る"
            >
              <ArrowUp size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
