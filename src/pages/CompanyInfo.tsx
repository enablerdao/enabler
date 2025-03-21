
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, Mail, Phone, Calendar, Users, Briefcase, Github } from 'lucide-react';
import { MotionBox } from '@/components/ui/motion-box';
import { companyInfo } from '@/lib/data/company';
import { Link } from 'react-router-dom';

const CompanyInfo = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <MotionBox>
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">会社情報</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {companyInfo.slogan}
                </p>
              </div>
            </MotionBox>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <MotionBox delay={0.1}>
                <div className="bg-white p-8 rounded-xl shadow-subtle h-full">
                  <h2 className="text-2xl font-bold mb-6 text-primary">企業理念</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">ミッション</h3>
                      <p className="text-gray-700">{companyInfo.mission}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">ビジョン</h3>
                      <p className="text-gray-700">{companyInfo.vision}</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link to="/mission-vision" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                      ミッション・ビジョンの詳細を見る
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </MotionBox>

              <MotionBox delay={0.2}>
                <div className="bg-white p-8 rounded-xl shadow-subtle h-full">
                  <h2 className="text-2xl font-bold mb-6 text-primary">会社概要</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Building size={18} className="text-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-500">会社名</h3>
                        <p className="text-gray-700">{companyInfo.nameJp}</p>
                        <p className="text-gray-700">{companyInfo.nameEn}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Mail size={18} className="text-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-500">メールアドレス</h3>
                        <p className="text-gray-700">{companyInfo.email}</p>
                      </div>
                    </div>
                    {companyInfo.phone && (
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Phone size={18} className="text-primary" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-gray-500">電話番号</h3>
                          <p className="text-gray-700">{companyInfo.phone}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Building size={18} className="text-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-500">所在地</h3>
                        <p className="text-gray-700">{companyInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Calendar size={18} className="text-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-500">設立</h3>
                        <p className="text-gray-700">{companyInfo.established}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Users size={18} className="text-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-500">代表取締役</h3>
                        <p className="text-gray-700">{companyInfo.ceo}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Users size={18} className="text-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-500">従業員数</h3>
                        <p className="text-gray-700">{companyInfo.employees}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Briefcase size={18} className="text-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-500">事業内容</h3>
                        <p className="text-gray-700">{companyInfo.businessActivities}</p>
                      </div>
                    </div>
                    {companyInfo.openSource && (
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Github size={18} className="text-primary" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-gray-500">オープンソース</h3>
                          <p className="text-gray-700">{companyInfo.openSource}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </MotionBox>
            </div>

            <MotionBox delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-subtle mb-16">
                <h2 className="text-2xl font-bold mb-6 text-primary">ソーシャルメディア</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.entries(companyInfo.socialLinks).map(([platform, url]) => (
                    <a 
                      key={platform} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-3">
                        {platform === 'twitter' && <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>}
                        {platform === 'facebook' && <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
                        {platform === 'instagram' && <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>}
                        {platform === 'linkedin' && <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                      </div>
                      <span className="capitalize">{platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </MotionBox>

            <MotionBox delay={0.4}>
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <h2 className="text-2xl font-bold mb-6 text-primary">関連リンク</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link 
                    to="/founder-message" 
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    創業者メッセージ
                  </Link>
                  <Link 
                    to="/mission-vision" 
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    ミッション・ビジョン
                  </Link>
                  <Link 
                    to="/press" 
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    プレスリリース
                  </Link>
                  <Link 
                    to="/brand-guidelines" 
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    ブランドガイドライン
                  </Link>
                  <Link 
                    to="/careers" 
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    採用情報
                  </Link>
                  <Link 
                    to="/blog" 
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    ブログ
                  </Link>
                </div>
              </div>
            </MotionBox>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CompanyInfo;
