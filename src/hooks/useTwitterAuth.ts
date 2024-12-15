import { useState, useCallback } from 'react';
import { TwitterService } from '../services/twitter';
import { StorageService } from '../services/storage';
import { useAuth } from '../contexts/AuthContext';
import { TwitterUser } from '../types';

export function useTwitterAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleTwitterLogin = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Initialize Twitter OAuth
      TwitterService.initializeAuth();
    } catch (err) {
      setError('Failed to initialize Twitter login');
      console.error('Twitter login error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleTwitterCallback = useCallback(async (code: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Handle OAuth callback
      const twitterUser = await TwitterService.handleCallback(code);
      
      // Save Twitter user data
      StorageService.saveTwitterUser(twitterUser);

      // Login with Twitter user
      await login({
        email: `${twitterUser.username}@twitter.com`,
        password: twitterUser.id, // In real implementation, use tokens instead
        provider: 'twitter'
      });

      return twitterUser;
    } catch (err) {
      setError('Failed to complete Twitter login');
      console.error('Twitter callback error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [login]);

  return {
    handleTwitterLogin,
    handleTwitterCallback,
    isLoading,
    error
  };
}