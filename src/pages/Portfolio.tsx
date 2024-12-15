import React, { useState } from 'react';
import { Briefcase, Coins, Image } from 'lucide-react';
import { SignalCard } from '../components/SignalCard';
import { SignalModal } from '../components/SignalModal';
import { signals } from '../data/signals';
import { Signal } from '../types';

export function Portfolio() {
  const [selectedSignal, setSelectedSignal] = useState<Signal | null>(null);

  // Filter signals by type
  const cryptoSignals = signals.filter(
    signal => signal.status === 'Active' && signal.type === 'CRYPTO'
  );
  const nftSignals = signals.filter(
    signal => signal.status === 'Active' && signal.type === 'NFT'
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Briefcase size={24} className="text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Your Portfolio Signals</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Crypto Signals Section */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Coins size={20} className="text-yellow-400" />
            <h2 className="text-xl font-semibold text-white">Crypto Signals</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {cryptoSignals.map((signal) => (
              <SignalCard
                key={signal.id}
                signal={signal}
                onClick={() => setSelectedSignal(signal)}
                index={0}
                isAuthenticated={true}
              />
            ))}
          </div>
        </div>

        {/* NFT Signals Section */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Image size={20} className="text-purple-400" />
            <h2 className="text-xl font-semibold text-white">NFT Signals</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {nftSignals.map((signal) => (
              <SignalCard
                key={signal.id}
                signal={signal}
                onClick={() => setSelectedSignal(signal)}
                index={0}
                isAuthenticated={true}
              />
            ))}
          </div>
        </div>
      </div>

      <SignalModal
        signal={selectedSignal}
        isOpen={!!selectedSignal}
        onClose={() => setSelectedSignal(null)}
      />
    </div>
  );
}