import React from 'react';
import { X, Twitter, MessageCircle, Send } from 'lucide-react';

interface SocialConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SocialConnectModal({ isOpen, onClose }: SocialConnectModalProps) {
  if (!isOpen) return null;

  const socialPlatforms = [
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'text-[#1DA1F2]',
      description: 'Connect your Twitter account to share signals and grow your following',
      action: 'Connect Twitter'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      color: 'text-[#5865F2]',
      description: 'Join our Discord community for real-time discussions and updates',
      action: 'Join Discord'
    },
    {
      name: 'Telegram',
      icon: Send,
      color: 'text-[#0088cc]',
      description: 'Follow our Telegram channel for instant signal notifications',
      action: 'Join Telegram'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Connect Social Accounts</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-4">
            {socialPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-gray-800/50 rounded-xl p-6 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <platform.icon className={`${platform.color}`} size={32} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{platform.name}</h3>
                    <p className="text-gray-400">{platform.description}</p>
                  </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                  {platform.action}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-center">
              Connecting your social accounts helps you grow your following and reach more traders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}