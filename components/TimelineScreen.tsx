
import React from 'react';
import { MOCK_RECORDS } from '../constants';
import { AppScreen } from '../types';
import Navigation from './Navigation';

interface TimelineScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const TimelineScreen: React.FC<TimelineScreenProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#fffbf5] font-display text-stone-900 min-h-full flex flex-col pb-24 relative overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-[#fffbf5]/95 backdrop-blur-sm border-b border-stone-200 px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight text-stone-900">Our Food Diary</h1>
          <span className="text-xs text-stone-500 font-medium">Tracking our tasty moments</span>
        </div>
        <button className="p-2 rounded-full hover:bg-stone-200 transition-colors text-stone-600">
          <span className="material-symbols-outlined">calendar_month</span>
        </button>
      </header>

      <div className="px-4 py-4 flex gap-3 overflow-x-auto no-scrollbar items-center sticky top-[57px] bg-[#fffbf5] z-40">
        <button className="shrink-0 h-9 px-5 rounded-full bg-stone-800 text-white text-sm font-semibold shadow-sm active:scale-95 transition-all">
          All
        </button>
        <button className="shrink-0 h-9 px-5 rounded-full bg-white border border-stone-200 text-stone-700 text-sm font-medium flex items-center gap-2 shadow-sm hover:bg-stone-50 transition-all">
          <span>Cooking</span> <span className="text-base">🍳</span>
        </button>
        <button className="shrink-0 h-9 px-5 rounded-full bg-white border border-stone-200 text-stone-700 text-sm font-medium flex items-center gap-2 shadow-sm hover:bg-stone-50 transition-all">
          <span>Ordering</span> <span className="text-base">🍔</span>
        </button>
      </div>

      <main className="relative px-4 flex flex-col gap-6 pt-4">
        <div className="absolute left-[31px] top-6 bottom-0 w-[2px] bg-stone-200 rounded-full z-0"></div>
        
        {MOCK_RECORDS.map((record, index) => (
          <div key={record.id} className="relative z-10 grid grid-cols-[36px_1fr] gap-4">
            <div className="flex flex-col items-center pt-2">
              <div 
                className={`size-9 rounded-full border-4 border-[#fffbf5] shadow-sm flex items-center justify-center text-white shrink-0 ${
                  record.type === 'cooking' ? 'bg-primary' : 'bg-accent'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {record.type === 'cooking' ? 'skillet' : 'fastfood'}
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-stone-100 flex flex-col gap-3 group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div 
                    className="size-6 rounded-full bg-cover bg-center ring-2 ring-white shadow-sm"
                    style={{ backgroundImage: `url("${record.user.avatar}")` }}
                  ></div>
                  <span className="text-xs font-bold text-stone-800">{record.user.name}</span>
                </div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{record.date}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 leading-tight">{record.title}</h3>
                <p className="text-sm text-stone-500 mt-1 leading-relaxed">{record.description}</p>
              </div>

              {record.images.length > 0 && (
                <div className={`grid gap-2 mt-2 ${record.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {record.images.map((img, i) => (
                    <div 
                      key={i} 
                      className="aspect-square rounded-2xl bg-stone-100 bg-cover bg-center overflow-hidden"
                      style={{ backgroundImage: `url("${img}")` }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </main>

      <Navigation currentScreen={AppScreen.TIMELINE} onNavigate={onNavigate} />
    </div>
  );
};

export default TimelineScreen;
