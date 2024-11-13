import React from 'react';
import '@material/web/elevation/elevation';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: 1 | 2 | 3;
}

export function Card({ children, className = '', elevation = 1 }: CardProps) {
  return (
    <md-elevation level={elevation}>
      <div className={`bg-surface rounded-xl p-4 ${className}`}>
        {children}
      </div>
    </md-elevation>
  );
}