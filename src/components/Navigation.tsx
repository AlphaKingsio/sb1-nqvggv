import React from 'react';
import { Gift, Ticket, Sparkles, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  const menuItems = [
    { icon: Sparkles, label: 'Airdrops', path: '/airdrops' },
    { icon: Gift, label: 'Giveaways', path: '/giveaways' },
    { icon: Ticket, label: 'Whitelists', path: '/whitelists' },
    { icon: Briefcase, label: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <nav className="bg-[#1a1b1e] border border-gray-800 rounded-lg p-2 flex space-x-2">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            location.pathname === item.path
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-800 text-gray-400'
          }`}
        >
          <item.icon size={18} />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}