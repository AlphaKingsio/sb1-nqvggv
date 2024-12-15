import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { DashboardSignal } from '../../../types';
import { SignalDetailsModal } from '../../modals/SignalDetailsModal';

interface SignalCardProps {
  signal: DashboardSignal;
  variant?: 'success' | 'recent';
}

export function SignalCard({ signal, variant = 'success' }: SignalCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowDetails(true)}
        className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3 cursor-pointer hover:bg-gray-800/70 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <img
            src={`https://cryptologos.cc/logos/${signal.name.toLowerCase()}-logo.png`}
            alt={signal.name}
            className="w-8 h-8 rounded-full"
            onError={(e) => {
              e.currentTarget.src = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png';
            }}
          />
          <div>
            <div className="text-white font-medium">{signal.name}</div>
            <div className="text-gray-400 text-sm">
              {variant === 'success' ? signal.type : signal.time}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          {variant === 'success' ? (
            <div className="text-green-400">
              <TrendingUp size={16} className="mr-1 inline" />
              {signal.profit}
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">{signal.price}</span>
              {signal.action === 'BUY' ? (
                <TrendingUp size={16} className="text-green-400" />
              ) : (
                <TrendingDown size={16} className="text-red-400" />
              )}
            </div>
          )}
        </div>
      </div>

      <SignalDetailsModal
        signal={signal}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
      />
    </>
  );
}