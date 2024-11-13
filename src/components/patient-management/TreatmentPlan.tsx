import React from 'react';
import { Card } from '../ui/Card';
import { Activity, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

interface Treatment {
  id: string;
  type: string;
  status: 'completed' | 'in-progress' | 'scheduled';
  startDate: string;
  endDate?: string;
  progress?: number;
  nextSession?: string;
  notes?: string;
}

const treatments: Treatment[] = [
  {
    id: '1',
    type: 'Chemotherapy',
    status: 'in-progress',
    startDate: '2024-01-15',
    progress: 60,
    nextSession: '2024-03-25',
    notes: 'AC-T Protocol - 3/5 sessions completed'
  },
  {
    id: '2',
    type: 'Radiation Therapy',
    status: 'scheduled',
    startDate: '2024-04-01',
    notes: 'Planned to start after completion of chemotherapy'
  },
  {
    id: '3',
    type: 'Hormone Therapy',
    status: 'completed',
    startDate: '2024-01-01',
    endDate: '2024-02-28',
    notes: 'Initial phase completed successfully'
  }
];

export default function TreatmentPlan() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'in-progress':
        return <Activity className="h-5 w-5 text-blue-600" />;
      case 'scheduled':
        return <Calendar className="h-5 w-5 text-yellow-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Treatment Plan</h2>
          <button className="text-sm text-rose-600 hover:text-rose-700">
            Update Plan
          </button>
        </div>

        <div className="space-y-6">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="border rounded-lg p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    {getStatusIcon(treatment.status)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-medium text-gray-900">
                        {treatment.type}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(treatment.status)}`}>
                        {treatment.status.replace('-', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Started: {treatment.startDate}
                      {treatment.endDate && ` • Completed: ${treatment.endDate}`}
                    </p>
                    {treatment.notes && (
                      <p className="text-sm text-gray-600 mt-2">{treatment.notes}</p>
                    )}
                  </div>
                </div>
              </div>

              {treatment.progress !== undefined && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{treatment.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-rose-600 rounded-full h-2"
                      style={{ width: `${treatment.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {treatment.nextSession && (
                <div className="mt-4 flex items-center text-sm text-rose-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  Next session: {treatment.nextSession}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}