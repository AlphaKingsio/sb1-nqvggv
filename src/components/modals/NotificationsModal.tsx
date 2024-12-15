import React from 'react';
import { X, Bell, TrendingUp, TrendingDown, Gift, Star } from 'lucide-react';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications = [
  {
    id: 1,
    type: 'signal',
    title: 'New BTC Signal',
    message: 'Buy signal triggered for Bitcoin at $48,234',
    time: '5 minutes ago',
    action: 'BUY'
  },
  {
    id: 2,
    type: 'reward',
    title: 'Achievement Unlocked',
    message: 'You\'ve earned the "Top Trader" badge',
    time: '1 hour ago'
  },
  {
    id: 3,
    type: 'signal',
    title: 'ETH Signal Update',
    message: 'Take profit target reached at $2,890',
    time: '2 hours ago',
    action: 'SELL'
  }
];

export function NotificationsModal({ isOpen, onClose }: NotificationsModalProps) {
  if (!isOpen) return null;

  const getIcon = (type: string, action?: string) => {
    switch (type) {
      case 'signal':
        return action === 'BUY' ? (
          <TrendingUp className="text-green-400" size={20} />
        ) : (
          <TrendingDown className="text-red-400" size={20} />
        );
      case 'reward':
        return <Gift className="text-purple-400" size={20} />;
      default:
        return <Star className="text-yellow-400" size={20} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <Bell className="text-blue-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Notifications</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-gray-800/50 rounded-xl p-4 flex items-start space-x-3"
              >
                {getIcon(notification.type, notification.action)}
                <div className="flex-1">
                  <div className="text-white font-medium">{notification.title}</div>
                  <div className="text-gray-400 text-sm">{notification.message}</div>
                  <div className="text-gray-500 text-xs mt-1">{notification.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}