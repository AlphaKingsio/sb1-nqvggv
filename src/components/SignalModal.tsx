import React, { useState } from 'react';
import { X, TrendingUp, TrendingDown, LineChart, Activity, DollarSign, Share2 } from 'lucide-react';
import { Signal } from '../types';
import { ShareModal } from './ShareModal';

interface SignalModalProps {
  signal: Signal | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SignalModal({ signal, isOpen, onClose }: SignalModalProps) {
  const [showShareModal, setShowShareModal] = useState(false);

  if (!isOpen || !signal) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">{signal.name} ({signal.symbol})</h2>
                <p className="text-gray-400">{signal.platform}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowShareModal(true)}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors text-blue-400"
                  title="Share Signal"
                >
                  <Share2 size={24} />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={signal.imageUrl}
                      alt={signal.name}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <div className={`text-lg font-bold flex items-center space-x-2 ${
                        signal.action === 'BUY' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {signal.action === 'BUY' ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
                        <span>{signal.action} Signal</span>
                      </div>
                      <div className="text-gray-400 mt-1">
                        Signal Score: <span className={`font-bold ${
                          signal.score >= 70 ? 'text-green-400' : 
                          signal.score >= 40 ? 'text-yellow-400' : 'text-red-400'
                        }`}>{signal.score}/100</span>
                      </div>
                      <div className={`mt-2 inline-flex px-3 py-1 rounded-full text-sm ${
                        signal.status === 'Active' ? 'bg-green-400/20 text-green-400' : 'bg-red-400/20 text-red-400'
                      }`}>
                        {signal.status}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 text-gray-400 mb-2">
                        <DollarSign size={18} />
                        <span>Current Price</span>
                      </div>
                      <div className="text-white font-medium">{signal.price}</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 text-gray-400 mb-2">
                        <Activity size={18} />
                        <span>24h Change</span>
                      </div>
                      <div className={`font-medium ${signal.change24h && signal.change24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {signal.change24h ? `${signal.change24h > 0 ? '+' : ''}${signal.change24h}%` : 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h3 className="font-semibold text-lg text-white mb-4 flex items-center space-x-2">
                    <LineChart size={20} className="text-blue-400" />
                    <span>Signal Analysis</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{signal.reason}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-white mb-4 flex items-center space-x-2">
                  <Activity size={20} className="text-blue-400" />
                  <span>Technical Indicators</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {signal.indicators.map((indicator, index) => (
                    <span
                      key={index}
                      className="bg-gray-800/30 px-4 py-2 rounded-lg text-sm text-gray-300"
                    >
                      {indicator}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShareModal
        signal={signal}
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </>
  );
}