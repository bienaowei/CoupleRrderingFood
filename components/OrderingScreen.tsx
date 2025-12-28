
import React, { useState } from 'react';
import { MOCK_FOOD_ITEMS } from '../constants';
import { AppScreen } from '../types';

interface OrderingScreenProps {
  onBack: () => void;
  onNavigate: (screen: AppScreen) => void;
}

const OrderingScreen: React.FC<OrderingScreenProps> = ({ onBack, onNavigate }) => {
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const categories = ['全部', '主食', '饮品', '小吃', '甜点'];
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[id] > 1) {
        newCart[id] -= 1;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, count]) => {
    const item = MOCK_FOOD_ITEMS.find(i => i.id === id);
    return sum + (item?.price || 0) * count;
  }, 0);

  const filteredItems = selectedCategory === '全部' 
    ? MOCK_FOOD_ITEMS 
    : MOCK_FOOD_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-warm-bg-start min-h-full flex flex-col antialiased">
      <div className="sticky top-0 z-30 flex items-center bg-white/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-stone-200/50">
        <button onClick={onBack} className="text-stone-900 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-stone-100 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-stone-900 text-lg font-bold flex-1 text-center pr-10">点餐</h2>
      </div>

      <div className="sticky top-[60px] z-20 bg-white/95 backdrop-blur-sm pt-2 pb-4">
        <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar snap-x">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`snap-start flex h-9 shrink-0 items-center justify-center px-5 rounded-full text-sm font-bold transition-all ${
                selectedCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white border border-stone-100 text-stone-600 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-4 pb-28 flex flex-col gap-4 mt-2">
        {filteredItems.map(item => (
          <div key={item.id} className="group flex items-center justify-between gap-4 rounded-2xl bg-white p-3 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/20">
            <div 
              className="w-24 h-24 shrink-0 rounded-xl bg-stone-200 bg-center bg-cover overflow-hidden" 
              style={{ backgroundImage: `url("${item.image}")` }}
            ></div>
            <div className="flex flex-col justify-between flex-1 h-24 py-1">
              <div>
                <h3 className="text-stone-900 text-base font-bold leading-tight line-clamp-1">{item.name}</h3>
                <p className="text-stone-400 text-xs mt-1 line-clamp-2">{item.description}</p>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-primary">¥</span>
                  <span className="text-lg font-bold text-primary">{item.price.toFixed(2)}</span>
                </div>
                {cart[item.id] ? (
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center justify-center w-7 h-7 rounded-full border border-stone-300 text-stone-500 active:scale-90 transition-transform"
                    >
                      <span className="material-symbols-outlined text-[18px]">remove</span>
                    </button>
                    <span className="text-sm font-bold text-stone-900 w-2 text-center">{cart[item.id]}</span>
                    <button 
                      onClick={() => addToCart(item.id)}
                      className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white shadow-lg active:scale-90 transition-transform"
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => addToCart(item.id)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow-lg shadow-primary/30 active:scale-90 transition-transform"
                  >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <div className="max-w-md mx-auto relative px-4 pb-6 pt-2">
            <div className="relative flex items-center justify-between bg-white rounded-full shadow-2xl border border-stone-100 p-2 pr-2 pl-2 animate-fade-in-up">
              <div className="flex items-center gap-4 pl-1 flex-1 cursor-pointer group">
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-800 text-white group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">shopping_cart</span>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 min-w-[20px] px-1 flex items-center justify-center rounded-full border-2 border-white">
                    {totalItems}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-stone-500 font-medium">合计金额</span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-sm font-bold text-stone-900">¥</span>
                    <span className="text-xl font-bold text-stone-900">{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => onNavigate(AppScreen.HOME)}
                className="h-12 px-8 bg-primary hover:bg-primary-hover text-white text-base font-bold rounded-full shadow-lg transition-all flex items-center gap-1"
              >
                <span>去结算</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderingScreen;
