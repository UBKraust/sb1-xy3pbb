import React from 'react';
import { Card } from '../components/ui/Card';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <p className="mt-1 text-sm text-gray-500">
          View detailed analytics and reports.
        </p>
      </div>

      <Card>
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Analytics Dashboard
          </h3>
          {/* Add analytics components here */}
        </div>
      </Card>
    </div>
  );
}