import React from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import type { Patient } from '../../data/patients';

interface PatientTimelineProps {
  patient: Patient;
}

export default function PatientTimeline({ patient }: PatientTimelineProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Treatment Timeline</h3>
      <div className="relative">
        <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-200" />
        <div className="space-y-8">
          {patient.timeline.map((event, index) => (
            <div key={index} className="relative flex items-start">
              <div className="absolute left-0 mt-1">
                <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                  {event.type === 'Treatment' ? (
                    <AlertCircle className="h-4 w-4 text-rose-600" />
                  ) : event.type === 'Follow-up' ? (
                    <Calendar className="h-4 w-4 text-rose-600" />
                  ) : (
                    <Clock className="h-4 w-4 text-rose-600" />
                  )}
                </div>
              </div>
              <div className="ml-12">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">
                    {event.date}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">•</span>
                  <span className="ml-2 text-sm text-gray-500">{event.type}</span>
                </div>
                <p className="mt-1 text-sm text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}