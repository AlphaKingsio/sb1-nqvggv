import React from 'react';
import { Twitter, Trophy, Users, TrendingUp } from 'lucide-react';
import { AlphaCaller } from '../../types';

interface AlphaCallerCardProps {
  caller: AlphaCaller;
  onClick: () => void;
}

export function AlphaCallerCard({ caller, onClick }: AlphaCallerCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-6 cursor-pointer hover:border-blue-400/50 transition-all"
    >
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={caller.avatar}
          alt={caller.name}
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />
        <div>
          <h3 className="text-xl font-bold text-white">{caller.name}</h3>
          <a
            href={`https://twitter.com/${caller.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Twitter size={16} />
            <span>@{caller.twitter}</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-800/50 rounded-lg p-3">
          <div className="text-gray-400 text-sm mb-1">Success Rate</div>
          <div className="text-green-400 font-medium flex items-center">
            <Trophy size={16} className="mr-1" />
            {caller.successRate}
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-3">
          <div className="text-gray-400 text-sm mb-1">Followers</div>
          <div className="text-blue-400 font-medium flex items-center">
            <Users size={16} className="mr-1" />
            {caller.followers}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-gray-400">
          <span className="text-white font-medium">${caller.subscriptionFee}</span> /month
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            // Handle follow action
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Follow
        </button>
      </div>
    </div>
  );
}