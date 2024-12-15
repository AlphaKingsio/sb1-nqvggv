import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-[#1a1b1e] border border-gray-800 rounded-xl p-4 ${className}`}>
      {children}
    </div>
  );
}