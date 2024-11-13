import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, AlertCircle } from 'lucide-react';

interface PatientCardProps {
  patient: {
    id: string;
    name: string;
    diagnosis: string;
    stage: string;
    status: string;
    nextAppointment?: string;
    lastContact: string;
    nextAction: string;
    priority: 'high' | 'medium' | 'low';
  };
}

export default function PatientCard({ patient }: PatientCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/patient/${patient.id}`)}
      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-6 w-6 text-gray-500" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{patient.name}</h3>
          <div className="mt-1 flex items-center text-sm text-gray-500">
            <span>{patient.diagnosis}</span>
            <span className="mx-2">•</span>
            <span>{patient.stage}</span>
          </div>
          <div className="mt-1 flex items-center">
            <AlertCircle className={`h-4 w-4 ${
              patient.priority === 'high' ? 'text-red-500' : 'text-yellow-500'
            } mr-1`} />
            <span className="text-sm text-gray-500">{patient.nextAction}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-right">
          {patient.nextAppointment && (
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <Calendar className="h-4 w-4 mr-1" />
              Next: {patient.nextAppointment}
            </div>
          )}
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            patient.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : patient.status === 'New'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}>
            {patient.status}
          </span>
        </div>
      </div>
    </div>
  );
}