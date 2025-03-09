
import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '@/lib/data';
import { MotionBox } from './ui/motion-box';
import { Award, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fibonacciFloatVariants } from './simple-illustration/animation-variants';
import { getServiceProgress, getServiceETA, getAIActivityStatus, getServiceTasks, rankBorderMap } from './service-card/utils';
import { ServiceCardHeader } from './service-card/ServiceCardHeader';
import { ServiceProgress } from './service-card/ServiceProgress';
import { ServiceETA } from './service-card/ServiceETA';
import { ServiceTasks } from './service-card/ServiceTasks';
import { ServiceFeatureTags } from './service-card/ServiceFeatureTags';
import { ServiceCardFooter } from './service-card/ServiceCardFooter';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const delayBase = 100;
  const staggerDelay = index * 50;
  
  const progress = getServiceProgress(service.id);
  const eta = getServiceETA(service.id);
  const aiActivity = getAIActivityStatus(service.id);
  const tasks = getServiceTasks(service.id);

  const isPortfolio = service.nameEn === 'StayFlow Portfolio';
  
  return (
    <MotionBox 
      delay={delayBase + staggerDelay}
      className="h-full"
    >
      <div 
        className={cn(
          "h-full p-6 rounded-xl border bg-white shadow-subtle hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 relative",
          `rank-${service.rank.toLowerCase()}`,
          rankBorderMap[service.rank],
          isPortfolio && "border-amber-300 border-2"
        )}
      >
        {isPortfolio && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center whitespace-nowrap">
            <Award size={14} className="mr-1" /> 厳選コレクション
          </div>
        )}
        
        <ServiceCardHeader service={service} />
        
        <Link to={`/services/${service.id}`}>
          <h3 className="text-lg font-bold mb-1 group-hover:text-enabler-600 transition-colors mt-3">{service.nameEn}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3">{service.nameJp}</p>
        
        <ServiceProgress progress={progress} activity={aiActivity} />
        
        <ServiceETA eta={eta} />
        
        {service.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        )}
        
        <ServiceTasks tasks={tasks} />
        
        {service.catchphrase && (
          <div className="mb-4 italic text-sm text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-100">
            "{service.catchphrase}"
          </div>
        )}
        
        {service.features && <ServiceFeatureTags features={service.features} />}
        
        <ServiceCardFooter service={service} />
        
        {!isPortfolio && (
          <motion.div 
            className="absolute top-2 right-2 text-xs text-enabler-500 flex items-center"
            variants={fibonacciFloatVariants}
            animate="float"
            custom={service.id % 5}
          >
            <Loader size={12} className="animate-spin mr-1" />
            <span className="opacity-75">AI</span>
          </motion.div>
        )}
      </div>
    </MotionBox>
  );
};

export default ServiceCard;
