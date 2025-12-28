
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-gradient-to-b from-warm-bg-start via-warm-bg-mid to-warm-bg-end">
      <div className="absolute inset-0 pattern-overlay pointer-events-none"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-20">
        <span className="material-symbols-outlined absolute top-[10%] left-[10%] text-primary animate-float-slow text-4xl rotate-12">lunch_dining</span>
        <span className="material-symbols-outlined absolute top-[40%] right-[15%] text-accent animate-float-medium text-3xl -rotate-12">lunch_dining</span>
        <span className="material-symbols-outlined absolute bottom-[20%] left-[20%] text-orange-300 animate-float-fast text-5xl rotate-45">lunch_dining</span>
        <span className="material-symbols-outlined absolute top-[20%] right-[25%] text-orange-400 animate-float-medium text-4xl rotate-45">set_meal</span>
        <span className="material-symbols-outlined absolute top-[60%] left-[5%] text-primary animate-float-slow text-3xl -rotate-45">set_meal</span>
        <span className="material-symbols-outlined absolute bottom-[10%] right-[30%] text-accent animate-float-fast text-4xl rotate-12">set_meal</span>
      </div>

      <div className="z-10 flex flex-1 flex-col items-center justify-center p-6">
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full transform scale-125"></div>
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-xl shadow-orange-200/50 ring-4 ring-white">
            <div className="flex flex-col items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[64px] leading-none">skillet</span>
              <span className="material-symbols-outlined text-[32px] -mt-2 text-accent fill-current">favorite</span>
            </div>
            <div className="absolute top-0 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg ring-4 ring-white">
              <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center max-w-sm animate-fade-in-up">
          <h1 className="text-[#4a3b32] tracking-tight text-[32px] font-bold leading-tight">
            Love & Kitchen
          </h1>
          <p className="text-[#8c7b70] text-lg font-medium leading-relaxed">
            记录生活的点点滴滴
          </p>
        </div>

        <div className="mt-16 flex items-center justify-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="h-2.5 w-2.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="h-2.5 w-2.5 rounded-full bg-primary/30 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      <div className="z-10 pb-8 pt-4 text-center">
        <p className="text-[#a8998e] text-sm font-normal">v1.0.0</p>
      </div>
    </div>
  );
};

export default SplashScreen;
