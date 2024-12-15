export interface User {
  id: string;
  email: string;
  username: string;
  provider?: 'email' | 'twitter';
}

export interface TwitterUser {
  id: string;
  username: string;
  displayName: string;
  profileImageUrl: string;
  verified: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  provider?: 'email' | 'twitter';
}