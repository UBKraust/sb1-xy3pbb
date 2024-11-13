import React from 'react';
import { X, Calendar, Activity, AlertCircle, FileText } from 'lucide-react';
import type { TreatmentProgress } from '../../hooks/useTreatmentProgress';

interface TreatmentDetailsOverlayProps {
  treatment: TreatmentProgress;
  onClose: () => void;
}

export default function TreatmentDetailsOverlay({
  treatment,
  onClose
}: TreatmentDetailsOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{treatment.type}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Progress Overview */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Completed Sessions</span>
                    <span>{treatment.completedSessions} of {treatment.totalSessions}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-rose-600 rounded-full h-2"
                      style={{ width: `${(treatment.completedSessions / treatment.totalSessions) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Protocol</p>
                <p className="font-medium">{treatment.protocol}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="font-medium">{treatment.startDate}</p>
              </div>
            </div>

            {/* Side Effects */}
            <div>
              <h3 className="text-lg font-medium mb-4">Side Effects</h3>
              <div className="space-y-4">
                {treatment.sideEffects.map((effect, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{effect.type}</p>
                        <p className="text-sm text-gray-500">{effect.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        effect.severity === 'mild'
                          ? 'bg-green-100 text-green-800'
                          : effect.severity === 'moderate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {effect.severity}
                      </span>
                    </div>
                    {effect.notes && (
                      <p className="mt-2 text-sm text-gray-600">{effect.notes}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            {treatment.requiredDocuments && (
              <div>
                <h3 className="text-lg font-medium mb-4">Required Documents</h3>
                <div className="space-y-4">
                  {treatment.requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-gray-400 mr-2" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          {doc.dueDate && (
                            <p className="text-sm text-gray-500">Due: {doc.dueDate}</p>
                          )}
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        doc.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : doc.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}