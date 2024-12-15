import React from 'react';
import { Clock, TrendingUp, TrendingDown } from 'lucide-react';

export function RecentSignals() {
  const signals = [
    {
      id: 1,
      name: 'Solana',
      action: 'BUY',
      time: '5m ago',
      price: '$125.45'
    },
    {
      id: 2,
      name: 'BAYC',
      action: 'SELL',
      time: '15m ago',
      price: '72.5 ETH'
    },
    {
      id: 3,
      name: 'Arbitrum',
      action: 'BUY',
      time: '32m ago',
      price: '$1.85'
    }
  ];

  return (
    <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Clock className="text-blue-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Recent Signals</h3>
      </div>
      <div className="space-y-3">
        {signals.map((signal) => (
          <div
            key={signal.id}
            className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3"
          >
            <div>
              <div className="text-white font-medium">{signal.name}</div>
              <div className="text-gray-400 text-sm">{signal.time}</div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">{signal.price}</span>
              {signal.action === 'BUY' ? (
                <TrendingUp size={16} className="text-green-400" />
              ) : (
                <TrendingDown size={16} className="text-red-400" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}