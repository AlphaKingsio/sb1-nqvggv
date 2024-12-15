import React from 'react';
import { X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">About CryptoSignals</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-6 text-gray-300">
            <p>
              CryptoSignals is a leading cryptocurrency and NFT signals platform, providing real-time trading insights powered by advanced analytics and expert analysis. Our platform serves traders worldwide with accurate, timely, and actionable trading signals.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
              <p>
                To empower traders with professional-grade analysis tools and signals, making profitable trading accessible to everyone through technology and expertise.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time crypto and NFT signals</li>
                <li>Advanced technical analysis</li>
                <li>Machine learning-powered predictions</li>
                <li>Expert trading community</li>
                <li>Educational resources</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Our Success</h3>
              <p>
                With over 100,000 active users and an 85% signal success rate, we've helped traders worldwide achieve their financial goals through informed trading decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}