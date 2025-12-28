
import React from 'react';
import { AppScreen } from '../types';

interface StatsScreenProps {
  onBack: () => void;
  onNavigate: (screen: AppScreen) => void;
}

const StatsScreen: React.FC<StatsScreenProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="bg-warm-bg-start min-h-full flex flex-col antialiased font-display">
      <header className="flex items-center justify-between px-4 py-4 sticky top-0 bg-warm-bg-start/90 backdrop-blur-md z-20">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full hover:bg-stone-100 transition-colors text-stone-800">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-stone-900 text-lg font-bold">美食统计</h2>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 p-6 space-y-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
          <h3 className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-4">本月饮食结构</h3>
          <div className="flex items-end justify-around h-40 gap-4">
            {[
              { label: 'Mon', h: '60%', c: 'bg-primary' },
              { label: 'Tue', h: '40%', c: 'bg-accent' },
              { label: 'Wed', h: '80%', c: 'bg-primary' },
              { label: 'Thu', h: '30%', c: 'bg-accent' },
              { label: 'Fri', h: '70%', c: 'bg-primary' },
              { label: 'Sat', h: '20%', c: 'bg-accent' },
              { label: 'Sun', h: '50%', c: 'bg-primary' },
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1">
                <div className={`w-full rounded-t-lg transition-all duration-700 ${bar.c}`} style={{ height: bar.h }}></div>
                <span className="text-[10px] font-bold text-stone-400">{bar.label}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="size-3 bg-primary rounded-full"></div>
              <span className="text-xs font-bold text-stone-600">Home Made</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 bg-accent rounded-full"></div>
              <span className="text-xs font-bold text-stone-600">Ordered</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-stone-100">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Favorite Dish</p>
            <p className="text-lg font-bold text-stone-800 mt-1">Pesto Pasta</p>
            <p className="text-xs text-stone-400 mt-1">Made 12 times</p>
          </div>
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-stone-100">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Most Ordered</p>
            <p className="text-lg font-bold text-stone-800 mt-1">Burgers</p>
            <p className="text-xs text-stone-400 mt-1">8 orders this month</p>
          </div>
        </div>

        <div className="bg-stone-900 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold">Savings this month</h3>
              <p className="text-stone-400 text-xs">By cooking at home</p>
            </div>
            <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">savings</span>
            </div>
          </div>
          <p className="text-4xl font-extrabold tracking-tight">¥1,240.00</p>
          <div className="mt-6 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[75%] rounded-full"></div>
          </div>
          <p className="mt-2 text-[10px] font-bold text-stone-400 uppercase tracking-widest text-right">Goal: ¥1,500</p>
        </div>
      </main>
    </div>
  );
};

export default StatsScreen;
