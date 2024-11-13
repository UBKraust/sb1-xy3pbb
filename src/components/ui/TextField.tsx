import React from 'react';

interface TextFieldProps {
  variant?: 'filled' | 'outlined';
  label?: string;
  supportingText?: string;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
}

export function TextField({
  variant = 'outlined',
  label,
  supportingText,
  error,
  multiline = false,
  rows = 3,
  className = '',
  ...props
}: TextFieldProps) {
  const baseClasses = "w-full rounded-md shadow-sm text-sm transition-colors focus:outline-none";
  
  const variantClasses = {
    filled: "bg-gray-100 border-transparent focus:border-rose-500 focus:ring-rose-500",
    outlined: "border border-gray-300 focus:border-rose-500 focus:ring-rose-500"
  };

  const errorClasses = error 
    ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
    : "";

  const Component = multiline ? 'textarea' : 'input';

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <Component
        className={`${baseClasses} ${variantClasses[variant]} ${errorClasses} ${className}`}
        {...(multiline ? { rows } : {})}
        {...props}
      />
      {supportingText && (
        <p className={`mt-1 text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>
          {supportingText}
        </p>
      )}
    </div>
  );
}