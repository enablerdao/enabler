
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Github } from 'lucide-react';

const ServiceLinks = () => {
  return (
    <div className="mb-8">
      <p className="text-center mb-4 font-medium text-gray-700">サービスの最新情報と機会：</p>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <Button variant="default" className="bg-enabler-600 hover:bg-enabler-700" asChild>
          <a href="#" className="flex items-center justify-center gap-2">
            <ExternalLink size={18} />
            <span>StayFlow事前登録</span>
          </a>
        </Button>
        
        <Button variant="outline" className="border-enabler-200" asChild>
          <a href="#" className="flex items-center justify-center gap-2">
            <Users size={18} className="text-enabler-600" />
            <span>採用情報を見る</span>
          </a>
        </Button>
        
        <Button variant="outline" className="border-enabler-200 sm:col-span-2" asChild>
          <a href="#" className="flex items-center justify-center gap-2">
            <Github size={18} className="text-enabler-600" />
            <span>GitHubでプロジェクトを見る</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ServiceLinks;
