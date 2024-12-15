import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { WalletOption } from '../../types';
import { walletOptions } from '../../data/walletOptions';

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectWalletModal({ isOpen, onClose }: ConnectWalletModalProps) {
  const handleConnect = (wallet: WalletOption) => {
    console.log(`Connecting to ${wallet.name}`);
    // Implement wallet connection logic here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Connect Wallet</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-3">
            {walletOptions.map((wallet) => (
              <button
                key={wallet.id}
                onClick={() => handleConnect(wallet)}
                className="w-full bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <img 
                    src={wallet.icon} 
                    alt={wallet.name}
                    className="w-8 h-8"
                  />
                  <div className="text-left">
                    <div className="text-white font-medium">{wallet.name}</div>
                    <div className="text-gray-400 text-sm">{wallet.description}</div>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 group-hover:text-white transition-colors" size={20} />
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-center text-gray-400 text-sm">
              New to crypto wallets?{' '}
              <a
                href="https://ethereum.org/wallets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}