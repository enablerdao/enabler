
import { Service } from '../types/service';

export const sRankServices: Service[] = [
  {
    id: 1,
    rank: 'S',
    nameEn: 'PetPals',
    nameJp: 'ペットパルズ - ペットコミュニティ',
    marketSize: '約1000億円',
    domain: 'petpals.io',
    goal: 'アクティブユーザー数1万人',
    description: 'ペット愛好家向けのSNSプラットフォーム。写真共有、イベント情報、専門家アドバイスを提供。',
    features: [
      {
        title: '写真共有',
        description: 'ペットの写真を共有し、他のユーザーと交流できます。'
      },
      {
        title: 'イベント情報',
        description: '地域のペットイベント情報を提供します。'
      },
      {
        title: '専門家アドバイス',
        description: '獣医やトレーナーからの専門的なアドバイスを受けられます。'
      },
      {
        title: 'コミュニティ',
        description: '共通の興味を持つユーザー同士が交流できるコミュニティ機能。'
      }
    ],
    color: '#673ab7'
  },
  {
    id: 2,
    rank: 'S',
    nameEn: 'TaskTrust',
    nameJp: 'タスクトラスト - AIタスク管理',
    marketSize: '約3000億円',
    domain: 'tasktrust.ai',
    goal: '有料プラン契約数500件',
    description: 'AIを活用したタスク管理ツール。タスクの優先順位付け、自動スケジューリング、進捗管理を効率化。',
    features: [
      {
        title: 'タスク優先順位付け',
        description: 'AIがタスクの重要度を判断し、優先順位を自動で設定します。'
      },
      {
        title: '自動スケジューリング',
        description: 'タスクの締め切りと所要時間に基づいて、最適なスケジュールを自動で作成します。'
      },
      {
        title: '進捗管理',
        description: 'タスクの進捗状況をリアルタイムで追跡し、遅延を自動で通知します。'
      },
      {
        title: 'チームコラボレーション',
        description: 'チームメンバーとタスクを共有し、共同で作業を進めることができます。'
      }
    ],
    color: '#009688'
  },
  {
    id: 3,
    rank: 'S',
    nameEn: 'Kireasy',
    nameJp: 'キリージー - 清掃マッチング',
    marketSize: '約2兆円規模',
    domain: 'kireasy.io',
    goal: '登録スタッフ数500人突破、初年度清掃実績5,000件以上',
    description: '民泊や宿泊施設のオーナーとプロの清掃スタッフを効率よくつなぐAIマッチングプラットフォーム。清掃スケジュール管理、スタッフ評価システム、自動決済などを搭載し、清掃にかかる手間とコストを大幅に削減します。',
    catchphrase: 'キレイをもっと簡単に。',
    features: [
      {
        title: 'AIマッチング',
        description: 'エリア、スキル、レビューに基づいて最適な清掃スタッフを瞬時にマッチング。'
      },
      {
        title: 'リアルタイム管理',
        description: '予約と連動した清掃スケジュールを完全自動化。'
      },
      {
        title: '品質保証制度',
        description: 'スタッフ評価・レビューにより品質を担保。'
      },
      {
        title: 'シームレス決済',
        description: '面倒なやり取りを無くし、スムーズな決済処理。'
      }
    ],
    color: '#4CAF50',
    mission: '清掃業界のデジタル化を推進し、より効率的で透明性の高いサービスを提供する',
    vision: 'テクノロジーの力で清掃業界に革新をもたらし、すべての人により良い環境を提供する',
    targetAudience: '民泊オーナー、ホテル運営者、清掃事業者',
    specificAudience: '清掃業務の効率化と品質向上を目指す施設運営者',
    midtermGoal: '全国主要都市でのサービス展開と清掃スタッフネットワークの確立',
    longtermGoal: 'アジア展開を視野に入れたグローバルプラットフォームへの成長',
    pricing: [
      {
        name: "ライトプラン",
        price: "¥9,800",
        period: "月",
        features: [
          "AIマッチング（月5件まで）",
          "スケジュール管理",
          "基本的な評価システム",
          "決済機能（手数料3%）"
        ]
      },
      {
        name: "スタンダードプラン",
        price: "¥29,800",
        period: "月",
        features: [
          "AIマッチング（月20件まで）",
          "高度なスケジュール最適化",
          "詳細な評価システム",
          "決済機能（手数料2%）",
          "レポート機能",
          "優先サポート"
        ],
        recommended: true
      },
      {
        name: "プロフェッショナル",
        price: "¥79,800",
        period: "月",
        features: [
          "AIマッチング（無制限）",
          "AI清掃品質分析",
          "カスタムワークフロー",
          "決済機能（手数料1%）",
          "API連携",
          "専属サポート"
        ]
      }
    ],
    testimonials: [
      {
        author: "山田 真子",
        position: "運営責任者",
        company: "Sparkle Hotels",
        content: "Kireasyの導入により、清掃スタッフの手配から決済まで、すべてが自動化されました。スタッフの質も高く、お客様からの評価も上がっています。",
        rating: 5
      },
      {
        author: "佐藤 健一",
        position: "オーナー",
        company: "Tokyo Stay Properties",
        content: "以前は清掃スタッフの管理に多くの時間を費やしていましたが、Kireasyのおかげで運営が格段に楽になりました。特にAIマッチング機能は素晴らしいです。",
        rating: 5
      }
    ],
    useCases: [
      {
        title: "大手ホテルチェーンでの導入事例",
        description: "50室以上の大規模ホテルでの清掃スタッフ管理と品質維持",
        result: "清掃業務の効率が30%向上し、顧客満足度が20%上昇"
      },
      {
        title: "民泊複数物件オーナーの活用例",
        description: "10件の物件を所有するオーナーによる清掃スケジュール管理",
        result: "人件費を25%削減し、清掃品質の一貫性を実現"
      }
    ],
    uniquePoints: [
      {
        title: "AI清掃品質スコアリング",
        description: "写真認識技術を用いた清掃品質の数値化と改善提案"
      },
      {
        title: "スマートスケジューリング",
        description: "予約状況と連動した最適な清掃タイミングの自動提案"
      },
      {
        title: "リアルタイムモニタリング",
        description: "清掃進捗のリアルタイム確認と即時フィードバック機能"
      }
    ],
    faqs: [
      {
        question: "スタッフの品質はどのように担保されていますか？",
        answer: "事前研修とレビュー制度を組み合わせ、一定基準以上のスタッフのみを紹介しています。また、AI分析による品質モニタリングも実施しています。"
      },
      {
        question: "急な予約変更にも対応できますか？",
        answer: "はい、AIマッチングシステムにより、最短30分前までのスケジュール調整が可能です。また、緊急時の代替スタッフ手配も自動で行います。"
      },
      {
        question: "導入にあたっての初期費用はかかりますか？",
        answer: "初期費用は不要です。月額プランの料金のみでご利用いただけます。また、最初の1ヶ月は無料でお試しいただけます。"
      }
    ]
  }
];
