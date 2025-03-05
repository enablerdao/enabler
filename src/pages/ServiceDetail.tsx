
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services, Service } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox } from '@/components/ui/motion-box';
import { ArrowLeft, ExternalLink, BarChart3, Target, CalendarClock } from 'lucide-react';
import { logActivity } from '@/lib/logger';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  
  useEffect(() => {
    const serviceId = parseInt(id || '0');
    const foundService = services.find(s => s.id === serviceId);
    
    if (foundService) {
      setService(foundService);
      // Update page title
      document.title = `${foundService.nameEn} | ${foundService.nameJp} - Enabler`;
      
      // Log service view
      logActivity('serviceView', {
        serviceId: foundService.id,
        serviceName: foundService.nameEn,
        additionalData: {
          rank: foundService.rank,
          marketSize: foundService.marketSize
        }
      });
    } else {
      // Service not found, redirect to services section on home page
      navigate('/#services');
    }
  }, [id, navigate]);
  
  // Handle external link click
  const handleExternalLinkClick = () => {
    if (service) {
      logActivity('externalLink', {
        serviceId: service.id,
        serviceName: service.nameEn,
        additionalData: {
          domain: service.domain
        }
      });
    }
  };
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">読み込み中...</div>
      </div>
    );
  }
  
  const rankColorMap = {
    'S': 'bg-srank text-white',
    'A': 'bg-arank text-white',
    'B': 'bg-brank text-white',
    'C': 'bg-crank text-white',
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <MotionBox>
            <button 
              onClick={() => navigate('/#services')}
              className="mb-6 flex items-center text-gray-600 hover:text-enabler-600 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              サービス一覧に戻る
            </button>
          </MotionBox>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <MotionBox delay={100}>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{service.nameEn}</h1>
                <p className="text-xl text-gray-600 mb-6">{service.nameJp}</p>
                
                <div className="mb-8">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${rankColorMap[service.rank]}`}>
                    Rank {service.rank}
                  </span>
                  
                  {service.description && (
                    <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                      <h2 className="text-xl font-bold mb-4">サービス概要</h2>
                      <p className="text-gray-700 leading-relaxed">{service.description}</p>
                    </div>
                  )}
                </div>
              </MotionBox>
              
              <MotionBox delay={200}>
                <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                  <h2 className="text-xl font-bold mb-4">サービスの特徴</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      {service.nameEn}は、最新技術を活用して{service.nameJp.split('-')[1]?.trim() || 'サービス'}分野における問題解決を目指しています。
                      革新的なアプローチにより、ユーザー体験を向上させながら、業界標準を変革していきます。
                    </p>
                    <p className="text-gray-700">
                      私たちのチームは、経験豊富な専門家により構成され、常に最高品質のサービスを提供することにコミットしています。
                      ユーザーフィードバックを大切にし、継続的な改善を行っています。
                    </p>
                  </div>
                </div>
              </MotionBox>
              
              <MotionBox delay={300}>
                <div className="bg-white p-6 rounded-xl shadow-subtle">
                  <h2 className="text-xl font-bold mb-4">開発ロードマップ</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-enabler-100 p-2 rounded-full mr-4">
                        <CalendarClock className="w-5 h-5 text-enabler-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">短期目標</h3>
                        <p className="text-gray-700">{service.goal}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-enabler-100 p-2 rounded-full mr-4">
                        <Target className="w-5 h-5 text-enabler-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">中期目標</h3>
                        <p className="text-gray-700">市場シェアの拡大とユーザー基盤の確立</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-enabler-100 p-2 rounded-full mr-4">
                        <BarChart3 className="w-5 h-5 text-enabler-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">長期目標</h3>
                        <p className="text-gray-700">業界リーダーとしての地位確立と海外展開</p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionBox>
            </div>
            
            <div>
              <MotionBox delay={150}>
                <div className="bg-white p-6 rounded-xl shadow-subtle sticky top-24">
                  <h2 className="text-xl font-bold mb-4">サービス情報</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">サービス名</h3>
                      <p className="font-bold">{service.nameEn}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">日本語名</h3>
                      <p>{service.nameJp}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">ランク</h3>
                      <p className="font-bold">Rank {service.rank}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">市場規模</h3>
                      <p>{service.marketSize}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">目標</h3>
                      <p>{service.goal}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">ドメイン</h3>
                      <a 
                        href={`https://${service.domain}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-enabler-600 hover:text-enabler-700 inline-flex items-center gap-1 transition-colors"
                      >
                        {service.domain} <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href={`https://${service.domain}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={handleExternalLinkClick}
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-enabler-600 text-white font-medium transition-all duration-200 hover:bg-enabler-700 shadow-md hover:shadow-lg"
                    >
                      サービスサイトを見る <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </MotionBox>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
