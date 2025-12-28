
import React from 'react';

interface BindScreenProps {
  onBind: () => void;
  onBack: () => void;
}

const BindScreen: React.FC<BindScreenProps> = ({ onBind, onBack }) => {
  return (
    <div className="bg-warm-bg-start h-full flex flex-col relative antialiased">
      <header className="flex items-center justify-between px-4 py-4 pt-8 sticky top-0 z-10 bg-warm-bg-start/80 backdrop-blur-md">
        <button onClick={onBack} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-stone-100 transition-colors text-stone-500">
          <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
        </button>
        <h2 className="text-stone-800 text-lg font-bold">情侣绑定</h2>
        <div className="w-10"></div> 
      </header>

      <main className="flex-1 px-6 pb-8 flex flex-col items-center gap-8 z-10">
        <div className="flex flex-col items-center gap-4 mt-4 w-full">
          <div className="relative">
            <div 
              className="rounded-full h-28 w-28 ring-4 ring-white shadow-lg bg-cover bg-center" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAX8V3Xfx86pCgPjowyIOCxB5BiB4JX7AvnNj99NU0uNx6fXj1ZGaq2cGUFNimrwGtixv4kLXS1DhFCOQllotv2WT2IcWLtkjimQw9WNAylMbFqhaurs9ulR53jZ4BC5dUPq9gq1TvxClnJtWvC8vuhXg1BUyy7ZOwB-WyC6ExrBWKazgtAadYyC1AUki_NlNZCuzVDE9Xn4DlvIYd3hpvP0bjzK_pO-L0F7F8UNiNrcXAJdf-bzDpJbcR1x2EkjDYV3himK3tW5S1l")' }}
            ></div>
            <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-1.5 ring-4 ring-white shadow-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">edit</span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-stone-900 text-2xl font-bold">一罐可乐</h1>
            <p className="text-stone-500 text-sm font-medium mt-1 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-sm text-primary fill-current">favorite</span>
              一起记录甜蜜日常
            </p>
          </div>
        </div>

        <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col items-center gap-4 relative overflow-hidden">
          <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase">
            <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
            我的情侣码
          </div>
          <div className="text-4xl font-extrabold text-stone-800 tracking-[0.15em] font-mono py-2">
            839 201
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary-hover font-bold transition-all text-sm">
            <span className="material-symbols-outlined text-[18px]">content_copy</span>
            复制情侣码
          </button>
        </div>

        <div className="relative w-full flex items-center justify-center py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200"></div>
          </div>
          <span className="relative bg-warm-bg-start px-4 text-xs text-stone-400 font-medium uppercase tracking-wider">或者</span>
        </div>

        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-stone-700 ml-2" htmlFor="partner-code">绑定另一半</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-stone-400 group-focus-within:text-primary transition-colors">favorite</span>
              </div>
              <input 
                className="block w-full rounded-full border-0 py-4 pl-12 pr-4 text-stone-900 shadow-sm ring-1 ring-stone-200 placeholder:text-stone-400 focus:ring-2 focus:ring-primary sm:text-sm transition-all" 
                placeholder="输入TA的情侣码" 
                type="text" 
              />
            </div>
          </div>
          <button 
            onClick={onBind}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-base h-14 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined">link</span>
            <span>立即绑定</span>
          </button>
        </div>
      </main>

      <footer className="p-6 text-center">
        <p className="text-xs text-stone-400 font-medium">请先绑定情侣后再开始记录</p>
      </footer>
    </div>
  );
};

export default BindScreen;
