import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="bg-red-500/10 text-red-500 px-4 py-3 rounded-lg flex items-center space-x-2">
        <AlertCircle size={20} />
        <span>{message}</span>
      </div>
    </div>
  );
}