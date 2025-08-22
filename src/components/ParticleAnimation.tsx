import React from 'react';
import { Circle } from 'lucide-react';

interface ParticleAnimationProps {
  isVisible: boolean;
}

const ParticleAnimation: React.FC<ParticleAnimationProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  const particles = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className="absolute animate-particle-fall"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 1}s`
      }}
    >
      <Circle 
        className="w-3 h-3 text-cyber-glow opacity-60" 
        fill="currentColor"
      />
    </div>
  ));

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {particles}
    </div>
  );
};

export default ParticleAnimation;