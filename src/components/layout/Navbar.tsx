import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { IconButton } from '../ui/IconButton';

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-40">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center lg:hidden">
            <span className="text-2xl font-bold text-rose-600">OncoLink</span>
          </div>

          <div className="flex-1 max-w-xl px-8 hidden lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients, treatments, or documents..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <IconButton
              variant="standard"
              icon={<Search className="h-6 w-6" />}
              className="lg:hidden"
              aria-label="Search"
            />
            
            <IconButton
              variant="standard"
              icon={<Bell className="h-6 w-6" />}
              aria-label="Notifications"
            />

            <IconButton
              variant="standard"
              icon={<Settings className="h-6 w-6" />}
              aria-label="Settings"
            />

            <div className="hidden md:flex items-center ml-4">
              <div className="mr-4 text-right">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.role}</p>
              </div>
              <button
                onClick={logout}
                className="p-2 rounded-full hover:bg-gray-100"
                title="Logout"
              >
                <LogOut className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}