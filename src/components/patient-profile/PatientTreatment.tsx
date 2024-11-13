import React from 'react';
import { Activity, Calendar, AlertCircle } from 'lucide-react';
import type { Patient } from '../../data/patients';

interface PatientTreatmentProps {
  patient: Patient;
}

export default function PatientTreatment({ patient }: PatientTreatmentProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Current Treatment Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-500">Current Phase</p>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {patient.treatmentPlan.currentPhase}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Protocol</p>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {patient.treatmentPlan.protocol}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Start Date</p>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {patient.treatmentPlan.startDate}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Treatment Schedule</h3>
          <button className="text-sm text-rose-600 hover:text-rose-700">
            Add Treatment
          </button>
        </div>
        <div className="space-y-4">
          {patient.timeline
            .filter(event => event.type === 'Treatment')
            .map((treatment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <Activity className="h-5 w-5 text-rose-600 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {treatment.description}
                    </p>
                    <p className="text-sm text-gray-500">{treatment.date}</p>
                  </div>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  View Details
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}