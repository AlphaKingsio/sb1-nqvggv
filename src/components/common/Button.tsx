import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: LucideIcon;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  icon: Icon,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const baseStyles = 'rounded-lg transition-colors flex items-center justify-center space-x-2';
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-gray-200',
    outline: 'border border-gray-700 hover:bg-gray-800 text-gray-300',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} py-2 px-4`}
    >
      {Icon && <Icon size={20} />}
      {loading ? (
        <span className="animate-spin">⚪</span>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
}