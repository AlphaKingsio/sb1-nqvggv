import { User, TwitterUser } from '../types';

const STORAGE_KEYS = {
  USER: 'alpha_kings_user',
  AUTH_TOKEN: 'alpha_kings_token',
  TWITTER_USER: 'alpha_kings_twitter'
};

export const StorageService = {
  // User storage
  saveUser: (user: User) => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },

  getUser: (): User | null => {
    const userData = localStorage.getItem(STORAGE_KEYS.USER);
    return userData ? JSON.parse(userData) : null;
  },

  // Twitter user storage
  saveTwitterUser: (user: TwitterUser) => {
    localStorage.setItem(STORAGE_KEYS.TWITTER_USER, JSON.stringify(user));
  },

  getTwitterUser: (): TwitterUser | null => {
    const userData = localStorage.getItem(STORAGE_KEYS.TWITTER_USER);
    return userData ? JSON.parse(userData) : null;
  },

  // Auth token storage
  saveAuthToken: (token: string) => {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  getAuthToken: (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  // Clear all storage
  clearStorage: () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.TWITTER_USER);
  }
};