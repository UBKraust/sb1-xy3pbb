import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'standard' | 'filled' | 'outlined';
  icon: React.ReactNode;
}

export function IconButton({
  variant = 'standard',
  icon,
  className = '',
  ...props
}: IconButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full p-2 transition-colors";
  
  const variantClasses = {
    standard: "text-gray-600 hover:bg-gray-100",
    filled: "bg-primary text-white hover:bg-primary/90",
    outlined: "border border-gray-300 text-gray-600 hover:bg-gray-50"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}