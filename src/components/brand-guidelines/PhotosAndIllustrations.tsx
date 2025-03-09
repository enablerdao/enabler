
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Image } from 'lucide-react';

const PhotosAndIllustrations = () => {
  return (
    <MotionBox delay={600}>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <Image className="text-enabler-600 mr-3" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">5. 写真・イラスト</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-subtle">
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>写真は明るく透明感があり、共感性や温かさを感じられるものを使用。</li>
            <li>イラストはシンプルで柔らかなタッチを推奨。</li>
          </ul>
        </div>
      </section>
    </MotionBox>
  );
};

export default PhotosAndIllustrations;
