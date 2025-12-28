
import React from 'react';
import { AppScreen } from '../types';
import Navigation from './Navigation';

interface ProfileScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  return (
    <div className="bg-warm-bg-start min-h-full flex flex-col pb-28">
      <div className="relative h-48 bg-primary/10 overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-10"></div>
        <div className="absolute -right-20 -top-20 size-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 size-48 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-orange-900/5 border border-stone-100">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div 
                className="size-24 rounded-full border-4 border-white shadow-lg bg-cover bg-center"
                style={{ backgroundImage: 'url("https://picsum.photos/id/64/200/200")' }}
              ></div>
              <div className="absolute bottom-0 right-0 size-8 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                <span className="material-symbols-outlined text-[16px]">edit</span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-stone-900 mt-4">Sarah & John</h2>
            <p className="text-stone-500 text-sm font-medium mt-1 italic">"Cooking our way through life"</p>
            
            <div className="flex items-center gap-8 mt-6 w-full py-4 border-t border-stone-50">
              <div className="flex-1 text-center">
                <p className="text-lg font-bold text-stone-900">365</p>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Days Together</p>
              </div>
              <div className="w-[1px] h-8 bg-stone-100"></div>
              <div className="flex-1 text-center">
                <p className="text-lg font-bold text-stone-900">142</p>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Meals Logged</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-3">
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1 mb-2">Account Settings</h3>
        {[
          { icon: 'favorite', label: 'Couple Profile', color: 'text-accent' },
          { icon: 'notifications', label: 'Meal Reminders', color: 'text-primary' },
          { icon: 'database', label: 'Data Backup', color: 'text-blue-400' },
          { icon: 'help', label: 'Help & Support', color: 'text-stone-400' },
        ].map((item, idx) => (
          <button key={idx} className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-stone-50 hover:bg-stone-50 transition-colors shadow-sm">
            <div className="flex items-center gap-4">
              <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
              <span className="text-sm font-bold text-stone-700">{item.label}</span>
            </div>
            <span className="material-symbols-outlined text-stone-300 text-[20px]">chevron_right</span>
          </button>
        ))}

        <button className="w-full mt-6 py-4 rounded-2xl bg-white text-red-500 font-bold text-sm shadow-sm border border-red-50">
          退出登录
        </button>
      </div>

      <Navigation currentScreen={AppScreen.ME} onNavigate={onNavigate} />
    </div>
  );
};

export default ProfileScreen;
