
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Mail, Users, Heart, Lightbulb } from 'lucide-react';
import { useState } from 'react';
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
          <div className="mb-8 bg-enabler-50 p-6 rounded-lg border border-enabler-100">
            <h3 className="text-xl font-semibold mb-4 text-enabler-800">創業者のメッセージ</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                これまで私はソフトウェアエンジニアとして様々なプロダクトの開発やマネジメントに携わってきましたが、自分の興味や好奇心はソフトウェアだけにとどまりませんでした。
              </p>
              <p>
                建築にも強い関心を持ち、通信制大学で学び始めました。しかし、実際に座学で学ぶよりも、自らの手で何かを作り上げることの方が遥かに早く学べると気づき、実際にプロジェクトを立ち上げて取り組みました。
              </p>
              <p>
                その後、自分自身が民泊運営を始めようとした際に、多くの課題に直面しました。この時、「もっと便利で効率的な解決方法があるはずだ」という強い思いが芽生えました。そして、この思いが新しいサービス「StayFlow」の開発へと繋がりました。
              </p>
              <p>
                特に、生成AIの登場は衝撃的でした。自分が今まで何十時間もかけて行ってきた作業が、わずか100分の1、いや、10,000分の1と言っても過言ではないスピードで実現できるようになったのです。
              </p>
              <p>
                これをきっかけに、誰もが「あったらいいな」「欲しいな」と感じるものを気軽に実現できる会社を作りたいと考えています。
              </p>
            </div>
          </div>
          
          <p className="mb-6 text-center">まずは創業者の活動をフォローしてください：</p>
          
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
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
          
          <p className="text-center mb-6">また、最新情報や事前登録は下記からどうぞ。</p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
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
            
            <Button variant="outline" className="border-enabler-200" asChild>
              <a href="#" className="flex items-center justify-center gap-2">
                <Github size={18} className="text-enabler-600" />
                <span>GitHubでプロジェクトを見る</span>
              </a>
            </Button>
          </div>

          {/* アイデア投稿フォーム */}
          <div className="mt-10 mb-10 bg-enabler-50 p-6 rounded-lg border border-enabler-100">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-enabler-800 flex items-center">
                <Lightbulb size={20} className="text-enabler-600 mr-2" />
                あなたのアイデアを共有してください
              </h3>
              <p className="text-gray-700 mb-2">
                皆さんが「こんなのがあったらいいな」と感じていることを気軽に投稿してください。どんな些細なアイデアでも構いません。匿名でも投稿可能ですが、メールアドレスをご記入いただき、あなたのアイデアが採用された場合には、「共同ファウンダー」として迎え入れさせていただきます。
              </p>
            </div>
            
            <form onSubmit={handleIdeaSubmission} className="space-y-4">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="あなたのアイデアを教えてください"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-enabler-400 focus:border-transparent h-32"
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
                  {isSubmittingIdea ? '送信中...' : 'アイデアを送信'}
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                ※メールアドレスを入力しなくても匿名で投稿できます
              </p>
            </form>
          </div>

          {/* Newsletter Signup Form */}
          <div className="mt-8 bg-enabler-50 p-6 rounded-lg border border-enabler-100">
            <p className="text-center text-enabler-800 font-medium mb-4">ニュースレターに登録して最新情報をお届けします</p>
            
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="メールアドレスを入力"
                required
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-enabler-400 focus:border-transparent"
              />
              <Button 
                type="submit" 
                disabled={isSubmittingNewsletter}
                className="bg-enabler-600 hover:bg-enabler-700"
              >
                {isSubmittingNewsletter ? '登録中...' : '登録する'}
                <Mail size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 bg-enabler-50 p-6 rounded-lg border border-enabler-100 text-center">
          <p className="flex items-center justify-center gap-2 text-enabler-700">
            <Heart size={20} className="text-enabler-600" />
            <span>システム開発やマーケティングについては私自身が責任を持って取り組みますので、皆さんにはぜひサービスの使いやすさや改善点についてフィードバックをいただければ嬉しいです。一緒に最高のサービスを作っていきましょう！</span>
          </p>
        </div>
      </div>
    </MotionBox>
  );
};

export default ConnectLinks;
