
import React from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  return (
    <div className="bg-warm-bg-start font-display text-text-main h-full flex flex-col relative antialiased">
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-10">
        <span className="material-symbols-outlined absolute -top-10 -left-10 text-primary opacity-20 text-[180px] rotate-[-20deg]">lunch_dining</span>
        <span className="material-symbols-outlined absolute -bottom-16 -right-10 text-primary opacity-20 text-[200px] rotate-[15deg]">currency_lira</span>
      </div>

      <div className="relative flex h-full flex-col px-6 z-10">
        <div className="flex items-center p-4 pl-0 mt-4">
          <div className="text-text-main flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-orange-100/50 rounded-full transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-8 pb-10">
          <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 ring-4 ring-white shadow-sm overflow-hidden">
            <span className="material-symbols-outlined text-primary text-[48px]">skillet</span>
          </div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-center text-text-main">
            欢迎回来
          </h1>
          <p className="text-text-muted text-sm mt-2 text-center">
            记录爱与美食的每一天
          </p>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <div className="relative flex items-center group">
            <span className="absolute left-4 text-text-muted group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </span>
            <input 
              className="w-full rounded-[12px] border border-border-warm bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary h-14 pl-11 pr-4 text-base shadow-sm transition-all" 
              placeholder="请输入账号/手机号" 
              type="text" 
            />
          </div>

          <div className="relative flex items-center group">
            <span className="absolute left-4 text-text-muted group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">lock</span>
            </span>
            <input 
              className="w-full rounded-[12px] border border-border-warm bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary h-14 pl-11 pr-4 text-base shadow-sm transition-all" 
              placeholder="请输入密码" 
              type="password" 
            />
            <button className="absolute right-4 text-text-muted hover:text-text-main transition-colors">
              <span className="material-symbols-outlined text-[20px]">visibility_off</span>
            </button>
          </div>

          <div className="flex justify-end -mt-2">
            <a className="text-xs text-text-muted hover:text-primary transition-colors" href="#">忘记密码?</a>
          </div>

          <div className="pt-4">
            <button 
              onClick={onLogin}
              className="flex w-full items-center justify-center rounded-full h-14 px-5 bg-primary hover:bg-primary-hover text-white text-lg font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all"
            >
              登录
            </button>
          </div>
        </div>

        <div className="mt-auto pb-10 pt-8 text-center">
          <p className="text-text-muted text-sm font-normal">
            还没有账号？
            <a className="text-primary font-medium hover:underline ml-1" href="#">注册账号</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
