
import React from 'react';
import { PricingPlan } from '@/lib/types/service';
import { CheckCircle2, Rocket, Sparkles, Star } from 'lucide-react';

interface ServicePricingProps {
  pricing: PricingPlan[];
}

export const ServicePricing = ({ pricing }: ServicePricingProps) => {
  // Get the appropriate icon for each pricing tier
  const getPlanIcon = (planName: string) => {
    if (planName.includes('ライト')) return <Rocket className="w-5 h-5" />;
    if (planName.includes('スタンダード')) return <Sparkles className="w-5 h-5" />;
    if (planName.includes('プロフェッショナル')) return <Star className="w-5 h-5" />;
    return <CheckCircle2 className="w-5 h-5" />;
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4">
        {pricing.map((plan, index) => (
          <div 
            key={index} 
            className={`border rounded-lg p-5 relative ${
              plan.recommended ? 'border-enabler-300 shadow-md' : 'border-gray-200'
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-enabler-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                おすすめ
              </div>
            )}
            <div className="flex items-center mb-3">
              <div className="text-enabler-600 mr-2">
                {getPlanIcon(plan.name)}
              </div>
              <h3 className="text-lg font-bold">{plan.name}</h3>
            </div>
            <div className="mb-4">
              <span className="text-2xl font-bold">{plan.price}</span>
              <span className="text-gray-500 text-sm">/{plan.period}</span>
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-enabler-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              className={`w-full py-2 rounded-lg font-medium ${
                plan.recommended 
                  ? 'bg-enabler-600 text-white hover:bg-enabler-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}
            >
              {plan.buttonText || 'お申し込み'}
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold mb-2">🎯 プラン設計ポイント</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• ライトは個人ホスト向けの導入プラン、スタンダードは多くのユーザーに最適な主力プラン、プロフェッショナルは運営会社向けのハイエンドプランと位置づけています。</li>
          <li>• 各プランでの機能差を明確化し、アップセルがしやすくなるよう工夫しました。</li>
        </ul>
      </div>
    </div>
  );
};
