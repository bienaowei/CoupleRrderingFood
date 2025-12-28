
export enum AppScreen {
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  BIND = 'BIND',
  HOME = 'HOME',
  ORDERING = 'ORDERING',
  TIMELINE = 'TIMELINE',
  ME = 'ME',
  RECORD_COOKING = 'RECORD_COOKING',
  STATS = 'STATS',
}

export type MealType = 'breakfast' | 'lunch' | 'dinner';

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Record {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  type: 'cooking' | 'ordering';
  title: string;
  date: string;
  description: string;
  images: string[];
}
