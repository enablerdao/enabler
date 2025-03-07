
import React from 'react';
import { Service } from '@/lib/types/service';
import { ExternalLink } from 'lucide-react';
import { MotionBox } from '@/components/ui/motion-box';
import { logActivity } from '@/lib/logger';

interface ServiceSidebarProps {
  service: Service;
}

export const ServiceSidebar = ({ service }: ServiceSidebarProps) => {
  const handleExternalLinkClick = () => {
    logActivity('externalLink', {
      serviceId: service.id,
      serviceName: service.nameEn,
      additionalData: {
        domain: service.domain
      }
    });
  };

  return (
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
          
          {service.currentListings !== undefined && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">現在の掲載数</h3>
              <p className="font-bold">{service.currentListings}件</p>
            </div>
          )}
          
          {service.launchDate && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">リリース予定</h3>
              <p>{service.launchDate}</p>
            </div>
          )}
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">ドメイン</h3>
            <p className="text-gray-600">{service.domain}</p>
          </div>
        </div>
        
        <div className="mt-8">
          <div
            className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-200 text-gray-600 font-medium cursor-not-allowed"
          >
            サービスサイトを見る <ExternalLink size={16} className="ml-2" />
          </div>
        </div>

        {service.quote && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-sm italic text-gray-600">"{service.quote}"</p>
            {service.quoteAuthor && (
              <p className="text-xs text-right text-gray-500 mt-1">— {service.quoteAuthor}</p>
            )}
          </div>
        )}
      </div>
    </MotionBox>
  );
};
