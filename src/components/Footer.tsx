
import React from 'react';
import { companyInfo } from '@/lib/data';
import { categoryInfo } from '@/lib/types/service';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Github, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              {companyInfo.socialLinks.twitter && (
                <span 
                  className="text-gray-400 cursor-not-allowed"
                >
                  <Twitter size={18} />
                </span>
              )}
              {companyInfo.socialLinks.facebook && (
                <span 
                  className="text-gray-400 cursor-not-allowed"
                >
                  <Facebook size={18} />
                </span>
              )}
              {companyInfo.socialLinks.instagram && (
                <span 
                  className="text-gray-400 cursor-not-allowed"
                >
                  <Instagram size={18} />
                </span>
              )}
              {companyInfo.socialLinks.linkedin && (
                <span 
                  className="text-gray-400 cursor-not-allowed"
                >
                  <Linkedin size={18} />
                </span>
              )}
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">サービスカテゴリー</h4>
              <ul className="space-y-2">
                {Object.entries(categoryInfo).map(([key, value]) => (
                  <li key={key}>
                    <span className="text-gray-400 cursor-not-allowed text-sm">
                      {value.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">会社情報</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400 cursor-not-allowed text-sm">
                    ミッション・ビジョン
                  </span>
                </li>
                <li>
                  <Link to="/points-program" className="text-gray-400 hover:text-white transition-colors text-sm">
                    ポイントプログラム
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                    <Users size={14} className="mr-1" /> チーム紹介
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                    <FileText size={14} className="mr-1" /> プレスリリース
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">お問い合わせ</h4>
              <address className="not-italic text-gray-400 space-y-2 text-sm">
                <p>{companyInfo.address}</p>
                <p className="text-gray-400">
                  {companyInfo.email}
                </p>
                <p>{companyInfo.phone}</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="mb-8 px-4 py-5 bg-gray-800 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Github className="text-enabler-400 mr-3" size={20} />
            <p className="text-gray-300 text-sm">
              {companyInfo.openSource}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-enabler-400 cursor-not-allowed text-sm font-medium">
              GitHubでプロジェクトを見る →
            </span>
            <Link to="/points-program" className="text-enabler-400 hover:text-white text-sm font-medium transition-colors">
              ポイントプログラムについて →
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {companyInfo.nameEn} All rights reserved.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex space-x-6 mb-4 md:mb-0 md:mr-8">
              <Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
                利用規約
              </Link>
              <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors text-sm">
                プライバシーポリシー
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-white transition-colors text-sm">
                サイトマップ
              </Link>
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
