
import React from 'react';
import { MotionBox } from '@/components/ui/motion-box';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Mail, Users, Heart } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { logActivity } from '@/lib/logger';
import { supabase } from '@/integrations/supabase/client';

const ConnectLinks = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
      setIsSubmitting(false);
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
            <a href="https://yukihamada.jp" target="_blank" rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-200 group">
              <ExternalLink size={18} className="text-gray-600 group-hover:text-enabler-600" />
              <span>yukihamada.jp</span>
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
                disabled={isSubmitting}
                className="bg-enabler-600 hover:bg-enabler-700"
              >
                {isSubmitting ? '登録中...' : '登録する'}
                <Mail size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 bg-enabler-50 p-6 rounded-lg border border-enabler-100 text-center">
          <p className="flex items-center justify-center gap-2 text-enabler-700">
            <Heart size={20} className="text-enabler-600" />
            <span>イネブラのすべてのプロジェクトはオープンソースで公開中。あなたの参加を心からお待ちしています。</span>
          </p>
        </div>
      </div>
    </MotionBox>
  );
};

export default ConnectLinks;
