
import React from 'react';
import { Users } from 'lucide-react';
import { UseCase } from '@/lib/types/service';
import { MotionBox } from '@/components/ui/motion-box';

interface ServiceUseCasesProps {
  useCases: UseCase[];
  serviceColor: string;
}

export const ServiceUseCases = ({ useCases, serviceColor }: ServiceUseCasesProps) => {
  if (!useCases || useCases.length === 0) return null;

  return (
    <MotionBox delay={500}>
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
        <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
          <Users className="mr-3" style={{ color: serviceColor }} />
          <h2 className="text-xl font-bold">活用事例</h2>
        </div>
        <div className="space-y-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-gray-800 mb-2">{useCase.title}</h3>
              <p className="text-gray-600 mb-3">{useCase.description}</p>
              {useCase.result && (
                <div className="bg-gray-50 p-3 rounded-lg border-l-2" style={{ borderColor: serviceColor }}>
                  <span className="text-sm font-medium" style={{ color: serviceColor }}>結果:</span>
                  <p className="text-gray-700">{useCase.result}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MotionBox>
  );
};

export default ServiceUseCases;
