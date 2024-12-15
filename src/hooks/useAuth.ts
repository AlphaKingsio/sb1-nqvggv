import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DEFAULT_CREDENTIALS = {
  email: 'signal@gmail.com',
  password: '12345678'
};

export function useAuth() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: { email: string; password: string }) => {
    try {
      setError(null);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (credentials.email === DEFAULT_CREDENTIALS.email && 
          credentials.password === DEFAULT_CREDENTIALS.password) {
        setIsAuthenticated(true);
        navigate('/signals');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const register = async (userData: any) => {
    try {
      setError(null);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
      navigate('/signals');
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const alphaLogin = async (credentials: any) => {
    try {
      setError(null);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
      navigate('/signals');
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    isAuthenticated,
    error,
    login,
    register,
    alphaLogin
  };
}