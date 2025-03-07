
import { Service } from '@/lib/data';

export const rankColorMap = {
  'S': 'bg-srank/10',
  'A': 'bg-arank/10',
  'B': 'bg-brank/10',
  'C': 'bg-crank/10',
};

export const rankTextColorMap = {
  'S': 'text-srank',
  'A': 'text-arank',
  'B': 'text-brank',
  'C': 'text-crank',
};

export const rankBorderMap = {
  'S': 'border-srank/20',
  'A': 'border-arank/20',
  'B': 'border-brank/20',
  'C': 'border-crank/20',
};

export const serviceEditLinks = {
  'PetPals': 'https://lovable.dev/projects/0e180acf-b16f-4575-bade-365eb8474690',
  'TaskTrust': 'https://lovable.dev/projects/10977e27-7b88-4bb8-8066-fae0ab704715',
  'MatchSense': 'https://lovable.dev/projects/1af4d4cb-7101-45cf-b4a0-affd18aa1e0a',
  'TasteFund': 'https://lovable.dev/projects/6eb4455a-e9da-4f39-b6a9-ff5deb8b4565',
  'StayLife': 'https://lovable.dev/projects/ec89a15a-f2db-4c9a-a8f5-bf77d8c8c11f'
};

export const getServiceProgress = (serviceId: number) => {
  return (serviceId * 17) % 100;
};

export const getServiceETA = (serviceId: number) => {
  const options = [
    '10時間後', '1日後', '2日後', '3日後', '明日の午前中', '今週末', '来週月曜日'
  ];
  return options[serviceId % options.length];
};

export const getAIActivityStatus = (serviceId: number) => {
  const activities = [
    'コード生成中', 'データ分析中', '最適化中', 'テスト実行中', 'デプロイ準備中'
  ];
  return activities[serviceId % activities.length];
};

export const getServiceTasks = (serviceId: number) => {
  const baseTasks = [
    { done: true, text: 'ユーザー認証システム' },
    { done: true, text: 'API設計' },
    { done: serviceId % 2 === 0, text: 'データベース統合' },
    { done: serviceId % 3 === 0, text: 'フロントエンド開発' },
    { done: false, text: 'テスト自動化' },
    { done: false, text: '本番環境デプロイ' }
  ];
  
  return baseTasks.slice(0, 3 + (serviceId % 3));
};
