
import React from 'react';
import { AppScreen } from '../types';
import Navigation from './Navigation';

interface HomeScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#fff7ed] font-display text-stone-800 min-h-full flex flex-col pb-28">
      <header className="flex items-center justify-between px-6 pt-8 pb-4 sticky top-0 bg-[#fff7ed]/90 backdrop-blur-sm z-20">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight text-stone-900">Couple's Kitchen</h1>
          <p className="text-xs text-stone-500 font-medium mt-0.5">Day 365 of Loving Food</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative flex items-center justify-center size-10 rounded-full bg-white shadow-sm border border-stone-100 text-stone-600">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <div 
            className="size-10 rounded-full bg-stone-200 bg-cover bg-center border-2 border-white shadow-sm"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoeA-sOq5ewoDNrGeJpjOl28p80nA4poJRrZQop74Djgqd3Pbmj2JAUOhJG0-fYtobNE5R8XGpEVYb6XYrLOa0KhIgjDRc64AvWcRdcYGoQHfWlbrUW6ClaXT4tfJk1QdMLFoaOcvbWrfQ177r2D_vNWy1q4Uv24IOlON6u6lXsdfM-33IjxkYO0QKMwKxX36gZxCtIwlQjeEypE0eFR6qPKWQfMFelujia-9OV1mHEr_nfu8xExW0-d-2xSkS2d7aFTXiO1fXgIcv")' }}
          ></div>
        </div>
      </header>

      <main className="flex-1 px-6 space-y-6">
        <section className="mt-2">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 size-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <h2 className="text-lg font-bold text-stone-800">今日概览</h2>
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Today</span>
            </div>
            <div className="flex items-center divide-x divide-stone-100">
              <div className="flex-1 flex flex-col items-center gap-1 pr-4">
                <span className="text-4xl font-extrabold text-stone-900 tracking-tight">2</span>
                <span className="text-sm font-medium text-stone-500">今日做饭</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1 pl-4">
                <span className="text-4xl font-extrabold text-stone-900 tracking-tight">1</span>
                <span className="text-sm font-medium text-stone-500">今日点餐</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => onNavigate(AppScreen.RECORD_COOKING)}
            className="col-span-1 h-44 rounded-2xl bg-[#fffbeb] p-5 flex flex-col justify-between items-start text-left shadow-sm hover:shadow-md transition-all active:scale-95 group border border-[#fef3c7]"
          >
            <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#d97706] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">skillet</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#92400e]">记录做饭</h3>
              <p className="text-xs font-medium text-[#b45309] mt-1 opacity-90">Homemade Love</p>
            </div>
          </button>
          
          <button 
            onClick={() => onNavigate(AppScreen.ORDERING)}
            className="col-span-1 h-44 rounded-2xl bg-[#fff1f2] p-5 flex flex-col justify-between items-start text-left shadow-sm hover:shadow-md transition-all active:scale-95 group border border-[#ffe4e6]"
          >
            <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#f43f5e] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">fastfood</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#9f1239]">点餐下单</h3>
              <p className="text-xs font-medium text-[#fb7185] mt-1 opacity-90">Tasty Treat</p>
            </div>
          </button>

          <button 
            onClick={() => onNavigate(AppScreen.STATS)}
            className="col-span-2 h-24 rounded-2xl bg-white p-5 flex items-center justify-between shadow-sm border border-stone-100 hover:border-stone-200 transition-all active:scale-[0.98] group"
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-500 group-hover:bg-stone-100 transition-colors">
                <span className="material-symbols-outlined text-[24px]">bar_chart</span>
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-bold text-stone-800">查看统计</h3>
                <p className="text-xs text-stone-500">View monthly trends</p>
              </div>
            </div>
            <div className="size-8 rounded-full flex items-center justify-center text-stone-300 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </button>
        </section>

        <section className="pt-2">
          <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4 px-1">最近记录</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-100">
              <div className="size-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                <span className="material-symbols-outlined text-[20px]">lunch_dining</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-stone-800 truncate">Delicious Burger</p>
                <p className="text-xs text-stone-500">Today, 12:30 PM</p>
              </div>
              <span className="text-xs font-bold text-stone-400 bg-stone-50 px-2 py-1 rounded-md">Order</span>
            </div>
            {/* More records can go here */}
          </div>
        </section>
      </main>

      <Navigation currentScreen={AppScreen.HOME} onNavigate={onNavigate} />
    </div>
  );
};

export default HomeScreen;
