import { useState, useEffect } from 'react';
import { useStore } from './useStore';
import type { Appointment } from '../types/patient';

export function useAppointmentManagement(patientId: string) {
  const [loading, setLoading] = useState(true);
  const appointments = useStore((state) => state.appointments);
  const addAppointment = useStore((state) => state.addAppointment);
  const updateAppointment = useStore((state) => state.updateAppointment);
  const cancelAppointment = useStore((state) => state.cancelAppointment);

  const getUpcomingAppointments = () => {
    const now = new Date();
    return appointments
      .filter(apt => new Date(apt.date) > now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const getPastAppointments = () => {
    const now = new Date();
    return appointments
      .filter(apt => new Date(apt.date) <= now)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Mock data - replace with actual API call
        const mockAppointments: Appointment[] = [
          {
            id: '1',
            date: '2024-03-25',
            time: '10:00',
            type: 'Chemotherapy Session',
            provider: 'Dr. Maria Ionescu',
            location: 'Oncology Center',
            status: 'scheduled'
          }
        ];
        mockAppointments.forEach(addAppointment);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [patientId]);

  return {
    appointments,
    loading,
    addAppointment,
    updateAppointment,
    cancelAppointment,
    getUpcomingAppointments,
    getPastAppointments
  };
}