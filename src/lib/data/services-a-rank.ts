
import { Service } from '../types/service';

export const aRankServices: Service[] = [
  {
    id: 4,
    rank: 'A',
    nameEn: 'Skillity',
    nameJp: 'スキリティ - スキルシェア',
    marketSize: '約4兆円',
    domain: 'skillityapp.com',
    goal: '登録スキル数500件、ユーザー数300名突破',
    description: '個人のスキルやノウハウを売買できるマーケットプレイス。ビジネス、クリエイティブ、テクノロジーなど多様なカテゴリーを提供。',
    mission: '個人のスキルとノウハウを価値ある資産に変え、豊かなつながりを生み出す',
    vision: 'すべての人が自分の能力を活かし、互いに高め合える社会を実現する',
    features: [
      { 
        title: 'スキル一覧',
        description: 'スキルをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'スキル検索',
        description: 'キーワードでスキルを検索し、最適なスキルを見つけることができます。'
      },
      { 
        title: 'スキル販売',
        description: 'スキルを売買するための機能。購入者と販売者双方で価値を共有できます。'
      },
      { 
        title: 'スキル評価',
        description: 'スキルの評価機能。スキルの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#ff6347'
  },
  {
    id: 5,
    rank: 'A',
    nameEn: 'Unused',
    nameJp: 'アンユーズド - 空間再利用',
    marketSize: '数千億円規模',
    domain: 'unusedhub.com',
    goal: 'リストアップ空間数50件達成、初成約10件',
    description: '使われていない空きスペースを一時利用できるプラットフォーム。イベント、撮影、ポップアップストアなどに活用可能。',
    features: [
      { 
        title: 'スペース一覧',
        description: '空きスペースをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'スペース検索',
        description: 'キーワードで空きスペースを検索し、最適な空きスペースを見つけることができます。'
      },
      { 
        title: 'スペース利用',
        description: '空きスペースを利用するための機能。利用者と空きスペースの所有者双方で価値を共有できます。'
      },
      { 
        title: 'スペース評価',
        description: '空きスペースの評価機能。空きスペースの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#36a2eb'
  },
  {
    id: 6,
    rank: 'A',
    nameEn: 'MatchSense',
    nameJp: 'マッチセンス - AI婚活マッチング',
    marketSize: '約1兆円規模',
    domain: 'matchsenseapp.com',
    goal: 'マッチング成功事例を20件以上獲得',
    description: 'AIが価値観や生活スタイルを分析し、最適なパートナー候補を紹介。従来のマッチングよりも高い成婚率を実現。',
    mission: 'AIで価値観を深く理解し、本当に合うパートナーとの出会いを提供する',
    vision: '誰もが安心して、自分らしく幸せなパートナーシップを築ける社会を実現する',
    features: [
      { 
        title: 'マッチング一覧',
        description: 'マッチング候補をカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'マッチング検索',
        description: 'キーワードでマッチング候補を検索し、最適なマッチング候補を見つけることができます。'
      },
      { 
        title: 'マッチング紹介',
        description: 'マッチング候補を紹介するための機能。紹介者とマッチング候補双方で価値を共有できます。'
      },
      { 
        title: 'マッチング評価',
        description: 'マッチング候補の評価機能。マッチング候補の品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#ffce56'
  },
  {
    id: 7,
    rank: 'A',
    nameEn: 'TravelMate',
    nameJp: 'トラベルAI - 旅行コンシェルジュ',
    marketSize: '約110兆円',
    domain: 'travelmatehq.com',
    goal: 'AIレコメンド精度向上、初期フィードバック100件収集',
    description: 'AIが旅行者の好みや予算に合わせたオーダーメイドの旅行プランを提案。地元の穴場スポットや体験も紹介。',
    mission: 'AIの力で旅行のプランニングをパーソナライズし、一生の思い出を創る',
    vision: '一人ひとりが自分らしく旅を楽しめる世界を実現する',
    features: [
      { 
        title: 'プラン一覧',
        description: '旅行プランをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'プラン検索',
        description: 'キーワードで旅行プランを検索し、最適な旅行プランを見つけることができます。'
      },
      { 
        title: 'プラン提案',
        description: '旅行プランを提案するための機能。提案者と旅行プランの購入者双方で価値を共有できます。'
      },
      { 
        title: 'プラン評価',
        description: '旅行プランの評価機能。旅行プランの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#4caf50'
  },
  {
    id: 8,
    rank: 'A',
    nameEn: 'Aicademy',
    nameJp: 'アイカデミー - AIパーソナライズ教育',
    marketSize: '約30兆円',
    domain: 'getaicademy.com',
    goal: '教育プログラム10件完成、無料体験者500人',
    description: '学習者一人ひとりの理解度や学習スタイルに合わせた教育コンテンツを提供。AIが弱点を分析し効率的な学習をサポート。',
    mission: '一人ひとりの学び方に最適化した教育を届け、潜在能力を引き出す',
    vision: '誰もが自分らしい方法で学べる環境を整え、生涯学び続けられる社会を実現する',
    features: [
      { 
        title: '教材一覧',
        description: '教育教材をカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: '教材検索',
        description: 'キーワードで教育教材を検索し、最適な教育教材を見つけることができます。'
      },
      { 
        title: '教材販売',
        description: '教育教材を販売するための機能。購入者と教育教材の所有者双方で価値を共有できます。'
      },
      { 
        title: '教材評価',
        description: '教育教材の評価機能。教育教材の品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#ff9800'
  }
];
