import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { User } from '../../types/Auth';

interface AuthContainerProps {
  onLoginSuccess: (user: User, token: string) => void;
}

export const AuthContainer: React.FC<AuthContainerProps> = ({ onLoginSuccess }) => {
  const [currentView, setCurrentView] = useState<'login' | 'register'>('login');

  const switchToRegister = () => setCurrentView('register');
  const switchToLogin = () => setCurrentView('login');

  return currentView === 'login' ? (
    <LoginForm 
      onLoginSuccess={onLoginSuccess} 
      onSwitchToRegister={switchToRegister} 
    />
  ) : (
    <RegisterForm 
      onSwitchToLogin={switchToLogin} 
    />
  );
};