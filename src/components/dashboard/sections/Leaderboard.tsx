import React from 'react';
import { Medal } from 'lucide-react';
import { LeaderboardCard } from '../leaderboard/LeaderboardCard';
import { Influencer } from '../../../types';

const leaders: Influencer[] = [
  {
    id: 1,
    name: 'Trading Master',
    profit: '+$458.2K',
    rank: 1,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=32&h=32&q=80'
  },
  {
    id: 2,
    name: 'Crypto Sage',
    profit: '+$385.9K',
    rank: 2,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=32&h=32&q=80'
  },
  {
    id: 3,
    name: 'Alpha Finder',
    profit: '+$298.5K',
    rank: 3,
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=32&h=32&q=80'
  }
];

export function Leaderboard() {
  return (
    <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Medal className="text-blue-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Monthly Leaderboard</h3>
      </div>
      <div className="space-y-3">
        {leaders.map((leader) => (
          <LeaderboardCard key={leader.id} leader={leader} />
        ))}
      </div>
    </div>
  );
}