
import React from 'react';
import { companyInfo } from '@/lib/data';
import { categoryInfo } from '@/lib/types/service';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-6">
          <div className="mb-4">
            <Logo className="text-enabler-400" variant="svg" />
          </div>
          <p className="text-gray-400 mb-8 text-sm max-w-2xl text-center">
            {companyInfo.description}
          </p>
          
          {/* Social Media Links */}
          <div className="flex space-x-8 mb-10">
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
        
        {/* Service Categories */}
        <div className="mb-10">
          <h4 className="text-xl font-bold mb-6 text-center">サービスカテゴリー</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(categoryInfo).map(([key, value]) => (
              <span key={key} className="text-gray-400 hover:text-gray-300 transition-colors cursor-not-allowed text-sm">
                {value.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Company Info */}
        <div className="text-center">
          <h4 className="text-xl font-bold mb-6">会社情報</h4>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <Link to="/mission-vision" className="text-gray-400 hover:text-white transition-colors text-sm">
              ミッション・ビジョン
            </Link>
            <Link to="/points-program" className="text-gray-400 hover:text-white transition-colors text-sm">
              ポイントプログラム
            </Link>
            <Link to="/founder-message" className="text-gray-400 hover:text-white transition-colors text-sm">
              創業者メッセージ
            </Link>
            <Link to="/press" className="text-gray-400 hover:text-white transition-colors text-sm">
              プレスリリース
            </Link>
            <Link to="/brand-guidelines" className="text-gray-400 hover:text-white transition-colors text-sm">
              ブランドガイドライン
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {companyInfo.nameEn} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
