
import React, { useState, useEffect } from 'react';
import { AppScreen } from './types';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import BindScreen from './components/BindScreen';
import HomeScreen from './components/HomeScreen';
import OrderingScreen from './components/OrderingScreen';
import TimelineScreen from './components/TimelineScreen';
import ProfileScreen from './components/ProfileScreen';
import RecordCookingScreen from './components/RecordCookingScreen';
import StatsScreen from './components/StatsScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.SPLASH);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBound, setIsBound] = useState(false);

  useEffect(() => {
    if (currentScreen === AppScreen.SPLASH) {
      const timer = setTimeout(() => {
        setCurrentScreen(AppScreen.LOGIN);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen(AppScreen.BIND);
  };

  const handleBind = () => {
    setIsBound(true);
    setCurrentScreen(AppScreen.HOME);
  };

  const navigate = (screen: AppScreen) => {
    setCurrentScreen(screen);
  };

  // Simple Router based on state
  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.SPLASH:
        return <SplashScreen />;
      case AppScreen.LOGIN:
        return <LoginScreen onLogin={handleLogin} />;
      case AppScreen.BIND:
        return <BindScreen onBind={handleBind} onBack={() => setCurrentScreen(AppScreen.LOGIN)} />;
      case AppScreen.HOME:
        return <HomeScreen onNavigate={navigate} />;
      case AppScreen.ORDERING:
        return <OrderingScreen onBack={() => navigate(AppScreen.HOME)} onNavigate={navigate} />;
      case AppScreen.TIMELINE:
        return <TimelineScreen onNavigate={navigate} />;
      case AppScreen.ME:
        return <ProfileScreen onNavigate={navigate} />;
      case AppScreen.RECORD_COOKING:
        return <RecordCookingScreen onBack={() => navigate(AppScreen.HOME)} />;
      case AppScreen.STATS:
        return <StatsScreen onBack={() => navigate(AppScreen.HOME)} onNavigate={navigate} />;
      default:
        return <SplashScreen />;
    }
  };

  return (
    <div className="flex justify-center bg-stone-100 min-h-screen">
      <div className="w-full max-w-md bg-white min-h-screen shadow-xl relative overflow-hidden flex flex-col">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;
