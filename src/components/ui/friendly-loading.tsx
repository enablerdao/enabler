
import React from 'react';
import { Loader, Robot, Ghost } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FriendlyLoadingProps {
  message?: string;
  variant?: 'default' | 'robot' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const messages = [
  "ちょっと待ってね...(｀・ω・´)",
  "もうすぐだよ！（＾ω＾）",
  "がんばって読み込み中...(๑•̀ㅂ•́)و✧",
  "もう少しだけ待ってね (。・ω・。)",
];

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12'
};

export const FriendlyLoading: React.FC<FriendlyLoadingProps> = ({
  message,
  variant = 'default',
  size = 'md'
}) => {
  const [currentMessage] = React.useState(() => 
    message || messages[Math.floor(Math.random() * messages.length)]
  );

  const Icon = variant === 'robot' ? Robot : variant === 'ghost' ? Ghost : Loader;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <div className="relative">
        <Icon 
          className={cn(
            "animate-spin text-enabler-600",
            sizeClasses[size]
          )} 
        />
      </div>
      <p className="text-gray-600 animate-pulse font-medium">
        {currentMessage}
      </p>
    </div>
  );
};
