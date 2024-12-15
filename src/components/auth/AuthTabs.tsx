import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { AlphaLoginForm } from './AlphaLoginForm';

type TabType = 'user' | 'alpha' | 'register';

interface AuthTabsProps {
  onSuccess?: () => void;
}

export function AuthTabs({ onSuccess }: AuthTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('user');

  const tabs: { key: TabType; label: string }[] = [
    { key: 'user', label: 'User Login' },
    { key: 'alpha', label: 'Alpha Login' },
    { key: 'register', label: 'Register' }
  ];

  return (
    <div className="bg-[#1a1b1e] rounded-xl">
      <div className="flex space-x-1 mb-4">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 px-3 py-2 text-sm rounded-lg transition-colors ${
              activeTab === key
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="p-2">
        {activeTab === 'user' && <LoginForm onSuccess={onSuccess} />}
        {activeTab === 'alpha' && <AlphaLoginForm onSuccess={onSuccess} />}
        {activeTab === 'register' && <RegisterForm onSuccess={onSuccess} />}
      </div>
    </div>
  );
}