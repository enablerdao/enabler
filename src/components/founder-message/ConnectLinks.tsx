
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Mail, Users, Heart } from 'lucide-react';

const ConnectLinks = () => {
  return (
    <MotionBox delay={500}>
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-enabler-800">一緒に未来を創りませんか？</h2>
          <div className="h-px flex-grow bg-gray-200 ml-4"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <p className="mb-6 text-center">まずは創業者の活動をフォローしてください：</p>
          
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <a href="https://x.com/YukiHamada" target="_blank" rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
              <ExternalLink size={18} className="text-gray-600 group-hover:text-enabler-600" />
              <span>X.com: YukiHamada</span>
            </a>
            <a href="https://github.com/YukiHamada" target="_blank" rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
              <Github size={18} className="text-gray-600 group-hover:text-enabler-600" />
              <span>GitHub: YukiHamada</span>
            </a>
            <a href="https://yukihamada.jp" target="_blank" rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
              <ExternalLink size={18} className="text-gray-600 group-hover:text-enabler-600" />
              <span>yuki.hamada.jp</span>
            </a>
          </div>
          
          <p className="text-center mb-6">また、最新情報や事前登録は下記からどうぞ。</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <Button variant="default" className="bg-enabler-600 hover:bg-enabler-700" asChild>
              <a href="#" className="flex items-center justify-center gap-2">
                <ExternalLink size={18} />
                <span>StayFlow事前登録</span>
              </a>
            </Button>
            
            <Button variant="outline" className="border-enabler-200" asChild>
              <a href="#" className="flex items-center justify-center gap-2">
                <Mail size={18} className="text-enabler-600" />
                <span>ニュースレター登録</span>
              </a>
            </Button>
            
            <Button variant="outline" className="border-enabler-200" asChild>
              <a href="#" className="flex items-center justify-center gap-2">
                <Github size={18} className="text-enabler-600" />
                <span>GitHubでプロジェクトを見る</span>
              </a>
            </Button>
            
            <Button variant="outline" className="border-enabler-200" asChild>
              <a href="#" className="flex items-center justify-center gap-2">
                <Users size={18} className="text-enabler-600" />
                <span>採用情報を見る</span>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 bg-enabler-50 p-6 rounded-lg border border-enabler-100 text-center">
          <p className="flex items-center justify-center gap-2 text-enabler-700">
            <Heart size={20} className="text-enabler-600" />
            <span>イネブラのすべてのプロジェクトはオープンソースで公開中。あなたの参加を心からお待ちしています。</span>
          </p>
        </div>
      </div>
    </MotionBox>
  );
};

export default ConnectLinks;
