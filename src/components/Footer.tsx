
import React from 'react';
import { companyInfo } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Enabler</h3>
            <p className="text-gray-400 mb-6 text-sm">
              {companyInfo.description}
            </p>
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
          
          <div className="flex space-x-6">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
