import React from 'react';
import { X, Check, Star } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  if (!isOpen) return null;

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic market signals',
        '12-hour delayed alerts',
        'Limited market analysis',
        'Public chat access',
        'Basic indicators'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Basic',
      price: '$29',
      period: 'per month',
      features: [
        'Real-time crypto signals',
        'Instant alerts',
        'Technical analysis',
        'Community chat access',
        'Premium indicators',
        'Portfolio tracking'
      ],
      buttonText: 'Subscribe Now',
      popular: true
    },
    {
      name: 'Premium',
      price: '$99',
      period: 'per month',
      features: [
        'All Basic features',
        'NFT signals',
        'Advanced analytics',
        'Private chat group',
        'One-on-one consulting',
        'API access',
        'Custom alerts'
      ],
      buttonText: 'Go Premium',
      popular: false
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl max-w-4xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Choose Your Plan</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-gray-800/30 border ${
                  plan.popular ? 'border-blue-400' : 'border-gray-700'
                } rounded-xl p-6 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm flex items-center space-x-1">
                      <Star size={14} />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check size={18} className="text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}