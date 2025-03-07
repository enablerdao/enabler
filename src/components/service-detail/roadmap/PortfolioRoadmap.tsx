
import React from 'react';
import { CalendarClock, Target, BarChart3, Map } from 'lucide-react';
import { GoalItem } from './GoalItem';

interface PortfolioRoadmapProps {
  serviceColor: string;
  catchphrase?: string;
}

export const PortfolioRoadmap = ({ serviceColor, catchphrase }: PortfolioRoadmapProps) => {
  return (
    <div className="space-y-5">
      <GoalItem 
        icon={CalendarClock}
        title="短期目標（〜3年）"
        description="厳選された物件を各地域で50件まで拡大。会員数1,000名を達成し、ブランド認知度を高める。高品質な滞在体験の提供と会員満足度の向上を最優先課題とする。"
        serviceColor={serviceColor}
      />
      
      <GoalItem 
        icon={Target}
        title="中期目標（3〜7年）"
        description="国内主要エリアと厳選した海外拠点での物件展開を進め、合計500件の厳選物件を提供。会員コミュニティの構築と、独自のライフスタイル価値提案を強化。各物件の物語性と地域性を深め、訪れる度に新しい発見がある体験を創出。"
        serviceColor={serviceColor}
      />
      
      <GoalItem 
        icon={BarChart3}
        title="長期目標（7〜15年）"
        description="目標の3,000件の厳選物件を世界中で展開し、グローバルな「第二の我が家」ネットワークを構築。時代を超えて愛されるデザインと、持続可能な運営モデルを確立。単なる宿泊サービスを超え、新しい生活様式と文化的価値を創造するブランドへと進化。"
        serviceColor={serviceColor}
      />
      
      <GoalItem 
        icon={Map}
        title="持続可能な成長戦略"
        description="数を追うのではなく、一つひとつの物件の質と独自性を最重視。地域社会との共生、環境への配慮、文化的価値の保全を大切にしながら、ゆっくりと丁寧にブランドを育てていく。真に価値ある体験を提供し続けることで、長期的な信頼関係を構築する。"
        serviceColor={serviceColor}
      />

      {catchphrase && (
        <div className="mt-8 pt-4 border-t border-gray-100 text-center">
          <p className="text-lg font-medium italic" style={{ color: serviceColor }}>
            "{catchphrase}"
          </p>
        </div>
      )}
    </div>
  );
};
