import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  iconColor?: string;
}

export function SectionHeader({ 
  icon: Icon, 
  title, 
  iconColor = 'text-blue-400' 
}: SectionHeaderProps) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Icon className={iconColor} size={20} />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  );
}