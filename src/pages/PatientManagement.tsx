import React, { useState } from 'react';
import PatientHeader from '../components/patient-management/PatientHeader';
import PatientAnalytics from '../components/patient-management/PatientAnalytics';
import TreatmentPlan from '../components/patient-management/TreatmentPlan';
import EducationalResources from '../components/patient-management/EducationalResources';

export default function PatientManagement() {
  const [activeTab, setActiveTab] = useState('analytics');

  const renderContent = () => {
    switch (activeTab) {
      case 'analytics':
        return <PatientAnalytics />;
      case 'treatment':
        return <TreatmentPlan />;
      case 'resources':
        return <EducationalResources />;
      default:
        return <PatientAnalytics />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'analytics', label: 'Analytics' },
              { id: 'treatment', label: 'Treatment Plan' },
              { id: 'resources', label: 'Resources' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-rose-500 text-rose-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {tab.label}
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