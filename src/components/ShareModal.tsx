import React, { useEffect, useState } from 'react';
import { X, Twitter, Download } from 'lucide-react';
import { Signal } from '../types';
import { generateShareImage } from '../utils/shareImage';

interface ShareModalProps {
  signal: Signal;
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ signal, isOpen, onClose }: ShareModalProps) {
  const [shareImage, setShareImage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      generateShareImage(signal).then(setShareImage);
    }
  }, [isOpen, signal]);

  if (!isOpen) return null;

  const handleTwitterShare = async () => {
    if (!shareImage) return;

    try {
      // Convert base64 to blob
      const response = await fetch(shareImage);
      const blob = await response.blob();
      
      // Create form data
      const formData = new FormData();
      formData.append('media', blob, 'signal.png');

      const text = `New ${signal.type} Signal Alert! 🚨\n\n${signal.name} (${signal.symbol})\nAction: ${signal.action}\nPrice: ${signal.price}\nScore: ${signal.score}/100\n\n#CryptoSignals #Trading`;
      
      // Open Twitter intent URL with the text
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    } catch (error) {
      console.error('Error sharing to Twitter:', error);
    }
  };

  const handleDownload = () => {
    if (!shareImage) return;
    
    const link = document.createElement('a');
    link.download = `${signal.symbol}-signal.png`;
    link.href = shareImage;
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Share Signal</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          {shareImage && (
            <div className="space-y-6">
              <div className="border border-gray-800 rounded-xl overflow-hidden">
                <img
                  src={shareImage}
                  alt="Signal Preview"
                  className="w-full h-auto"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleTwitterShare}
                  className="flex-1 flex items-center justify-center space-x-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-4 py-3 rounded-lg transition-colors"
                >
                  <Twitter size={20} />
                  <span>Share on Twitter</span>
                </button>
                
                <button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors"
                >
                  <Download size={20} />
                  <span>Download Image</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}