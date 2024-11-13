import React from 'react';
import '@material/web/list/list';
import '@material/web/list/list-item';

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export function List({ children, className = '' }: ListProps) {
  return (
    <md-list className={className}>
      {children}
    </md-list>
  );
}

interface ListItemProps {
  children: React.ReactNode;
  headline?: string;
  supportingText?: string;
  trailingText?: string;
  trailingIcon?: React.ReactNode;
  onClick?: () => void;
}

export function ListItem({
  children,
  headline,
  supportingText,
  trailingText,
  trailingIcon,
  onClick
}: ListItemProps) {
  return (
    <md-list-item
      headline={headline}
      supporting-text={supportingText}
      trailing-text={trailingText}
      onClick={onClick}
    >
      {children}
      {trailingIcon && (
        <div slot="trailing-icon">
          {trailingIcon}
        </div>
      )}
    </md-list-item>
  );
}