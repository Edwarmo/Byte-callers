import React from 'react';
import { AuthContainer } from '../features/auth-login/AuthContainer';
import { User } from '../entities/user/model';

interface LoginPageProps {
  onLoginSuccess: (user: User, token: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => (
  <AuthContainer onLoginSuccess={onLoginSuccess} />
);