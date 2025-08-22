import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
  isVisible: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-cyber-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center animate-zoom-shake">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Loader2 className="w-8 h-8 animate-spin-slow text-cyber-glow" />
          <span className="text-2xl font-bold text-cyber-glow">
            Fetching cats...
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;