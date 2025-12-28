
import React from 'react';
import { AppScreen } from '../types';

interface NavigationProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate }) => {
  const tabs = [
    { screen: AppScreen.HOME, icon: 'home', label: '首页' },
    { screen: AppScreen.TIMELINE, icon: 'auto_stories', label: '时光' },
    { screen: AppScreen.ME, icon: 'person', label: '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pb-6 px-6 pointer-events-none">
      <div className="w-full max-w-sm h-16 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-stone-100 flex items-center justify-around px-2 pointer-events-auto">
        {tabs.map((tab) => {
          const isActive = currentScreen === tab.screen;
          return (
            <button
              key={tab.screen}
              onClick={() => onNavigate(tab.screen)}
              className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 rounded-2xl transition-all ${
                isActive ? 'text-primary' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              <span className={`material-symbols-outlined text-[24px] ${isActive ? 'fill-current' : ''}`}>
                {tab.icon}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
