<lov-code>
export interface Service {
  id: number;
  rank: 'S' | 'A' | 'B' | 'C';
  nameEn: string;
  nameJp: string;
  marketSize: string;
  domain: string;
  goal: string;
  description?: string;
  features?: { title: string; description: string }[];
  color?: string;
  mission?: string;
  vision?: string;
  targetAudience?: string;
  specificAudience?: string;
  midtermGoal?: string;
  longtermGoal?: string;
  launchDate?: string;
  catchphrase?: string;
  quote?: string;
  quoteAuthor?: string;
  useCases?: { title: string; description: string; result?: string }[];
  uniquePoints?: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
}

export interface CompanyInfo {
  nameJp: string;
  nameEn: string;
  description: string;
  mission: string;
  vision: string;
  address: string;
  email: string;
  phone: string;
  established: string;
  ceo: string;
  employees: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const companyInfo: CompanyInfo = {
  nameJp: "株式会社イネブラ",
  nameEn: "Enabler, Inc.",
  description: "私たちは革新的なデジタルプロダクトを通じて、人々の生活をより豊かにすることを目指しています。AIと最新テクノロジーを活用し、社会課題の解決に取り組んでいます。",
  mission: "テクノロジーの力で、すべての人の可能性を広げる",
  vision: "誰もが自分らしく生きられる、持続可能でクリエイティブな社会を創造する",
  address: "東京",
  email: "contact@enabler.jp",
  phone: "",
  established: "2022年",
  ceo: "佐藤 健太郎",
  employees: "58名（2023年12月現在）",
  socialLinks: {
    twitter: "https://twitter.com/enabler_jp",
    facebook: "https://facebook.com/enabler.jp",
    instagram: "https://instagram.com/enabler_jp",
    linkedin: "https://linkedin.com/company/enabler-jp"
  }
};

export const services: Service[] = [
  {
    id: 1,
    rank: 'S',
    nameEn: 'TimeDrop',
    nameJp: 'タイムドロップ - 当日割引宿泊予約',
    marketSize: '約110兆円',
    domain: 'timedrop.io',
    goal: 'ベータ版アプリ公開と初期ユーザー500名獲得',
    description: '当日空室となったホテルや宿泊施設の特別割引を提供するプラットフォーム。最大70%オフで高級ホテルも予約可能。',
    mission: "特別な一日を、誰もが手の届く価格で。後悔から解放する、今日だけの特別な宿泊体験を。",
    vision: "旅行の概念を変える。計画された旅行だけでなく、偶然の冒険も素晴らしい思い出になる世界を創る。",
    catchphrase: "今日の空室は、あなたの特別な一日になる",
    features: [
      { 
        title: 'リアルタイム空室検索',
        description: 'GPS位置情報を活用し、ユーザーの現在地から近い空室を即座に検索できます。高度なフィルタリング機能で希望条件にマッチする宿泊施設を素早く見つけられます。'
      },
      { 
        title: 'フラッシュディール',
        description: '時間限定の特別割引。残り時間がカウントダウン表示され、早い者勝ちでお得に予約できます。最大70%オフの掘り出し物も。'
      },
      { 
        title: '即時予約確定',
        description: 'クレジットカード情報を事前登録しておくことで、ワンタップで予約が完了。予約確認メールと電子チケットがすぐに届きます。'
      },
      { 
        title: 'ホテル写真AI評価',
        description: 'AIが投稿写真を分析し、実際の宿泊施設の状態を評価。美しく見せるための加工写真に惑わされることなく、現実的な期待値を設定できます。'
      }
    ],
    uniquePoints: [
      {
        title: "写真に騙されない、本当の価値",
        description: "当社独自の「リアリティスコア」で、美しく撮影された宣伝写真と実際の宿泊体験のギャップを埋めます。他のサービスでは見られない正直な評価システム。"
      },
      {
        title: "最後の10分が一番お得",
        description: "チェックイン締め切り直前の空室は最大90%オフに。「ラストミニッツ・ディール」は、思い切った決断ができる方への特別な報酬です。"
      },
      {
        title: "偶然からの素晴らしい発見",
        description: "普段は予約の取れない高級ホテルや、知る人ぞ知る隠れ家的な宿泊施設との偶然の出会いが、あなたの新しいお気に入りになるかもしれません。"
      }
    ],
    useCases: [
      {
        title: "出張先での急な予定変更",
        description: "東京出張中のビジネスマンが、急な会議延長で帰りの新幹線に乗れなくなった時、TimeDrop経由で会議場所から徒歩10分のホテルを65%オフで予約。",
        result: "通常2万円のビジネスホテルを7,000円で即時予約完了。タクシー代と朝の混雑を避けられた上に、快適な宿泊体験を得られた。"
      },
      {
        title: "計画外の小旅行",
        description: "週末の天気が急に良くなり、海辺でリフレッシュしたいと思った家族が、TimeDrop経由で普段は手が届かない高級リゾートホテルを検索。",
        result: "通常宿泊料が5万円の4.5星ビーチサイドリゾートを40%オフで予約。前日キャンセルの空室を活用し、家族にサプライズの特別な週末を提供できた。"
      }
    ],
    quote: "計画するのもいいけど、時には偶然に身を委ねることで、最高の思い出ができることもある",
    quoteAuthor: "TimeDrop創業者",
    color: '#2563eb',
    faqs: [
      {
        question: "どれくらい安く予約できますか？",
        answer: "通常価格から最大70%オフ、ラストミニッツ・ディールでは最大90%オフでの予約が可能です。割引率はホテルの空室状況や予約可能時間によって異なります。"
      },
      {
        question: "キャンセルはできますか？",
        answer: "当日予約サービスの性質上、基本的に予約後のキャンセルはできません。これは宿泊施設との特別契約によるものです。ただし、TimeDrop Plus会員には柔軟なキャンセルポリシーが適用される場合があります。"
      },
      {
        question: "どんなホテルが掲載されていますか？",
        answer: "ビジネスホテルからラグジュアリーリゾートまで、全国8,000以上の施設と提携しています。すべての宿泊施設は当社の品質基準を満たしたもののみを掲載しています。"
      }
    ]
  },
  {
    id: 2,
    rank: 'S',
    nameEn: 'StayFlow',
    nameJp: 'ステイフロー - 民泊運営管理',
    marketSize: '数兆円規模',
    domain: 'stayflow.io',
    goal: '管理物件数を10件増やし、口コミ50件獲得',
    description: '民泊オーナーのための包括的な運営管理ツール。予約管理、清掃スケジュール、ゲスト対応を自動化。',
    mission: "民泊オーナーの悩みをゼロに。複雑な運営タスクを自動化し、あなたの時間を解放します。",
    vision: "誰もが簡単に世界中の資産を管理できる未来。不動産所有の常識を覆し、新しい価値を創造します。",
    catchphrase: "民泊の複雑さは、私たちが解決します",
    features: [
      { 
        title: '予約一元管理',
        description: 'Airbnb、Booking.com、Expediaなど主要サイトからの予約を一つのダッシュボードで管理。ダブルブッキングを防止し、空室状況をリアルタイムで把握できます。'
      },
      { 
        title: 'スマートキー連携',
        description: '予約者専用のデジタルキーをアプリで発行。セキュリティコードは予約期間中のみ有効で、チェックイン・チェックアウト時間に連動します。'
      },
      { 
        title: '清掃管理システム',
        description: '清掃スタッフへの自動タスク割り当て。チェックアウト後すぐに通知が飛び、完了報告と写真確認ができます。品質評価システム付き。'
      },
      { 
        title: 'ゲストコミュニケーション',
        description: 'AIを活用した多言語対応チャットボット。よくある質問に自動返信し、近隣のおすすめスポットなど地域情報も提供します。'
      }
    ],
    uniquePoints: [
      {
        title: "あなたが眠っている間も働くシステム",
        description: "深夜のゲスト問い合わせも、海外からの予約リクエストも、すべて自動対応。24時間365日、オーナーの代わりにStayFlowが対応します。"
      },
      {
        title: "清掃品質の可視化と改善",
        description: "清掃スタッフの作業をAIが写真分析。客観的な品質評価と改善ポイントをフィードバックし、サービス品質を一定以上に保ちます。"
      },
      {
        title: "地域に根差したおもてなし",
        description: "地元の飲食店や観光スポットとの連携機能で、ゲストに特別な体験を提供。ゲストの滞在満足度向上とレビュー評価アップにつながります。"
      }
    ],
    launchDate: "2024年7月予定",
    useCases: [
      {
        title: "週末だけの民泊オーナー",
        description: "平日はフルタイムで働きながら、週末だけ都心のマンションを民泊として運用しているKさん。ゲスト対応の時間が取れずに悩んでいた。",
        result: "StayFlowの導入後、チェックイン案内や質問対応が自動化され、稼働率が35%から78%にアップ。月の収益が3倍に増加した。"
      },
      {
        title: "複数物件を管理する事業者",
        description: "東京と大阪で計15件の物件を運営する民泊会社。スタッフ間の情報共有と清掃品質の均一化に課題を抱えていた。",
        result: "すべての物件情報を一元管理し、清掃スタッフのパフォーマンスを数値化。レビュー評価が平均0.8ポイント向上し、リピート率も12%増加した。"
      }
    ],
    color: '#0891b2',
    faqs: [
      {
        question: "初期設定はどれくらい時間がかかりますか？",
        answer: "基本設定なら30分程度、詳細設定やカスタマイズを含めても2〜3時間程度で完了します。専任のサポートスタッフが遠隔でセットアップをお手伝いします。"
      },
      {
        question: "どのような予約サイトと連携できますか？",
        answer: "Airbnb、Booking.com、Expedia、じゃらん、楽天トラベルなど主要20サイトと連携可能です。独自予約サイトとのAPI連携も対応しています。"
      },
      {
        question: "清掃スタッフは自社で確保する必要がありますか？",
        answer: "StayFlowの提携清掃会社ネットワークをご利用いただけます。全国100以上の清掃会社と提携しており、品質保証付きのサービスを手配可能です。"
      }
    ]
  },
  {
    id: 3,
    rank: 'S',
    nameEn: 'HealthGenius',
    nameJp: 'ヘルスジーニアス - AI健康管理コーチ',
    marketSize: '数兆円規模',
    domain: 'healthgenius.ai',
    goal: 'ユーザー登録数1,000人突破と月間アクティブ率30％',
    description: 'AIがパーソナライズした健康アドバイスと運動計画を提案。食事、睡眠、運動データを分析し最適な健康習慣を構築。',
    mission: "AIがあなたの専属コーチに。科学的根拠に基づいたアドバイスで、健康寿命を最大限に延ばします。",
    vision: "すべての人が、自分に最適な健康管理を無理なく継続できる世界を創る。病気にならない社会へ。",
    catchphrase: "健康管理は、もっと賢く、もっと楽しく",
    features: [
      { 
        title: 'AI栄養分析',
        description: '食事の写真を撮影するだけで、AIが食品を認識し、栄養素とカロリーを自動計算。摂取パターンを分析し、バランスの良い食事を提案します。'
      },
      { 
        title: 'バイオリズム最適化',
        description: '睡眠データ、活動量、心拍数から個人のバイオリズムを分析。最も効果的な運動時間帯や集中できる時間帯を特定し、日々のスケジュールを最適化します。'
      },
      { 
        title: 'パーソナライズド・エクササイズ',
        description: '身体データと目標に基づいたカスタムワークアウトプラン。進捗に応じて自動調整され、ビデオガイダンスでフォームの修正もリアルタイムで行います。'
      },
      { 
        title: '健康予測エンジン',
        description: '現在の生活習慣が将来の健康状態に与える影響をシミュレーション。生活習慣病リスクの低減効果を数値化し、モチベーション維持をサポートします。'
      }
    ],
    uniquePoints: [
      {
        title: "あなたのカラダを熟知したAI",
        description: "数百万人の健康データを学習したAIが、あなたの遺伝子情報、生活習慣、過去の病歴を考慮し、世界でたった一つの健康プランを作成します。"
      },
      {
        title: "ゲーム感覚で続く健康習慣",
        description: "毎日の運動や食事をゲーム化。ミッションクリアやレベルアップでポイントが貯まり、健康的な行動が楽しく継続できます。"
      },
      {
        title: "医師との連携で安心",
        description: "HealthGeniusのデータは、あなたの許可を得てかかりつけ医と共有可能。日々の健康管理を医師と連携し、より専門的なアドバイスを受けることができます。"
      }
    ],
    useCases: [
      {
        title: "メタボリックシンドローム改善",
        description: "40代男性会社員Aさん。運動不足と偏った食生活がたたり、健康診断でメタボリックシンドロームと診断された。",
        result: "HealthGeniusのAI栄養分析とパーソナライズド・エクササイズを3ヶ月継続。体重が8kg減少し、腹囲も10cm縮小。血液検査の結果も大幅に改善された。"
      },
      {
        title: "睡眠の質向上",
        description: "30代女性フリーランスBさん。不規則な生活とストレスで、睡眠不足が慢性化。日中の集中力低下に悩んでいた。",
        result: "HealthGeniusのバイオリズム最適化機能で、就寝・起床時間を調整。睡眠の質が向上し、日中のパフォーマンスが大幅に改善された。"
      }
    ],
    color: '#16a34a',
    faqs: [
      {
        question: "AIの提案は信頼できますか？",
        answer: "HealthGeniusのAIは、最新の医学研究と臨床データに基づいてトレーニングされています。提案の根拠となる情報源も明示しており、透明性の高いサービスです。"
      },
      {
        question: "運動経験がなくても大丈夫ですか？",
        answer: "はい、大丈夫です。HealthGeniusは、運動経験がない方でも無理なく始められるように、簡単なエクササイズから段階的にレベルアップできるプログラムをご用意しています。"
      },
      {
        question: "料金プランはどのようになっていますか？",
        answer: "無料プランでは、基本的な健康データ分析とアドバイスをご利用いただけます。有料プランでは、パーソナライズされた運動プランや栄養指導、医師との連携機能などが追加されます。"
      }
    ]
  },
  {
    id: 4,
    rank: 'A',
    nameEn: 'Skillity',
    nameJp: 'スキリティ - スキルシェア',
    marketSize: '約4兆円',
    domain: 'skillity.io',
    goal: '登録スキル数500件、ユーザー数300名突破',
    description: '個人のスキルやノウハウを売買できるマーケットプレイス。ビジネス、クリエイティブ、テクノロジーなど多様なカテゴリーを提供。',
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
    domain: 'unused.io',
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
    domain: 'matchsense.io',
    goal: 'マッチング成功事例を20件以上獲得',
    description: 'AIが価値観や生活スタイルを分析し、最適なパートナー候補を紹介。従来のマッチングよりも高い成婚率を実現。',
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
    domain: 'travelai.io',
    goal: 'AIレコメンド精度向上、初期フィードバック100件収集',
    description: 'AIが旅行者の好みや予算に合わせたオーダーメイドの旅行プランを提案。地元の穴場スポットや体験も紹介。',
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
    domain: 'aicademy.ai',
    goal: '教育プログラム10件完成、無料体験者500人',
    description: '学習者一人ひとりの理解度や学習スタイルに合わせた教育コンテンツを提供。AIが弱点を分析し効率的な学習をサポート。',
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
  },
  {
    id: 9,
    rank: 'B',
    nameEn: 'AIFit',
    nameJp: 'AIフィット - パーソナルジム',
    marketSize: '約10兆円',
    domain: 'aifit.ai',
    goal: '初回体験トレーニング100件提供',
    description: 'AIが身体データを分析し、最適なトレーニングプランと栄養アドバイスを提供。リアルタイムでフォームチェックも可能。',
    features: [
      { 
        title: 'トレーニング一覧',
        description: 'トレーニングをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'トレーニング検索',
        description: 'キーワードでトレーニングを検索し、最適なトレーニングを見つけることができます。'
      },
      { 
        title: 'トレーニング提案',
        description: 'トレーニングを提案するための機能。提案者とトレーニングの購入者双方で価値を共有できます。'
      },
      { 
        title: 'トレーニング評価',
        description: 'トレーニングの評価機能。トレーニングの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#9c27b0'
  },
  {
    id: 10,
    rank: 'B',
    nameEn: 'TaskTrust',
    nameJp: 'タスクトラスト - お手伝いマッチング',
    marketSize: '約75兆円（世界）',
    domain: 'tasktrust.io',
    goal: '新規マッチング件数100件突破',
    description: '日常の家事や雑用を依頼できるシェアリングサービス。信頼性の高いヘルパーと安全に取引可能。',
    features: [
      { 
        title: 'タスク一覧',
        description: 'タスクをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'タスク検索',
        description: 'キーワードでタスクを検索し、最適なタスクを見つけることができます。'
      },
      { 
        title: 'タスク依頼',
        description: 'タスクを依頼するための機能。依頼者とタスクの購入者双方で価値を共有できます。'
      },
      { 
        title: 'タスク評価',
        description: 'タスクの評価機能。タスクの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#673ab7'
  },
  {
    id: 11,
    rank: 'B',
    nameEn: 'FoodSaver',
    nameJp: 'フードセーバー - 食品ロスマーケット',
    marketSize: '約6000億円',
    domain: 'foodsaver.ai',
    goal: 'パートナー店舗20件と契約完了',
    description: '飲食店や小売店の余剰食品を特別価格で提供するプラットフォーム。食品ロス削減と消費者の節約を同時に実現。',
    mission: "おいしさを救え、地球も救え。まだ食べられるものを捨てる社会に革命を。",
    vision: "食品ロスゼロの世界を実現する。価値あるものが無駄にならない、持続可能な食の循環を創る。",
    catchphrase: "最高の味を、最高の価格で、最高の理由で",
    features: [
      { 
        title: 'タイムセール機能',
        description: '閉店間際や消費期限が近づいている商品を時間限定で特別価格で提供。店舗側が簡単に出品でき、消費者はアプリでリアルタイムに情報を受け取れます。'
      },
      { 
        title: '店舗マッチング',
        description: 'ユーザーの位置情報と好みを分析し、おすすめの店舗や商品を表示。行動範囲や購入履歴から最適な情報を提供します。'
      },
      { 
        title: '事前予約システム',
        description: '特定の商品を事前に予約できるシステム。確実に商品を確保でき、店舗側も販売予測が立てやすくなります。'
      },
      { 
        title: '環境貢献度表示',
        description: '購入によって削減できたCO2排出量や食品ロス量を可視化。環境への貢献を数値で実感でき、SNSでシェアすることも可能です。'
      }
    ],
    uniquePoints: [
      {
        title: "救済の輪を広げる「バディシステム」",
        description: "1つの食品を購入すると、同等品が困窮家庭に寄付される独自システム。社会貢献と食品ロス削減を同時に実現できる仕組みです。"
      },
      {
        title: "クオリティ保証制度",
        description: "すべての出品商品はFoodSaverのクオリティチェックを通過。品質に問題があった場合は全額返金保証付きで、安心して利用できます。"
      },
      {
        title: "サプライズBOX",
        description: "内容は開けてからのお楽しみ。店舗の余剰食品をまとめた「サプライズBOX」は通常価格の70%オフ以上。冒険心と節約心をくすぐる人気商品です。"
      }
    ],
    useCases: [
      {
        title: "パン屋の閉店間際の取り組み",
        description: "毎日10%程度の売れ残りがあった神戸のパン屋「ベーカリーサンライズ」。廃棄するのがもったいないと悩んでいた。",
        result: "FoodSaverを導入し、閉店1時間前から50%オフでアプリ販売を開始。廃棄ロスが95%削減され、新規顧客も20%増加した。"
      },
      {
        title: "スーパーの消費期限対策",
        description: "消費期限が近い商品の廃棄コストが月50万円以上かかっていた地域スーパー。値引きシールを貼る手間も課題だった。",
        result: "デジタル値引きシステムで人件費を削減しながら、アプリ経由の来店者が増加。食品廃棄量が65%減少し、新規顧客の獲得にも成功した。"
      }
    ],
    color: '#65a30d',
    faqs: [
      {
        question: "商品の品質は大丈夫ですか？",
        answer: "FoodSaverに出品される商品は、消費期限が近いまたは見た目に難があるだけで、品質や味に問題はありません。すべての店舗は当社の品質基準に合格した信頼できるパートナーです。"
      },
      {
        question: "予約した商品の受け取り方法は？",
        answer: "アプリの予約完了画面を店舗スタッフに見せるだけで受け取れます。一部店舗ではQRコードによる自動認証も可能です。受け取り時間に間に合わない場合は30分前までにキャンセル可能です。"
      },
      {
        question: "店舗として参加するメリットは？",
        answer: "廃棄コストの削減、新規顧客の獲得、環境への貢献をアピールできるなどのメリットがあります。また、当社の分析ツールで売れ残りの予測精度を向上させ、生産計画の最適化も可能です。"
      }
    ]
  },
  {
    id: 12,
    rank: 'B',
    nameEn: 'PetPals',
    nameJp: 'ペットパルズ - ペット預かりサービス',
    marketSize: '数千億円規模',
    domain: 'petpals.io',
    goal: '預かりサービス利用実績50件達成',
    description: '信頼できるペットシッターとペットオーナーをマッチング。安心して愛犬・愛猫を預けられるサービス。',
    features: [
      { 
        title: 'ペット一覧',
        description: 'ペットをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'ペット検索',
        description: 'キーワードでペットを検索し、最適なペットを見つけることができます。'
      },
      { 
        title: 'ペット預かり',
        description: 'ペットを預かりするための機能。預かり者とペットオーナー双方で価値を共有できます。'
      },
      { 
        title: 'ペット評価',
        description: 'ペットの評価機能。ペットの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#2196f3'
  },
  {
    id: 13,
    rank: 'B',
    nameEn: 'SeniorKnowledge',
    nameJp: 'シニアナレッジ - 高齢者知識共有',
    marketSize: '数百億円規模',
    domain: 'seniorknowledge.ai',
    goal: 'コンテンツ投稿数100件、登録ユーザー数200人達成',
    description: 'シニア世代の経験や知識を次世代に伝えるプラットフォーム。オンラインで相談や知恵を共有できるコミュニティ。',
    features: [
      { 
        title: 'コンテンツ一覧',
        description: 'コンテンツをカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: 'コンテンツ検索',
        description: 'キーワードでコンテンツを検索し、最適なコンテンツを見つけることができます。'
      },
      { 
        title: 'コンテンツ投稿',
        description: 'コンテンツを投稿するための機能。投稿者とコンテンツの所有者双方で価値を共有できます。'
      },
      { 
        title: 'コンテンツ評価',
        description: 'コンテンツの評価機能。コンテンツの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#757575'
  },
  {
    id: 14,
    rank: 'B',
    nameEn: 'EmotionSeed',
    nameJp: 'エモーションシード - 感情共有コミュニティ',
    marketSize: '数百億円規模',
    domain: 'emotionseed.ai',
    goal: 'コミュニティメンバー500人突破、投稿数200件',
    description: '日々の感情や気持ちを共有し、共感しあえるオンラインコミュニティ。メンタルヘルスケアにも貢献。',
    features: [
      { 
        title: '投稿一覧',
        description: '投稿をカテゴリー別に整理し、詳細な情報や評価を確認できます。'
      },
      { 
        title: '投稿検索',
        description: 'キーワードで投稿を検索し、最適な投稿を見つけることができます。'
      },
      { 
        title: '投稿共有',
        description: '投稿を共有するための機能。共有者と投稿の所有者双方で価値を共有できます。'
      },
      { 
        title: '投稿評価',
        description: '投稿の評価機能。投稿の品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#000000'
  },
  {
    id: 15,
    rank: 'B',
    nameEn: 'TaskTrust',
    nameJp: 'タスクトラスト - 何でも屋マッチング',
    marketSize: '世界約5000億ドル規模',
    domain: 'tasktrust.io',
    goal: '新規登録者200名、依頼成立50件',
    description: 'あらゆる仕事やタスクを依頼できるマッチングプラットフォーム。専門家から一般の人まで多様なスキルを活用可能。',
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
        title: 'スキル依頼',
        description: 'スキルを依頼するための機能。依頼者とスキルの購入者双方で価値を共有できます。'
      },
      { 
        title: 'スキル評価',
        description: 'スキルの評価機能。スキルの品質や価値を評価し、他のユーザーに共有できます。'
      }
    ],
    color: '#000000'
  },
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
