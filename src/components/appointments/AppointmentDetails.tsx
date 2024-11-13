import React from 'react';
import { Clock, Heart, Thermometer, Weight, Ruler, Activity, X, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

interface VitalSign {
  icon: React.ElementType;
  label: string;
  value: string;
  unit: string;
  lastUpdated: string;
}

interface Update {
  type: string;
  description: string;
  date: string;
  status: 'Completed' | 'Active' | 'Pending';
}

interface RequiredDocument {
  name: string;
  type: 'test' | 'document';
  status: 'completed' | 'pending' | 'missing';
  dueDate?: string;
  description?: string;
}

interface AppointmentDetailsProps {
  onClose: () => void;
}

export default function AppointmentDetails({ onClose }: AppointmentDetailsProps) {
  const vitalSigns: VitalSign[] = [
    {
      icon: Activity,
      label: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      lastUpdated: '2 hours ago'
    },
    {
      icon: Heart,
      label: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      lastUpdated: '2 hours ago'
    },
    {
      icon: Thermometer,
      label: 'Temperature',
      value: '36.6',
      unit: '°C',
      lastUpdated: '2 hours ago'
    },
    {
      icon: Weight,
      label: 'Weight',
      value: '68',
      unit: 'kg',
      lastUpdated: '1 day ago'
    },
    {
      icon: Ruler,
      label: 'Height',
      value: '170',
      unit: 'cm',
      lastUpdated: '1 month ago'
    },
    {
      icon: Activity,
      label: 'Blood Sugar',
      value: '5.5',
      unit: 'mmol/L',
      lastUpdated: '4 hours ago'
    }
  ];

  const recentUpdates: Update[] = [
    {
      type: 'Complete Blood Count',
      description: 'All values within normal range',
      date: '2024-03-15',
      status: 'Completed'
    },
    {
      type: 'Prescription Updated',
      description: 'Dosage adjustment for current medication',
      date: '2024-03-14',
      status: 'Active'
    },
    {
      type: 'Chemotherapy Session',
      description: 'Session completed successfully',
      date: '2024-03-12',
      status: 'Completed'
    }
  ];

  const requiredDocuments: RequiredDocument[] = [
    {
      name: 'Hemoleucogramă completă',
      type: 'test',
      status: 'completed',
      dueDate: '2024-03-20',
      description: 'Necesară pentru evaluarea stării generale înaintea ședinței de chimioterapie'
    },
    {
      name: 'Teste funcție hepatică',
      type: 'test',
      status: 'pending',
      dueDate: '2024-03-22',
      description: 'AST, ALT, bilirubină pentru evaluarea funcției hepatice'
    },
    {
      name: 'Teste funcție renală',
      type: 'test',
      status: 'pending',
      dueDate: '2024-03-22',
      description: 'Creatinină, uree pentru evaluarea funcției renale'
    },
    {
      name: 'Rezultate imagistică recentă',
      type: 'document',
      status: 'missing',
      description: 'CT sau RMN efectuat în ultimele 30 de zile'
    },
    {
      name: 'Consimțământ informat',
      type: 'document',
      status: 'completed',
      description: 'Document semnat pentru procedura curentă'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Patient Overview</h2>
              <p className="text-sm text-gray-500 mt-1">
                Last updated: 2 hours ago
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Required Documents and Tests Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Documente și Analize Necesare
              </h3>
              <span className="text-sm text-gray-500">
                {requiredDocuments.filter(d => d.status === 'completed').length} din {requiredDocuments.length} complete
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`mt-1 rounded-full p-1 ${
                        doc.status === 'completed' 
                          ? 'bg-green-100' 
                          : doc.status === 'pending'
                          ? 'bg-yellow-100'
                          : 'bg-red-100'
                      }`}>
                        {doc.status === 'completed' ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : doc.status === 'pending' ? (
                          <Clock className="h-4 w-4 text-yellow-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900">{doc.name}</span>
                          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                            doc.type === 'test' 
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {doc.type === 'test' ? 'Analiză' : 'Document'}
                          </span>
                        </div>
                        {doc.description && (
                          <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                        )}
                        {doc.dueDate && (
                          <p className="text-sm text-gray-500 mt-1">
                            Termen: {doc.dueDate}
                          </p>
                        )}
                      </div>
                    </div>
                    {doc.status !== 'completed' && (
                      <button className="text-sm text-rose-600 hover:text-rose-700">
                        {doc.type === 'test' ? 'Programează' : 'Încarcă'}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vital Signs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {vitalSigns.map((sign, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4"
              >
                <div className="flex items-center mb-2">
                  <sign.icon className="h-5 w-5 text-rose-600 mr-2" />
                  <span className="text-gray-700">{sign.label}</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    {sign.value}
                  </span>
                  <span className="ml-1 text-gray-500">
                    {sign.unit}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  <Clock className="h-4 w-4 inline mr-1" />
                  {sign.lastUpdated}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Updates */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Updates</h3>
            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                      <Activity className="h-4 w-4 text-rose-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{update.type}</h4>
                      <p className="text-sm text-gray-500">{update.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{update.date}</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      update.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : update.status === 'Active'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {update.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-8">
            <button
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              View Full History
            </button>
            <button
              className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700"
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}