import React from 'react';
import { AuthContainer } from '../components/auth/AuthContainer';
import { User } from '../types/Auth';

interface LoginPageProps {
  onLoginSuccess: (user: User, token: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => (
  <AuthContainer onLoginSuccess={onLoginSuccess} />
);