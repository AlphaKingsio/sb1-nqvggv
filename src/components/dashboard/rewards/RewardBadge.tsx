import React from 'react';
import { Trophy, Users, Star } from 'lucide-react';

interface RewardBadgeProps {
  type: 'accuracy' | 'community' | 'rising';
  value: string;
}

export function RewardBadge({ type, value }: RewardBadgeProps) {
  const badges = {
    accuracy: {
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    },
    community: {
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    rising: {
      icon: Star,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    }
  };

  const { icon: Icon, color, bgColor } = badges[type];

  return (
    <div className={`flex items-center space-x-1.5 px-2 py-1 rounded-full ${bgColor}`}>
      <Icon size={14} className={color} />
      <span className={`text-xs font-medium ${color}`}>{value}</span>
    </div>
  );
}