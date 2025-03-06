import { Service } from '../types/service';

export const cRankServices: Service[] = [
  {
    id: 16,
    rank: 'C',
    nameEn: 'DojoFlow',
    nameJp: '道場フロー - 道場管理',
    marketSize: '約500億円規模',
    domain: 'dojoflowapp.com',
    goal: '3ヶ月以内に新規道場導入10件を達成',
    description: '武道道場の運営を圧倒的に効率化するクラウド型管理プラットフォームです。予約管理、会員データの一元管理、請求処理からトレーニングの進捗状況や大会スケジュールの管理まで、あらゆる業務をデジタル化し、指導者やスタッフが本来の指導や生徒の育成に集中できる環境を実現します。',
    features: [
      {
        title: '統合予約システム',
        description: '簡単な操作で予約受付・管理を自動化し、道場運営の負担を削減。'
      },
      {
        title: '会員情報管理',
        description: '会員の登録情報、出欠、月謝管理を一元化し、タブレットやスマートフォンからリアルタイムでアクセス。'
      },
      {
        title: '請求・支払い自動化',
        description: '月謝やイベント参加費の請求、支払い状況の管理を一括処理し、キャッシュフローを安定化。'
      },
      {
        title: 'トレーニング進捗管理',
        description: '生徒ごとのスキルや昇級状況を可視化し、指導の質を向上。'
      },
      {
        title: '大会・イベントスケジュール管理',
        description: '大会やイベント情報を一元化し、会員との円滑な情報共有を実現。'
      }
    ],
    color: '#795548',
    mission: 'テクノロジーの力で道場運営の課題を解決し、武道の本質に集中できる環境を創造する',
    vision: '世界中の道場をつなぎ、デジタル化を通じて武道文化の継承と発展を支援するリーディングプラットフォームを目指す',
    midtermGoal: '全国の主要都市を中心に道場コミュニティを構築し、国内トップの管理プラットフォームへ成長',
    longtermGoal: '世界的な武道コミュニティの管理プラットフォームとして、国際的なリーダーシップを確立する',
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
