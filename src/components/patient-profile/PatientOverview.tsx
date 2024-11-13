import React from 'react';
import { Activity, LineChart, FileText } from 'lucide-react';
import type { Patient } from '../../data/patients';
import HealthStatusNotepad from './HealthStatusNotepad';

interface PatientOverviewProps {
  patient: Patient;
}

export default function PatientOverview({ patient }: PatientOverviewProps) {
  const healthIndicators = [
    {
      icon: '🌡️',
      value: '2/10',
      label: 'Pain Level',
      trend: 'decreasing',
      trendColor: 'text-blue-600'
    },
    {
      icon: '🔋',
      value: '7/10',
      label: 'Energy Level',
      trend: 'stable',
      trendColor: 'text-gray-600'
    },
    {
      icon: '❤️',
      value: 'Good',
      label: 'Mood',
      trend: 'improving',
      trendColor: 'text-green-600'
    },
    {
      icon: '💊',
      value: 'Mild',
      label: 'Side Effects',
      trend: 'stable',
      trendColor: 'text-gray-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Health Status Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {healthIndicators.map((indicator) => (
          <div key={indicator.label} className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl">{indicator.icon}</span>
              <span className={`text-sm ${indicator.trendColor}`}>
                {indicator.trend}
              </span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-semibold text-gray-900">
                {indicator.value}
              </span>
              <p className="text-sm text-gray-500 mt-1">{indicator.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Health Status Notepad */}
      <HealthStatusNotepad patientId={patient.id} />

      {/* Treatment Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Activity className="h-6 w-6 text-rose-600 mr-2" />
            <h3 className="text-lg font-medium">Current Treatment</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Phase</p>
              <p className="text-lg font-medium mt-1">
                {patient.treatmentPlan.currentPhase}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Protocol</p>
              <p className="text-lg font-medium mt-1">
                {patient.treatmentPlan.protocol}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center text-rose-600 text-sm">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Next treatment session in 3 days
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center mb-4">
            <LineChart className="h-6 w-6 text-rose-600 mr-2" />
            <h3 className="text-lg font-medium">Latest Results</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Blood Count</p>
                <p className="text-lg font-medium mt-1">Normal</p>
              </div>
              <span className="text-sm text-gray-500">March 15, 2024</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Tumor Markers</p>
                <p className="text-lg font-medium mt-1">Decreasing</p>
              </div>
              <span className="text-sm text-gray-500">March 15, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Notes */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FileText className="h-6 w-6 text-rose-600 mr-2" />
            <h3 className="text-lg font-medium">Latest Notes</h3>
          </div>
          <button className="text-sm text-rose-600 hover:text-rose-700">
            View all
          </button>
        </div>
        
        <div className="space-y-4">
          {patient.notes.slice(0, 2).map((note) => (
            <div key={note.id} className="border-l-4 border-rose-500 pl-4">
              <p className="text-sm text-gray-500">
                {note.date} - {note.author}
              </p>
              <p className="mt-1 text-gray-900">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}