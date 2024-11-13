import React from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { IconButton } from '../ui/IconButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
      
      <div className="relative flex flex-col w-full max-w-xs bg-white h-full">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <span className="text-2xl font-bold text-rose-600">OncoLink</span>
          <IconButton
            variant="standard"
            icon={<X className="h-6 w-6" />}
            onClick={onClose}
            aria-label="Close menu"
          />
        </div>

        <nav className="flex-1 px-3 pb-4 space-y-1 mt-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-rose-50 text-rose-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                onClick={onClose}
              >
                <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}