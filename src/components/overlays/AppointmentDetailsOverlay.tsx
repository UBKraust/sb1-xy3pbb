import React from 'react';
import { X, Calendar, Clock, MapPin, AlertCircle, FileText, CheckCircle } from 'lucide-react';
import type { Appointment } from '../../hooks/useAppointments';

interface AppointmentDetailsOverlayProps {
  appointment: Appointment;
  onClose: () => void;
}

export default function AppointmentDetailsOverlay({
  appointment,
  onClose
}: AppointmentDetailsOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{appointment.type}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Appointment Details */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>{appointment.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{appointment.location}</span>
              </div>
            </div>

            {/* Required Documents */}
            {appointment.requiredDocuments && (
              <div>
                <h3 className="text-lg font-medium mb-4">Required Documents</h3>
                <div className="space-y-4">
                  {appointment.requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`mt-1 rounded-full p-1 ${
                          doc.status === 'completed' 
                            ? 'bg-green-100' 
                            : 'bg-yellow-100'
                        }`}>
                          {doc.status === 'completed' ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-yellow-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{doc.name}</p>
                          <p className="text-sm text-gray-500">
                            Due by: {doc.dueDate}
                          </p>
                        </div>
                      </div>
                      {doc.status !== 'completed' && (
                        <button className="text-sm text-rose-600 hover:text-rose-700">
                          Upload
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notes */}
            {appointment.notes && (
              <div>
                <h3 className="text-lg font-medium mb-2">Notes</h3>
                <p className="text-gray-600">{appointment.notes}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Close
              </button>
              <button
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700"
              >
                Reschedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}