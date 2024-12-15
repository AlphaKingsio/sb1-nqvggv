import React from 'react';
import { X, TrendingUp, TrendingDown, User, Calendar, DollarSign } from 'lucide-react';
import { DashboardSignal } from '../../types';

interface SignalDetailsModalProps {
  signal: DashboardSignal | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SignalDetailsModal({ signal, isOpen, onClose }: SignalDetailsModalProps) {
  if (!isOpen || !signal) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Signal Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Asset Information */}
            <div className="flex items-center space-x-4">
              <img
                src={`https://cryptologos.cc/logos/${signal.name.toLowerCase()}-logo.png`}
                alt={signal.name}
                className="w-16 h-16 rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png';
                }}
              />
              <div>
                <h3 className="text-xl font-bold text-white">{signal.name}</h3>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar size={16} />
                  <span>{signal.date || 'Recent'}</span>
                </div>
              </div>
            </div>

            {/* Signal Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Entry Price</div>
                <div className="text-white font-medium text-lg">
                  {signal.price || '$0.00'}
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Profit/Loss</div>
                <div className="text-green-400 font-medium text-lg flex items-center">
                  <TrendingUp size={18} className="mr-1" />
                  {signal.profit || '+0.00%'}
                </div>
              </div>
            </div>

            {/* Signal Provider */}
            <div className="bg-gray-800/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <User size={18} className="text-blue-400" />
                <span className="text-white font-medium">Signal Provider</span>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=32&q=80"
                  alt="Provider"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="text-white font-medium">Alpha King</div>
                  <div className="text-gray-400 text-sm">Success Rate: 94%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}