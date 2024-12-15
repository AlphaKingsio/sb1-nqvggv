import React from 'react';
import { X } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FAQModal({ isOpen, onClose }: FAQModalProps) {
  const faqs = [
    {
      question: 'What is CryptoSignals?',
      answer: 'CryptoSignals is a premium trading signals platform that provides real-time cryptocurrency and NFT trading signals, powered by advanced analytics and expert analysis.'
    },
    {
      question: 'How accurate are your signals?',
      answer: 'Our signals maintain an average success rate of 85%, backed by comprehensive technical analysis and machine learning algorithms. However, all trading carries risk and past performance does not guarantee future results.'
    },
    {
      question: 'How do I receive signals?',
      answer: 'Signals are delivered through our platform in real-time. Premium members receive instant notifications via email, mobile app, and Telegram.'
    },
    {
      question: 'Can I use the signals for automated trading?',
      answer: 'Yes, Premium plan subscribers have access to our API which can be integrated with various trading bots and platforms for automated trading.'
    },
    {
      question: 'What is the refund policy?',
      answer: 'We offer a 7-day money-back guarantee for new Premium subscribers if they are not satisfied with our service.'
    },
    {
      question: 'Do you provide educational resources?',
      answer: 'Yes, we provide comprehensive educational resources including trading guides, video tutorials, and weekly webinars for our subscribers.'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}