import React, { useState } from 'react';
import { LineChart, Bell, Search, Briefcase, Users, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ConnectWallet } from './ConnectWallet';
import { NotificationsModal } from './modals/NotificationsModal';
import { AuthModal } from './modals/AuthModal';
import { useAuth } from '../contexts/AuthContext';

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  
  const navigationLinks = [
    { icon: LineChart, label: 'Signals', path: '/signals' },
    { icon: Users, label: 'Alpha Callers', path: '/alpha-callers' },
    { icon: Briefcase, label: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <header className="bg-[#1a1b1e] text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <LineChart size={32} className="text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alpha Kings
            </span>
          </Link>

          {isAuthenticated && (
            <nav className="hidden md:flex items-center space-x-6">
              {navigationLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 transition-colors ${
                    location.pathname === path
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          )}

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search signals..."
                    className="w-64 bg-gray-800 text-gray-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
                
                <button
                  onClick={() => setShowNotifications(true)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors relative"
                >
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full"></span>
                </button>
                
                <ConnectWallet />

                <Link
                  to="/profile"
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <UserCircle size={20} />
                </Link>

                <button
                  onClick={logout}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>

      <NotificationsModal
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </header>
  );
}