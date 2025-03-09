
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="mb-8">
      <p className="mb-4 text-center font-medium text-gray-700">創業者の活動をフォローする：</p>
      
      <div className="grid sm:grid-cols-3 gap-4">
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
        <a href="https://yukihamadajp" target="_blank" rel="noopener noreferrer" 
          className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
          <ExternalLink size={18} className="text-gray-600 group-hover:text-enabler-600" />
          <span>yukihamadajp</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
