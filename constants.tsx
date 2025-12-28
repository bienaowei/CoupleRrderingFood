
import { FoodItem, Record } from './types';

export const MOCK_FOOD_ITEMS: FoodItem[] = [
  {
    id: '1',
    name: '红烧牛肉面',
    description: '经典风味，大块牛肉，汤浓味鲜。',
    price: 28,
    image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=400',
    category: '主食'
  },
  {
    id: '2',
    name: '珍珠奶茶',
    description: 'Q弹珍珠，香浓奶茶，夏日必备。',
    price: 12,
    image: 'https://images.unsplash.com/photo-1544787210-2213d84ad960?q=80&w=400',
    category: '饮品'
  },
  {
    id: '3',
    name: '脆皮炸鸡块',
    description: '外酥里嫩，配番茄酱。',
    price: 18,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=400',
    category: '小吃'
  },
  {
    id: '4',
    name: '意式提拉米苏',
    description: '甜蜜浪漫，入口即化。',
    price: 22,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=400',
    category: '甜点'
  },
  {
    id: '5',
    name: '鲜榨橙汁',
    description: '百分百纯果汁，无添加。',
    price: 15,
    image: 'https://images.unsplash.com/photo-1600271886382-d51b13299c33?q=80&w=400',
    category: '饮品'
  }
];

export const MOCK_RECORDS: Record[] = [
  {
    id: 'r1',
    user: { name: 'Sarah', avatar: 'https://picsum.photos/id/64/100/100' },
    type: 'cooking',
    title: 'Homemade Pesto Pasta',
    date: 'Today 19:30',
    description: 'Finally mastered the basil-to-pine-nut ratio! John loved it. 🌿',
    images: ['https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=500']
  },
  {
    id: 'r2',
    user: { name: 'John', avatar: 'https://picsum.photos/id/91/100/100' },
    type: 'ordering',
    title: 'Double Cheeseburger Set',
    date: 'Yesterday 12:45',
    description: 'Cheat day! Ordered from that new spot on 5th Ave. The fries were crispy! 🍟',
    images: ['https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400', 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=400']
  },
  {
    id: 'r3',
    user: { name: 'Sarah', avatar: 'https://picsum.photos/id/64/100/100' },
    type: 'cooking',
    title: 'Sunday Brunch',
    date: 'Mon, 09:00',
    description: 'Big breakfast to start the week right! Tried making poached eggs for the first time.',
    images: [
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=300',
      'https://images.unsplash.com/photo-1484723088339-fe2a7a8f1d11?q=80&w=300',
      'https://images.unsplash.com/photo-1525811902-f23426213fd0?q=80&w=300'
    ]
  }
];
