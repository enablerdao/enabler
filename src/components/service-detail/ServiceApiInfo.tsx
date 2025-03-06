
import React from 'react';
import { ApiInfo } from '@/lib/types/service';
import { Code, BookOpen } from 'lucide-react';

interface ServiceApiInfoProps {
  apiInfo: ApiInfo;
  serviceColor?: string;
}

export const ServiceApiInfo = ({ apiInfo, serviceColor = '#6366f1' }: ServiceApiInfoProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
      <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
        <Code className="mr-3" style={{ color: serviceColor }} />
        <h2 className="text-xl font-bold">API情報</h2>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-2">エンドポイント</h3>
        <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm overflow-x-auto">
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
      
      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-2">使用例</h3>
        <div className="space-y-4">
          {apiInfo.examples.map((example, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                <span className="font-medium text-gray-700">{example.language}</span>
                <span className="text-sm text-gray-500">{example.description}</span>
              </div>
              <pre className="bg-gray-900 p-4 text-gray-100 overflow-x-auto text-sm">
                <code>{example.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
      
      {apiInfo.documentation && (
        <div className="mt-6">
          <a 
            href={apiInfo.documentation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            詳細なドキュメントを見る
          </a>
        </div>
      )}
    </div>
  );
};
