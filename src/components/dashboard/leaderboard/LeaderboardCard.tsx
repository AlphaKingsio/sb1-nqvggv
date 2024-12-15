import React from 'react';
import { Influencer } from '../../../types';

interface LeaderboardCardProps {
  leader: Influencer;
}

export function LeaderboardCard({ leader }: LeaderboardCardProps) {
  return (
    <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
      <div className="flex items-center space-x-3">
        <div className="w-6 text-center font-bold text-yellow-400">
          #{leader.rank}
        </div>
        <img
          src={leader.avatar}
          alt={leader.name}
          className="w-8 h-8 rounded-full"
        />
        <div className="text-white font-medium">{leader.name}</div>
      </div>
      <div className="text-green-400 font-medium">{leader.profit}</div>
    </div>
  );
}