import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { 
  Users, 
  UserPlus, 
  Calendar, 
  Clock,
  Activity,
  FileText,
  Heart,
  Thermometer,
  Battery,
  Pill,
  FolderOpen,
  Plus,
  Download,
  Search
} from 'lucide-react';
import { useHealthStatus } from '../hooks/useHealthStatus';
import { useTreatmentProgress } from '../hooks/useTreatmentProgress';
import HealthStatusOverlay from '../components/overlays/HealthStatusOverlay';
import TreatmentDetailsOverlay from '../components/overlays/TreatmentDetailsOverlay';
import ResourcesOverlay from '../components/overlays/ResourcesOverlay';
import { mockPatients } from '../data/database';

interface MedicalRecord {
  id: string;
  type: 'Lab Result' | 'Imaging' | 'Prescription' | 'Report';
  title: string;
  date: string;
  doctor: string;
  status: 'new' | 'reviewed';
  category: string;
  url: string;
}

export default function Dashboard() {
  // State for overlays
  const [showHealthStatus, setShowHealthStatus] = useState(false);
  const [showTreatmentDetails, setShowTreatmentDetails] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Custom hooks
  const { status, updateHealthStatus } = useHealthStatus('current-patient');
  const { treatments } = useTreatmentProgress('current-patient');

  const healthIndicators = [
    {
      icon: Thermometer,
      value: '2/10',
      label: 'Nivel Durere',
      trend: 'decreasing',
      trendColor: 'text-blue-600'
    },
    {
      icon: Battery,
      value: '7/10',
      label: 'Nivel Energie',
      trend: 'stable',
      trendColor: 'text-gray-600'
    },
    {
      icon: Heart,
      value: 'Bună',
      label: 'Dispoziție',
      trend: 'improving',
      trendColor: 'text-green-600'
    },
    {
      icon: Pill,
      value: 'Ușoare',
      label: 'Efecte Secundare',
      trend: 'stable',
      trendColor: 'text-gray-600'
    }
  ];

  const medicalRecords: MedicalRecord[] = [
    {
      id: '1',
      type: 'Lab Result',
      title: 'Complete Blood Count',
      date: '2024-03-15',
      doctor: 'Dr. Maria Ionescu',
      status: 'reviewed',
      category: 'Laboratory',
      url: '#'
    },
    {
      id: '2',
      type: 'Imaging',
      title: 'Chest X-Ray',
      date: '2024-03-10',
      doctor: 'Dr. Alexandru Popa',
      status: 'new',
      category: 'Radiology',
      url: '#'
    },
    {
      id: '3',
      type: 'Report',
      title: 'Oncology Consultation',
      date: '2024-03-05',
      doctor: 'Dr. Elena Popescu',
      status: 'reviewed',
      category: 'Consultations',
      url: '#'
    }
  ];

  const filteredRecords = medicalRecords.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || record.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTreatmentClick = (treatmentId: string) => {
    setSelectedTreatment(treatmentId);
    setShowTreatmentDetails(true);
  };

  return (
    <div className="space-y-6">
      {/* Health Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {healthIndicators.map((indicator, index) => (
          <Card key={index}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <indicator.icon className="h-6 w-6 text-rose-600" />
                <span className={`text-sm ${indicator.trendColor}`}>
                  {indicator.trend}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-2xl font-semibold text-gray-900">
                  {indicator.value}
                </span>
                <p className="text-sm text-gray-500 mt-1">{indicator.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Medical Records Section */}
      <Card>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <FolderOpen className="h-6 w-6 text-rose-600 mr-2" />
              <h2 className="text-lg font-semibold">Dosar Medical</h2>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700">
              <Plus className="h-4 w-4 mr-2" />
              Adaugă Document
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Caută în dosarul medical..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-rose-500 focus:border-rose-500"
            >
              <option value="all">Toate Categoriile</option>
              <option value="Laboratory">Analize</option>
              <option value="Radiology">Imagistică</option>
              <option value="Consultations">Consultații</option>
            </select>
          </div>

          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-rose-100 rounded-lg">
                    <FileText className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{record.title}</h3>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span>{record.doctor}</span>
                      <span className="mx-2">•</span>
                      <span>{record.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    record.status === 'new' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {record.status === 'new' ? 'Nou' : 'Revizuit'}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-gray-500">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Treatment Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {treatments.map((treatment) => (
          <Card key={treatment.id} className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleTreatmentClick(treatment.id)}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Activity className="h-6 w-6 text-rose-600" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  treatment.status === 'in progress'
                    ? 'bg-green-100 text-green-800'
                    : treatment.status === 'scheduled'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {treatment.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{treatment.type}</h3>
              <div className="mb-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-rose-600 rounded-full"
                    style={{ width: `${(treatment.completedSessions / treatment.totalSessions) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {treatment.completedSessions} din {treatment.totalSessions} ședințe complete
                </p>
              </div>
              {treatment.nextSession && (
                <p className="text-sm text-rose-600 mt-4">
                  Următoarea ședință: {treatment.nextSession}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Suport și Asistență</h3>
            <button
              onClick={() => setShowHealthStatus(true)}
              className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700"
            >
              Actualizează Starea de Sănătate
            </button>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Resurse Educaționale</h3>
            <button
              onClick={() => setShowResources(true)}
              className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50"
            >
              Vezi Materiale Informative
            </button>
          </div>
        </Card>
      </div>

      {/* Overlays */}
      {showHealthStatus && (
        <HealthStatusOverlay
          status={status}
          onClose={() => setShowHealthStatus(false)}
          onUpdate={updateHealthStatus}
        />
      )}

      {showTreatmentDetails && selectedTreatment && (
        <TreatmentDetailsOverlay
          treatment={treatments.find(t => t.id === selectedTreatment)!}
          onClose={() => {
            setShowTreatmentDetails(false);
            setSelectedTreatment(null);
          }}
        />
      )}

      {showResources && (
        <ResourcesOverlay onClose={() => setShowResources(false)} />
      )}
    </div>
  );
}