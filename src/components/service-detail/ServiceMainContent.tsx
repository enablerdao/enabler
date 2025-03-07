
import React from 'react';
import { Service } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';
import { ServiceOverview } from './ServiceOverview';
import { ServiceDemoVideo } from './ServiceDemoVideo';
import { ServiceMissionVision } from './ServiceMissionVision';
import { ServiceFeatures } from './ServiceFeatures';
import { ServicePricing } from './ServicePricing';
import { ServiceApiInfo } from './ServiceApiInfo';
import { ServiceUseCases } from './ServiceUseCases';
import { ServiceTestimonials } from './ServiceTestimonials';
import { ServiceUniquePoints } from './ServiceUniquePoints';
import { ServiceFAQs } from './ServiceFAQs';
import { ServiceRoadmap } from './ServiceRoadmap';
import { ServiceProcessCycle } from './ServiceProcessCycle';
import { ExternalLink } from 'lucide-react';

interface ServiceMainContentProps {
  service: Service;
  serviceColor: string;
}

export const ServiceMainContent: React.FC<ServiceMainContentProps> = ({ service, serviceColor }) => {
  const mission = service.mission || "人々の日常をより便利に、より豊かにする革新的なソリューションを提供する";
  const vision = service.vision || "テクノロジーの力で社会課題を解決し、持続可能な未来を創造する";
  const brandStory = service.brandStory || "";

  return (
    <div className="md:col-span-2">
      <ServiceOverview service={service} serviceColor={serviceColor} />
      
      <MotionBox delay={300}>
        <ServiceDemoVideo />
      </MotionBox>

      <ServiceMissionVision 
        mission={mission} 
        vision={vision}
        brandStory={brandStory}
        serviceColor={serviceColor}
        serviceName={service.nameEn} 
      />
      
      {service.features && (
        <ServiceFeatures features={service.features} serviceColor={serviceColor} />
      )}
      
      {service.pricing && service.pricing.length > 0 && (
        <MotionBox delay={400}>
          <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
            <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
              <ExternalLink className="mr-3" style={{ color: serviceColor }} />
              <h2 className="text-xl font-bold">💳 プラン・料金</h2>
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
      
      <ServiceProcessCycle serviceColor={serviceColor} serviceName={service.nameEn} />
      
      <ServiceFAQs 
        faqs={service.faqs} 
        serviceColor={serviceColor} 
        serviceName={service.nameEn}
        targetAudience={service.targetAudience}
        specificAudience={service.specificAudience}
      />
      
      <ServiceRoadmap service={service} serviceColor={serviceColor} />
    </div>
  );
};
