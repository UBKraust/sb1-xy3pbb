import React from 'react';
import '@material/web/fab/fab';

interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'surface' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  label?: string;
}

export function Fab({
  variant = 'surface',
  size = 'medium',
  icon,
  label,
  ...props
}: FabProps) {
  return (
    <md-fab
      variant={variant}
      size={size}
      label={label}
      {...props}
    >
      {icon}
    </md-fab>
  );
}