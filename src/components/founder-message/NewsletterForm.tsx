
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';
import { logActivity } from '@/lib/logger';
import { supabase } from '@/integrations/supabase/client';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

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

  return (
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
  );
};

export default NewsletterForm;
