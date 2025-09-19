import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { LoginForm } from '../components/LoginForm';
import { AuthController } from '../controllers/AuthController';
import { User } from '../types/Auth';
import { Layout } from '../components/ui';

interface LoginViewProps {
  onLoginSuccess: (user: User, token: string) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    try {
      const user = await AuthController.getCurrentUser();
      if (user) {
        // Si hay una sesión activa, redirigir automáticamente
        onLoginSuccess(user, 'existing_token');
      }
    } catch (error) {
      console.log('No existing session');
    } finally {
      setIsLoading(false);
    }
  };



  if (isLoading) {
    return <View style={styles.container} />;
  }

  return (
    <Layout user={null} onLogout={() => {}} showHeader={false}>
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </Layout>
  );
};

const styles = StyleSheet.create({});