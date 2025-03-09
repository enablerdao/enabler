
import React, { useState } from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Mail, Users, Heart, Lightbulb } from 'lucide-react';
import { toast } from 'sonner';
import { logActivity } from '@/lib/logger';
import { supabase } from '@/integrations/supabase/client';

const ConnectLinks = () => {
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [isSubmittingIdea, setIsSubmittingIdea] = useState(false);
  const [ideaEmail, setIdeaEmail] = useState('');

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);
    
    try {
      // Log the newsletter signup
      logActivity('contactSubmit', {
        additionalData: { 
          email, 
          type: 'newsletter'
        }
      });
      
      // Store the email in Supabase database
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);
      
      if (error) {
        if (error.code === '23505') {
          // Unique violation - email already exists
          toast.info('このメールアドレスは既に登録されています', {
            duration: 5000,
          });
        } else {
          console.error('Error storing newsletter subscription:', error);
          throw error;
        }
      } else {
        toast.success('ニュースレターに登録しました！', {
          description: `${email}宛に確認メールを送信しました。`,
          duration: 5000,
        });
      }
      
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error('登録中にエラーが発生しました。もう一度お試しください。', {
        duration: 5000,
      });
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };
  
  const handleIdeaSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingIdea(true);
    
    try {
      // Log the idea submission
      logActivity('ideaSubmit', {
        additionalData: { 
          email: ideaEmail || 'anonymous', 
          ideaText: idea
        }
      });
      
      toast.success('アイデアをありがとうございます！', {
        description: '検討させていただきます。',
        duration: 5000,
      });
      
      setIdea('');
      setIdeaEmail('');
    } catch (error) {
      console.error('Idea submission error:', error);
      toast.error('送信中にエラーが発生しました。もう一度お試しください。', {
        duration: 5000,
      });
    } finally {
      setIsSubmittingIdea(false);
    }
  };

  return (
    <MotionBox delay={500}>
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-enabler-800">一緒に未来を創りませんか？</h2>
          <div className="h-px flex-grow bg-gray-200 ml-4"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          {/* 整理された創業者のメッセージ */}
          <div className="mb-8 bg-enabler-50 p-6 rounded-lg border border-enabler-100">
            <h3 className="text-xl font-semibold mb-4 text-enabler-800">創業者のメッセージ</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                ソフトウェアエンジニアとしての経験と建築への関心を持ち、常に新しいことに挑戦してきました。理論より実践を重視し、自らの手で作り上げることで学びを深めてきました。
              </p>
              <p>
                民泊運営を始めようとした際、多くの課題に直面し「もっと効率的な解決方法があるはずだ」という思いから、新サービス「StayFlow」の開発が始まりました。
              </p>
              <p>
                特に生成AIの登場は革命的でした。今まで何十時間もかけていた作業が、わずかな時間で実現できるようになり、テクノロジーの可能性を再認識しました。
              </p>
              <p>
                この経験から、皆さんの「あったらいいな」というアイデアを実現する会社を作りたいと考えています。小さなアイデアからでも、革新的なサービスは生まれると信じています。
              </p>
            </div>
          </div>
          
          {/* 社会貢献と協力のメッセージ */}
          <div className="mb-8 bg-enabler-50 p-6 rounded-lg border border-enabler-100">
            <div className="flex items-center justify-center gap-2 text-enabler-700 mb-4">
              <Heart size={20} className="text-enabler-600" />
              <span className="font-medium">共に創る未来</span>
            </div>
            <p className="text-gray-700">
              システム開発やマーケティングについては私自身が責任を持って取り組みます。皆さんには、サービスの使いやすさや改善点についてのフィードバックをいただければ幸いです。一緒に最高のサービスを作っていきましょう！
            </p>
          </div>
          
          {/* フォローリンク */}
          <div className="mb-8">
            <p className="mb-4 text-center font-medium text-gray-700">創業者の活動をフォローする：</p>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <a href="https://x.com/YukiHamada" target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
                <ExternalLink size={18} className="text-gray-600 group-hover:text-enabler-600" />
                <span>X.com: YukiHamada</span>
              </a>
              <a href="https://github.com/YukiHamada" target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
                <Github size={18} className="text-gray-600 group-hover:text-enabler-600" />
                <span>GitHub: YukiHamada</span>
              </a>
              <a href="https://yukihamadajp" target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
                <ExternalLink size={18} className="text-gray-600 group-hover:text-enabler-600" />
                <span>yukihamadajp</span>
              </a>
            </div>
          </div>
          
          {/* サービスリンク */}
          <div className="mb-8">
            <p className="text-center mb-4 font-medium text-gray-700">サービスの最新情報と機会：</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Button variant="default" className="bg-enabler-600 hover:bg-enabler-700" asChild>
                <a href="#" className="flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  <span>StayFlow事前登録</span>
                </a>
              </Button>
              
              <Button variant="outline" className="border-enabler-200" asChild>
                <a href="#" className="flex items-center justify-center gap-2">
                  <Users size={18} className="text-enabler-600" />
                  <span>採用情報を見る</span>
                </a>
              </Button>
              
              <Button variant="outline" className="border-enabler-200 sm:col-span-2" asChild>
                <a href="#" className="flex items-center justify-center gap-2">
                  <Github size={18} className="text-enabler-600" />
                  <span>GitHubでプロジェクトを見る</span>
                </a>
              </Button>
            </div>
          </div>

          {/* アイデア投稿と購読を一つのセクションにまとめる */}
          <div className="mt-10 bg-enabler-50 p-6 rounded-lg border border-enabler-100">
            <div className="grid md:grid-cols-2 gap-8">
              {/* アイデア投稿フォーム */}
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-enabler-800 flex items-center">
                    <Lightbulb size={20} className="text-enabler-600 mr-2" />
                    あなたのアイデアを共有
                  </h3>
                  <p className="text-gray-700 text-sm">
                    「こんなのがあったらいいな」と感じるアイデアをお聞かせください。メールアドレスを記入いただければ、採用時に共同ファウンダーとしてご連絡します。
                  </p>
                </div>
                
                <form onSubmit={handleIdeaSubmission} className="space-y-4">
                  <textarea
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="あなたのアイデアを教えてください"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-enabler-400 focus:border-transparent h-24"
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={ideaEmail}
                      onChange={(e) => setIdeaEmail(e.target.value)}
                      placeholder="メールアドレス（任意）"
                      className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-enabler-400 focus:border-transparent"
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubmittingIdea || !idea.trim()}
                      className="bg-enabler-600 hover:bg-enabler-700"
                    >
                      {isSubmittingIdea ? '送信中...' : '送信する'}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Newsletter Signup Form */}
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-enabler-800 flex items-center">
                    <Mail size={20} className="text-enabler-600 mr-2" />
                    ニュースレター登録
                  </h3>
                  <p className="text-gray-700 text-sm">
                    イネブラとStayFlowの最新情報をいち早くお届けします。新機能や限定オファーについてもご案内します。
                  </p>
                </div>
                
                <form onSubmit={handleNewsletterSignup} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="メールアドレスを入力"
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-enabler-400 focus:border-transparent"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmittingNewsletter}
                    className="w-full bg-enabler-600 hover:bg-enabler-700"
                  >
                    {isSubmittingNewsletter ? '登録中...' : '登録する'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionBox>
  );
};

export default ConnectLinks;
