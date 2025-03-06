
import { Service } from '../types/service';

export const newServices: Service[] = [
  {
    id: 17,
    rank: 'A',
    nameEn: 'LifeBuddy',
    nameJp: 'ライフバディ - 人生のパートナーAI',
    marketSize: '約3兆円規模',
    domain: 'lifebuddyai.com',
    goal: '初期ユーザー1000人、継続利用率80%達成',
    description: 'あなたが迷ったときに、最もあなたらしい答えを届けるパートナー。AIが人生の複雑さをシンプルに解きほぐします。',
    features: [
      { 
        title: '朝の気分チェックイン',
        description: '朝起きたらAIが今日の気分や目標を聞いてくれます。'
      },
      { 
        title: '自然な会話インターフェース',
        description: '自然な会話から「今日のベストな選択肢」を提示します。'
      },
      { 
        title: '意思決定サポート',
        description: 'AIが選択肢を提案し、あとはあなたが決めて楽しむだけ。'
      }
    ],
    color: '#9c27b0',
    mission: 'あなたが迷ったときに、最もあなたらしい答えを届けるパートナーになる。',
    vision: 'AIが人生の複雑さをシンプルに解きほぐし、人々が本当にやりたいことを自由に選べる世界を創る。'
  },
  {
    id: 18,
    rank: 'A',
    nameEn: 'WeeMeet',
    nameJp: 'ウィーミート - AIがつなぐ自然な出会い',
    marketSize: '約1.5兆円規模',
    domain: 'weemeetapp.com',
    goal: 'マッチング成功事例100件以上獲得',
    description: '一人ひとりの小さな関心を、大切な人との出会いにつなげます。AIの力で孤独や寂しさをなくし、安心して繋がれる社会を作ります。',
    features: [
      { 
        title: '気分マッチング',
        description: '「今日こんな気分です」と一言入力すると、AIが自然で気楽な会話相手やイベントを自動マッチング。'
      },
      { 
        title: '興味共有システム',
        description: '気軽に話したり、興味あることを一緒に楽しむことで、自然に仲間が増えていく。'
      }
    ],
    color: '#ff9800',
    mission: '一人ひとりの小さな関心を、大切な人との出会いにつなげる。',
    vision: 'AIの力で、世界中から孤独や寂しさをなくし、誰もが安心して繋がれる社会を作る。'
  },
  {
    id: 19,
    rank: 'B',
    nameEn: 'DAONico',
    nameJp: 'ダオニコ - 楽しくAIでDAO運営',
    marketSize: '約5000億円規模',
    domain: 'daonico.com',
    goal: '導入コミュニティ50件、利用者満足度90%以上',
    description: '面倒な運営はAIにまかせて、コミュニティ運営をとことん楽しめる環境をつくります。',
    features: [
      { 
        title: '自動運営サポート',
        description: 'DAOに入ると「やりたいことだけ」発信するだけで、面倒な調整や管理をAIが自動的に処理。'
      },
      { 
        title: 'メンバー最適化提案',
        description: 'コミュニティメンバーが楽しんで活動できることだけを、常に考えて運営できる。'
      }
    ],
    color: '#2196f3',
    mission: '面倒な運営はAIにまかせて、コミュニティ運営をとことん楽しめる環境をつくる。',
    vision: '誰もが自分の好きなことだけに情熱を注げる、新しい社会運営のカタチをつくる。'
  },
  {
    id: 20,
    rank: 'B',
    nameEn: 'UrbanCropAI',
    nameJp: 'アーバンクロップAI - AIが支える都市型マイクロ農園',
    marketSize: '約8000億円規模',
    domain: 'urbancropai.com',
    goal: '都市部での実証実験10件完了、参加者満足度95%',
    description: '身近な自然から豊かさを再発見し、食べる喜びを分かち合うための都市型マイクロ農園サポートサービス。',
    features: [
      { 
        title: 'AI栽培アドバイス',
        description: '自宅や近所での菜園をAIがサポート（何をいつ育てればいいかを提案）。'
      },
      { 
        title: '収穫シェアリング',
        description: '収穫できると、近隣住民との気軽な交換や共有が簡単に行え、コミュニティが豊かになる。'
      }
    ],
    color: '#4caf50',
    mission: '身近な自然から豊かさを再発見し、食べる喜びを分かち合う。',
    vision: '都市でも自然と共生した持続可能な暮らしが「あたりまえ」になる世界をつくる。'
  },
  {
    id: 21,
    rank: 'C',
    nameEn: 'Mojitto',
    nameJp: 'モジット - AI × 創作アカデミー',
    marketSize: '約2000億円規模',
    domain: 'mojitto.com',
    goal: '登録クリエイター数1000人、作品公開数5000点',
    description: '一人ひとりの「ちょっと好き」から「夢中」への旅を応援する創作アカデミー。AIが才能を引き出し、育てます。',
    features: [
      { 
        title: 'AIクリエイティブマッチング',
        description: '気軽に興味があることを伝えると、AIがすぐに試せる教材や仲間、先生を紹介。'
      },
      { 
        title: '才能発掘プログラム',
        description: '楽しんで続けるうちに、自然と自分の才能が発見できる。'
      }
    ],
    color: '#e91e63',
    mission: '一人ひとりの「ちょっと好き」から「夢中」への旅を応援する。',
    vision: '誰でもクリエイティブになれる場を作り、新しい才能が花開く社会をつくる。'
  },
  {
    id: 22,
    rank: 'S',
    nameEn: 'Yorisoi',
    nameJp: 'ヨリソイ - 人生の意思決定AI',
    marketSize: '約2兆円規模',
    domain: 'yorisoiai.com',
    goal: '初期ユーザー3000人、重要意思決定サポート1万件達成',
    description: 'あなたの悩みや不安に「そっと寄り添い」、自信を持てるように支える意思決定サポートAI。',
    features: [
      { 
        title: '価値観分析エンジン',
        description: '人生の迷いを打ち明けると、AIがあなたの価値観や感情を尊重しながらベストな選択肢を提示。'
      },
      { 
        title: 'フォローアップケア',
        description: '決定後もAIがやさしくフォローアップし、「これでよかった」を感じられる。'
      }
    ],
    color: '#7b1fa2',
    mission: 'あなたの悩みや不安に「そっと寄り添い」、自信を持てるように支える。',
    vision: '誰もが「迷ったときこそ自分らしくいられる社会」をAIと共につくる。'
  }
];
