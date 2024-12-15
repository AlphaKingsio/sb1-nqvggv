import React from 'react';
import { Clock } from 'lucide-react';
import { SignalCard } from '../signals/SignalCard';
import { DashboardSignal } from '../../../types';

const signals: DashboardSignal[] = [
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

export function RecentSignals() {
  return (
    <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Clock className="text-blue-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Recent Signals</h3>
      </div>
      <div className="space-y-3">
        {signals.map((signal) => (
          <SignalCard key={signal.id} signal={signal} variant="recent" />
        ))}
      </div>
    </div>
  );
}