import React from 'react';
import { Trophy } from 'lucide-react';
import { InfluencerCard } from '../influencers/InfluencerCard';
import { Influencer } from '../../../types';

const influencers: Influencer[] = [
  {
    id: 1,
    name: 'Alpha King',
    signals: 1250,
    accuracy: '96%',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=32&h=32&q=80',
    rank: 1
  },
  {
    id: 2,
    name: 'Crypto Oracle',
    signals: 980,
    accuracy: '94%',
    avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=32&h=32&q=80',
    rank: 2
  },
  {
    id: 3,
    name: 'NFT Prophet',
    signals: 856,
    accuracy: '92%',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=32&h=32&q=80',
    rank: 3
  }
];

export function TopInfluencers() {
  return (
    <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Trophy className="text-yellow-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Top Alpha Kings</h3>
      </div>
      <div className="space-y-3">
        {influencers.map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} variant="top" />
        ))}
      </div>
    </div>
  );
}