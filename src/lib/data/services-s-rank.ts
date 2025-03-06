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
  },
  {
    id: 4,
    rank: 'S',
    nameEn: 'StayFlow',
    nameJp: 'ステイフロー - 民泊運営管理',
    marketSize: '約3兆円規模',
    domain: 'stayflow.io',
    goal: '登録ホスト数100件、管理物件数300件達成',
    description: '民泊ホスト向けの総合運営管理プラットフォーム。予約管理、清掃管理、ゲスト対応などを一元化し、業務効率化を実現します。',
    features: [
      {
        title: '予約一元管理',
        description: 'Airbnbなど複数サイトの予約を一括管理。スケジュール調整も自動化。'
      },
      {
        title: '清掃管理システム',
        description: 'チェックアウト後の清掃予約を自動で手配。品質チェックも徹底。'
      },
      {
        title: 'ゲスト対応機能',
        description: '多言語対応のチャットボットで24時間自動応答。緊急時は専門スタッフが対応。'
      },
      {
        title: '収支分析',
        description: '物件ごとの収支状況、稼働率、顧客満足度などを分析し改善提案。'
      }
    ],
    color: '#2196f3',
    pricing: [
      {
        name: "ライトプラン",
        price: "¥19,800",
        period: "月",
        features: [
          "3物件まで登録可能",
          "予約管理基本機能",
          "清掃スケジュール管理",
          "基本的なゲスト対応機能"
        ]
      },
      {
        name: "スタンダードプラン",
        price: "¥39,800",
        period: "月",
        features: [
          "10物件まで登録可能",
          "予約一元管理（複数サイト対応）",
          "清掃サービス連携",
          "AIチャットボット対応",
          "収支レポート機能",
          "24時間サポート"
        ],
        recommended: true
      },
      {
        name: "プロフェッショナル",
        price: "¥99,800",
        period: "月",
        features: [
          "物件数無制限",
          "カスタムAPI連携",
          "専属アカウントマネージャー",
          "収益最適化AI",
          "完全自動化運用",
          "ブランドカスタマイズ"
        ]
      }
    ],
    testimonials: [
      {
        author: "鈴木 健一",
        position: "民泊オーナー",
        company: "Tokyo Stay Properties",
        content: "StayFlowの導入で運営の手間が劇的に減りました。特に清掃管理の自動化は素晴らしく、ゲストからの評価も上がっています。",
        rating: 5
      },
      {
        author: "田中 美咲",
        position: "運営管理者",
        company: "Osaka Guest Houses",
        content: "複数サイトの予約を一元管理できる点が非常に便利です。収支分析機能も経営の改善に役立っています。",
        rating: 5
      }
    ]
  },
  {
    id: 5,
    rank: 'S',
    nameEn: 'TimeDrop',
    nameJp: 'タイムドロップ - 当日予約特化型',
    marketSize: '約2兆円規模',
    domain: 'timedrop.io',
    goal: '登録施設200件、アプリDL5,000件達成',
    description: '空室を特別価格で提供する当日予約に特化したサービス。宿泊施設の稼働率向上とユーザーの賢い宿泊を実現します。',
    features: [
      {
        title: 'ダイナミックプライシング',
        description: '需要と供給に応じて最適な価格を自動設定。最大限の収益を実現。'
      },
      {
        title: 'スピード予約',
        description: '3タップで予約完了。直感的なUIで迷わず予約可能。'
      },
      {
        title: 'プッシュ通知',
        description: '希望エリアの空室情報をリアルタイムでお知らせ。'
      },
      {
        title: 'ポイント還元',
        description: '予約金額の最大10%をポイントで還元。リピート促進。'
      }
    ],
    color: '#ff5722',
    pricing: [
      {
        name: "施設向けライト",
        price: "¥9,800",
        period: "月",
        features: [
          "在庫登録5室まで",
          "基本的な予約管理",
          "自動価格調整",
          "基本的な分析レポート"
        ]
      },
      {
        name: "施設向けスタンダード",
        price: "¥29,800",
        period: "月",
        features: [
          "在庫登録無制限",
          "高度な価格最適化",
          "競合分析レポート",
          "優先表示枠の利用",
          "24時間サポート"
        ],
        recommended: true
      },
      {
        name: "施設向けプレミアム",
        price: "¥79,800",
        period: "月",
        features: [
          "完全自動運用",
          "カスタムAPI連携",
          "専属サポート",
          "ブランドページ作成",
          "収益保証プラン"
        ]
      }
    ],
    testimonials: [
      {
        author: "山田 直樹",
        position: "ホテル支配人",
        company: "グランドホテル東京",
        content: "TimeDropのおかげで空室を効率的に埋められるようになりました。収益化できなかった在庫が売上に貢献しています。",
        rating: 5
      },
      {
        author: "佐藤 美樹",
        position: "マーケティング部長",
        company: "ホテルチェーンX",
        content: "ダイナミックプライシングの精度が素晴らしく、価格決定の手間が大幅に削減されました。導入して本当に良かったです。",
        rating: 5
      }
    ],
    useCases: [
      {
        title: "都市部ビジネスホテルでの活用",
        description: "平日の稼働率向上を目指すビジネスホテル",
        result: "当日予約による稼働率が15%向上、収益が前年比20%増加"
      },
      {
        title: "リゾートホテルでの活用",
        description: "オフシーズンの集客に悩むリゾートホテル",
        result: "オフシーズン期間の予約数が30%増加、新規顧客の獲得に成功"
      }
    ]
  }
];
