import React from 'react';
import { TrendingUp, Award } from 'lucide-react';

export function SuccessfulSignals() {
  const signals = [
    {
      id: 1,
      name: 'Bitcoin',
      profit: '+45.2%',
      date: '2024-03-15',
      type: 'CRYPTO'
    },
    {
      id: 2,
      name: 'DeGods',
      profit: '+82.5%',
      date: '2024-03-14',
      type: 'NFT'
    },
    {
      id: 3,
      name: 'Ethereum',
      profit: '+38.7%',
      date: '2024-03-13',
      type: 'CRYPTO'
    }
  ];

  return (
    <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Award className="text-yellow-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Top Performing Signals</h3>
      </div>
      <div className="space-y-3">
        {signals.map((signal) => (
          <div
            key={signal.id}
            className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3"
          >
            <div>
              <div className="text-white font-medium">{signal.name}</div>
              <div className="text-gray-400 text-sm">{signal.type}</div>
            </div>
            <div className="flex items-center text-green-400">
              <TrendingUp size={16} className="mr-1" />
              {signal.profit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}