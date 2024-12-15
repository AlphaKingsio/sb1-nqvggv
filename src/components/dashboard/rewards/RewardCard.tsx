import React from 'react';
import { Reward } from '../../../types';

interface RewardCardProps {
  reward: Reward;
}

export function RewardCard({ reward }: RewardCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-3">
      <div className="flex justify-between items-start mb-2">
        <div className="text-white font-medium">{reward.title}</div>
        <div className="text-yellow-400 font-bold">{reward.prize}</div>
      </div>
      <div className="flex justify-between text-sm">
        <div className="text-gray-400">{reward.requirement}</div>
        <div className="text-blue-400">{reward.deadline}</div>
      </div>
    </div>
  );
}