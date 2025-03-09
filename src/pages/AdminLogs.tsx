
import React, { useState, useEffect } from 'react';
import { getAllLogs, clearLogs } from '@/lib/logger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox } from '@/components/ui/motion-box';
import { Trash2, RefreshCw, DownloadCloud } from 'lucide-react';

interface LogItem {
  type: string;
  timestamp: number;
  serviceId?: number;
  serviceName?: string;
  additionalData?: Record<string, unknown>;
  [key: string]: unknown;
}

const AdminLogs = () => {
  const [logs, setLogs] = useState<LogItem[]>([]);
  const [filter, setFilter] = useState<string>('all');
  
  useEffect(() => {
    loadLogs();
  }, []);
  
  const loadLogs = () => {
    const allLogs = getAllLogs();
    setLogs(allLogs);
  };
  
  const handleClearLogs = () => {
    if (window.confirm('すべてのログを削除してもよろしいですか？')) {
      clearLogs();
      setLogs([]);
    }
  };
  
  const handleExport = () => {
    const dataStr = JSON.stringify(logs, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `enabler-logs-${new Date().toISOString()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };
  
  const filteredLogs = filter === 'all' 
    ? logs 
    : logs.filter(log => log.type === filter);
  
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('ja-JP');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <MotionBox>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h1 className="text-3xl font-bold mb-4 md:mb-0">管理者ログ</h1>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={loadLogs}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-100 text-gray-800 font-medium transition-all hover:bg-gray-200"
                >
                  <RefreshCw size={16} className="mr-2" />
                  更新
                </button>
                
                <button
                  onClick={handleExport}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium transition-all hover:bg-blue-700"
                >
                  <DownloadCloud size={16} className="mr-2" />
                  エクスポート
                </button>
                
                <button
                  onClick={handleClearLogs}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-red-600 text-white font-medium transition-all hover:bg-red-700"
                >
                  <Trash2 size={16} className="mr-2" />
                  すべて削除
                </button>
              </div>
            </div>
          </MotionBox>
          
          <MotionBox delay={100}>
            <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    filter === 'all' ? 'bg-enabler-600 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  すべて
                </button>
                <button
                  onClick={() => setFilter('pageView')}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    filter === 'pageView' ? 'bg-enabler-600 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  ページビュー
                </button>
                <button
                  onClick={() => setFilter('serviceView')}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    filter === 'serviceView' ? 'bg-enabler-600 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  サービス閲覧
                </button>
                <button
                  onClick={() => setFilter('contactSubmit')}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    filter === 'contactSubmit' ? 'bg-enabler-600 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  お問い合わせ
                </button>
                <button
                  onClick={() => setFilter('externalLink')}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    filter === 'externalLink' ? 'bg-enabler-600 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  外部リンク
                </button>
              </div>
              
              {filteredLogs.length === 0 ? (
                <div className="text-center py-16 text-gray-500">
                  ログデータがありません
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-4 py-2 text-left font-medium text-gray-600">タイプ</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-600">日時</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-600">サービス</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-600">追加データ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLogs.slice().reverse().map((log, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              log.type === 'pageView' ? 'bg-green-100 text-green-800' :
                              log.type === 'serviceView' ? 'bg-blue-100 text-blue-800' :
                              log.type === 'contactSubmit' ? 'bg-purple-100 text-purple-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {log.type === 'pageView' ? 'ページビュー' :
                               log.type === 'serviceView' ? 'サービス閲覧' :
                               log.type === 'contactSubmit' ? 'お問い合わせ' :
                               '外部リンク'}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">{formatDate(log.timestamp)}</td>
                          <td className="px-4 py-3">
                            {log.serviceName || '-'}
                            {log.serviceId ? ` (ID: ${log.serviceId})` : ''}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <pre className="whitespace-pre-wrap text-xs">
                              {JSON.stringify(log.additionalData || {}, null, 2)}
                            </pre>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </MotionBox>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminLogs;
