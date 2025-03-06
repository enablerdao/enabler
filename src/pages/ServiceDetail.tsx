import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services, Service } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox } from '@/components/ui/motion-box';
import ServiceLogo from '@/components/ServiceLogo';
import { 
  ArrowLeft, 
  ExternalLink, 
  BarChart3, 
  Target, 
  CalendarClock, 
  CheckCircle2, 
  Activity, 
  LightbulbIcon, 
  Users, 
  Sparkles,
  Compass,
  MessageCircleHeart,
  PlayCircle,
  Code,
  Star,
  DollarSign,
  MessageSquareQuote
} from 'lucide-react';
import { logActivity } from '@/lib/logger';

// SVG diagram components
const ProcessDiagram = ({ color }: { color: string }) => (
  <svg className="w-full h-auto max-w-xl mx-auto my-8" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="70" width="120" height="60" rx="8" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="110" y="105" textAnchor="middle" fill={color} fontWeight="bold">収集</text>
    
    <path d="M170 100 L230 100" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="230,95 240,100 230,105" fill={color}/>
    
    <rect x="240" y="70" width="120" height="60" rx="8" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="300" y="105" textAnchor="middle" fill={color} fontWeight="bold">分析</text>
    
    <path d="M360 100 L420 100" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="420,95 430,100 420,105" fill={color}/>
    
    <rect x="430" y="70" width="120" height="60" rx="8" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="490" y="105" textAnchor="middle" fill={color} fontWeight="bold">最適化</text>
    
    <path d="M550 100 L610 100" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="610,95 620,100 610,105" fill={color}/>
    
    <rect x="620" y="70" width="120" height="60" rx="8" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="680" y="105" textAnchor="middle" fill={color} fontWeight="bold">結果</text>
  </svg>
);

const CycleDiagram = ({ color }: { color: string }) => (
  <svg className="w-full h-auto max-w-md mx-auto my-8" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="200" r="150" fill={`${color}10`} stroke={color} strokeWidth="2" strokeDasharray="8 8"/>
    
    <circle cx="200" cy="50" r="40" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="200" y="55" textAnchor="middle" fill={color} fontWeight="bold">計画</text>
    
    <circle cx="350" cy="200" r="40" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="350" y="205" textAnchor="middle" fill={color} fontWeight="bold">実行</text>
    
    <circle cx="200" cy="350" r="40" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="200" y="355" textAnchor="middle" fill={color} fontWeight="bold">測定</text>
    
    <circle cx="50" cy="200" r="40" fill={`${color}20`} stroke={color} strokeWidth="2"/>
    <text x="50" y="205" textAnchor="middle" fill={color} fontWeight="bold">改善</text>
    
    <path d="M229 72 L321 172" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="321,172 330,180 315,182" fill={color}/>
    
    <path d="M329 229 L229 321" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="229,321 220,330 217,315" fill={color}/>
    
    <path d="M171 329 L79 229" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="79,229 70,220 85,217" fill={color}/>
    
    <path d="M71 171 L171 79" stroke={color} strokeWidth="2" strokeDasharray="5 5"/>
    <polygon points="171,79 180,70 182,85" fill={color}/>
  </svg>
);

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  
  useEffect(() => {
    const serviceId = parseInt(id || '0');
    const foundService = services.find(s => s.id === serviceId);
    
    if (foundService) {
      setService(foundService);
      // Update page title
      document.title = `${foundService.nameEn} | ${foundService.nameJp} - Enabler`;
      
      // Log service view
      logActivity('serviceView', {
        serviceId: foundService.id,
        serviceName: foundService.nameEn,
        additionalData: {
          rank: foundService.rank,
          marketSize: foundService.marketSize
        }
      });
    } else {
      // Service not found, redirect to services section on home page
      navigate('/#services');
    }
  }, [id, navigate]);
  
  // Handle external link click
  const handleExternalLinkClick = () => {
    if (service) {
      logActivity('externalLink', {
        serviceId: service.id,
        serviceName: service.nameEn,
        additionalData: {
          domain: service.domain
        }
      });
    }
  };
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">読み込み中...</div>
      </div>
    );
  }
  
  const rankColorMap = {
    'S': 'bg-srank text-white',
    'A': 'bg-arank text-white',
    'B': 'bg-brank text-white',
    'C': 'bg-crank text-white',
  };

  const featureIcons = [
    <CheckCircle2 className="w-5 h-5" />,
    <Activity className="w-5 h-5" />,
    <LightbulbIcon className="w-5 h-5" />,
    <Users className="w-5 h-5" />
  ];
  
  const serviceColor = service.color || '#6366f1';

  // Mission and vision from service data or defaults
  const mission = service.mission || "人々の日常をより便利に、より豊かにする革新的なソリューションを提供する";
  const vision = service.vision || "テクノロジーの力で社会課題を解決し、持続可能な未来を創造する";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <MotionBox>
            <button 
              onClick={() => navigate('/#services')}
              className="mb-6 flex items-center text-gray-600 hover:text-enabler-600 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              サービス一覧に戻る
            </button>
          </MotionBox>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <MotionBox delay={100}>
                <ServiceLogo serviceName={service.nameEn} size="lg" className="mb-4" />
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{service.nameEn}</h1>
                <p className="text-xl text-gray-600 mb-6">{service.nameJp}</p>
                
                <div className="mb-8">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${rankColorMap[service.rank]}`}>
                    Rank {service.rank}
                  </span>
                  
                  {service.description && (
                    <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                      <h2 className="text-xl font-bold mb-4">サービス概要</h2>
                      <p className="text-gray-700 leading-relaxed">{service.description}</p>
                    </div>
                  )}
                </div>
              </MotionBox>
              
              {/* デモビデオセクション - 準備中 */}
              <MotionBox delay={130}>
                <div className="bg-white p-6 rounded-xl shadow-subtle mb-8 border border-dashed border-gray-300">
                  <div className="flex items-center mb-4">
                    <PlayCircle className="text-gray-400 mr-3" />
                    <h2 className="text-xl font-bold text-gray-500">サービスデモ動画</h2>
                    <span className="ml-3 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs font-medium rounded">準備中</span>
                  </div>
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <PlayCircle className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 mb-2">サービスデモビデオは現在準備中です</p>
                    <p className="text-gray-400 text-sm">より良いサービス体験のためにコンテンツを作成しています</p>
                  </div>
                </div>
              </MotionBox>
              
              {/* プラン・料金セクション */}
              {service.pricing && service.pricing.length > 0 && (
                <MotionBox delay={170}>
                  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                    <div className="flex items-center mb-8">
                      <DollarSign className="text-enabler-600 mr-3" />
                      <h2 className="text-xl font-bold">プラン・料金</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      {service.pricing.map((plan, index) => (
                        <div key={index} className={`border rounded-lg p-5 relative ${plan.recommended ? 'border-enabler-300 shadow-md' : 'border-gray-200'}`}>
                          {plan.recommended && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-enabler-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                              おすすめ
                            </div>
                          )}
                          <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                          <div className="mb-4">
                            <span className="text-2xl font-bold">{plan.price}</span>
                            <span className="text-gray-500 text-sm">/{plan.period}</span>
                          </div>
                          <ul className="space-y-2 mb-6">
                            {plan.features.map((feature, fidx) => (
                              <li key={fidx} className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-enabler-600 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <button 
                            className={`w-full py-2 rounded-lg font-medium ${
                              plan.recommended 
                                ? 'bg-enabler-600 text-white hover:bg-enabler-700' 
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            } transition-colors`}
                          >
                            {plan.buttonText || 'お申し込み'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionBox>
              )}
              
              {/* デベロッパー・API情報 */}
              {service.apiInfo && (
                <MotionBox delay={220}>
                  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                    <div className="flex items-center mb-6">
                      <Code className="text-enabler-600 mr-3" />
                      <h2 className="text-xl font-bold">開発者向け情報</h2>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-800 mb-2">APIエンドポイント</h3>
                      <div className="bg-gray-50 p-3 rounded-md font-mono text-sm overflow-x-auto">
                        {service.apiInfo.endpoint}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-800 mb-2">概要</h3>
                      <p className="text-gray-700">{service.apiInfo.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-800 mb-2">認証方法</h3>
                      <p className="text-gray-700">{service.apiInfo.authentication}</p>
                    </div>
                    
                    {service.apiInfo.examples && service.apiInfo.examples.length > 0 && (
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3">コード例</h3>
                        <div className="space-y-4">
                          {service.apiInfo.examples.map((example, index) => (
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
                    
                    {service.apiInfo.documentation && (
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <a 
                          href={service.apiInfo.documentation} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-enabler-600 hover:text-enabler-700 font-medium"
                        >
                          詳細なドキュメントを見る <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    )}
                  </div>
                </MotionBox>
              )}
              
              {/* お客様の声 */}
              {service.testimonials && service.testimonials.length > 0 && (
                <MotionBox delay={270}>
                  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                    <div className="flex items-center mb-6">
                      <MessageSquareQuote className="text-enabler-600 mr-3" />
                      <h2 className="text-xl font-bold">お客様の声</h2>
                    </div>
                    
                    <div className="space-y-6">
                      {service.testimonials.map((testimonial, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-5">
                          <div className="flex items-start">
                            <div className="mr-4">
                              {testimonial.avatar ? (
                                <img 
                                  src={testimonial.avatar} 
                                  alt={testimonial.author} 
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                              ) : (
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-gray-500 font-bold">
                                    {testimonial.author.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 mb-3 italic">"{testimonial.content}"</p>
                              
                              <div className="flex flex-wrap items-center justify-between">
                                <div>
                                  <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                                  <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                                </div>
                                
                                {testimonial.rating && (
                                  <div className="flex items-center mt-2 sm:mt-0">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star 
                                        key={i} 
                                        size={16} 
                                        className={i < testimonial.rating! 
                                          ? 'text-amber-400 fill-amber-400' 
                                          : 'text-gray-300'
                                        } 
                                      />
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionBox>
              )}
              
              <MotionBox delay={150}>
                <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                  <div className="flex items-center mb-4">
                    <Compass className="text-enabler-600 mr-3" />
                    <h2 className="text-xl font-bold">ミッション</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic border-l-4 pl-4 py-2" style={{ borderColor: serviceColor }}>
                    "{mission}"
                  </p>
                  
                  <div className="flex items-center mb-4">
                    <Sparkles className="text-enabler-600 mr-3" />
                    <h2 className="text-xl font-bold">ビジョン</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic border-l-4 pl-4 py-2" style={{ borderColor: serviceColor }}>
                    "{vision}"
                  </p>
                </div>
              </MotionBox>
              
              {service.features && service.features.length > 0 && (
                <MotionBox delay={200}>
                  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                    <h2 className="text-xl font-bold mb-6">主な機能</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center mb-3">
                            <div className={`p-2 rounded-full mr-3`} style={{ backgroundColor: `${serviceColor}20`, color: serviceColor }}>
                              {featureIcons[index % featureIcons.length]}
                            </div>
                            <h3 className="font-bold text-gray-800">{feature.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionBox>
              )}
              
              {service.useCases && service.useCases.length > 0 && (
                <MotionBox delay={250}>
                  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                    <h2 className="text-xl font-bold mb-6">活用事例</h2>
                    <div className="space-y-4">
                      {service.useCases.map((useCase, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-5">
                          <h3 className="font-bold text-gray-800 mb-2">{useCase.title}</h3>
                          <p className="text-gray-600 mb-3">{useCase.description}</p>
                          {useCase.result && (
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <span className="text-sm font-medium text-gray-500">結果:</span>
                              <p className="text-gray-700">{useCase.result}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionBox>
              )}

              {service.uniquePoints && service.uniquePoints.length > 0 && (
                <MotionBox delay={280}>
                  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                    <div className="flex items-center mb-6">
                      <MessageCircleHeart className="text-enabler-600 mr-3" />
                      <h2 className="text-xl font-bold">他にはない特徴</h2>
                    </div>
                    <div className="space-y-4">
                      {service.uniquePoints.map((point, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-enabler-100 p-2 rounded-full mr-4 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-enabler-700" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800">{point.title}</h3>
                            <p className="text-gray-700">{point.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionBox>
              )}
              
              <MotionBox delay={300}>
                <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                  <h2 className="text-xl font-bold mb-6">サービスの流れ</h2>
                  <ProcessDiagram color={serviceColor} />
                  <div className="grid md:grid-cols-4 gap-4 text-center text-sm mt-4">
                    <div>
                      <h3 className="font-bold" style={{ color: serviceColor }}>データ収集</h3>
                      <p className="text-gray-600">ユーザーデータを安全に収集</p>
                    </div>
                    <div>
                      <h3 className="font-bold" style={{ color: serviceColor }}>AI分析</h3>
                      <p className="text-gray-600">高度なアルゴリズムで解析</p>
                    </div>
                    <div>
                      <h3 className="font-bold" style={{ color: serviceColor }}>パーソナライズ</h3>
                      <p className="text-gray-600">個別最適化された提案</p>
                    </div>
                    <div>
                      <h3 className="font-bold" style={{ color: serviceColor }}>価値提供</h3>
                      <p className="text-gray-600">具体的な成果を実現</p>
                    </div>
                  </div>
                </div>
              </MotionBox>
              
              <MotionBox delay={350}>
                <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                  <h2 className="text-xl font-bold mb-6">継続的改善サイクル</h2>
                  <CycleDiagram color={serviceColor} />
                  <p className="text-center text-gray-600 mt-4">
                    {service.nameEn}は継続的な改善を重視しています。ユーザーフィードバックを元に<br />
                    サービスの品質向上と新機能の開発を行い、常に最高の体験を提供します。
                  </p>
                </div>
              </MotionBox>
              
              <MotionBox delay={400}>
                <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
                  <h2 className="text-xl font-bold mb-4">よくある質問</h2>
                  <div className="space-y-6">
                    {service.faqs && service.faqs.length > 0 ? (
                      service.faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                          <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="border-b border-gray-100 pb-4">
                          <h3 className="font-bold text-gray-800 mb-2">このサービスはどんな人向けですか？</h3>
                          <p className="text-gray-700">{service.nameEn}は{service.targetAudience || '新しい体験や効率化を求めるすべての方'}を対象としています。特に{service.specificAudience || '時間や労力を節約したい方、質の高いサービスを求める方'}におすすめです。</p>
                        </div>
                        <div className="border-b border-gray-100 pb-4">
                          <h3 className="font-bold text-gray-800 mb-2">利用開始までどのくらいの時間がかかりますか？</h3>
                          <p className="text-gray-700">サインアップから数分で利用開始できます。必要な情報を入力するだけで、すぐにサービスのすべての機能をお使いいただけます。</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">無料トライアルはありますか？</h3>
                          <p className="text-gray-700">はい、14日間の無料トライアルをご用意しています。クレジットカード情報なしで、すべての機能をお試しいただけます。</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </MotionBox>
              
              <MotionBox delay={450}>
                <div className="bg-white p-6 rounded-xl shadow-subtle">
                  <h2 className="text-xl font-bold mb-4">開発ロードマップ</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-enabler-100 p-2 rounded-full mr-4">
                        <CalendarClock className="w-5 h-5 text-enabler-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">短期目標</h3>
                        <p className="text-gray-700">{service.goal}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-enabler-100 p-2 rounded-full mr-4">
                        <Target className="w-5 h-5 text-enabler-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">中期目標</h3>
                        <p className="text-gray-700">{service.midtermGoal || '市場シェアの拡大とユーザー基盤の確立'}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-enabler-100 p-2 rounded-full mr-4">
                        <BarChart3 className="w-5 h-5 text-enabler-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">長期目標</h3>
                        <p className="text-gray-700">{service.longtermGoal || '業界リーダーとしての地位確立と海外展開'}</p>
                      </div>
                    </div>

                    {service.catchphrase && (
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <p className="text-lg font-medium text-center italic" style={{ color: serviceColor }}>
                          "{service.catchphrase}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </MotionBox>
            </div>
            
            <div>
              <MotionBox delay={150}>
                <div className="bg-white p-6 rounded-xl shadow-subtle sticky top-24">
                  <h2 className="text-xl font-bold mb-4">サービス情報</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">サービス名</h3>
                      <p className="font-bold">{service.nameEn}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">日本語名</h3>
                      <p>{service.nameJp}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">ランク</h3>
                      <p className="font-bold">Rank {service.rank}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">市場規模</h3>
                      <p>{service.marketSize}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">目標</h3>
                      <p>{service.goal}</p>
                    </div>
                    
                    {service.launchDate && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">リリース予定</h3>
                        <p>{service.launchDate}</p>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">ドメイン</h3>
                      <a 
                        href={`https://${service.domain}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-enabler-600 hover:text-enabler-700 inline-flex items-center gap-1 transition-colors"
                      >
                        {service.domain} <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href={`https://${service.domain}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={handleExternalLinkClick}
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-enabler-600 text-white font-medium transition-all duration-200 hover:bg-enabler-700 shadow-md hover:shadow-lg"
                    >
                      サービスサイトを見る <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>

                  {service.quote && (
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <p className="text-sm italic text-gray-600">"{service.quote}"</p>
                      {service.quoteAuthor && (
                        <p className="text-xs text-right text-gray-500 mt-1">— {service.quoteAuthor}</p>
                      )}
                    </div>
                  )}
                </div>
              </MotionBox>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
