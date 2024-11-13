import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PatientHeader from '../components/patient-profile/PatientHeader';
import PatientOverview from '../components/patient-profile/PatientOverview';
import PatientTimeline from '../components/patient-profile/PatientTimeline';
import PatientTreatment from '../components/patient-profile/PatientTreatment';
import PatientDocuments from '../components/patient-profile/PatientDocuments';
import PatientNotes from '../components/patient-profile/PatientNotes';
import { getPatientById } from '../data/patients';
import type { Patient } from '../data/patients';

export default function PatientProfile() {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (id) {
      const patientData = getPatientById(id);
      if (patientData) {
        setPatient(patientData);
      }
    }
  }, [id]);

  if (!patient) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Patient not found</h2>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <PatientOverview patient={patient} />;
      case 'timeline':
        return <PatientTimeline patient={patient} />;
      case 'treatment':
        return <PatientTreatment patient={patient} />;
      case 'documents':
        return <PatientDocuments patient={patient} />;
      case 'notes':
        return <PatientNotes patient={patient} />;
      default:
        return <PatientOverview patient={patient} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PatientHeader patient={patient} />

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'timeline', 'treatment', 'documents', 'notes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-rose-500 text-rose-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
}