
import React from 'react';
import { PlayCircle } from 'lucide-react';

export const ServiceDemoVideo = () => (
  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8 border border-dashed border-gray-300">
    <div className="flex items-center mb-4">
      <PlayCircle className="text-gray-400 mr-3" />
      <h2 className="text-xl font-bold text-gray-500">サービスデモ動画</h2>
      <span className="ml-3 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs font-medium rounded">準備中</span>
    </div>
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <PlayCircle className="w-8 h-8 text-gray-400" />
      </div>
      <p className="text-gray-500 mb-2 text-center text-center-important">サービスデモビデオは現在準備中です</p>
      <p className="text-gray-400 text-sm text-center text-center-important">より良いサービス体験のためにコンテンツを作成しています</p>
    </div>
  </div>
);
