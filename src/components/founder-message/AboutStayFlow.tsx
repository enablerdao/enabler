
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Check } from 'lucide-react';

const AboutStayFlow = () => {
  return (
    <MotionBox delay={300}>
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-enabler-800">StayFlowとは？</h2>
          <div className="h-px flex-grow bg-gray-200 ml-4"></div>
        </div>
        <div className="bg-white rounded-lg shadow-subtle p-6 border border-gray-100">
          <p className="mb-6">
            私たちが現在開発中の主力サービスが「StayFlow（ステイフロー）」です。
          </p>
          
          <p className="mb-6">
            StayFlowは、宿泊施設の予約管理を極限まで簡単にし、ホストが日々の運営業務をほぼゼロにできるよう設計された民泊運営管理プラットフォームです。予約管理、清掃手配、ゲスト対応、さらには価格設定まで、AIと自動化技術を活用して完全に自動化。ホストが本来やりたいことに集中できる環境を提供します。
          </p>
          
          <p className="mb-8">
            StayFlowは、創業者自身が数々の予約管理サービスを利用してみて、「本当に使いやすい」と思えるものがなかったことから誕生しました。特に清掃管理は煩雑で悩みが多く、軽快で直感的な操作性とAIによるマッチング機能により、従来より圧倒的に使いやすく効率的に改善しました。
          </p>
          
          <div className="mb-4">
            <h3 className="font-bold text-lg text-enabler-700 mb-4">StayFlowの主な特徴</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-enabler-100 p-1 rounded mr-3 mt-0.5">
                  <Check size={16} className="text-enabler-600" />
                </div>
                <span><strong>予約管理の完全自動化</strong>（作業時間を最大90%削減）</span>
              </li>
              <li className="flex items-start">
                <div className="bg-enabler-100 p-1 rounded mr-3 mt-0.5">
                  <Check size={16} className="text-enabler-600" />
                </div>
                <span><strong>清掃管理のAIマッチング</strong>（最適なスタッフを自動選定）</span>
              </li>
              <li className="flex items-start">
                <div className="bg-enabler-100 p-1 rounded mr-3 mt-0.5">
                  <Check size={16} className="text-enabler-600" />
                </div>
                <span><strong>ゲスト対応チャットボット</strong>（24時間365日の自動対応）</span>
              </li>
              <li className="flex items-start">
                <div className="bg-enabler-100 p-1 rounded mr-3 mt-0.5">
                  <Check size={16} className="text-enabler-600" />
                </div>
                <span><strong>ダイナミックプライシング</strong>（収益を平均20%以上改善）</span>
              </li>
            </ul>
          </div>
          
          <p>
            これらの機能により、ホストは手間をかけず利益を最大化でき、宿泊ゲストには高品質な滞在体験を提供できます。
          </p>
        </div>
      </div>
    </MotionBox>
  );
};

export default AboutStayFlow;
