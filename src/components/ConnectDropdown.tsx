import React, { useState, useRef, useEffect } from 'react';
import { Wallet, Gift, Ticket, Sparkles, Briefcase, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ConnectDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { icon: Sparkles, label: 'Airdrops', path: '/airdrops' },
    { icon: Gift, label: 'Giveaways', path: '/giveaways' },
    { icon: Ticket, label: 'Whitelists', path: '/whitelists' },
    { icon: Briefcase, label: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
      >
        <Wallet size={20} />
        <span>Connect</span>
        <ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#1a1b1e] border border-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors"
            >
              <item.icon size={18} className="text-blue-400" />
              <span className="text-gray-200">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}