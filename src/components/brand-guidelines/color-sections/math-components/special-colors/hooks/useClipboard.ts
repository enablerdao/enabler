
import { useToast } from '@/hooks/use-toast';

export const useClipboard = () => {
  const { toast } = useToast();

  const copyColorToClipboard = (colorCode: string, colorName: string) => {
    navigator.clipboard.writeText(colorCode);
    toast({
      title: "コピーしました",
      description: `${colorName}（${colorCode}）をクリップボードにコピーしました`
    });
  };

  return { copyColorToClipboard };
};
