import React from 'react';

interface ChipProps {
  label: string;
  variant?: 'assist' | 'filter' | 'suggestion';
  icon?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({
  label,
  variant = 'assist',
  icon,
  selected,
  onClick,
  className = ''
}: ChipProps) {
  const baseClasses = "inline-flex items-center px-2.5 py-1.5 rounded-full text-sm font-medium transition-colors";
  
  const variantClasses = {
    assist: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    filter: selected 
      ? "bg-rose-100 text-rose-700 hover:bg-rose-200"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200",
    suggestion: "bg-rose-50 text-rose-700 hover:bg-rose-100"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {label}
    </button>
  );
}