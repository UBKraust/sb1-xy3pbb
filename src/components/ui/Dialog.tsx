import React from 'react';
import '@material/web/dialog/dialog';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  headline?: string;
}

export function Dialog({
  open,
  onClose,
  children,
  headline
}: DialogProps) {
  return (
    <md-dialog
      open={open}
      onClosed={onClose}
    >
      {headline && (
        <div slot="headline">{headline}</div>
      )}
      <div slot="content">
        {children}
      </div>
    </md-dialog>
  );
}