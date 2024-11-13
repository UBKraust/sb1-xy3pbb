import { useState, useEffect } from 'react';
import { useStore } from './useStore';
import type { Treatment } from '../types/patient';

export function useTreatmentProgress(patientId: string) {
  const [loading, setLoading] = useState(true);
  const treatments = useStore((state) => state.treatments);
  const addTreatment = useStore((state) => state.addTreatment);
  const updateTreatment = useStore((state) => state.updateTreatment);

  const addSession = (treatmentId: string, sessionDetails: {
    date: string;
    notes?: string;
    sideEffects?: string[];
  }) => {
    const treatment = treatments.find(t => t.id === treatmentId);
    if (treatment) {
      updateTreatment(treatmentId, {
        completedSessions: treatment.completedSessions + 1,
        lastSession: sessionDetails.date,
        sideEffects: [
          ...(treatment.sideEffects || []),
          ...(sessionDetails.sideEffects || [])
        ]
      });
    }
  };

  const getTreatmentProgress = (treatmentId: string) => {
    const treatment = treatments.find(t => t.id === treatmentId);
    if (!treatment) return 0;
    return (treatment.completedSessions / treatment.totalSessions) * 100;
  };

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        // Mock data - replace with actual API call
        const mockTreatments: Treatment[] = [
          {
            id: '1',
            type: 'Chemotherapy',
            protocol: 'AC-T',
            startDate: '2024-01-15',
            totalSessions: 6,
            completedSessions: 3,
            status: 'in progress',
            nextSession: '2024-03-25'
          }
        ];
        mockTreatments.forEach(addTreatment);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatments();
  }, [patientId]);

  return {
    treatments,
    loading,
    addSession,
    getTreatmentProgress,
    updateTreatment
  };
}