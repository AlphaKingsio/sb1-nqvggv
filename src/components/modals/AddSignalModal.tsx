import React, { useState } from 'react';
import { X, TrendingUp, TrendingDown } from 'lucide-react';
import { FormInput } from '../common/FormInput';

interface AddSignalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (signal: any) => void;
}

export function AddSignalModal({ isOpen, onClose, onSubmit }: AddSignalModalProps) {
  const [signalData, setSignalData] = useState({
    type: 'CRYPTO',
    name: '',
    symbol: '',
    action: 'BUY',
    entryPrice: '',
    targetPrice: '',
    stopLoss: '',
    reason: '',
    timeframe: '1D',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(signalData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Add New Signal</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Type</label>
                <select
                  value={signalData.type}
                  onChange={(e) => setSignalData({ ...signalData, type: e.target.value })}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="CRYPTO">Crypto</option>
                  <option value="NFT">NFT</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Action</label>
                <select
                  value={signalData.action}
                  onChange={(e) => setSignalData({ ...signalData, action: e.target.value })}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="BUY">Buy</option>
                  <option value="SELL">Sell</option>
                </select>
              </div>
            </div>

            <FormInput
              type="text"
              label="Asset Name"
              value={signalData.name}
              onChange={(value) => setSignalData({ ...signalData, name: value })}
              placeholder="e.g., Bitcoin"
              required
            />

            <FormInput
              type="text"
              label="Symbol"
              value={signalData.symbol}
              onChange={(value) => setSignalData({ ...signalData, symbol: value })}
              placeholder="e.g., BTC"
              required
            />

            <div className="grid grid-cols-3 gap-4">
              <FormInput
                type="text"
                label="Entry Price"
                value={signalData.entryPrice}
                onChange={(value) => setSignalData({ ...signalData, entryPrice: value })}
                placeholder="e.g., $45,000"
                required
              />

              <FormInput
                type="text"
                label="Target Price"
                value={signalData.targetPrice}
                onChange={(value) => setSignalData({ ...signalData, targetPrice: value })}
                placeholder="e.g., $50,000"
                required
              />

              <FormInput
                type="text"
                label="Stop Loss"
                value={signalData.stopLoss}
                onChange={(value) => setSignalData({ ...signalData, stopLoss: value })}
                placeholder="e.g., $42,000"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Analysis & Reason</label>
              <textarea
                value={signalData.reason}
                onChange={(e) => setSignalData({ ...signalData, reason: e.target.value })}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                placeholder="Provide your analysis and reasoning for this signal..."
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Timeframe</label>
              <select
                value={signalData.timeframe}
                onChange={(e) => setSignalData({ ...signalData, timeframe: e.target.value })}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="15M">15 Minutes</option>
                <option value="1H">1 Hour</option>
                <option value="4H">4 Hours</option>
                <option value="1D">1 Day</option>
                <option value="1W">1 Week</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors mt-4"
            >
              Post Signal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}