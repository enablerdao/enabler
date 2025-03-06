
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
    color: '#795548',
    pricing: [
      {
        name: "スタータープラン",
        price: "¥9,800",
        period: "月",
        features: [
          "予約管理システム",
          "会員管理 (最大50人)",
          "基本的な請求管理",
          "道場スケジュール管理"
        ],
        buttonText: "お試し利用する"
      },
      {
        name: "スタンダードプラン",
        price: "¥19,800",
        period: "月",
        features: [
          "予約管理システム",
          "会員管理 (最大200人)",
          "請求・支払い管理",
          "稽古進捗管理",
          "大会スケジュール管理",
          "メール通知機能"
        ],
        recommended: true,
        buttonText: "お申し込みはこちら"
      },
      {
        name: "プロフェッショナル",
        price: "¥39,800",
        period: "月",
        features: [
          "予約管理システム",
          "会員管理 (無制限)",
          "請求・支払い管理",
          "稽古進捗管理",
          "大会スケジュール管理",
          "複数道場管理",
          "カスタムレポート",
          "API連携"
        ],
        buttonText: "お問い合わせ"
      }
    ],
    apiInfo: {
      endpoint: "https://api.dojoflow.io/v1",
      description: "DojoFlowのAPIを使用して、あなたのシステムと連携し、道場管理を自動化することができます。会員、予約、支払い、スケジュールなどのデータにアクセス可能です。",
      authentication: "APIキー認証を使用します。ダッシュボードから発行したAPIキーをHeader「X-API-Key」に設定してリクエストを行ってください。",
      examples: [
        {
          language: "JavaScript",
          code: `fetch('https://api.dojoflow.io/v1/members', {\n  headers: {\n    'X-API-Key': 'your_api_key_here'\n  }\n})\n.then(response => response.json())\n.then(data => console.log(data));`,
          description: "会員リスト取得例"
        },
        {
          language: "Python",
          code: `import requests\n\nheaders = {\n    'X-API-Key': 'your_api_key_here'\n}\n\nresponse = requests.get('https://api.dojoflow.io/v1/schedules', headers=headers)\ndata = response.json()\nprint(data)`,
          description: "スケジュール取得例"
        }
      ],
      documentation: "https://docs.dojoflow.io"
    },
    testimonials: [
      {
        author: "田中 勇気",
        position: "館長",
        company: "正道館",
        content: "DojoFlowを導入してから、事務作業の時間が半減しました。予約システムが特に便利で、新規会員獲得にも役立っています。",
        rating: 5
      },
      {
        author: "佐藤 誠",
        position: "指導員",
        company: "誠心流",
        content: "会員の進捗管理機能が素晴らしいです。以前は紙で管理していましたが、今はタブレット一つで簡単に確認できます。",
        rating: 4
      }
    ]
  }
];
