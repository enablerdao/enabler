
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { logActivity } from '@/lib/logger';
import { serviceCategories } from '@/lib/data';
import { MotionBox } from '@/components/ui/motion-box';
import HeroSection from './index/HeroSection';
import CategoryServiceList from './index/CategoryServiceList';

const Index = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/' });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <section id="services" className="py-16">
          <div className="container mx-auto px-6">
            <MotionBox>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                ENABLER サービス一覧
              </h2>
            </MotionBox>

            <CategoryServiceList 
              services={serviceCategories['STAY_TRAVEL'] || []}
              emoji="🌴"
              title="STAY & TRAVEL"
            />

            <CategoryServiceList 
              services={serviceCategories['LIFE_COMMUNITY'] || []}
              emoji="🏡"
              title="LIFE & COMMUNITY"
            />

            <CategoryServiceList 
              services={serviceCategories['WORK_PRODUCTIVITY'] || []}
              emoji="💼"
              title="WORK & PRODUCTIVITY"
            />

            <CategoryServiceList 
              services={serviceCategories['HEALTH_WELLNESS'] || []}
              emoji="🌱"
              title="HEALTH & WELLNESS"
            />

            <CategoryServiceList 
              services={serviceCategories['INVEST_GROW'] || []}
              emoji="📈"
              title="INVEST & GROW"
            />

            <div className="text-center mt-20">
              <MotionBox delay={500}>
                <p className="text-xl mb-8">テクノロジーを通じて、あなたがワクワクする未来を一緒に作りませんか？</p>
                <p className="text-2xl font-medium">あなたの「あったらいいな」は、もうここにあります。</p>
              </MotionBox>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
