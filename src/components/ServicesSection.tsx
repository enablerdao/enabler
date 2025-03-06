
import React from 'react';
import { ServiceCategory, ServiceItem } from './ServiceCategory';
import { services } from '@/lib/data';

const ServicesSection = () => {
  // Group services by category for display
  const healthServices = services.filter(s => s.category === 'HEALTH_WELLNESS');
  const stayTravelServices = services.filter(s => s.category === 'STAY_TRAVEL');
  const lifeCommunityServices = services.filter(s => s.category === 'LIFE_COMMUNITY');
  const workProductivityServices = services.filter(s => s.category === 'WORK_PRODUCTIVITY');
  const investGrowServices = services.filter(s => s.category === 'INVEST_GROW');
  const specializedServices = services.filter(s => s.nameEn === 'DojoFlow');

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">ENABLER サービス一覧</h2>

        {/* STAY & TRAVEL Category */}
        <ServiceCategory title="STAY & TRAVEL" icon="🌴">
          {stayTravelServices.map(service => (
            <ServiceItem
              key={service.id}
              title={`${service.nameEn}（${service.nameJp.split(' - ')[0]}）`}
              tagline={service.catchphrase || `「${service.nameJp.split(' - ')[1] || '未来の形を作る'}」`}
              description={service.description || ''}
              mission={service.mission}
              vision={service.vision}
              domain={service.domain}
              bullets={service.features?.slice(0, 2).map(f => ({
                icon: service.emoji || '✨',
                text: f.title
              }))}
            />
          ))}
        </ServiceCategory>

        {/* LIFE & COMMUNITY Category */}
        <ServiceCategory title="LIFE & COMMUNITY" icon="🏡">
          {lifeCommunityServices.map(service => (
            <ServiceItem
              key={service.id}
              title={`${service.nameEn}（${service.nameJp.split(' - ')[0]}）`}
              tagline={service.catchphrase || `「${service.nameJp.split(' - ')[1] || '未来の形を作る'}」`}
              description={service.description || ''}
              mission={service.mission}
              vision={service.vision}
              domain={service.domain}
              bullets={service.features?.slice(0, 2).map(f => ({
                icon: service.emoji || '✨',
                text: f.title
              }))}
            />
          ))}
        </ServiceCategory>

        {/* WORK & PRODUCTIVITY Category */}
        <ServiceCategory title="WORK & PRODUCTIVITY" icon="💼">
          {workProductivityServices.map(service => (
            <ServiceItem
              key={service.id}
              title={`${service.nameEn}（${service.nameJp.split(' - ')[0]}）`}
              tagline={service.catchphrase || `「${service.nameJp.split(' - ')[1] || '未来の形を作る'}」`}
              description={service.description || ''}
              mission={service.mission}
              vision={service.vision}
              domain={service.domain}
              bullets={service.features?.slice(0, 2).map(f => ({
                icon: service.emoji || '✨',
                text: f.title
              }))}
            />
          ))}
        </ServiceCategory>

        {/* HEALTH & WELLNESS Category */}
        <ServiceCategory title="HEALTH & WELLNESS" icon="🌱">
          {healthServices.map(service => (
            <ServiceItem
              key={service.id}
              title={`${service.nameEn}（${service.nameJp.split(' - ')[0]}）`}
              tagline={service.catchphrase || `「${service.nameJp.split(' - ')[1] || '未来の形を作る'}」`}
              description={service.description || ''}
              mission={service.mission}
              vision={service.vision}
              domain={service.domain}
              bullets={service.features?.slice(0, 2).map(f => ({
                icon: service.emoji || '✨',
                text: f.title
              }))}
            />
          ))}
        </ServiceCategory>

        {/* INVEST & GROW Category */}
        {investGrowServices.length > 0 && (
          <ServiceCategory title="INVEST & GROW" icon="📈">
            {investGrowServices.map(service => (
              <ServiceItem
                key={service.id}
                title={`${service.nameEn}（${service.nameJp.split(' - ')[0]}）`}
                tagline={service.catchphrase || `「${service.nameJp.split(' - ')[1] || '未来の形を作る'}」`}
                description={service.description || ''}
                mission={service.mission}
                vision={service.vision}
                domain={service.domain}
                bullets={service.features?.slice(0, 2).map(f => ({
                  icon: service.emoji || '✨',
                  text: f.title
                }))}
              />
            ))}
          </ServiceCategory>
        )}

        {/* SPECIALIZED SERVICES Category */}
        {specializedServices.length > 0 && (
          <ServiceCategory title="SPECIALIZED SERVICES" icon="🥋">
            {specializedServices.map(service => (
              <ServiceItem
                key={service.id}
                title={`${service.nameEn}（${service.nameJp.split(' - ')[0]}）`}
                tagline={service.catchphrase || `「${service.nameJp.split(' - ')[1] || '未来の形を作る'}」`}
                description={service.description || ''}
                mission={service.mission}
                vision={service.vision}
                domain={service.domain}
                bullets={service.features?.slice(0, 2).map(f => ({
                  icon: service.emoji || '✨',
                  text: f.title
                }))}
              />
            ))}
          </ServiceCategory>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
