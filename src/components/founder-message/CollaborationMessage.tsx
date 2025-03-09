
import React from 'react';
import { Heart } from 'lucide-react';

const CollaborationMessage = () => {
  return (
    <div className="mb-8 bg-enabler-50 p-6 rounded-lg border border-enabler-100">
      <div className="flex items-center justify-center gap-2 text-enabler-700 mb-4">
        <Heart size={20} className="text-enabler-600" />
        <span className="font-medium">共に創る未来</span>
      </div>
      <p className="text-gray-700">
        システム開発やマーケティングについては私自身が責任を持って取り組みます。皆さんには、サービスの使いやすさや改善点についてのフィードバックをいただければ幸いです。一緒に最高のサービスを作っていきましょう！
      </p>
    </div>
  );
};

export default CollaborationMessage;
