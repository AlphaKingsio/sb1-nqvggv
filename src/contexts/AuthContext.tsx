import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (userData: any) => Promise<void>;
  alphaLogin: (credentials: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEFAULT_CREDENTIALS = {
  email: 'signal@gmail.com',
  password: '12345678'
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = useCallback(async (credentials: { email: string; password: string }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (credentials.email === DEFAULT_CREDENTIALS.email && 
          credentials.password === DEFAULT_CREDENTIALS.password) {
        setIsAuthenticated(true);
        navigate('/signals');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }, [navigate]);

  const register = useCallback(async (userData: any) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
      navigate('/signals');
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  }, [navigate]);

  const alphaLogin = useCallback(async (credentials: any) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
      navigate('/signals');
    } catch (error) {
      console.error('Alpha login error:', error);
      throw error;
    }
  }, [navigate]);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    navigate('/');
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, alphaLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}