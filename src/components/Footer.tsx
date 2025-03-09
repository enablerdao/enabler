
import React from 'react';
import { companyInfo } from '@/lib/data';
import { categoryInfo } from '@/lib/types/service';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-4">
          <div className="flex justify-center mb-3">
            <Logo className="text-enabler-400" variant="svg" />
          </div>
          
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
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 mb-6">
          {/* Service Categories Column */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-md font-bold mb-3 text-left">サービスカテゴリー</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(categoryInfo).map(([key, value]) => (
                <span key={key} className="text-gray-400 hover:text-gray-300 transition-colors cursor-not-allowed text-sm text-left">
                  {value.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Company Info Column */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-md font-bold mb-3 text-left">会社情報</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/mission-vision" className="text-gray-400 hover:text-white transition-colors text-sm text-left">
                ミッション・ビジョン
              </Link>
              <Link to="/points-program" className="text-gray-400 hover:text-white transition-colors text-sm text-left">
                ポイントプログラム
              </Link>
              <Link to="/founder-message" className="text-gray-400 hover:text-white transition-colors text-sm text-left">
                創業者メッセージ
              </Link>
              <Link to="/press" className="text-gray-400 hover:text-white transition-colors text-sm text-left">
                プレスリリース
              </Link>
              <Link to="/brand-guidelines" className="text-gray-400 hover:text-white transition-colors text-sm text-left">
                ブランドガイドライン
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} {companyInfo.nameEn} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
