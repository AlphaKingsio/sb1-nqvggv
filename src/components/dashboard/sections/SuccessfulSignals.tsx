import React from 'react';
import { Award } from 'lucide-react';
import { SignalCard } from '../signals/SignalCard';
import { DashboardSignal } from '../../../types';

const signals: DashboardSignal[] = [
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

export function SuccessfulSignals() {
  return (
    <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Award className="text-yellow-400" size={20} />
        <h3 className="text-lg font-semibold text-white">Top Performing Signals</h3>
      </div>
      <div className="space-y-3">
        {signals.map((signal) => (
          <SignalCard key={signal.id} signal={signal} variant="success" />
        ))}
      </div>
    </div>
  );
}