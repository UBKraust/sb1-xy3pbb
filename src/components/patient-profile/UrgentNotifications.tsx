import React from 'react';
import { AlertCircle, Bell, X } from 'lucide-react';

interface UrgentNotification {
  id: string;
  type: 'urgent' | 'warning' | 'info';
  message: string;
  date: string;
}

interface UrgentNotificationsProps {
  notifications: UrgentNotification[];
  onDismiss: (id: string) => void;
}

export default function UrgentNotifications({
  notifications,
  onDismiss
}: UrgentNotificationsProps) {
  if (notifications.length === 0) return null;

  return (
    <div className="mb-6">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`mb-2 p-4 rounded-lg flex items-start justify-between ${
            notification.type === 'urgent'
              ? 'bg-red-50 text-red-800'
              : notification.type === 'warning'
              ? 'bg-yellow-50 text-yellow-800'
              : 'bg-blue-50 text-blue-800'
          }`}
        >
          <div className="flex items-start">
            {notification.type === 'urgent' ? (
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
            ) : (
              <Bell className="h-5 w-5 mr-2 mt-0.5" />
            )}
            <div>
              <p className="text-sm font-medium">{notification.message}</p>
              <p className="text-xs mt-1">{notification.date}</p>
            </div>
          </div>
          <button
            onClick={() => onDismiss(notification.id)}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
}