import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CyberTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const CyberTabs: React.FC<CyberTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['Sources', 'Fetcher'];

  return (
    <div className="flex justify-center mb-8">
      <div className="flex bg-card-gradient border border-cyber-medium rounded-lg p-1 shadow-glow-soft">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "px-8 py-3 rounded-md transition-all duration-300 font-medium",
              "border border-transparent",
              activeTab === tab
                ? "bg-cyber-gradient text-cyber-glow shadow-glow-medium border-cyber-glow"
                : "text-cyber-light hover:text-cyber-glow-soft hover:bg-cyber-dark/50 hover:border-cyber-medium"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CyberTabs;