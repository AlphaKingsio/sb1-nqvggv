import React from 'react';
import { Signal } from '../types';
import { TrendingUp, TrendingDown, Activity, Info, Lock } from 'lucide-react';

interface SignalCardProps {
  signal: Signal;
  onClick: (signal: Signal) => void;
  index: number;
  isAuthenticated?: boolean;
  onPremiumClick?: () => void;
}

export function SignalCard({ signal, onClick, index, isAuthenticated, onPremiumClick }: SignalCardProps) {
  const isBlurred = index > 0 && !isAuthenticated;

  const handleClick = () => {
    if (isBlurred && onPremiumClick) {
      onPremiumClick();
    } else if (!isBlurred) {
      onClick(signal);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-[#1a1b1e] border border-gray-800 rounded-xl p-6 transform transition-all hover:scale-102 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 relative cursor-pointer`}
    >
      {isBlurred && (
        <div className="absolute inset-0 bg-[#1a1b1e]/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
          <div className="text-center">
            <Lock size={24} className="text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400 font-medium">Premium Signal</p>
            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Unlock Access
            </button>
          </div>
        </div>
      )}

      {/* Rest of the SignalCard component remains the same */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={signal.imageUrl}
            alt={signal.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-lg text-white">{signal.name}</h3>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                signal.status === 'Active' ? 'bg-green-400/20 text-green-400' : 'bg-red-400/20 text-red-400'
              }`}>
                {signal.status}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">{signal.symbol}</span>
              {signal.platform && (
                <span className="text-gray-500 text-xs">on {signal.platform}</span>
              )}
            </div>
          </div>
        </div>
        <div className={`flex items-center ${
          signal.action === 'BUY' ? 'text-green-400' : 'text-red-400'
        }`}>
          {signal.action === 'BUY' ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {signal.price && (
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-gray-400 text-sm mb-1">Price</div>
              <div className="text-white font-medium">{signal.price}</div>
            </div>
          )}
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-gray-400 text-sm mb-1">Signal Score</div>
            <div className={`font-medium ${
              signal.score >= 70 ? 'text-green-400' : 
              signal.score >= 40 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {signal.score}/100
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <Info size={14} className="text-blue-400" />
            <span className="text-gray-400">Click for analysis</span>
          </div>
          <span className="text-gray-500">
            {new Date(signal.timestamp).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}