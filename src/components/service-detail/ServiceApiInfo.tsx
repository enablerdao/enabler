
import React from 'react';
import { ApiInfo } from '@/lib/types/service';
import { Code, ExternalLink } from 'lucide-react';

interface ServiceApiInfoProps {
  apiInfo: ApiInfo;
}

export const ServiceApiInfo = ({ apiInfo }: ServiceApiInfoProps) => (
  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
    <div className="flex items-center mb-6">
      <Code className="text-enabler-600 mr-3" />
      <h2 className="text-xl font-bold">開発者向け情報</h2>
    </div>
    
    <div className="mb-6">
      <h3 className="font-bold text-gray-800 mb-2">APIエンドポイント</h3>
      <div className="bg-gray-50 p-3 rounded-md font-mono text-sm overflow-x-auto">
        {apiInfo.endpoint}
      </div>
    </div>
    
    <div className="mb-6">
      <h3 className="font-bold text-gray-800 mb-2">概要</h3>
      <p className="text-gray-700">{apiInfo.description}</p>
    </div>
    
    <div className="mb-6">
      <h3 className="font-bold text-gray-800 mb-2">認証方法</h3>
      <p className="text-gray-700">{apiInfo.authentication}</p>
    </div>
    
    {apiInfo.examples && apiInfo.examples.length > 0 && (
      <div>
        <h3 className="font-bold text-gray-800 mb-3">コード例</h3>
        <div className="space-y-4">
          {apiInfo.examples.map((example, index) => (
            <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
                <span className="font-medium text-sm">{example.language}</span>
                {example.description && (
                  <span className="text-xs text-gray-500 ml-2">- {example.description}</span>
                )}
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm">
                <code>{example.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    )}
    
    {apiInfo.documentation && (
      <div className="mt-6 pt-4 border-t border-gray-100">
        <a 
          href={apiInfo.documentation} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-enabler-600 hover:text-enabler-700 font-medium"
        >
          詳細なドキュメントを見る <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    )}
  </div>
);
