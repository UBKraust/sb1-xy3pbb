import { useState, useEffect } from 'react';

export interface Appointment {
  id: string;
  date: string;
  time: string;
  type: string;
  provider: string;
  location: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  requiredDocuments?: {
    name: string;
    type: 'test' | 'document';
    status: 'completed' | 'pending';
    dueDate: string;
  }[];
  notes?: string;
}

export function useAppointments(patientId: string) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const mockAppointments: Appointment[] = [
      {
        id: '1',
        date: '2024-03-25',
        time: '10:30',
        type: 'Chemotherapy Session',
        provider: 'Dr. Maria Ionescu',
        location: 'Oncology Center - Room 204',
        status: 'scheduled',
        requiredDocuments: [
          {
            name: 'Blood Test Results',
            type: 'test',
            status: 'pending',
            dueDate: '2024-03-24'
          }
        ]
      }
    ];
    setAppointments(mockAppointments);
    setLoading(false);
  }, [patientId]);

  const addAppointment = (appointment: Omit<Appointment, 'id'>) => {
    const newAppointment = {
      ...appointment,
      id: Date.now().toString()
    };
    setAppointments(prev => [...prev, newAppointment]);
  };

  const updateAppointment = (id: string, updates: Partial<Appointment>) => {
    setAppointments(prev => 
      prev.map(apt => apt.id === id ? { ...apt, ...updates } : apt)
    );
  };

  return {
    appointments,
    loading,
    addAppointment,
    updateAppointment
  };
}