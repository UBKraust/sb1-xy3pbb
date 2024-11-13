import React from 'react';
import { RefreshCw, Link2, AlertCircle, CheckCircle } from 'lucide-react';

interface ExternalSystem {
  id: string;
  name: string;
  type: 'lab' | 'imaging' | 'emr';
  status: 'connected' | 'disconnected' | 'error';
  lastSync: string;
  nextSync?: string;
}

const externalSystems: ExternalSystem[] = [
  {
    id: '1',
    name: 'Central Laboratory System',
    type: 'lab',
    status: 'connected',
    lastSync: '2024-03-19 14:30',
    nextSync: '2024-03-19 15:30'
  },
  {
    id: '2',
    name: 'Radiology PACS',
    type: 'imaging',
    status: 'connected',
    lastSync: '2024-03-19 13:45',
    nextSync: '2024-03-19 15:45'
  },
  {
    id: '3',
    name: 'Hospital EMR',
    type: 'emr',
    status: 'error',
    lastSync: '2024-03-19 10:15'
  }
];

export default function ExternalSystemsSync() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link2 className="h-5 w-5 text-rose-600 mr-2" />
            <h2 className="text-lg font-semibold">External Systems Integration</h2>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <RefreshCw className="h-4 w-4 mr-2" />
            Sync All
          </button>
        </div>

        <div className="space-y-4">
          {externalSystems.map((system) => (
            <div
              key={system.id}
              className="border rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {system.status === 'connected' ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : system.status === 'error' ? (
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  ) : (
                    <Link2 className="h-5 w-5 text-gray-400 mr-2" />
                  )}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {system.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Last sync: {system.lastSync}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {system.nextSync && (
                    <span className="text-sm text-gray-500">
                      Next sync: {system.nextSync}
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    system.status === 'connected'
                      ? 'bg-green-100 text-green-800'
                      : system.status === 'error'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {system.status}
                  </span>
                  <button className="text-sm text-rose-600 hover:text-rose-700">
                    Configure
                  </button>
                </div>
              </div>

              {system.status === 'error' && (
                <div className="mt-4 p-3 bg-red-50 rounded-md">
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Sync Error
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>
                          Unable to establish connection. Please check your credentials and try again.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}