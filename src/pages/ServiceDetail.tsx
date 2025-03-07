
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services, Service } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox } from '@/components/ui/motion-box';
import { logActivity } from '@/lib/logger';
import { ProcessDiagram } from '@/components/service-detail/ProcessDiagram';
import { CycleDiagram } from '@/components/service-detail/CycleDiagram';
import { ServiceSidebar } from '@/components/service-detail/ServiceSidebar';
import { ExternalLink } from 'lucide-react';

// Import the new components we've created
import { ServiceHero } from '@/components/service-detail/ServiceHero';
import { ServiceOverview } from '@/components/service-detail/ServiceOverview';
import { ServiceMissionVision } from '@/components/service-detail/ServiceMissionVision';
import { ServiceFeatures } from '@/components/service-detail/ServiceFeatures';
import { ServiceDemoVideo } from '@/components/service-detail/ServiceDemoVideo';
import { ServicePricing } from '@/components/service-detail/ServicePricing';
import { ServiceApiInfo } from '@/components/service-detail/ServiceApiInfo';
import { ServiceTestimonials } from '@/components/service-detail/ServiceTestimonials';
import { ServiceUseCases } from '@/components/service-detail/ServiceUseCases';
import { ServiceUniquePoints } from '@/components/service-detail/ServiceUniquePoints';
import { ServiceFAQs } from '@/components/service-detail/ServiceFAQs';
import { ServiceRoadmap } from '@/components/service-detail/ServiceRoadmap';

const ServiceDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  
  useEffect(() => {
    if (!name) {
      navigate('/#services');
      return;
    }
    
    const foundService = services.find(s => s.nameEn === name);
    
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
  }, [name, navigate]);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">読み込み中...</div>
      </div>
    );
  }

  const serviceColor = service.color || '#6366f1';
  const mission = service.mission || "人々の日常をより便利に、より豊かにする革新的なソリューションを提供する";
  const vision = service.vision || "テクノロジーの力で社会課題を解決し、持続可能な未来を創造する";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 pb-16">
        <ServiceHero service={service} />
        
        <div className="container mx-auto px-6 mt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ServiceOverview service={service} serviceColor={serviceColor} />
              
              <MotionBox delay={300}>
                <ServiceDemoVideo />
              </MotionBox>

              <ServiceMissionVision 
                mission={mission} 
                vision={vision}
                serviceColor={serviceColor}
                serviceName={service.nameEn} // Pass the service name
              />
              
              {service.features && (
                <ServiceFeatures features={service.features} serviceColor={serviceColor} />
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

              {service.useCases && (
                <ServiceUseCases useCases={service.useCases} serviceColor={serviceColor} />
              )}

              {service.testimonials && service.testimonials.length > 0 && (
                <MotionBox delay={550}>
                  <ServiceTestimonials testimonials={service.testimonials} serviceColor={serviceColor} />
                </MotionBox>
              )}

              {service.uniquePoints && (
                <ServiceUniquePoints uniquePoints={service.uniquePoints} serviceColor={serviceColor} />
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
              
              <ServiceFAQs 
                faqs={service.faqs} 
                serviceColor={serviceColor} 
                serviceName={service.nameEn}
                targetAudience={service.targetAudience}
                specificAudience={service.specificAudience}
              />
              
              <ServiceRoadmap service={service} serviceColor={serviceColor} />
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
