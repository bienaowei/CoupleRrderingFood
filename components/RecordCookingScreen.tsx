
import React, { useState } from 'react';

interface RecordCookingScreenProps {
  onBack: () => void;
}

const RecordCookingScreen: React.FC<RecordCookingScreenProps> = ({ onBack }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mealType, setMealType] = useState('lunch');
  const [image, setImage] = useState<string | null>(null);

  const handleCapture = () => {
    // Simulate camera capture
    setImage('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600');
  };

  return (
    <div className="bg-white min-h-full flex flex-col antialiased font-display">
      <header className="flex items-center justify-between px-4 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-20 border-b border-stone-100">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full hover:bg-stone-100 transition-colors text-stone-800">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <h2 className="text-stone-900 text-lg font-bold">记录做饭</h2>
        <button 
          className="px-5 py-2 bg-primary text-white rounded-full font-bold text-sm disabled:opacity-50"
          disabled={!title || !image}
          onClick={onBack}
        >
          发布
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <section className="flex flex-col gap-4">
          <div 
            onClick={handleCapture}
            className="w-full aspect-square rounded-3xl bg-stone-50 border-2 border-dashed border-stone-200 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors overflow-hidden group relative"
          >
            {image ? (
              <>
                <img src={image} className="w-full h-full object-cover" alt="Meal" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold bg-black/40 px-4 py-2 rounded-full text-xs">重新拍摄</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-2 text-stone-400 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[48px]">add_a_photo</span>
                <span className="text-sm font-bold">添加一张美食图片</span>
              </div>
            )}
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">餐食类型</label>
            <div className="flex gap-2">
              {['breakfast', 'lunch', 'dinner', 'snack'].map(type => (
                <button
                  key={type}
                  onClick={() => setMealType(type)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold capitalize transition-all border ${
                    mealType === type 
                      ? 'bg-primary/10 border-primary text-primary shadow-sm' 
                      : 'bg-white border-stone-100 text-stone-500'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">菜品名称</label>
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="这道菜叫什么名字？"
              className="w-full px-4 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-primary/20 text-stone-900 font-medium placeholder:text-stone-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">厨神心得</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="记录一下烹饪过程或者口味评价..."
              className="w-full px-4 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-primary/20 text-stone-900 font-medium placeholder:text-stone-300 resize-none"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default RecordCookingScreen;
