import React, { useState, useCallback } from 'react';
import './App.css';
import { StatusBar } from 'expo-status-bar';
import LandingPage from './src/clientPortal/views/LandingPage';
import { LoginPage } from './src/pages/LoginPage';
import { CallCenterPage } from './src/pages/CallCenterPage';
import { User } from './src/business/entities/user/model';

export default function App() {
  const [currentView, setCurrentView] = useState<'public' | 'login' | 'app'>('public');
  const [auth, setAuth] = useState<{ user: User | null; token: string | null; isAuthenticated: boolean }>({
    user: null,
    token: null,
    isAuthenticated: false,
  });

  const handleLoginSuccess = useCallback((user: User, token: string) => {
    setAuth({ user, token, isAuthenticated: true });
    setCurrentView('app');
  }, []);

  const handleLogout = useCallback(() => {
    setAuth({ user: null, token: null, isAuthenticated: false });
    setCurrentView('public');
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'public':
        return <LandingPage onNavigate={setCurrentView} />;
      case 'login':
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'app':
        return <CallCenterPage user={auth.user} onLogout={handleLogout} />;
      default:
        return <LandingPage onNavigate={setCurrentView} />;
    }
  };

  return (
    <>
      {renderView()}
      <StatusBar style="auto" />
    </>
  );
}
