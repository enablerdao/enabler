
import React from 'react';
import { companyInfo } from '@/lib/data';
import { categoryInfo } from '@/lib/types/service';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Function to scroll to top when clicking on footer links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-6">
          {companyInfo.socialLinks.twitter && (
            <a href={companyInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          )}
          {companyInfo.socialLinks.facebook && (
            <a href={companyInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          )}
          {companyInfo.socialLinks.instagram && (
            <a href={companyInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          )}
          {companyInfo.socialLinks.linkedin && (
            <a href={companyInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 mb-6">
          {/* Service Categories Column */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-md font-bold mb-3">サービスカテゴリー</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(categoryInfo).map(([key, value]) => (
                <Link to={`/#services`} key={key} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {value.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Company Info Column */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-md font-bold mb-3">会社情報</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/mission-vision" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm">
                ミッション・ビジョン
              </Link>
              <Link to="/points-program" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm">
                ポイントプログラム
              </Link>
              <Link to="/founder-message" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm">
                創業者メッセージ
              </Link>
              <Link to="/press" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm">
                プレスリリース
              </Link>
              <Link to="/brand-guidelines" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm">
                ブランドガイドライン
              </Link>
              <Link to="/company-info" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm">
                会社概要
              </Link>
              <Link to="/careers" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm">
                採用情報
              </Link>
              <Link to="/blog" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm">
                ブログ
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4">
          <p className="text-gray-500 text-sm text-center text-center-important">
            &copy; {new Date().getFullYear()} {companyInfo.nameEn} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
