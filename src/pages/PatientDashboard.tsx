import React, { useState } from 'react';
import { Activity, Calendar, FileText, MapPin, Clock } from 'lucide-react';
import AppointmentDetails from '../components/appointments/AppointmentDetails';
import HealthStatusOverlay from '../components/overlays/HealthStatusOverlay';
import TreatmentDetailsOverlay from '../components/overlays/TreatmentDetailsOverlay';
import ResourcesOverlay from '../components/overlays/ResourcesOverlay';
import { useHealthStatus } from '../hooks/useHealthStatus';
import { useTreatmentProgress } from '../hooks/useTreatmentProgress';

export default function PatientDashboard() {
  // State for overlays
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  const [showHealthStatus, setShowHealthStatus] = useState(false);
  const [showTreatmentDetails, setShowTreatmentDetails] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);

  // Health status and treatment progress hooks
  const { status, updateHealthStatus } = useHealthStatus('patient-id');
  const { treatments, updateTreatmentProgress } = useTreatmentProgress('patient-id');

  const patient = {
    name: 'Maria',
    diagnosis: 'Cancer mamar stadiul II',
    status: 'în tratament'
  };

  const appointments = [
    {
      id: '1',
      type: 'Ședință Chimioterapie',
      doctor: 'Dr. Maria Ionescu',
      specialty: 'Oncologie Medicală',
      date: '25 Martie',
      time: '10:30 - 11:00',
      location: 'Centrul de Oncologie'
    },
    {
      id: '2',
      type: 'Ședință Radioterapie',
      doctor: 'Dr. Alexandru Popa',
      specialty: 'Radioterapie',
      date: '28 Martie',
      time: '14:00 - 14:30',
      location: 'Centrul de Radioterapie'
    }
  ];

  const handleTreatmentClick = (treatmentId: string) => {
    setSelectedTreatment(treatmentId);
    setShowTreatmentDetails(true);
  };

  const handleAppointmentClick = (appointmentId: string) => {
    setShowAppointmentDetails(true);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Patient Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Bună, {patient.name}</h1>
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 bg-rose-100 text-rose-700 text-sm rounded-md">
            {patient.status}
          </span>
          <span className="text-gray-600">• {patient.diagnosis}</span>
        </div>
      </div>

      {/* Treatment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {treatments.map((treatment) => (
          <div
            key={treatment.id}
            className="bg-white rounded-lg p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleTreatmentClick(treatment.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <Activity className="h-5 w-5 text-rose-600" />
              <span className={`px-2 py-1 text-sm rounded-md ${
                treatment.status === 'in progress'
                  ? 'bg-green-100 text-green-700'
                  : treatment.status === 'scheduled'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-blue-100 text-blue-700'
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
              <p className="text-sm text-gray-600 mt-1">
                {treatment.completedSessions} din {treatment.totalSessions} ședințe complete
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Appointments Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
        <h3 className="text-lg font-semibold mb-4">Programări Următoare</h3>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => handleAppointmentClick(appointment.id)}
            >
              <div className="flex items-center space-x-4">
                <Calendar className="h-5 w-5 text-rose-600" />
                <div>
                  <h4 className="font-medium">{appointment.type}</h4>
                  <p className="text-sm text-gray-500">{appointment.doctor}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{appointment.date}</p>
                <p className="text-sm text-gray-500">{appointment.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support and Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Suport și asistență</h3>
          <button
            onClick={() => setShowHealthStatus(true)}
            className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700"
          >
            Actualizează starea de sănătate
          </button>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Resurse educaționale</h3>
          <button
            onClick={() => setShowResources(true)}
            className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50"
          >
            Vezi materiale informative
          </button>
        </div>
      </div>

      {/* Overlays */}
      {showAppointmentDetails && (
        <AppointmentDetails onClose={() => setShowAppointmentDetails(false)} />
      )}

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