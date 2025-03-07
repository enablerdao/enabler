
import React from 'react';
import { User } from 'lucide-react';
import { MotionBox } from '@/components/ui/motion-box';
import { companyInfo } from '@/lib/data';

interface AuthorCardProps {
  author: string;
  delay?: number;
}

const AuthorCard = ({ author, delay = 100 }: AuthorCardProps) => {
  return (
    <MotionBox delay={delay}>
      <div className="bg-white rounded-xl shadow-subtle p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">著者について</h3>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
            <User className="w-6 h-6 text-gray-500" />
          </div>
          <div>
            <h4 className="font-medium">{author}</h4>
            <p className="text-sm text-gray-600">{companyInfo.nameJp}</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          {companyInfo.nameJp}のブログを通じて、テクノロジーと人間の可能性について発信しています。
        </p>
      </div>
    </MotionBox>
  );
};

export default AuthorCard;
