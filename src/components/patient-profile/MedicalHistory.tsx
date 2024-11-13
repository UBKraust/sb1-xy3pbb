import React from 'react';
import { Activity, AlertCircle, FileText, Users } from 'lucide-react';
import type { Patient } from '../../data/patients';

interface MedicalHistoryProps {
  patient: Patient;
}

export default function MedicalHistory({ patient }: MedicalHistoryProps) {
  return (
    <div className="space-y-6">
      {/* Family History Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <Users className="h-6 w-6 text-rose-600 mr-2" />
          <h3 className="text-lg font-medium">Family History</h3>
        </div>
        <div className="space-y-4">
          {patient.familyHistory?.map((history, index) => (
            <div key={index} className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">{history.condition}</p>
                <p className="text-sm text-gray-500">Relation: {history.relation}</p>
                {history.notes && (
                  <p className="text-sm text-gray-500 mt-1">{history.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Symptoms Timeline */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Activity className="h-6 w-6 text-rose-600 mr-2" />
            <h3 className="text-lg font-medium">Symptoms Timeline</h3>
          </div>
          <select className="border border-gray-300 rounded-md text-sm">
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-200" />
          <div className="space-y-6">
            {patient.symptomsTimeline?.map((symptom, index) => (
              <div key={index} className="relative flex items-start ml-6">
                <div className="absolute -left-10 mt-1">
                  <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-rose-600" />
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {symptom.symptom}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Severity: {symptom.severity}/10
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">{symptom.date}</span>
                  </div>
                  {symptom.notes && (
                    <p className="mt-2 text-sm text-gray-600">{symptom.notes}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Medical Documents */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FileText className="h-6 w-6 text-rose-600 mr-2" />
            <h3 className="text-lg font-medium">Medical Documents</h3>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700">
            Upload Document
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {patient.medicalDocuments?.map((doc, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{doc.title}</p>
                    <p className="text-sm text-gray-500">{doc.type}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{doc.date}</span>
              </div>
              {doc.description && (
                <p className="mt-2 text-sm text-gray-600">{doc.description}</p>
              )}
              <div className="mt-2 flex items-center space-x-4">
                <button className="text-sm text-rose-600 hover:text-rose-700">
                  View
                </button>
                <button className="text-sm text-rose-600 hover:text-rose-700">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}