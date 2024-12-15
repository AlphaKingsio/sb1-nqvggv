import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface SignalBadgeProps {
  type: 'profit' | 'action';
  value: string;
  action?: 'BUY' | 'SELL';
}

export function SignalBadge({ type, value, action }: SignalBadgeProps) {
  if (type === 'profit') {
    return (
      <div className="flex items-center text-green-400">
        <TrendingUp size={16} className="mr-1" />
        <span className="font-medium">{value}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-400">{value}</span>
      {action === 'BUY' ? (
        <TrendingUp size={16} className="text-green-400" />
      ) : (
        <TrendingDown size={16} className="text-red-400" />
      )}
    </div>
  );
}