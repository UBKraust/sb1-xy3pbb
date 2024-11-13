import { useState } from 'react';

export interface TreatmentProgress {
  id: string;
  type: string;
  totalSessions: number;
  completedSessions: number;
  nextSession?: string;
  status: 'in progress' | 'scheduled' | 'completed';
  protocol?: string;
  startDate: string;
  endDate?: string;
  sideEffects: {
    date: string;
    type: string;
    severity: 'mild' | 'moderate' | 'severe';
    notes?: string;
  }[];
  requiredDocuments?: {
    name: string;
    type: 'test' | 'document';
    status: 'completed' | 'pending' | 'missing';
    dueDate?: string;
  }[];
}

export function useTreatmentProgress(patientId: string) {
  const [treatments, setTreatments] = useState<TreatmentProgress[]>([
    {
      id: '1',
      type: 'Chimioterapie',
      totalSessions: 5,
      completedSessions: 3,
      nextSession: '2024-03-25',
      status: 'in progress',
      protocol: 'AC-T Protocol',
      startDate: '2024-01-15',
      sideEffects: [
        {
          date: '2024-03-15',
          type: 'Nausea',
          severity: 'mild',
          notes: 'Managed with prescribed medication'
        }
      ],
      requiredDocuments: [
        {
          name: 'Hemoleucogramă completă',
          type: 'test',
          status: 'pending',
          dueDate: '2024-03-24'
        }
      ]
    }
  ]);

  const updateTreatmentProgress = (treatmentId: string, progress: Partial<TreatmentProgress>) => {
    setTreatments(prev => prev.map(treatment => 
      treatment.id === treatmentId ? { ...treatment, ...progress } : treatment
    ));
  };

  return {
    treatments,
    updateTreatmentProgress
  };
}