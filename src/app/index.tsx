import React, { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { CallCenterPage } from '../pages/CallCenterPage';
import CorporatePage from '../pages/CorporatePage';
import HomesPage from '../pages/HomesPage';
import BusinessPage from '../pages/BusinessPage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import { User } from '../types/Auth';

export default function App() {
  const [currentView, setCurrentView] = useState<'public' | 'login' | 'app' | 'corporate' | 'homes' | 'business' | 'about' | 'services' | 'contact'>('corporate');
  
  const handleNavigate = (view: 'public' | 'login' | 'app' | 'corporate' | 'homes' | 'business' | 'about' | 'services' | 'contact') => {
    setCurrentView(view);
  };
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
      case 'corporate':
        return <CorporatePage onNavigate={handleNavigate} />;
      case 'homes':
        return <HomesPage onNavigate={handleNavigate} />;
      case 'business':
        return <BusinessPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <CorporatePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {renderView()}
      <StatusBar style="auto" />
    </>
  );
}