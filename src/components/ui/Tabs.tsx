import React from 'react';
import '@material/web/tabs/primary-tab';
import '@material/web/tabs/secondary-tab';
import '@material/web/tabs/tabs';

interface TabsProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function Tabs({
  children,
  variant = 'primary',
  activeTab,
  onTabChange
}: TabsProps) {
  return (
    <md-tabs
      active-tab-index={activeTab}
      onTabActivated={(e: CustomEvent) => onTabChange(e.detail.index)}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        
        const Component = variant === 'primary' ? 'md-primary-tab' : 'md-secondary-tab';
        return (
          <Component
            active={index === activeTab}
            {...child.props}
          />
        );
      })}
    </md-tabs>
  );
}