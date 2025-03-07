
import React from 'react';
import { CalendarClock, Target, BarChart3, Map } from 'lucide-react';
import { Service } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';

interface ServiceRoadmapProps {
  service: Service;
  serviceColor: string;
}

export const ServiceRoadmap = ({ service, serviceColor }: ServiceRoadmapProps) => {
  const isPortfolio = service.nameEn === 'StayFlow Portfolio';
  
  return (
    <MotionBox delay={800}>
      <div className="bg-white p-6 rounded-xl shadow-subtle">
        <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
          {isPortfolio ? "長期ブランディングビジョン" : "開発ロードマップ"}
        </h2>
        <div className="space-y-5">
          {isPortfolio ? (
            <>
              <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
                <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                  <CalendarClock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">短期目標（〜3年）</h3>
                  <p className="text-gray-700">厳選された物件を各地域で50件まで拡大。会員数1,000名を達成し、ブランド認知度を高める。高品質な滞在体験の提供と会員満足度の向上を最優先課題とする。</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
                <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">中期目標（3〜7年）</h3>
                  <p className="text-gray-700">国内主要エリアと厳選した海外拠点での物件展開を進め、合計500件の厳選物件を提供。会員コミュニティの構築と、独自のライフスタイル価値提案を強化。各物件の物語性と地域性を深め、訪れる度に新しい発見がある体験を創出。</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
                <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">長期目標（7〜15年）</h3>
                  <p className="text-gray-700">目標の3,000件の厳選物件を世界中で展開し、グローバルな「第二の我が家」ネットワークを構築。時代を超えて愛されるデザインと、持続可能な運営モデルを確立。単なる宿泊サービスを超え、新しい生活様式と文化的価値を創造するブランドへと進化。</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
                <div className="p-2 rounded-full mr-4" style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">持続可能な成長戦略</h3>
                  <p className="text-gray-700">数を追うのではなく、一つひとつの物件の質と独自性を最重視。地域社会との共生、環境への配慮、文化的価値の保全を大切にしながら、ゆっくりと丁寧にブランドを育てていく。真に価値ある体験を提供し続けることで、長期的な信頼関係を構築する。</p>
                </div>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}

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
  );
};

export default ServiceRoadmap;
