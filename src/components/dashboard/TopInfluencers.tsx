import React from 'react';
import { Trophy } from 'lucide-react';

export function TopInfluencers() {
  const influencers = [
    {
      id: 1,
      name: 'Alpha King',
      signals: 1250,
      accuracy: '96%',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=32&h=32&q=80'
    },
    {
      id: 2,
      name: 'Crypto Oracle',
      signals: 980,
      accuracy: '94%',
      avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=32&h=32&q=80'
    },
    {
      id: 3,
      name: 'NFT Prophet',
      signals: 856,
      accuracy: '92%',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=32&h=32&q=80'
    }
  ];

  return (
    <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Trophy className="text-yellow-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Top Alpha Kings</h3>
      </div>
      <div className="space-y-3">
        {influencers.map((influencer) => (
          <div
            key={influencer.id}
            className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3"
          >
            <div className="flex items-center space-x-3">
              <img
                src={influencer.avatar}
                alt={influencer.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="text-white font-medium">{influencer.name}</div>
                <div className="text-gray-400 text-sm">{influencer.signals} signals</div>
              </div>
            </div>
            <div className="text-green-400 text-sm font-medium">
              {influencer.accuracy}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}