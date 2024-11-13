import { useState, useEffect } from 'react';
import { Patient } from '../types/patient';

// This would be replaced with actual API calls in production
const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Maria Popescu',
    dateOfBirth: '1975-05-15',
    gender: 'Female',
    phone: '+40 721 234 567',
    email: 'maria.popescu@email.com',
    address: 'Strada Exemplu 123, București',
    diagnosis: 'Breast Cancer',
    stage: 'Stage II',
    assignedDoctor: 'Dr. Sarah Johnson',
    status: 'Active'
  }
];

export function usePatientData(patientId?: string) {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!patientId) {
      setLoading(false);
      return;
    }

    // Simulate API call
    const fetchPatient = async () => {
      try {
        // In production, this would be an API call
        const foundPatient = mockPatients.find(p => p.id === patientId);
        if (foundPatient) {
          setPatient(foundPatient);
        } else {
          setError('Patient not found');
        }
      } catch (err) {
        setError('Failed to fetch patient data');
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [patientId]);

  return { patient, loading, error };
}