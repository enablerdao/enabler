
import React from 'react';
import { PricingPlan } from '@/lib/types/service';
import { CheckCircle2 } from 'lucide-react';

interface ServicePricingProps {
  pricing: PricingPlan[];
}

export const ServicePricing = ({ pricing }: ServicePricingProps) => (
  <div className="grid md:grid-cols-3 gap-4">
    {pricing.map((plan, index) => (
      <div key={index} className={`border rounded-lg p-5 relative ${plan.recommended ? 'border-enabler-300 shadow-md' : 'border-gray-200'}`}>
        {plan.recommended && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-enabler-600 text-white text-xs font-bold py-1 px-3 rounded-full">
            おすすめ
          </div>
        )}
        <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
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
);
