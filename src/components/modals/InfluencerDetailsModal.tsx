import React from 'react';
import { X, Trophy, TrendingUp, Users, Star } from 'lucide-react';
import { Influencer } from '../../types';

interface InfluencerDetailsModalProps {
  influencer: Influencer | null;
  isOpen: boolean;
  onClose: () => void;
}

export function InfluencerDetailsModal({ influencer, isOpen, onClose }: InfluencerDetailsModalProps) {
  if (!isOpen || !influencer) return null;

  const recentSignals = [
    { name: 'Bitcoin', profit: '+12.5%', date: '2024-03-15' },
    { name: 'Ethereum', profit: '+8.3%', date: '2024-03-14' },
    { name: 'Solana', profit: '+15.7%', date: '2024-03-13' }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Influencer Profile</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Profile Header */}
            <div className="flex items-center space-x-4">
              <img
                src={influencer.avatar}
                alt={influencer.name}
                className="w-20 h-20 rounded-full border-2 border-blue-500"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{influencer.name}</h3>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users size={16} />
                    <span>{influencer.followers}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-green-400">
                    <TrendingUp size={16} />
                    <span>{influencer.winRate || influencer.accuracy}</span>
                  </div>
                </div>
              </div>
              <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                Follow
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Total Signals</div>
                <div className="text-white font-medium text-lg">{influencer.signals || '1,250+'}</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Success Rate</div>
                <div className="text-green-400 font-medium text-lg">{influencer.accuracy || '94%'}</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Ranking</div>
                <div className="text-yellow-400 font-medium text-lg">#{influencer.rank || '1'}</div>
              </div>
            </div>

            {/* Recent Signals */}
            <div>
              <h4 className="text-white font-medium mb-3 flex items-center space-x-2">
                <Star className="text-yellow-400" size={18} />
                <span>Recent Signals</span>
              </h4>
              <div className="space-y-3">
                {recentSignals.map((signal, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 rounded-lg p-3 flex items-center justify-between"
                  >
                    <div className="text-white">{signal.name}</div>
                    <div className="flex items-center text-green-400">
                      <TrendingUp size={16} className="mr-1" />
                      {signal.profit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}