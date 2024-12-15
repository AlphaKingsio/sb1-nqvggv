import React from 'react';
import { Users } from 'lucide-react';
import { InfluencerCard } from '../influencers/InfluencerCard';
import { Influencer } from '../../../types';

const influencers: Influencer[] = [
  {
    id: 1,
    name: 'CryptoWhale',
    followers: '125K',
    winRate: '92%',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32&q=80'
  },
  {
    id: 2,
    name: 'NFTHunter',
    followers: '89K',
    winRate: '88%',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32&q=80'
  },
  {
    id: 3,
    name: 'AlphaSeeker',
    followers: '67K',
    winRate: '85%',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=32&h=32&q=80'
  }
];

export function NewInfluencers() {
  return (
    <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="text-purple-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Rising Alpha Stars</h3>
      </div>
      <div className="space-y-3">
        {influencers.map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} variant="new" />
        ))}
      </div>
    </div>
  );
}