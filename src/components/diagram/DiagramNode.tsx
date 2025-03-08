
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DiagramNodeProps {
  color: string;
  japaneseText: string;
  englishText: string;
  description?: string;
  delayIndex: number;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  icon?: LucideIcon;
}

export const DiagramNode: React.FC<DiagramNodeProps> = ({
  color,
  japaneseText,
  englishText,
  description,
  delayIndex,
  size = "md",
  onClick,
  icon: Icon,
}) => {
  const sizeClasses = {
    sm: "w-28 h-28 md:w-32 md:h-32",
    md: "w-24 h-24 md:w-32 md:h-32",
    lg: "w-28 h-28 md:w-40 md:h-40",
  };

  const textSizeClasses = {
    sm: "text-xs md:text-xs",
    md: "text-xs md:text-sm",
    lg: "text-sm md:text-base",
  };

  const iconSizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const animationDelay = `${delayIndex * 0.1}s`;
  
  return (
    <div className="flex flex-col items-center gap-2 md:gap-3 relative">
      <div
        className={cn(
          "diagram-circle rounded-full flex flex-col items-center justify-center shadow-lg animate-scale-in animate-float cursor-pointer",
          sizeClasses[size]
        )}
        style={{
          background: `linear-gradient(145deg, ${color}dd, ${color})`,
          animationDelay,
          backdropFilter: "blur(5px)",
        }}
        onClick={onClick}
      >
        <div className="text-white flex flex-col items-center justify-center p-1 md:p-2 text-center w-full">
          {Icon && <Icon className="mb-0.5 md:mb-1 text-white/90" size={iconSizeMap[size]} strokeWidth={1.5} />}
          <span className={cn("font-jp font-medium leading-tight break-words max-w-[90%]", 
            size === "lg" ? "text-xs md:text-sm" : "text-xs")}>{japaneseText}</span>
          <span className={cn("text-white/90 mt-0.5 font-light break-words max-w-[90%]", textSizeClasses[size])}>{englishText}</span>
        </div>
      </div>
      {description && (
        <div 
          className="bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-sm text-xs font-jp animate-fade-in text-center max-w-[180px] md:max-w-[220px] mt-1" 
          style={{ animationDelay: `${(delayIndex * 0.1) + 0.5}s` }}
        >
          {description}
        </div>
      )}
    </div>
  );
};
