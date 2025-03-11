import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileType, FileImage, FileText, Package } from 'lucide-react';

interface ResourceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  fileName: string;
  fileSize: string;
  fileType: string;
}

const DownloadableResources: React.FC = () => {
  const resources: ResourceItem[] = [
    {
      title: 'ロゴパッケージ',
      description: 'すべてのロゴバリエーション（SVG, PNG, JPG形式）',
      icon: <FileImage className="w-8 h-8 text-blue-500" />,
      fileName: 'enabler-logos-package.zip',
      fileSize: '12.4 MB',
      fileType: 'ZIP'
    },
    {
      title: 'ブランドカラーパレット',
      description: 'カラーコードとグラデーション（Adobe, Sketch, Figma対応）',
      icon: <FileType className="w-8 h-8 text-indigo-500" />,
      fileName: 'enabler-color-palette.zip',
      fileSize: '3.2 MB',
      fileType: 'ZIP'
    },
    {
      title: 'フォントパッケージ',
      description: 'Noto Sans JPとMontserratフォントファイル',
      icon: <FileText className="w-8 h-8 text-green-500" />,
      fileName: 'enabler-fonts.zip',
      fileSize: '8.7 MB',
      fileType: 'ZIP'
    },
    {
      title: 'ブランドガイドラインPDF',
      description: '印刷用の完全なブランドガイドライン',
      icon: <FileText className="w-8 h-8 text-red-500" />,
      fileName: 'enabler-brand-guidelines.pdf',
      fileSize: '5.3 MB',
      fileType: 'PDF'
    },
    {
      title: 'ソーシャルメディアテンプレート',
      description: 'Twitter, Instagram, Facebookなどのテンプレート',
      icon: <Package className="w-8 h-8 text-purple-500" />,
      fileName: 'enabler-social-templates.zip',
      fileSize: '18.9 MB',
      fileType: 'ZIP'
    },
    {
      title: 'プレゼンテーションテンプレート',
      description: 'PowerPointとKeynoteのテンプレート',
      icon: <FileText className="w-8 h-8 text-yellow-500" />,
      fileName: 'enabler-presentation-templates.zip',
      fileSize: '14.2 MB',
      fileType: 'ZIP'
    }
  ];

  const handleDownload = (fileName: string) => {
    // 実際のダウンロード処理はここに実装
    // 現在はアラートを表示するだけ
    alert(`${fileName} のダウンロードを開始します。実際の実装では、ここでファイルダウンロードが始まります。`);
  };

  return (
    <section className="mb-12">
      <div className="flex items-center mb-4 md:mb-6">
        <Download className="w-6 h-6 mr-2" />
        <h2 className="text-2xl font-bold">7. ダウンロード可能なリソース</h2>
      </div>

      <p className="mb-6 text-gray-700">
        Enablerブランドの一貫した使用をサポートするために、以下のリソースをダウンロードしてご利用いただけます。
        これらのリソースは、最新のブランドガイドラインに準拠しており、定期的に更新されます。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="p-5">
              <div className="flex items-start mb-3">
                {resource.icon}
                <div className="ml-3">
                  <h3 className="font-semibold text-lg">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                <div className="text-xs text-gray-500">
                  <span className="font-medium">{resource.fileType}</span> • {resource.fileSize}
                </div>
                <button
                  onClick={() => handleDownload(resource.fileName)}
                  className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Download className="w-4 h-4 mr-1" />
                  ダウンロード
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">リソースの使用について</h3>
        <p className="text-sm text-blue-700">
          これらのリソースはEnablerブランドガイドラインに従って使用してください。
          商用利用の場合は、事前に許可が必要な場合があります。
          不明な点がある場合は、<a href="mailto:brand@enabler.example.com" className="underline hover:text-blue-900">brand@enabler.example.com</a> までお問い合わせください。
        </p>
      </div>
    </section>
  );
};

export default DownloadableResources;