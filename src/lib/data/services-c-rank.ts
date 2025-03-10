
import { Service } from '../types/service';

export const cRankServices: Service[] = [
  {
    id: 16,
    rank: 'C',
    nameEn: 'DojoFlow',
    nameJp: '道場フロー - 道場管理',
    marketSize: '約500億円規模',
    domain: 'dojoflowapp.com',
    goal: '新規道場導入数5件',
    description: '武道道場のための予約・会員・請求管理システム。トレーニングの進捗管理や大会スケジュールも管理可能。伝統的な武道の価値を守りながら、最新のテクノロジーで道場運営を効率化します。',
    mission: '武道の伝統と価値を守りながら、道場運営の効率化と現代化をサポートする',
    vision: '伝統武道が現代社会でも持続的に発展し、多くの人に価値を届けられる環境を創る',
    catchphrase: '伝統を守り、未来へつなぐ、道場運営の新時代。',
    features: [
      { 
        title: '会員管理システム',
        description: '会員情報、出席記録、帯・段位の管理を一元化。会費の自動請求や更新通知で事務作業を大幅に削減できます。'
      },
      {
        title: '稽古進捗管理',
        description: '生徒ごとの技術習得状況や昇級・昇段の進捗を視覚的に管理。指導計画の最適化に役立ちます。'
      },
      {
        title: '予約・スケジュール管理',
        description: '稽古や特別講習会のスケジュール管理と予約システム。生徒はアプリから簡単に予約・キャンセルができます。'
      },
      {
        title: '大会・イベント管理',
        description: '大会情報の共有、参加者管理、結果記録を一元化。過去の成績データも蓄積して分析できます。'
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
      endpoint: "https://api.dojoflowapp.com/v1",
      description: "DojoFlowのAPIを使用して、あなたのシステムと連携し、道場管理を自動化することができます。会員、予約、支払い、スケジュールなどのデータにアクセス可能です。",
      authentication: "APIキー認証を使用します。ダッシュボードから発行したAPIキーをHeader「X-API-Key」に設定してリクエストを行ってください。",
      examples: [
        {
          language: "JavaScript",
          code: `fetch('https://api.dojoflowapp.com/v1/members', {\n  headers: {\n    'X-API-Key': 'your_api_key_here'\n  }\n})\n.then(response => response.json())\n.then(data => console.log(data));`,
          description: "会員リスト取得例"
        },
        {
          language: "Python",
          code: `import requests\n\nheaders = {\n    'X-API-Key': 'your_api_key_here'\n}\n\nresponse = requests.get('https://api.dojoflowapp.com/v1/schedules', headers=headers)\ndata = response.json()\nprint(data)`,
          description: "スケジュール取得例"
        }
      ],
      documentation: "https://docs.dojoflowapp.com"
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
