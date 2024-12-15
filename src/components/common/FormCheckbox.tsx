import React from 'react';

interface FormCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
}

export function FormCheckbox({
  label,
  checked,
  onChange,
  required = false,
}: FormCheckboxProps) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="form-checkbox bg-gray-800 text-blue-500 rounded"
        required={required}
      />
      <span className="text-gray-400 text-sm">{label}</span>
    </label>
  );
}