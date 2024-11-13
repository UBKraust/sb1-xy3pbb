import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'filled', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors";
  
  const variantClasses = {
    filled: "bg-rose-600 text-white hover:bg-rose-700",
    outlined: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    text: "text-gray-700 hover:bg-gray-50"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}