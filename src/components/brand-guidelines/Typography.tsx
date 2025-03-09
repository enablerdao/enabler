
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Type } from 'lucide-react';

const Typography = () => {
  return (
    <MotionBox delay={500}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <Type className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">4. タイポグラフィ</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">和文フォント</h3>
              <p className="text-6xl mb-2 font-sans">あア阿</p>
              <p className="text-lg font-medium">Noto Sans JP</p>
              <p className="text-gray-600">Regular, Bold</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">欧文フォント</h3>
              <p className="text-6xl mb-2 font-sans">Aa1</p>
              <p className="text-lg font-medium">Montserrat</p>
              <p className="text-gray-600">Regular, Medium, Bold</p>
            </div>
          </div>
          <p className="text-lg mt-6">
            見やすさや親しみやすさを重視し、余白や間隔にも配慮してください。
          </p>
        </div>
      </section>
    </MotionBox>
  );
};

export default Typography;
