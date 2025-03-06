
import { Service } from '../types/service';

export const cRankServices: Service[] = [
  {
    id: 16,
    rank: 'C',
    nameEn: 'DojoFlow',
    nameJp: '道場フロー - 道場管理',
    marketSize: '約500億円規模',
    domain: 'dojoflow.io',
    goal: '新規道場導入数5件',
    description: '武道道場のための予約・会員・請求管理システム。トレーニングの進捗管理や大会スケジュールも管理可能。',
    features: [
      { 
        title: '道場一覧',
        description: '道場をカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      {
        title: '道場検索',
        description: 'キーワードで道場を検索し、最適な道場を見つけることができます。'
      },
      {
        title: '道場予約',
        description: '道場を予約するための機能。予約者と道場オーナー双方で価値を共有できます。'
      },
      {
        title: '道場評価',
        description: '道場の評価機能。道場の品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#795548'
  }
];
