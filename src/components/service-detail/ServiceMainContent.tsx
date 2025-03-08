
import React from 'react';
import { Service } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';
import { ServiceOverview } from './ServiceOverview';
import { ServiceDemoVideo } from './ServiceDemoVideo';
import { ServiceMissionVision } from './ServiceMissionVision';
import { ServiceFeatures } from './ServiceFeatures';
import { ServiceApiInfo } from './ServiceApiInfo';
import { ServiceUseCases } from './ServiceUseCases';
import { ServiceUniquePoints } from './ServiceUniquePoints';
import { ServiceRoadmap } from './ServiceRoadmap';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceMainContentProps {
  service: Service;
  serviceColor: string;
}

export const ServiceMainContent: React.FC<ServiceMainContentProps> = ({ service, serviceColor }) => {
  const mission = service.mission || "人々の日常をより便利に、より豊かにする革新的なソリューションを提供する";
  const vision = service.vision || "テクノロジーの力で社会課題を解決し、持続可能な未来を創造する";
  const brandStory = service.brandStory || "";
  const isStayFlow = service.nameEn === 'StayFlow';

  return (
    <div className="md:col-span-2">
      <ServiceOverview service={service} serviceColor={serviceColor} />
      
      {!isStayFlow && (
        <MotionBox delay={300}>
          <ServiceDemoVideo />
        </MotionBox>
      )}

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
      
      {service.apiInfo && !isStayFlow && (
        <MotionBox delay={450}>
          <ServiceApiInfo apiInfo={service.apiInfo} serviceColor={serviceColor} />
        </MotionBox>
      )}

      {service.useCases && !isStayFlow && (
        <ServiceUseCases useCases={service.useCases} serviceColor={serviceColor} />
      )}

      {service.uniquePoints && !isStayFlow && (
        <ServiceUniquePoints uniquePoints={service.uniquePoints} serviceColor={serviceColor} />
      )}
      
      {!isStayFlow && (
        <ServiceRoadmap service={service} serviceColor={serviceColor} />
      )}
      
      {isStayFlow && (
        <MotionBox delay={500}>
          <div className="bg-white p-6 rounded-xl shadow-subtle mt-8 text-center">
            <h2 className="text-xl font-bold mb-4">サービスサイトを確認する</h2>
            <Button className="bg-enabler-600 hover:bg-enabler-700" asChild>
              <a 
                href="https://stayflowapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="mr-2" size={18} />
                StayFlowのサイトを見る
              </a>
            </Button>
          </div>
        </MotionBox>
      )}
    </div>
  );
};
