import React, { useState } from 'react';
import { Influencer } from '../../../types';
import { InfluencerDetailsModal } from '../../modals/InfluencerDetailsModal';

interface InfluencerCardProps {
  influencer: Influencer;
  variant?: 'new' | 'top';
}

export function InfluencerCard({ influencer, variant = 'new' }: InfluencerCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowDetails(true)}
        className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3 cursor-pointer hover:bg-gray-800/70 transition-colors"
      >
        <div className="flex items-center space-x-3">
          {variant === 'top' && (
            <div className="w-6 text-center font-bold text-yellow-400">
              #{influencer.rank}
            </div>
          )}
          <img
            src={influencer.avatar}
            alt={influencer.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="text-white font-medium">{influencer.name}</div>
            <div className="text-gray-400 text-sm">
              {variant === 'new' 
                ? `${influencer.followers} followers`
                : `${influencer.signals} signals`}
            </div>
          </div>
        </div>
        <div className="text-green-400 text-sm font-medium">
          {variant === 'new' ? influencer.winRate : influencer.accuracy}
        </div>
      </div>

      <InfluencerDetailsModal
        influencer={influencer}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
      />
    </>
  );
}