import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps {
  type: 'text' | 'email' | 'password';
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: LucideIcon;
  error?: string;
  required?: boolean;
}

export function FormInput({
  type,
  label,
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
  required = false,
}: FormInputProps) {
  return (
    <div>
      <label className="block text-gray-400 text-sm mb-2">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-gray-800 text-white rounded-lg ${
            Icon ? 'pl-10' : 'pl-4'
          } pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            error ? 'border border-red-400' : ''
          }`}
          placeholder={placeholder}
          required={required}
        />
        {Icon && <Icon className="absolute left-3 top-2.5 text-gray-400" size={18} />}
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}