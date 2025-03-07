
import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '@/lib/data';
import { MotionBox } from './ui/motion-box';
import { ExternalLink, ArrowRight, Star, Edit, Loader, Clock, Bot, Activity, Heart, MessageSquareText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { logActivity } from '@/lib/logger';
import ServiceLogo from './ServiceLogo';
import { motion } from 'framer-motion';
import { fibonacciFloatVariants, pulseVariants } from './simple-illustration/animation-variants';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const rankColorMap = {
  'S': 'bg-srank/10',
  'A': 'bg-arank/10',
  'B': 'bg-brank/10',
  'C': 'bg-crank/10',
};

const rankTextColorMap = {
  'S': 'text-srank',
  'A': 'text-arank',
  'B': 'text-brank',
  'C': 'text-crank',
};

const rankBorderMap = {
  'S': 'border-srank/20',
  'A': 'border-arank/20',
  'B': 'border-brank/20',
  'C': 'border-crank/20',
};

const serviceEditLinks = {
  'PetPals': 'https://lovable.dev/projects/0e180acf-b16f-4575-bade-365eb8474690',
  'TaskTrust': 'https://lovable.dev/projects/10977e27-7b88-4bb8-8066-fae0ab704715',
  'MatchSense': 'https://lovable.dev/projects/1af4d4cb-7101-45cf-b4a0-affd18aa1e0a',
  'TasteFund': 'https://lovable.dev/projects/6eb4455a-e9da-4f39-b6a9-ff5deb8b4565',
  'StayLife': 'https://lovable.dev/projects/ec89a15a-f2db-4c9a-a8f5-bf77d8c8c11f'
};

// Generate a pseudo-random progress value based on service id for demo
const getServiceProgress = (serviceId: number) => {
  return (serviceId * 17) % 100;
};

// Generate a pseudo-random ETA based on service id for demo
const getServiceETA = (serviceId: number) => {
  const options = [
    '10時間後', '1日後', '2日後', '3日後', '明日の午前中', '今週末', '来週月曜日'
  ];
  return options[serviceId % options.length];
};

// Generate AI activity status for each service
const getAIActivityStatus = (serviceId: number) => {
  const activities = [
    'コード生成中', 'データ分析中', '最適化中', 'テスト実行中', 'デプロイ準備中', 'ストーリー構築中', '人の想いをつなぐ中'
  ];
  return activities[serviceId % activities.length];
};

// Generate a task list for each service
const getServiceTasks = (serviceId: number) => {
  const baseTasks = [
    { done: true, text: 'ユーザー認証システム' },
    { done: true, text: 'API設計' },
    { done: serviceId % 2 === 0, text: 'データベース統合' },
    { done: serviceId % 3 === 0, text: 'フロントエンド開発' },
    { done: false, text: 'テスト自動化' },
    { done: false, text: '本番環境デプロイ' },
    { done: false, text: 'ストーリー要素追加' },
    { done: false, text: '心を動かす体験の実装' }
  ];
  
  return baseTasks.slice(0, 3 + (serviceId % 4));
};

// Generate a story element for service
const getServiceStory = (serviceId: number) => {
  const stories = [
    "利用者の時間を大切にする物語",
    "人と人をつなぐ温かい体験",
    "心が動く出会いを創出",
    "小さな手間をなくす技術",
    "誰かの物語を豊かにする",
    "日常に心のゆとりを届ける"
  ];
  
  return stories[serviceId % stories.length];
};

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const delayBase = 100;
  const staggerDelay = index * 50;
  
  const handleExternalLinkClick = () => {
    logActivity('externalLink', {
      serviceId: service.id,
      serviceName: service.nameEn,
      additionalData: {
        location: 'service-card',
        domain: service.domain
      }
    });
  };
  
  const handleCardClick = () => {
    logActivity('serviceCardClick', {
      serviceId: service.id,
      serviceName: service.nameEn
    });
  };

  const hasEditLink = serviceEditLinks[service.nameEn as keyof typeof serviceEditLinks];
  
  // Get service-specific data for the demo
  const progress = getServiceProgress(service.id);
  const eta = getServiceETA(service.id);
  const aiActivity = getAIActivityStatus(service.id);
  const tasks = getServiceTasks(service.id);
  const storyElement = getServiceStory(service.id);
  
  return (
    <MotionBox 
      delay={delayBase + staggerDelay}
      className="h-full"
    >
      <div 
        className={cn(
          "h-full p-6 rounded-xl border bg-white shadow-subtle hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1",
          `rank-${service.rank.toLowerCase()}`,
          rankBorderMap[service.rank]
        )}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <ServiceLogo serviceName={service.nameEn} size="sm" />
            {service.emoji && (
              <span className="text-xl ml-2" role="img" aria-label={service.nameEn}>
                {service.emoji}
              </span>
            )}
          </div>
          <span className={cn(
            "inline-block px-2.5 py-1 rounded-full text-xs font-bold", 
            rankColorMap[service.rank],
            rankTextColorMap[service.rank]
          )}>
            Rank {service.rank}
          </span>
        </div>
        
        <Link to={`/service/${service.id}`} onClick={handleCardClick}>
          <h3 className="text-lg font-bold mb-1 group-hover:text-enabler-600 transition-colors mt-3">{service.nameEn}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3">{service.nameJp}</p>
        
        {/* Story Element Badge */}
        <div className="mb-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-enabler-50 border border-enabler-100">
            <Heart className="w-3 h-3 text-enabler-500 mr-1" />
            <span className="text-xs text-enabler-600">{storyElement}</span>
          </div>
        </div>
        
        {/* AI Progress Indicator */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <div className="text-xs text-gray-600 flex items-center">
              <motion.div
                animate={{
                  rotate: 360,
                  transition: { duration: 2, repeat: Infinity, ease: "linear" }
                }}
              >
                <Bot size={12} className="mr-1" />
              </motion.div>
              <span>{aiActivity}</span>
            </div>
            <span className="text-xs font-medium text-enabler-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <motion.div 
              className={cn("h-1.5 rounded-full", progress > 80 ? "bg-green-500" : progress > 40 ? "bg-amber-500" : "bg-enabler-500")}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>
        
        {/* Next Release ETA */}
        <div className="flex items-center mb-4 bg-gray-50 rounded-md p-2 border border-gray-100">
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="text-enabler-500 mr-2"
          >
            <Clock size={14} />
          </motion.div>
          <div>
            <p className="text-xs text-gray-500">次のリリース:</p>
            <p className="text-sm font-medium">{eta}</p>
          </div>
        </div>
        
        {service.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        )}
        
        {/* AI-Generated Task Progress */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              <Activity size={14} className="text-enabler-600 mr-1" />
            </motion.div>
            <span className="text-xs font-medium">開発タスク</span>
          </div>
          <ul className="space-y-1 text-xs">
            {tasks.map((task, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex items-center"
              >
                <span className={cn(
                  "w-3 h-3 rounded-full mr-2 flex-shrink-0",
                  task.done ? "bg-green-500" : "bg-gray-200"
                )}></span>
                <span className={task.done ? "line-through text-gray-400" : "text-gray-600"}>
                  {task.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Story element hint */}
        <div className="mb-4 italic text-sm text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-100 flex items-start">
          <MessageSquareText size={14} className="text-enabler-400 mr-2 mt-0.5 flex-shrink-0" />
          <span>"{service.catchphrase || '欲しいモノの先には、誰かの物語があります'}"</span>
        </div>
        
        {service.features && (
          <div className="flex flex-wrap gap-2 mb-4">
            {service.features.slice(0, 2).map((feature) => (
              <span key={feature.title} className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                <Star size={10} className="mr-1" /> {feature.title}
              </span>
            ))}
            {service.features.length > 2 && (
              <span className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                +{service.features.length - 2}
              </span>
            )}
          </div>
        )}
        
        <div className="flex flex-wrap justify-between items-end mt-auto pt-3 border-t border-gray-100">
          <a 
            href={`https://${service.domain}`} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleExternalLinkClick}
            className="text-sm text-enabler-600 hover:text-enabler-700 inline-flex items-center gap-1 transition-colors"
          >
            {service.domain} <ExternalLink size={14} />
          </a>
          <span className="text-xs text-gray-500 mt-2">目標: {service.goal}</span>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <Link 
            to={`/service/${service.id}`}
            onClick={handleCardClick}
            className="inline-flex items-center text-sm text-enabler-600 hover:text-enabler-700 font-medium transition-colors"
          >
            詳細を見る <ArrowRight size={16} className="ml-1" />
          </Link>
          
          {hasEditLink && (
            <a 
              href={hasEditLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              編集ツール <Edit size={16} className="ml-1" />
            </a>
          )}
        </div>
        
        {/* Floating AI indicator */}
        <motion.div 
          className="absolute top-5 right-6 text-xs text-enabler-500 flex items-center"
          variants={fibonacciFloatVariants}
          animate="float"
          custom={service.id % 5}
        >
          <Loader size={12} className="animate-spin mr-1" />
          <span className="opacity-75">AI</span>
        </motion.div>
      </div>
    </MotionBox>
  );
};

export default ServiceCard;
