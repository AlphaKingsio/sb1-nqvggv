import React from 'react';
import { Gift } from 'lucide-react';
import { RewardCard } from '../rewards/RewardCard';
import { Reward } from '../../../types';

const rewards: Reward[] = [
  {
    id: 1,
    title: 'Top Signal Provider',
    prize: '$10,000',
    requirement: '95%+ accuracy',
    deadline: '7 days left'
  },
  {
    id: 2,
    title: 'Community Choice',
    prize: '$5,000',
    requirement: 'Most followed',
    deadline: '15 days left'
  },
  {
    id: 3,
    title: 'Rising Star',
    prize: '$2,500',
    requirement: 'New members',
    deadline: '20 days left'
  }
];

export function Rewards() {
  return (
    <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Gift className="text-pink-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Active Rewards</h3>
      </div>
      <div className="space-y-3">
        {rewards.map((reward) => (
          <RewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </div>
  );
}