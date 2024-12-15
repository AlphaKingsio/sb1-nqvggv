import React from 'react';
import { Gift } from 'lucide-react';

export function Rewards() {
  const rewards = [
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

  return (
    <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Gift className="text-pink-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Active Rewards</h3>
      </div>
      <div className="space-y-3">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="bg-gray-800/50 rounded-lg p-3"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="text-white font-medium">{reward.title}</div>
              <div className="text-yellow-400 font-bold">{reward.prize}</div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-gray-400">{reward.requirement}</div>
              <div className="text-blue-400">{reward.deadline}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}