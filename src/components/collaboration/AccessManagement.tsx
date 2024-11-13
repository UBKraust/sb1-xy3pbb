import React, { useState } from 'react';
import { Shield, Clock, UserPlus, X } from 'lucide-react';

interface AccessLevel {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

const accessLevels: AccessLevel[] = [
  {
    id: 'full',
    name: 'Full Access',
    description: 'Complete access to all patient data and management capabilities',
    permissions: [
      'View all patient data',
      'Edit treatment plans',
      'Add/remove team members',
      'Manage external system connections'
    ]
  },
  {
    id: 'limited',
    name: 'Limited Access',
    description: 'Access to specific areas of patient data with some restrictions',
    permissions: [
      'View assigned patient data',
      'Add comments and notes',
      'View treatment plans'
    ]
  },
  {
    id: 'view-only',
    name: 'View Only',
    description: 'Read-only access to patient data',
    permissions: [
      'View basic patient information',
      'View treatment plans',
      'View team comments'
    ]
  }
];

export default function AccessManagement() {
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState<string>('limited');
  const [accessDuration, setAccessDuration] = useState<string>('7');

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-rose-600 mr-2" />
            <h2 className="text-lg font-semibold">Access Management</h2>
          </div>
          <button
            onClick={() => setShowInviteForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Invite Team Member
          </button>
        </div>

        {showInviteForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-md w-full mx-4">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Invite Team Member</h3>
                  <button
                    onClick={() => setShowInviteForm(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500">
                      <option>Oncologist</option>
                      <option>Radiologist</option>
                      <option>Surgeon</option>
                      <option>Nurse</option>
                      <option>Other Specialist</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Access Level
                    </label>
                    <select
                      value={selectedAccess}
                      onChange={(e) => setSelectedAccess(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    >
                      {accessLevels.map((level) => (
                        <option key={level.id} value={level.id}>
                          {level.name}
                        </option>
                      ))}
                    </select>
                    <p className="mt-2 text-sm text-gray-500">
                      {accessLevels.find(level => level.id === selectedAccess)?.description}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Access Duration
                    </label>
                    <div className="mt-1 flex items-center space-x-2">
                      <select
                        value={accessDuration}
                        onChange={(e) => setAccessDuration(e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                      >
                        <option value="7">7 days</option>
                        <option value="14">14 days</option>
                        <option value="30">30 days</option>
                        <option value="90">90 days</option>
                        <option value="unlimited">Unlimited</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowInviteForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700"
                    >
                      Send Invitation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Access Levels */}
        <div className="space-y-6">
          {accessLevels.map((level) => (
            <div
              key={level.id}
              className="border rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {level.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {level.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500">
                    {level.id === 'full' ? 'No time limit' : 'Time-limited access'}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Permissions:
                </h4>
                <ul className="space-y-1">
                  {level.permissions.map((permission, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Shield className="h-4 w-4 text-gray-400 mr-2" />
                      {permission}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}