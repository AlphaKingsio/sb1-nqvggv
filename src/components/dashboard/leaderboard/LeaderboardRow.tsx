import React from 'react';
import { Influencer } from '../../../types';

interface LeaderboardRowProps {
  leader: Influencer;
  position: number;
}

export function LeaderboardRow({ leader, position }: LeaderboardRowProps) {
  return (
    <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
      <div className="flex items-center space-x-3">
        <div className={`w-6 text-center font-bold ${
          position === 1 ? 'text-yellow-400' :
          position === 2 ? 'text-gray-300' :
          position === 3 ? 'text-amber-600' :
          'text-gray-400'
        }`}>
          #{position}
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