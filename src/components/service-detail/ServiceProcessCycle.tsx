
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { ProcessDiagram } from './ProcessDiagram';
import { CycleDiagram } from './CycleDiagram';

interface ServiceProcessCycleProps {
  serviceColor: string;
  serviceName: string;
}

export const ServiceProcessCycle: React.FC<ServiceProcessCycleProps> = ({ 
  serviceColor, 
  serviceName 
}) => {
  const isPortfolio = serviceName === 'StayFlow Portfolio';

  return (
    <>
      <MotionBox delay={650}>
        <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
          <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
            {isPortfolio ? "サービス体験の流れ" : "サービスの流れ"}
          </h2>
          <ProcessDiagram color={serviceColor} />
          <div className="grid md:grid-cols-4 gap-4 text-center text-sm mt-6">
            {isPortfolio ? (
              <>
                <div className="bg-white p-3 rounded-lg shadow-subtle">
                  <h3 className="font-bold mb-2" style={{ color: serviceColor }}>厳選</h3>
                  <p className="text-gray-600">独自の基準で特別な物件を厳選</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-subtle">
                  <h3 className="font-bold mb-2" style={{ color: serviceColor }}>滞在</h3>
                  <p className="text-gray-600">自分の別荘のようにリラックス</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-subtle">
                  <h3 className="font-bold mb-2" style={{ color: serviceColor }}>体験</h3>
                  <p className="text-gray-600">特別な時間と空間を楽しむ</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-subtle">
                  <h3 className="font-bold mb-2" style={{ color: serviceColor }}>感動</h3>
                  <p className="text-gray-600">思い出に残る特別な経験</p>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </MotionBox>
      
      <MotionBox delay={700}>
        <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
          <h2 className="text-xl font-bold mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
            {isPortfolio ? "継続的な価値向上サイクル" : "継続的改善サイクル"}
          </h2>
          <CycleDiagram color={serviceColor} />
          <p className="text-center text-gray-600 mt-6 bg-gray-50 p-4 rounded-lg">
            {isPortfolio ? (
              <>
                {serviceName}は常に特別な体験の創出を追求しています。<br />
                新たな魅力的な空間の発見、厳選された物件の選定、洗練されたサービスの提供、<br />
                そして他にはない特別な体験の創造を通じて、訪れるたびに新たな感動を提供します。
              </>
            ) : (
              <>
                {serviceName}は継続的な改善を重視しています。ユーザーフィードバックを元に<br />
                サービスの品質向上と新機能の開発を行い、常に最高の体験を提供します。
              </>
            )}
          </p>
        </div>
      </MotionBox>
    </>
  );
};
