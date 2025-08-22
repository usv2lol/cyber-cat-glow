import React from 'react';
import { cn } from '@/lib/utils';

interface CatImageCardProps {
  imageUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

const CatImageCard: React.FC<CatImageCardProps> = ({ imageUrl, className, style }) => {
  return (
    <div 
      className={cn(
        "bg-card-gradient border border-cyber-medium rounded-lg p-2",
        "shadow-glow-soft hover:shadow-glow-medium transition-all duration-300",
        "hover:border-cyber-glow/50 group overflow-hidden",
        className
      )}
      style={style}
    >
      <div className="aspect-square rounded-md overflow-hidden">
        <img 
          src={imageUrl} 
          alt="Cute cat"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CatImageCard;