
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services, Service } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox } from '@/components/ui/motion-box';
import ServiceLogo from '@/components/ServiceLogo';
import { ArrowLeft, ExternalLink, Compass, Sparkles, MessageCircleHeart, CalendarClock, Target, BarChart3, CheckCircle2, Users, Globe, TrendingUp, Shield, Zap } from 'lucide-react';
import { logActivity } from '@/lib/logger';
import { ProcessDiagram } from '@/components/service-detail/ProcessDiagram';
import { CycleDiagram } from '@/components/service-detail/CycleDiagram';
import { ServiceDemoVideo } from '@/components/service-detail/ServiceDemoVideo';
import { ServicePricing } from '@/components/service-detail/ServicePricing';
import { ServiceApiInfo } from '@/components/service-detail/ServiceApiInfo';
import { ServiceTestimonials } from '@/components/service-detail/ServiceTestimonials';
import { ServiceSidebar } from '@/components/service-detail/ServiceSidebar';
import { categoryInfo } from '@/lib/types/service';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  
  useEffect(() => {
    const serviceId = parseInt(id || '0');
    const foundService = services.find(s => s.id === serviceId);
    
    if (foundService) {
      setService(foundService);
      document.title = `${foundService.nameEn} | ${foundService.nameJp} - Enabler`;
      
      logActivity('serviceView', {
        serviceId: foundService.id,
        serviceName: foundService.nameEn,
        additionalData: {
          rank: foundService.rank,
          marketSize: foundService.marketSize
        }
      });
    } else {
      navigate('/#services');
    }
  }, [id, navigate]);
  
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

  const rankGradientMap = {
    'S': 'from-srank/20 to-srank/5',
    'A': 'from-arank/20 to-arank/5',
    'B': 'from-brank/20 to-brank/5',
    'C': 'from-crank/20 to-crank/5',
  };
  
  const serviceColor = service.color || '#6366f1';
  const mission = service.mission || "人々の日常をより便利に、より豊かにする革新的なソリューションを提供する";
  const vision = service.vision || "テクノロジーの力で社会課題を解決し、持続可能な未来を創造する";

  // Get category information if available
  const categoryData = service.category ? categoryInfo[service.category] : null;

  // Determine icon based on rank
  const getRankIcon = () => {
    switch(service.rank) {
      case 'S': return <Shield className="w-5 h-5 text-white" />;
      case 'A': return <Zap className="w-5 h-5 text-white" />;
      case 'B': return <TrendingUp className="w-5 h-5 text-white" />;
      case 'C': return <Target className="w-5 h-5 text-white" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 pb-16">
        {/* Hero section with background gradient based on service rank */}
        <div className={`w-full bg-gradient-to-b ${rankGradientMap[service.rank]} py-12`}>
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
            
            <div className="flex flex-col md:flex-row items-center mb-8">
              <MotionBox delay={100} className="mb-4 md:mb-0 md:mr-6">
                <div className="relative">
                  <ServiceLogo serviceName={service.nameEn} size="lg" />
                  {service.emoji && (
                    <span className="absolute -top-2 -right-2 text-2xl">
                      {service.emoji}
                    </span>
                  )}
                </div>
              </MotionBox>
              
              <div>
                <MotionBox delay={150}>
                  <div className="flex items-center mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold mr-3">{service.nameEn}</h1>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${rankColorMap[service.rank]}`}>
                      {getRankIcon()}
                      Rank {service.rank}
                    </span>
                  </div>
                  <p className="text-xl text-gray-700 mb-3">{service.nameJp}</p>
                </MotionBox>
                
                {categoryData && (
                  <MotionBox delay={200}>
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                      {categoryData.nameJp}
                    </span>
                  </MotionBox>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {service.description && (
                <MotionBox delay={250}>
                  <div className={`bg-white p-6 rounded-xl shadow-subtle mb-8 border-l-4`} style={{ borderColor: serviceColor }}>
                    <h2 className="text-xl font-bold mb-4">サービス概要</h2>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                    
                    {service.catchphrase && (
                      <div className="mt-6 text-center">
                        <p className="italic text-lg font-medium" style={{ color: serviceColor }}>
                          "{service.catchphrase}"
                        </p>
                      </div>
                    )}
                  </div>
                </MotionBox>
              )}

              <MotionBox delay={300}>
                <ServiceDemoVideo />
              </MotionBox>

              <MotionBox delay={150}>
                <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                  <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
                    <Compass className="mr-3" style={{ color: serviceColor }} />
                    <h2 className="text-xl font-bold">ミッション</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-8 italic border-l-4 pl-4 py-2" style={{ borderColor: serviceColor }}>
                    "{mission}"
                  </p>
                  
                  <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
                    <Sparkles className="mr-3" style={{ color: serviceColor }} />
                    <h2 className="text-xl font-bold">ビジョン</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic border-l-4 pl-4 py-2" style={{ borderColor: serviceColor }}>
                    "{vision}"
                  </p>
                </div>
              </MotionBox>
              
              {service.features && service.features.length > 0 && (
                <MotionBox delay={350}>
                  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                    <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>主な機能</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <div className="flex items-center mb-3">
                            <div className={`p-2.5 rounded-full mr-3`} style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                              <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-gray-800">{feature.title}</h3>
                          </div>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionBox>
              )}
              
              {service.pricing && service.pricing.length > 0 && (
                <MotionBox delay={400}>
                  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                    <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
                      <ExternalLink className="mr-3" style={{ color: serviceColor }} />
                      <h2 className="text-xl font-bold">プラン・料金</h2>
                    </div>
                    <ServicePricing pricing={service.pricing} />
                  </div>
                </MotionBox>
              )}

              {service.apiInfo && (
                <MotionBox delay={450}>
                  <ServiceApiInfo apiInfo={service.apiInfo} serviceColor={serviceColor} />
                </MotionBox>
              )}

              {service.useCases && service.useCases.length > 0 && (
                <MotionBox delay={500}>
                  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                    <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
                      <Users className="mr-3" style={{ color: serviceColor }} />
                      <h2 className="text-xl font-bold">活用事例</h2>
                    </div>
                    <div className="space-y-4">
                      {service.useCases.map((useCase, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-all duration-300">
                          <h3 className="font-bold text-gray-800 mb-2">{useCase.title}</h3>
                          <p className="text-gray-600 mb-3">{useCase.description}</p>
                          {useCase.result && (
                            <div className="bg-gray-50 p-3 rounded-lg border-l-2" style={{ borderColor: serviceColor }}>
                              <span className="text-sm font-medium" style={{ color: serviceColor }}>結果:</span>
                              <p className="text-gray-700">{useCase.result}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionBox>
              )}

              {service.testimonials && service.testimonials.length > 0 && (
                <MotionBox delay={550}>
                  <ServiceTestimonials testimonials={service.testimonials} serviceColor={serviceColor} />
                </MotionBox>
              )}

              {service.uniquePoints && service.uniquePoints.length > 0 && (
                <MotionBox delay={600}>
                  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                    <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
                      <MessageCircleHeart className="mr-3" style={{ color: serviceColor }} />
                      <h2 className="text-xl font-bold">他にはない特徴</h2>
                    </div>
                    <div className="space-y-4">
                      {service.uniquePoints.map((point, index) => (
                        <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
                          <div className="p-2.5 rounded-full mr-4 mt-1" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800 mb-1">{point.title}</h3>
                            <p className="text-gray-700">{point.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionBox>
              )}
              
              <MotionBox delay={650}>
                <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                  <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>サービスの流れ</h2>
                  <ProcessDiagram color={serviceColor} />
                  <div className="grid md:grid-cols-4 gap-4 text-center text-sm mt-6">
                    <div className="bg-white p-3 rounded-lg shadow-subtle">
                      <h3 className="font-bold mb-2" style={{ color: serviceColor }}>データ収集</h3>
                      <p className="text-gray-600">ユーザーデータを安全に収集</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-subtle">
                      <h3 className="font-bold mb-2" style={{ color: serviceColor }}>AI分析</h3>
                      <p className="text-gray-600">高度なアルゴリズムで解析</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-subtle">
                      <h3 className="font-bold mb-2" style={{ color: serviceColor }}>パーソナライズ</h3>
                      <p className="text-gray-600">個別最適化された提案</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-subtle">
                      <h3 className="font-bold mb-2" style={{ color: serviceColor }}>価値提供</h3>
                      <p className="text-gray-600">具体的な成果を実現</p>
                    </div>
                  </div>
                </div>
              </MotionBox>
              
              <MotionBox delay={700}>
                <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                  <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>継続的改善サイクル</h2>
                  <CycleDiagram color={serviceColor} />
                  <p className="text-center text-gray-600 mt-6 bg-gray-50 p-4 rounded-lg">
                    {service.nameEn}は継続的な改善を重視しています。ユーザーフィードバックを元に<br />
                    サービスの品質向上と新機能の開発を行い、常に最高の体験を提供します。
                  </p>
                </div>
              </MotionBox>
              
              <MotionBox delay={750}>
                <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                  <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>よくある質問</h2>
                  <div className="space-y-6">
                    {service.faqs && service.faqs.length > 0 ? (
                      service.faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                          <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                            <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                            {faq.question}
                          </h3>
                          <div className="ml-8">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="border-b border-gray-100 pb-5">
                          <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                            <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                            このサービスはどんな人向けですか？
                          </h3>
                          <div className="ml-8">
                            <p className="text-gray-700">{service.nameEn}は{service.targetAudience || '新しい体験や効率化を求めるすべての方'}を対象としています。特に{service.specificAudience || '時間や労力を節約したい方、質の高いサービスを求める方'}におすすめです。</p>
                          </div>
                        </div>
                        
                        <div className="border-b border-gray-100 pb-5">
                          <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                            <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                            利用開始までどのくらいの時間がかかりますか？
                          </h3>
                          <div className="ml-8">
                            <p className="text-gray-700">サインアップから数分で利用開始できます。必要な情報を入力するだけで、すぐにサービスのすべての機能をお使いいただけます。</p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2 flex items-start">
                            <span className="inline-block w-6 h-6 rounded-full mr-2 text-white text-center text-sm leading-6" style={{ backgroundColor: serviceColor }}>Q</span>
                            無料トライアルはありますか？
                          </h3>
                          <div className="ml-8">
                            <p className="text-gray-700">はい、14日間の無料トライアルをご用意しています。クレジットカード情報なしで、すべての機能をお試しいただけます。</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </MotionBox>
              
              <MotionBox delay={800}>
                <div className="bg-white p-6 rounded-xl shadow-subtle">
                  <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>開発ロードマップ</h2>
                  <div className="space-y-5">
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
                      <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                        <CalendarClock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">短期目標</h3>
                        <p className="text-gray-700">{service.goal}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
                      <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">中期目標</h3>
                        <p className="text-gray-700">{service.midtermGoal || '市場シェアの拡大とユーザー基盤の確立'}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
                      <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">長期目標</h3>
                        <p className="text-gray-700">{service.longtermGoal || '業界リーダーとしての地位確立と海外展開'}</p>
                      </div>
                    </div>

                    {service.catchphrase && (
                      <div className="mt-8 pt-4 border-t border-gray-100 text-center">
                        <p className="text-lg font-medium italic" style={{ color: serviceColor }}>
                          "{service.catchphrase}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </MotionBox>
            </div>
            
            <div>
              <ServiceSidebar service={service} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
