
import React, { useEffect, useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { logActivity } from '@/lib/logger';
import { companyInfo } from '@/lib/data';
import { ArrowLeft, BriefcaseBusiness, Heart, LightbulbIcon, Zap, SendIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  useEffect(() => {
    logActivity('pageView', { path: '/careers' });
  }, []);

  const [activeTab, setActiveTab] = useState<string>('all');
  
  const openPositions = [
    {
      id: 1,
      title: 'フロントエンドエンジニア',
      category: 'engineering',
      location: 'リモート / 東京',
      type: 'フルタイム',
      description: 'モダンなフロントエンド技術（React、TypeScript）を使って革新的なWebアプリケーションを開発するエンジニアを募集しています。',
      requirements: [
        'React、TypeScriptの実務経験2年以上',
        'UIライブラリやコンポーネント設計の経験',
        'レスポンシブデザインの実装経験',
        'GitHubを使った開発フロー経験'
      ]
    },
    {
      id: 2,
      title: 'UIUXデザイナー',
      category: 'design',
      location: 'リモート / 東京',
      type: 'フルタイム',
      description: 'ユーザー中心の美しく機能的なインターフェースをデザインし、製品の使いやすさと魅力を高めるデザイナーを募集しています。',
      requirements: [
        'UIUXデザインの実務経験2年以上',
        'Figmaなどのデザインツールの熟練した使用経験',
        'ユーザーリサーチやペルソナ作成の経験',
        'デザインシステムの構築経験があれば尚可'
      ]
    },
    {
      id: 3,
      title: '滞在型施設デザイナー',
      category: 'design',
      location: '東京',
      type: 'フルタイム',
      description: '別荘などの滞在型施設のデザインと開発を行うデザイナーを求めています。デジタルとリアルの融合した新しい空間づくりに挑戦できます。',
      requirements: [
        'インテリアデザインまたは建築設計の経験',
        '3Dモデリングソフトの使用経験',
        'デジタル技術を活用した空間設計への興味',
        '持続可能性を考慮したデザイン思考'
      ]
    },
    {
      id: 4,
      title: 'バックエンドエンジニア',
      category: 'engineering',
      location: 'リモート / 東京',
      type: 'フルタイム',
      description: 'スケーラブルなバックエンドシステムを設計・開発するエンジニアを募集。クラウドサービスを活用した最新のアーキテクチャ構築に携わります。',
      requirements: [
        'Node.js、Go、Pythonなどのバックエンド開発経験',
        'AWSなどのクラウドサービス使用経験',
        'RESTful APIの設計と実装経験',
        'データベース設計と最適化の知識'
      ]
    },
    {
      id: 5,
      title: 'マーケティングスペシャリスト',
      category: 'marketing',
      location: 'リモート / 東京',
      type: 'フルタイム',
      description: 'デジタルマーケティング戦略の立案と実行を担当するスペシャリストを募集。革新的なプロダクトの市場浸透を促進します。',
      requirements: [
        'デジタルマーケティングの実務経験2年以上',
        'SNSマーケティングとコンテンツ戦略の経験',
        'マーケティング指標の分析と改善提案能力',
        'テクノロジー分野への興味・関心'
      ]
    }
  ];
  
  const filteredPositions = activeTab === 'all'
    ? openPositions
    : openPositions.filter(position => position.category === activeTab);
  
  const companyValues = [
    {
      icon: <Heart className="w-10 h-10 text-enabler-500" />,
      title: '人を中心に',
      description: '私たちは常にユーザーと社員を大切にします。テクノロジーは人を幸せにするために存在します。'
    },
    {
      icon: <LightbulbIcon className="w-10 h-10 text-enabler-500" />,
      title: '革新と創造',
      description: '常識に囚われず、新しいアイデアを歓迎します。失敗を恐れずに挑戦する文化を大切にしています。'
    },
    {
      icon: <Zap className="w-10 h-10 text-enabler-500" />,
      title: '行動力',
      description: '考えるだけでなく、実行に移します。小さく始めて、素早く改善していくアプローチを重視します。'
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    // Here you would typically send the data to your backend
    alert('応募ありがとうございます！お送りいただいた内容を確認の上、ご連絡いたします。');
    
    // Log the activity
    logActivity('jobApplication', { 
      position: formData.position,
      additionalData: { email: formData.email }
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      position: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <MotionBox>
            <div className="mb-10">
              <Link to="/" className="inline-flex items-center text-enabler-600 hover:text-enabler-700 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                ホームに戻る
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-enabler-800 mb-4">一緒に未来を創る</h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                {companyInfo.nameJp}では、テクノロジーと空間づくりで社会に新しい価値を提供する仲間を募集しています。
                多様な視点を持つチームで、ワクワクするような未来を一緒に実現しませんか？
              </p>
            </div>
          </MotionBox>
          
          {/* Company Values */}
          <MotionBox delay={200}>
            <div className="bg-white rounded-xl shadow-subtle p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-8 text-center text-enabler-700">私たちの価値観</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {companyValues.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-enabler-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionBox>
          
          {/* Open Positions */}
          <MotionBox delay={300}>
            <div className="bg-enabler-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-enabler-700">募集ポジション</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'all' ? 'bg-enabler-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  すべて
                </button>
                <button
                  onClick={() => setActiveTab('engineering')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'engineering' ? 'bg-enabler-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  エンジニアリング
                </button>
                <button
                  onClick={() => setActiveTab('design')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'design' ? 'bg-enabler-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  デザイン
                </button>
                <button
                  onClick={() => setActiveTab('marketing')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'marketing' ? 'bg-enabler-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  マーケティング
                </button>
              </div>
              
              {/* Job Listings */}
              {filteredPositions.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  現在、該当するポジションの募集はありません
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredPositions.map((position) => (
                    <div key={position.id} className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-medium text-gray-800">{position.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-enabler-100 text-enabler-800 rounded-full">
                              {position.location}
                            </span>
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                              {position.type}
                            </span>
                          </div>
                        </div>
                        <BriefcaseBusiness className="hidden md:block w-10 h-10 text-enabler-300" />
                      </div>
                      
                      <p className="text-gray-600 mb-4">{position.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-700 mb-2">必要なスキル・経験:</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <a 
                        href="#application-form" 
                        className="inline-block mt-2 text-enabler-600 hover:text-enabler-700 font-medium"
                        onClick={() => setFormData(prev => ({ ...prev, position: position.title }))}
                      >
                        このポジションに応募する →
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </MotionBox>
          
          {/* Application Form */}
          <MotionBox delay={400}>
            <div id="application-form" className="bg-white rounded-xl shadow-subtle p-8">
              <h2 className="text-2xl font-semibold mb-6 text-enabler-700">応募フォーム</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-enabler-500 focus:border-enabler-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-enabler-500 focus:border-enabler-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    応募ポジション <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-enabler-500 focus:border-enabler-500"
                  >
                    <option value="">選択してください</option>
                    {openPositions.map(pos => (
                      <option key={pos.id} value={pos.title}>{pos.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    自己PR・志望動機
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-enabler-500 focus:border-enabler-500"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-enabler-600 text-white font-medium transition-all duration-200 hover:bg-enabler-700 shadow-md hover:shadow-lg"
                  >
                    応募する
                    <SendIcon className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </MotionBox>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
