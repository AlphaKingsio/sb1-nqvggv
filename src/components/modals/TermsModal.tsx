import React from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Disclaimer</h3>
              <p>
                CryptoSignals provides trading signals and analysis for informational purposes only. Trading cryptocurrencies and NFTs involves substantial risk of loss and is not suitable for every investor. The signals provided should not be construed as financial advice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Risk Warning</h3>
              <p>
                Past performance is not indicative of future results. The value of investments can go down as well as up. Users should conduct their own research and seek professional advice before making any investment decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">No Guarantees</h3>
              <p>
                While we strive to maintain high accuracy in our signals, we cannot guarantee specific results or profits. Users are solely responsible for their trading decisions and any resulting gains or losses.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Service Availability</h3>
              <p>
                We aim to provide uninterrupted service but cannot guarantee continuous availability. The platform may experience downtime for maintenance or technical issues.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">User Responsibilities</h3>
              <p>
                Users are responsible for maintaining the confidentiality of their account credentials and for all activities conducted through their account. Users must comply with all applicable laws and regulations.
              </p>
            </div>

            <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4 mt-6">
              <p className="text-red-400 font-medium">
                Trading cryptocurrencies and NFTs carries a high level of risk and may not be suitable for all investors. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}