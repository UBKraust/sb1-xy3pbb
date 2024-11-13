import React from 'react';
import { Search, Filter, User, ChevronRight, AlertCircle, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Patient } from '../../data/database';

interface PatientListProps {
  patients: Patient[];
  searchQuery: string;
  filters: {
    status: string;
    diagnosis: string;
    stage: string;
  };
}

export default function PatientList({ patients, searchQuery, filters }: PatientListProps) {
  const navigate = useNavigate();

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = 
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.diagnosis.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filters.status === 'all' || patient.status.toLowerCase() === filters.status.toLowerCase();
    const matchesDiagnosis = filters.diagnosis === 'all' || patient.diagnosis === filters.diagnosis;
    const matchesStage = filters.stage === 'all' || patient.stage === filters.stage;

    return matchesSearch && matchesStatus && matchesDiagnosis && matchesStage;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Patients</h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage and monitor patient information
            </p>
          </div>
          <Link 
            to="/patients/new" 
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Patient
          </Link>
        </div>

        <div className="space-y-4">
          {filteredPatients.map((patient) => (
            <div
              key={patient.id}
              onClick={() => navigate(`/patient/${patient.id}`)}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {patient.name}
                  </h3>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <span>{patient.diagnosis}</span>
                    <span className="mx-2">•</span>
                    <span>{patient.stage}</span>
                  </div>
                  <div className="mt-1 flex items-center text-sm">
                    <AlertCircle className="h-4 w-4 text-rose-500 mr-1" />
                    <span className="text-gray-500">Last contact: {patient.lastContact}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm text-gray-500">
                    Next Appointment: {patient.nextAppointment || 'Not scheduled'}
                  </div>
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
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}