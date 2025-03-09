
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
            <span className="text-gray-500 hover:text-gray-300 transition-colors cursor-not-allowed">
              <Twitter size={20} />
            </span>
          )}
          {companyInfo.socialLinks.facebook && (
            <span className="text-gray-500 hover:text-gray-300 transition-colors cursor-not-allowed">
              <Facebook size={20} />
            </span>
          )}
          {companyInfo.socialLinks.instagram && (
            <span className="text-gray-500 hover:text-gray-300 transition-colors cursor-not-allowed">
              <Instagram size={20} />
            </span>
          )}
          {companyInfo.socialLinks.linkedin && (
            <span className="text-gray-500 hover:text-gray-300 transition-colors cursor-not-allowed">
              <Linkedin size={20} />
            </span>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 mb-6">
          {/* Service Categories Column */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-md font-bold mb-3">サービスカテゴリー</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(categoryInfo).map(([key, value]) => (
                <span key={key} className="text-gray-400 hover:text-gray-300 transition-colors cursor-not-allowed text-sm">
                  {value.name}
                </span>
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
