import React from 'react';
import { X, Twitter, Trophy, Users, TrendingUp, Star } from 'lucide-react';
import { AlphaCaller } from '../../types';

interface AlphaCallerModalProps {
  caller: AlphaCaller | null;
  isOpen: boolean;
  onClose: () => void;
}

export function AlphaCallerModal({ caller, isOpen, onClose }: AlphaCallerModalProps) {
  if (!isOpen || !caller) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Alpha Caller Profile</h2>
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
                src={caller.avatar}
                alt={caller.name}
                className="w-24 h-24 rounded-full border-2 border-blue-500"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{caller.name}</h3>
                <a
                  href={`https://twitter.com/${caller.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                >
                  <Twitter size={18} />
                  <span>@{caller.twitter}</span>
                </a>
              </div>
              <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                Follow
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Success Rate</div>
                <div className="text-green-400 font-medium text-lg flex items-center">
                  <Trophy size={18} className="mr-1" />
                  {caller.successRate}
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Followers</div>
                <div className="text-blue-400 font-medium text-lg flex items-center">
                  <Users size={18} className="mr-1" />
                  {caller.followers}
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Monthly Fee</div>
                <div className="text-white font-medium text-lg">
                  ${caller.subscriptionFee}
                </div>
              </div>
            </div>

            {/* Recent Signals */}
            <div>
              <h4 className="text-white font-medium mb-3 flex items-center space-x-2">
                <Star className="text-yellow-400" size={18} />
                <span>Recent Signals</span>
              </h4>
              <div className="space-y-3">
                {caller.recentSignals.map((signal, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 rounded-lg p-3 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-white font-medium">{signal.name}</div>
                      <div className="text-gray-400 text-sm">{signal.date}</div>
                    </div>
                    <div className="text-green-400 flex items-center">
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