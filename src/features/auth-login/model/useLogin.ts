import { useState, useCallback } from 'react';
import { User, LoginCredentials } from '../../../entities/user';
import { validatePhoneNumber, validatePassword } from '../../../shared/lib/validation';
import { StorageUtils } from '../../../shared/lib/storage';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (credentials: LoginCredentials): Promise<{ success: boolean; user?: User; token?: string }> => {
    setIsLoading(true);
    setError(null);

    try {
      // Validaciones
      const phoneValidation = validatePhoneNumber(credentials.phoneNumber);
      if (!phoneValidation.isValid) {
        setError(phoneValidation.message);
        return { success: false };
      }

      const passwordValidation = validatePassword(credentials.password);
      if (!passwordValidation.isValid) {
        setError(passwordValidation.message);
        return { success: false };
      }

      // Simular fetch a BD
      await new Promise(resolve => setTimeout(resolve, 500));
      
      let user = await getUserByPhone(credentials.phoneNumber);
      
      if (!user) {
        user = await createNewUser(credentials.phoneNumber, credentials.password);
        const token = generateToken(user);
        return { success: true, user, token };
      }

      // Verificar contraseña
      const isValidPassword = await verifyPassword(credentials.password, user.phoneNumber);
      
      if (!isValidPassword) {
        setError('Credenciales incorrectas');
        return { success: false };
      }

      const token = generateToken(user);
      return { success: true, user, token };

    } catch (err) {
      setError('Error de conexión');
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { login, isLoading, error };
};

// Funciones auxiliares
const getUserByPhone = async (phoneNumber: string): Promise<User | null> => {
  try {
    const userData = await StorageUtils.getItem(`user_${phoneNumber}`);
    return userData ? JSON.parse(userData) : null;
  } catch {
    return null;
  }
};

const createNewUser = async (phoneNumber: string, password: string): Promise<User> => {
  const user: User = {
    id: `user_${Date.now()}`,
    phoneNumber,
    role: 'agent',
    isBlocked: false,
    failedAttempts: 0
  };
  
  await StorageUtils.setItem(`user_${phoneNumber}`, JSON.stringify(user));
  await StorageUtils.setSecureItem(`password_${phoneNumber}`, password);
  
  return user;
};

const verifyPassword = async (password: string, phoneNumber: string): Promise<boolean> => {
  try {
    const storedPassword = await StorageUtils.getSecureItem(`password_${phoneNumber}`);
    return storedPassword === password;
  } catch {
    return false;
  }
};

const generateToken = (user: User): string => {
  return `token_${user.id}_${Date.now()}`;
};