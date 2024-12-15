import React from 'react';
import { X, TrendingUp, TrendingDown } from 'lucide-react';
import { Signal } from '../../types';

interface PastSignalsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const pastSignals: Signal[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    type: 'CRYPTO',
    action: 'BUY',
    score: 92,
    entryPrice: '$42,500',
    exitPrice: '$48,900',
    profit: '+15.06%',
    timestamp: '2024-02-15',
    imageUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    status: 'Inactive',
    platform: 'Bitcoin Network',
    reason: 'Strong technical indicators showing bullish momentum.',
    indicators: ['RSI', 'MACD', 'Volume']
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    type: 'CRYPTO',
    action: 'BUY',
    score: 88,
    entryPrice: '$2,250',
    exitPrice: '$2,890',
    profit: '+28.44%',
    timestamp: '2024-02-10',
    imageUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    status: 'Inactive',
    platform: 'Ethereum Network',
    reason: 'Network upgrade and increased adoption.',
    indicators: ['Technical', 'On-chain Metrics']
  }
];

export function PastSignalsModal({ isOpen, onClose }: PastSignalsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-3xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Past Signals Performance</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-4">
            {pastSignals.map((signal) => (
              <div
                key={signal.id}
                className="bg-gray-800/30 rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={signal.imageUrl}
                    alt={signal.name}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div>
                    <h3 className="text-white font-medium">{signal.name}</h3>
                    <span className="text-gray-400">{signal.symbol}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-gray-400 text-sm">Entry Price</div>
                    <div className="text-white">{signal.entryPrice}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Exit Price</div>
                    <div className="text-white">{signal.exitPrice}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Profit</div>
                    <div className="text-green-400 flex items-center">
                      <TrendingUp size={16} className="mr-1" />
                      {signal.profit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}