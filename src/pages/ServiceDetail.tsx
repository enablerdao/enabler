
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services, Service } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { logActivity } from '@/lib/logger';
import { ServiceHero } from '@/components/service-detail/ServiceHero';
import { ServiceMainContent } from '@/components/service-detail/ServiceMainContent';
import { ServiceSidebar } from '@/components/service-detail/ServiceSidebar';
import { ServiceLoadingIndicator } from '@/components/service-detail/ServiceLoadingIndicator';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  
  useEffect(() => {
    if (!serviceId) {
      navigate('/#services');
      return;
    }
    
    const foundService = services.find(s => s.id.toString() === serviceId);
    
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
  }, [serviceId, navigate]);
  
  if (!service) {
    return <ServiceLoadingIndicator />;
  }

  const serviceColor = service.color || '#6366f1';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 pb-16">
        <ServiceHero service={service} />
        
        <div className="container mx-auto px-2 sm:px-4 md:px-6 mt-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <ServiceMainContent service={service} serviceColor={serviceColor} />
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
