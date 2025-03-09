
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';
import { toast } from 'sonner';
import { logActivity } from '@/lib/logger';

const IdeaSubmissionForm = () => {
  const [idea, setIdea] = useState('');
  const [isSubmittingIdea, setIsSubmittingIdea] = useState(false);
  const [ideaEmail, setIdeaEmail] = useState('');

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
  );
};

export default IdeaSubmissionForm;
